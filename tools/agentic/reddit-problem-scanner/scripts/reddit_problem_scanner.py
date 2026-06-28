#!/usr/bin/env python3
"""
Scan public Reddit RSS feeds for current software engineering pain points.

The script intentionally uses public RSS endpoints and does not attempt to
evade Reddit access controls. It records blocked or rate-limited feeds in the
report so the user can judge evidence quality.
"""

from __future__ import annotations

import argparse
import datetime as dt
import html
import json
import re
import subprocess
import sys
import time
import urllib.error
import urllib.request
import xml.etree.ElementTree as ET
from dataclasses import dataclass, asdict
from typing import Iterable


DEFAULT_SUBREDDITS = [
    "softwarearchitecture",
    "devops",
    "ExperiencedDevs",
    "programming",
    "cscareerquestions",
    "webdev",
    "sre",
]

ATOM_NS = {"atom": "http://www.w3.org/2005/Atom"}


THEMES = {
    "AI dependency and skill decay": [
        "ai", "claude", "copilot", "chatgpt", "llm", "forgot", "imposter", "can't do", "without ai",
        "not knowing", "ship", "productivity",
    ],
    "Career and interview uncertainty": [
        "interview", "career", "entry level", "beginner", "study", "system design round", "what should i expect",
        "transition", "job", "remote", "leetcode",
    ],
    "Architecture and technical debt": [
        "architecture", "technical debt", "legacy", "refactor", "large", "saas", "frontend", "tests",
        "business logic", "boundaries", "regression", "modernization",
    ],
    "Distributed systems correctness": [
        "transaction", "kafka", "message", "event", "rollback", "commit", "consistency", "idempot",
        "distributed", "outbox",
    ],
    "Observability and incident cognition": [
        "incident", "postmortem", "logs", "dashboard", "telemetry", "identity logs", "cloud tools",
        "timeline", "correlation", "stitching", "knowledge",
    ],
    "DevOps culture and operating model": [
        "devops culture", "shift left", "silos", "team transition", "practice devops", "management",
        "ownership", "internal infrastructure",
    ],
    "Platform and infrastructure choices": [
        "terraform", "opentofu", "pulumi", "kubernetes", "gitops", "argocd", "aks", "cloud",
        "hardware", "platform engineering", "lambda", "microvm",
    ],
    "Reliability and operations hygiene": [
        "certificate", "renewal", "monitoring", "secrets", "configs", ".env", "nginx", "migration",
        "logs", "retention", "deployment", "blue-green",
    ],
    "Scaling and performance failures": [
        "thread", "socket", "tcp", "blocking", "nio", "netty", "executor", "scale", "throughput",
        "performance", "websocket", "connections",
    ],
    "Workload and burnout": [
        "overwhelmed", "burnout", "pressure", "200% load", "quality declining", "consulting",
        "no finish line", "workloads",
    ],
    "AI architecture adoption": [
        "rag", "agent", "llm", "ai architecture", "saas application", "prompt", "vector", "retrieval",
    ],
}


@dataclass
class RedditPost:
    subreddit: str
    title: str
    url: str
    published: str
    summary: str
    themes: list[str]


@dataclass
class FeedStatus:
    subreddit: str
    url: str
    ok: bool
    status: str
    entries: int


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Scan Reddit RSS feeds for developer and architecture pain points.")
    parser.add_argument("--subreddits", nargs="+", default=DEFAULT_SUBREDDITS)
    parser.add_argument("--days", type=int, default=14, help="Only include posts published within this many days.")
    parser.add_argument("--limit", type=int, default=25, help="Maximum entries to inspect per subreddit.")
    parser.add_argument("--delay", type=float, default=1.25, help="Delay between subreddit requests.")
    parser.add_argument("--format", choices=["markdown", "json"], default="markdown")
    parser.add_argument("--output", help="Optional output file path.")
    return parser.parse_args()


def fetch_url_with_curl(url: str) -> tuple[str, str]:
    try:
        completed = subprocess.run(
            [
                "curl",
                "-L",
                "-A",
                "Mozilla/5.0 (compatible; CodexRedditProblemScanner/1.0; +https://mohitkanwar.com)",
                "-sS",
                "-w",
                "\n__HTTP_STATUS__:%{http_code}",
                url,
            ],
            check=False,
            capture_output=True,
            text=True,
            timeout=30,
        )
    except Exception as exc:
        return f"curl-error:{type(exc).__name__}", ""
    output = completed.stdout or ""
    marker = "\n__HTTP_STATUS__:"
    if marker in output:
        body, status = output.rsplit(marker, 1)
        return status.strip(), body
    return f"curl-exit:{completed.returncode}", output


def fetch_url(url: str) -> tuple[str, str]:
    request = urllib.request.Request(
        url,
        headers={
            "User-Agent": "Mozilla/5.0 (compatible; CodexRedditProblemScanner/1.0; +https://mohitkanwar.com)",
            "Accept": "application/atom+xml,application/xml,text/xml;q=0.9,*/*;q=0.8",
        },
    )
    try:
        with urllib.request.urlopen(request, timeout=20) as response:
            status = str(response.status)
            body = response.read().decode("utf-8", errors="replace")
            return status, body
    except urllib.error.HTTPError as exc:
        status = str(exc.code)
        curl_status, curl_body = fetch_url_with_curl(url)
        return (curl_status, curl_body) if curl_body else (status, "")
    except Exception as exc:  # Network failures are part of the report.
        status = f"error:{type(exc).__name__}"
        curl_status, curl_body = fetch_url_with_curl(url)
        return (curl_status, curl_body) if curl_body else (status, "")


def clean_html(value: str) -> str:
    value = html.unescape(value or "")
    value = re.sub(r"<br\s*/?>", "\n", value, flags=re.I)
    value = re.sub(r"</p\s*>", "\n", value, flags=re.I)
    value = re.sub(r"<[^>]+>", " ", value)
    value = html.unescape(value)
    value = re.sub(r"\s+", " ", value).strip()
    return value


def parse_datetime(value: str) -> dt.datetime | None:
    if not value:
        return None
    try:
        return dt.datetime.fromisoformat(value.replace("Z", "+00:00"))
    except ValueError:
        return None


def keyword_matches(text: str, keyword: str) -> bool:
    if len(keyword) <= 3 and keyword.isalnum():
        return re.search(rf"\b{re.escape(keyword)}\b", text) is not None
    return keyword in text


def classify(text: str) -> list[str]:
    lower = text.lower()
    scored: list[tuple[int, str]] = []
    for theme, keywords in THEMES.items():
        score = sum(1 for keyword in keywords if keyword_matches(lower, keyword))
        if score:
            scored.append((score, theme))
    scored.sort(key=lambda item: (-item[0], item[1]))
    return [theme for _, theme in scored[:3]]


def parse_feed(subreddit: str, body: str, cutoff: dt.datetime, limit: int) -> list[RedditPost]:
    root = ET.fromstring(body)
    posts: list[RedditPost] = []
    for entry in root.findall("atom:entry", ATOM_NS)[:limit]:
        title = (entry.findtext("atom:title", default="", namespaces=ATOM_NS) or "").strip()
        link_el = entry.find("atom:link", ATOM_NS)
        url = link_el.attrib.get("href", "") if link_el is not None else ""
        published = entry.findtext("atom:published", default="", namespaces=ATOM_NS) or ""
        published_dt = parse_datetime(published)
        if published_dt and published_dt < cutoff:
            continue
        content = entry.findtext("atom:content", default="", namespaces=ATOM_NS) or ""
        summary = clean_html(content)
        text = f"{title} {summary}"
        themes = classify(text)
        if not themes:
            continue
        posts.append(
            RedditPost(
                subreddit=subreddit,
                title=title,
                url=url,
                published=published,
                summary=summary[:420],
                themes=themes,
            )
        )
    return posts


def collect(subreddits: Iterable[str], days: int, limit: int, delay: float) -> tuple[list[RedditPost], list[FeedStatus]]:
    cutoff = dt.datetime.now(dt.timezone.utc) - dt.timedelta(days=days)
    posts: list[RedditPost] = []
    statuses: list[FeedStatus] = []
    for index, subreddit in enumerate(subreddits):
        if index:
            time.sleep(delay)
        url = f"https://old.reddit.com/r/{subreddit}/.rss"
        status, body = fetch_url(url)
        if not body or not body.lstrip().startswith("<?xml"):
            statuses.append(FeedStatus(subreddit, url, False, status, 0))
            continue
        try:
            subreddit_posts = parse_feed(subreddit, body, cutoff, limit)
            posts.extend(subreddit_posts)
            statuses.append(FeedStatus(subreddit, url, True, status, len(subreddit_posts)))
        except Exception as exc:
            statuses.append(FeedStatus(subreddit, url, False, f"parse:{type(exc).__name__}", 0))
    return posts, statuses


def aggregate(posts: list[RedditPost]) -> list[dict[str, object]]:
    grouped: dict[str, list[RedditPost]] = {}
    for post in posts:
        for theme in post.themes:
            grouped.setdefault(theme, []).append(post)
    rows = []
    for theme, theme_posts in grouped.items():
        theme_posts.sort(key=lambda post: post.published, reverse=True)
        subreddits = sorted({post.subreddit for post in theme_posts})
        rows.append(
            {
                "theme": theme,
                "count": len(theme_posts),
                "subreddits": subreddits,
                "evidence": theme_posts[:5],
            }
        )
    rows.sort(key=lambda row: (-int(row["count"]), str(row["theme"])))
    return rows


def markdown_report(posts: list[RedditPost], statuses: list[FeedStatus], days: int) -> str:
    now = dt.datetime.now(dt.timezone.utc).strftime("%Y-%m-%d %H:%M UTC")
    themes = aggregate(posts)
    lines = [
        f"# Reddit Developer Problem Scan",
        "",
        f"Generated: {now}",
        f"Window: last {days} days",
        f"Posts classified: {len(posts)}",
        "",
        "## Feed Status",
        "",
        "| Subreddit | Status | Classified posts | Feed |",
        "| --- | --- | ---: | --- |",
    ]
    for status in statuses:
        ok = "ok" if status.ok else f"blocked/failed ({status.status})"
        lines.append(f"| r/{status.subreddit} | {ok} | {status.entries} | {status.url} |")

    lines.extend(["", "## Problem Themes", ""])
    for row in themes:
        lines.append(f"### {row['theme']} ({row['count']} signals)")
        lines.append(f"Subreddits: {', '.join('r/' + s for s in row['subreddits'])}")
        lines.append("")
        for post in row["evidence"]:
            date = post.published[:10] if post.published else "unknown-date"
            lines.append(f"- {date} [{post.title}]({post.url}) — r/{post.subreddit}")
        lines.append("")

    lines.extend(["## Evidence Notes", ""])
    for post in sorted(posts, key=lambda item: item.published, reverse=True):
        date = post.published[:10] if post.published else "unknown-date"
        themes_joined = ", ".join(post.themes)
        lines.append(f"- **{date} r/{post.subreddit}:** [{post.title}]({post.url})")
        lines.append(f"  - Themes: {themes_joined}")
        if post.summary:
            lines.append(f"  - Summary: {post.summary}")
    return "\n".join(lines).rstrip() + "\n"


def json_report(posts: list[RedditPost], statuses: list[FeedStatus], days: int) -> str:
    payload = {
        "generated_at": dt.datetime.now(dt.timezone.utc).isoformat(),
        "window_days": days,
        "feed_status": [asdict(status) for status in statuses],
        "themes": [
            {
                **{key: value for key, value in row.items() if key != "evidence"},
                "evidence": [asdict(post) for post in row["evidence"]],
            }
            for row in aggregate(posts)
        ],
        "posts": [asdict(post) for post in posts],
    }
    return json.dumps(payload, indent=2, ensure_ascii=False)


def main() -> int:
    args = parse_args()
    posts, statuses = collect(args.subreddits, args.days, args.limit, args.delay)
    report = markdown_report(posts, statuses, args.days) if args.format == "markdown" else json_report(posts, statuses, args.days)
    if args.output:
        with open(args.output, "w", encoding="utf-8") as handle:
            handle.write(report)
    else:
        sys.stdout.write(report)
    failed = [status for status in statuses if not status.ok]
    return 2 if failed and not posts else 0


if __name__ == "__main__":
    raise SystemExit(main())
