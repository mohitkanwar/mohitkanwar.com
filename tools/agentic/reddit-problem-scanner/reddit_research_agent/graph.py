from __future__ import annotations

from dataclasses import asdict
from typing import Any, TypedDict

from .models import AgentConfig, FeedStatus, PostAnalysis, RedditPost
from .ollama import OllamaClient, OllamaError, extract_json_object
from .progress import Progress
from .prompts import (
    analysis_prompt,
    analysis_system_prompt,
    synthesis_prompt,
    synthesis_system_prompt,
)
from .reddit import collect_posts
from .report import render_report, write_report


class ResearchState(TypedDict, total=False):
    posts: list[RedditPost]
    feed_statuses: list[FeedStatus]
    selected_posts: list[RedditPost]
    analyses: list[PostAnalysis]
    synthesis: str
    report_markdown: str
    report_path: str
    errors: list[str]


def clamp_score(value: Any) -> int:
    try:
        parsed = int(value)
    except (TypeError, ValueError):
        parsed = 1
    return min(5, max(1, parsed))


def coerce_bool(value: Any) -> bool:
    if isinstance(value, bool):
        return value
    if isinstance(value, str):
        return value.strip().lower() in {"true", "yes", "1"}
    return bool(value)


def parse_analysis_items(response: str) -> list[PostAnalysis]:
    data = extract_json_object(response)
    raw_items = data.get("items", [])
    if not isinstance(raw_items, list):
        raise ValueError("Model response JSON must include an items list")

    analyses: list[PostAnalysis] = []
    for item in raw_items:
        if not isinstance(item, dict) or not item.get("id"):
            continue
        tags = item.get("tags", [])
        if not isinstance(tags, list):
            tags = []
        analyses.append(
            PostAnalysis(
                post_id=str(item.get("id")),
                is_news=coerce_bool(item.get("is_news")),
                is_issue=coerce_bool(item.get("is_issue")),
                importance=clamp_score(item.get("importance")),
                issue_severity=clamp_score(item.get("issue_severity")),
                newsworthiness=clamp_score(item.get("newsworthiness")),
                audience_relevance=clamp_score(item.get("audience_relevance")),
                summary=str(item.get("summary", "")).strip(),
                why_it_matters=str(item.get("why_it_matters", "")).strip(),
                people_problem=str(item.get("people_problem", "")).strip(),
                blog_angle=str(item.get("blog_angle", "")).strip(),
                tags=[str(tag).strip().lower() for tag in tags if str(tag).strip()],
            )
        )
    return analyses


def grounded_synthesis(posts_by_id: dict[str, RedditPost], analyses: list[PostAnalysis]) -> str:
    ranked = sorted(analyses, key=lambda item: item.priority_score, reverse=True)
    news = [item for item in ranked if item.is_news]
    issues = [item for item in ranked if item.is_issue]

    def title_for(item: PostAnalysis) -> str:
        post = posts_by_id.get(item.post_id)
        return post.title if post else item.post_id

    lines = [
        f"Evidence base: {len(analyses)} analyzed Reddit post(s). Treat this as directional signal discovery, not a survey.",
        "",
        "### Executive Summary",
        "",
    ]
    for item in ranked[:3]:
        lines.append(f"- {item.summary or title_for(item)}")

    lines.extend(["", "### What Looks Newsworthy", ""])
    if news:
        for item in news[:3]:
            lines.append(f"- {title_for(item)}: {item.why_it_matters or item.summary}")
    else:
        lines.append("- No clear news item was identified in the analyzed evidence.")

    lines.extend(["", "### Major Issues People Are Facing", ""])
    if issues:
        for item in issues[:3]:
            lines.append(f"- {item.people_problem or item.summary}")
    else:
        lines.append("- No clear people-problem cluster was identified in the analyzed evidence.")

    lines.extend(["", "### Best Blog Opportunities", ""])
    for item in ranked[:5]:
        lines.append(f"- {item.blog_angle or item.summary or title_for(item)}")

    return "\n".join(lines)


class RedditResearchRuntime:
    def __init__(
        self,
        config: AgentConfig,
        *,
        output_path: str | None = None,
        progress: Progress | None = None,
    ) -> None:
        self.config = config
        self.output_path = output_path
        self.progress = progress or Progress(enabled=True)
        self.ollama = OllamaClient(config.ollama)

    def collect_node(self, state: ResearchState) -> dict[str, Any]:
        self.progress.log("Collecting Reddit RSS feeds")
        posts, statuses = collect_posts(self.config.reddit, self.progress)
        return {"posts": posts, "feed_statuses": statuses, "errors": state.get("errors", [])}

    def select_node(self, state: ResearchState) -> dict[str, Any]:
        posts = state.get("posts", [])
        selected = sorted(posts, key=lambda item: (item.heuristic_score, item.published), reverse=True)
        selected = selected[: self.config.analysis.max_posts_for_ai]
        self.progress.log(f"Selected {len(selected)} posts for Ollama analysis")
        return {"selected_posts": selected}

    def analyze_node(self, state: ResearchState) -> dict[str, Any]:
        selected = state.get("selected_posts", [])
        batch_size = max(1, self.config.analysis.batch_size)
        analyses: list[PostAnalysis] = []
        errors = list(state.get("errors", []))
        seen_ids: set[str] = set()

        for start in range(0, len(selected), batch_size):
            batch = selected[start : start + batch_size]
            batch_number = start // batch_size + 1
            total_batches = (len(selected) + batch_size - 1) // batch_size
            self.progress.log(f"Analyzing batch {batch_number}/{total_batches} with Ollama")
            try:
                response = self.ollama.generate(
                    analysis_prompt(batch, self.config.analysis),
                    system=analysis_system_prompt(self.config.analysis),
                    json_mode=True,
                )
                for analysis in parse_analysis_items(response):
                    if analysis.post_id in seen_ids:
                        continue
                    seen_ids.add(analysis.post_id)
                    analyses.append(analysis)
            except (OllamaError, ValueError) as exc:
                errors.append(f"Batch {batch_number} analysis failed: {exc}")

        self.progress.log(f"Ollama returned analysis for {len(analyses)} posts")
        return {"analyses": analyses, "errors": errors}

    def synthesize_node(self, state: ResearchState) -> dict[str, Any]:
        analyses = state.get("analyses", [])
        posts = state.get("posts", [])
        errors = list(state.get("errors", []))
        posts_by_id = {post.id: post for post in posts}
        if not analyses:
            return {
                "synthesis": "No analyzed posts were available for synthesis.",
                "errors": errors,
            }
        if len(analyses) < 3:
            self.progress.log("Using grounded synthesis for small evidence set")
            return {"synthesis": grounded_synthesis(posts_by_id, analyses), "errors": errors}

        self.progress.log("Synthesizing prioritized brief")
        try:
            response = self.ollama.generate(
                synthesis_prompt(posts_by_id, analyses, self.config.analysis),
                system=synthesis_system_prompt(),
                json_mode=False,
            )
            return {"synthesis": response, "errors": errors}
        except OllamaError as exc:
            errors.append(f"Synthesis failed: {exc}")
            fallback = "\n".join(
                f"- {item.blog_angle or item.summary}" for item in sorted(
                    analyses, key=lambda analysis: analysis.priority_score, reverse=True
                )[:5]
            )
            return {"synthesis": fallback, "errors": errors}

    def report_node(self, state: ResearchState) -> dict[str, Any]:
        self.progress.log("Rendering markdown report")
        markdown = render_report(
            config=self.config,
            posts=state.get("posts", []),
            statuses=state.get("feed_statuses", []),
            analyses=state.get("analyses", []),
            synthesis=state.get("synthesis", ""),
            errors=state.get("errors", []),
        )
        result: dict[str, Any] = {"report_markdown": markdown}
        if self.output_path:
            path = write_report(self.output_path, markdown)
            self.progress.log(f"Wrote report to {path}")
            result["report_path"] = str(path)
        return result


def build_graph(runtime: RedditResearchRuntime):
    try:
        from langgraph.graph import END, START, StateGraph
    except ImportError as exc:
        raise RuntimeError(
            "LangGraph is required for this agent. Install it with "
            "`python3 -m pip install -r tools/agentic/reddit-problem-scanner/requirements.txt`."
        ) from exc

    workflow = StateGraph(ResearchState)
    workflow.add_node("collect", runtime.collect_node)
    workflow.add_node("select", runtime.select_node)
    workflow.add_node("analyze", runtime.analyze_node)
    workflow.add_node("synthesize", runtime.synthesize_node)
    workflow.add_node("report", runtime.report_node)
    workflow.add_edge(START, "collect")
    workflow.add_edge("collect", "select")
    workflow.add_edge("select", "analyze")
    workflow.add_edge("analyze", "synthesize")
    workflow.add_edge("synthesize", "report")
    workflow.add_edge("report", END)
    return workflow.compile()


def run_agent(config: AgentConfig, *, output_path: str | None, quiet: bool = False) -> ResearchState:
    runtime = RedditResearchRuntime(config, output_path=output_path, progress=Progress(enabled=not quiet))
    graph = build_graph(runtime)
    initial_state: ResearchState = {"errors": []}
    result = graph.invoke(initial_state)
    return result


def state_as_dict(state: ResearchState) -> dict[str, Any]:
    def convert(value: Any) -> Any:
        if isinstance(value, list):
            return [convert(item) for item in value]
        if hasattr(value, "__dataclass_fields__"):
            return asdict(value)
        return value

    return {key: convert(value) for key, value in state.items()}
