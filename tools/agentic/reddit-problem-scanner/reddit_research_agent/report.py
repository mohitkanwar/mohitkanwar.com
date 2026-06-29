from __future__ import annotations

import datetime as dt
from pathlib import Path

from .models import AgentConfig, FeedStatus, PostAnalysis, RedditPost


def priority_label(score: int) -> str:
    if score >= 22:
        return "P1"
    if score >= 17:
        return "P2"
    return "P3"


def bool_label(value: bool) -> str:
    return "yes" if value else "no"


def post_date(post: RedditPost) -> str:
    return post.published[:10] if post.published else "unknown-date"


def analysis_by_id(analyses: list[PostAnalysis]) -> dict[str, PostAnalysis]:
    return {analysis.post_id: analysis for analysis in analyses}


def prioritized_pairs(
    posts: list[RedditPost],
    analyses: list[PostAnalysis],
    *,
    predicate=None,
) -> list[tuple[RedditPost, PostAnalysis]]:
    lookup = analysis_by_id(analyses)
    pairs = [(post, lookup[post.id]) for post in posts if post.id in lookup]
    if predicate:
        pairs = [(post, analysis) for post, analysis in pairs if predicate(analysis)]
    return sorted(
        pairs,
        key=lambda item: (item[1].priority_score, item[0].heuristic_score, item[0].published),
        reverse=True,
    )


def render_status_table(statuses: list[FeedStatus]) -> list[str]:
    lines = [
        "| Source | Subreddit | Status | Posts | Selected feed |",
        "| --- | --- | --- | ---: | --- |",
    ]
    for status in statuses:
        state = "ok" if status.ok else "failed"
        selected = status.selected_url or "none"
        attempts = "; ".join(f"{item.url} => {item.status}" for item in status.attempts)
        lines.append(
            f"| {status.source_name} | r/{status.subreddit} | {state}: {attempts} | {status.entries} | {selected} |"
        )
    return lines


def render_item(post: RedditPost, analysis: PostAnalysis) -> list[str]:
    kind = []
    if analysis.is_news:
        kind.append("news")
    if analysis.is_issue:
        kind.append("issue")
    kind_label = ", ".join(kind) if kind else "signal"
    tags = ", ".join(analysis.tags) if analysis.tags else "untagged"

    return [
        f"### {priority_label(analysis.priority_score)} - [{post.title}]({post.url})",
        "",
        f"- Source: r/{post.subreddit}, {post_date(post)}",
        f"- Type: {kind_label}",
        (
            f"- Scores: priority {analysis.priority_score}, importance {analysis.importance}/5, "
            f"issue severity {analysis.issue_severity}/5, newsworthiness {analysis.newsworthiness}/5, "
            f"audience relevance {analysis.audience_relevance}/5"
        ),
        f"- Summary: {analysis.summary}",
        f"- Why it matters: {analysis.why_it_matters}",
        f"- People problem: {analysis.people_problem}",
        f"- Blog angle: {analysis.blog_angle}",
        f"- Tags: {tags}",
        "",
    ]


def render_blog_ideas(pairs: list[tuple[RedditPost, PostAnalysis]], limit: int) -> list[str]:
    lines = ["## Blog Opportunities", ""]
    for post, analysis in pairs[:limit]:
        lines.append(f"- **{analysis.blog_angle}**")
        lines.append(f"  Evidence: [{post.title}]({post.url}) from r/{post.subreddit}.")
    return lines


def render_report(
    *,
    config: AgentConfig,
    posts: list[RedditPost],
    statuses: list[FeedStatus],
    analyses: list[PostAnalysis],
    synthesis: str,
    errors: list[str],
) -> str:
    generated = dt.datetime.now(dt.timezone.utc).strftime("%Y-%m-%d %H:%M UTC")
    pairs = prioritized_pairs(posts, analyses)
    priority_pairs = [
        (post, analysis)
        for post, analysis in pairs
        if analysis.priority_score >= config.analysis.priority_threshold
    ] or pairs
    top_news = prioritized_pairs(posts, analyses, predicate=lambda item: item.is_news)
    top_issues = prioritized_pairs(posts, analyses, predicate=lambda item: item.is_issue)
    limit = config.report.max_items_per_section

    lines = [
        f"# {config.report.title}",
        "",
        f"Generated: {generated}",
        f"Model: `{config.ollama.model}` via `{config.ollama.base_url}`",
        f"Window: last {config.reddit.days} days",
        f"Sources configured: {len(config.reddit.sources)}",
        f"Posts collected: {len(posts)}",
        f"Posts analyzed: {len(analyses)}",
        "",
        "## Priority Brief",
        "",
        synthesis.strip() or "No synthesis was generated.",
        "",
        "## Top Prioritized Signals",
        "",
    ]

    if not priority_pairs:
        lines.append("No posts were analyzed into priority signals.")
        lines.append("")
    for post, analysis in priority_pairs[:limit]:
        lines.extend(render_item(post, analysis))

    lines.extend(["## Important News", ""])
    if not top_news:
        lines.append("No clear news items were found in this run.")
        lines.append("")
    for post, analysis in top_news[:limit]:
        lines.extend(render_item(post, analysis))

    lines.extend(["## Major Issues People Are Facing", ""])
    if not top_issues:
        lines.append("No clear issue clusters were found in this run.")
        lines.append("")
    for post, analysis in top_issues[:limit]:
        lines.extend(render_item(post, analysis))

    lines.extend(render_blog_ideas(pairs, limit))
    lines.extend(["", "## Feed Status", ""])
    lines.extend(render_status_table(statuses))
    lines.append("")

    if errors:
        lines.extend(["## Run Warnings", ""])
        for error in errors:
            lines.append(f"- {error}")
        lines.append("")

    if config.report.include_evidence_appendix:
        lines.extend(["## Evidence Appendix", ""])
        lookup = analysis_by_id(analyses)
        for post in posts:
            analysis = lookup.get(post.id)
            if analysis:
                lines.append(
                    f"- {priority_label(analysis.priority_score)} {post_date(post)} "
                    f"r/{post.subreddit}: [{post.title}]({post.url}) "
                    f"(news={bool_label(analysis.is_news)}, issue={bool_label(analysis.is_issue)})"
                )
            else:
                lines.append(f"- unanalyzed {post_date(post)} r/{post.subreddit}: [{post.title}]({post.url})")

    return "\n".join(lines).rstrip() + "\n"


def write_report(path: str | Path, markdown: str) -> Path:
    output_path = Path(path)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(markdown, encoding="utf-8")
    return output_path
