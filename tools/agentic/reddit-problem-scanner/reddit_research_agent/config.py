from __future__ import annotations

import json
from dataclasses import replace
from pathlib import Path
from typing import Any

from .models import (
    AgentConfig,
    AnalysisSettings,
    OllamaSettings,
    RedditSettings,
    RedditSource,
    ReportSettings,
)


DEFAULT_CONFIG_PATH = (
    Path(__file__).resolve().parents[1] / "configs" / "default.json"
)


def _as_source(value: Any) -> RedditSource:
    if isinstance(value, str):
        name = value.rstrip("/").split("/")[-1] or value
        return RedditSource(name=name, url=value)
    if isinstance(value, dict):
        url = str(value.get("url", "")).strip()
        if not url:
            raise ValueError("Reddit source entries must include a url")
        name = str(value.get("name") or url.rstrip("/").split("/")[-1] or url)
        return RedditSource(name=name, url=url)
    raise TypeError(f"Unsupported Reddit source entry: {value!r}")


def _list_str(value: Any, default: list[str] | None = None) -> list[str]:
    if value is None:
        return list(default or [])
    if not isinstance(value, list):
        raise TypeError("Expected a list of strings")
    return [str(item) for item in value]


def load_config(path: str | Path | None = None) -> AgentConfig:
    config_path = Path(path) if path else DEFAULT_CONFIG_PATH
    with config_path.open("r", encoding="utf-8") as handle:
        raw = json.load(handle)

    reddit_raw = raw.get("reddit", {})
    sources = [_as_source(item) for item in reddit_raw.get("sources", [])]
    if not sources:
        raise ValueError("Config must include at least one reddit.sources entry")

    reddit = RedditSettings(
        sources=sources,
        days=int(reddit_raw.get("days", 7)),
        per_source_limit=int(reddit_raw.get("per_source_limit", 25)),
        request_delay_seconds=float(reddit_raw.get("request_delay_seconds", 1.0)),
        rate_limit_pause_seconds=float(reddit_raw.get("rate_limit_pause_seconds", 20.0)),
        feed_hosts=_list_str(reddit_raw.get("feed_hosts"), ["old.reddit.com", "www.reddit.com"]),
        skip_title_keywords=_list_str(reddit_raw.get("skip_title_keywords"), []),
    )

    analysis_raw = raw.get("analysis", {})
    analysis = AnalysisSettings(
        focus=str(analysis_raw.get("focus", "software architecture, AI, fintech, and engineering pain points")),
        audience=str(analysis_raw.get("audience", "software architects and engineering leaders")),
        max_posts_for_ai=int(analysis_raw.get("max_posts_for_ai", 40)),
        batch_size=int(analysis_raw.get("batch_size", 8)),
        priority_threshold=int(analysis_raw.get("priority_threshold", 14)),
    )

    ollama_raw = raw.get("ollama", {})
    ollama = OllamaSettings(
        model=str(ollama_raw.get("model", "llama3.1:8b")),
        base_url=str(ollama_raw.get("base_url", "http://localhost:11434")),
        temperature=float(ollama_raw.get("temperature", 0.1)),
        timeout_seconds=int(ollama_raw.get("timeout_seconds", 120)),
    )

    report_raw = raw.get("report", {})
    report = ReportSettings(
        title=str(report_raw.get("title", "Reddit Research Brief")),
        max_items_per_section=int(report_raw.get("max_items_per_section", 10)),
        include_evidence_appendix=bool(report_raw.get("include_evidence_appendix", True)),
    )

    return AgentConfig(
        name=str(raw.get("name", "Reddit Research Agent")),
        reddit=reddit,
        analysis=analysis,
        ollama=ollama,
        report=report,
    )


def apply_overrides(
    config: AgentConfig,
    *,
    model: str | None = None,
    days: int | None = None,
    max_posts_for_ai: int | None = None,
    extra_sources: list[str] | None = None,
    only_sources: list[str] | None = None,
) -> AgentConfig:
    reddit = config.reddit
    analysis = config.analysis
    ollama = config.ollama

    if days is not None:
        reddit = replace(reddit, days=days)
    if only_sources:
        reddit = replace(reddit, sources=[_as_source(source) for source in only_sources])
    if extra_sources:
        reddit = replace(
            reddit,
            sources=[*reddit.sources, *[_as_source(source) for source in extra_sources]],
        )
    if max_posts_for_ai is not None:
        analysis = replace(analysis, max_posts_for_ai=max_posts_for_ai)
    if model:
        ollama = replace(ollama, model=model)

    return replace(config, reddit=reddit, analysis=analysis, ollama=ollama)
