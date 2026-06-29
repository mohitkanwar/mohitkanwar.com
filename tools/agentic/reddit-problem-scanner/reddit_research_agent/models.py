from __future__ import annotations

from dataclasses import dataclass, field


@dataclass(frozen=True)
class RedditSource:
    name: str
    url: str


@dataclass(frozen=True)
class RedditSettings:
    sources: list[RedditSource]
    days: int = 7
    per_source_limit: int = 25
    request_delay_seconds: float = 1.0
    rate_limit_pause_seconds: float = 20.0
    feed_hosts: list[str] = field(default_factory=lambda: ["old.reddit.com", "www.reddit.com"])
    skip_title_keywords: list[str] = field(default_factory=list)


@dataclass(frozen=True)
class AnalysisSettings:
    focus: str
    audience: str
    max_posts_for_ai: int = 40
    batch_size: int = 8
    priority_threshold: int = 14


@dataclass(frozen=True)
class OllamaSettings:
    model: str = "llama3.1:8b"
    base_url: str = "http://localhost:11434"
    temperature: float = 0.1
    timeout_seconds: int = 120


@dataclass(frozen=True)
class ReportSettings:
    title: str = "Reddit Research Brief"
    max_items_per_section: int = 10
    include_evidence_appendix: bool = True


@dataclass(frozen=True)
class AgentConfig:
    name: str
    reddit: RedditSettings
    analysis: AnalysisSettings
    ollama: OllamaSettings
    report: ReportSettings


@dataclass(frozen=True)
class FeedAttempt:
    url: str
    status: str


@dataclass(frozen=True)
class FeedStatus:
    source_name: str
    subreddit: str
    ok: bool
    selected_url: str
    attempts: list[FeedAttempt]
    entries: int

    @property
    def status_label(self) -> str:
        return "; ".join(f"{attempt.url}={attempt.status}" for attempt in self.attempts)


@dataclass(frozen=True)
class RedditPost:
    id: str
    source_name: str
    subreddit: str
    title: str
    url: str
    published: str
    summary: str
    heuristic_score: float = 0.0


@dataclass(frozen=True)
class PostAnalysis:
    post_id: str
    is_news: bool
    is_issue: bool
    importance: int
    issue_severity: int
    newsworthiness: int
    audience_relevance: int
    summary: str
    why_it_matters: str
    people_problem: str
    blog_angle: str
    tags: list[str]

    @property
    def priority_score(self) -> int:
        return (
            self.importance * 2
            + self.issue_severity * 2
            + self.newsworthiness
            + self.audience_relevance
        )
