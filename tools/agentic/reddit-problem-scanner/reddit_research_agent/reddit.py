from __future__ import annotations

import datetime as dt
import hashlib
import html
import re
import subprocess
import time
import urllib.error
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET

from .models import FeedAttempt, FeedStatus, RedditPost, RedditSettings, RedditSource
from .progress import Progress

ATOM_NS = {"atom": "http://www.w3.org/2005/Atom"}
USER_AGENT = "Mozilla/5.0 (compatible; MohitRedditResearchAgent/1.0; +https://mohitkanwar.com)"

NEWS_TERMS = {
    "announce", "announced", "launch", "launched", "release", "released",
    "new", "breaking", "regulation", "policy", "ban", "lawsuit", "funding",
    "acquisition", "outage", "breach", "vulnerability", "model", "open source",
}

ISSUE_TERMS = {
    "problem", "issue", "struggling", "stuck", "confused", "help", "pain",
    "challenge", "how do you", "what should", "advice", "career", "legacy",
    "technical debt", "architecture", "scaling", "security", "compliance",
    "latency", "incident", "burnout", "cost", "migration", "governance",
}


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


def subreddit_from_ref(ref: str) -> str:
    ref = ref.strip()
    parsed = urllib.parse.urlparse(ref)
    path = parsed.path if parsed.netloc else ref
    parts = [part for part in path.strip("/").split("/") if part]
    if "r" in parts:
        index = parts.index("r")
        if index + 1 < len(parts):
            return parts[index + 1]
    if parts:
        return parts[-1].replace(".rss", "")
    return ref.strip("/")


def preferred_host(ref: str) -> str | None:
    parsed = urllib.parse.urlparse(ref)
    return parsed.netloc or None


def feed_urls(source: RedditSource, fallback_hosts: list[str]) -> list[str]:
    subreddit = subreddit_from_ref(source.url)
    hosts = []
    host = preferred_host(source.url)
    if host:
        hosts.append(host)
    hosts.extend(fallback_hosts)

    urls = []
    seen = set()
    for item in hosts:
        if not item or item in seen:
            continue
        seen.add(item)
        urls.append(f"https://{item}/r/{subreddit}/.rss")
    return urls


def compact_status_from_exception(exc: BaseException) -> str:
    if isinstance(exc, urllib.error.URLError) and getattr(exc, "reason", None):
        return f"{type(exc).__name__}:{exc.reason}"
    return type(exc).__name__


def fetch_url_with_curl(url: str) -> tuple[str, str]:
    try:
        completed = subprocess.run(
            [
                "curl",
                "-L",
                "-A",
                USER_AGENT,
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
        return f"curl-error:{compact_status_from_exception(exc)}", ""

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
            "User-Agent": USER_AGENT,
            "Accept": "application/atom+xml,application/xml,text/xml;q=0.9,*/*;q=0.8",
        },
    )
    try:
        with urllib.request.urlopen(request, timeout=20) as response:
            return str(response.status), response.read().decode("utf-8", errors="replace")
    except urllib.error.HTTPError as exc:
        curl_status, curl_body = fetch_url_with_curl(url)
        return (curl_status, curl_body) if curl_status else (str(exc.code), "")
    except Exception as exc:
        status = f"error:{compact_status_from_exception(exc)}"
        curl_status, curl_body = fetch_url_with_curl(url)
        return (curl_status, curl_body) if curl_status else (status, "")


def fetch_with_rate_limit_retry(url: str, settings: RedditSettings, progress: Progress) -> tuple[str, str]:
    status, body = fetch_url(url)
    if not status.startswith("429") or settings.rate_limit_pause_seconds <= 0:
        return status, body

    wait_seconds = settings.rate_limit_pause_seconds
    host = urllib.parse.urlparse(url).netloc or url
    progress.log(f"Reddit rate-limited {host}; waiting {wait_seconds:g}s before retry")
    time.sleep(wait_seconds)
    retry_status, retry_body = fetch_url(url)
    return f"{status}; retry={retry_status}", retry_body


def looks_like_feed(body: str) -> bool:
    return bool(body and body.lstrip().startswith("<?xml"))


def stable_post_id(url: str, title: str) -> str:
    digest = hashlib.sha1(f"{url}|{title}".encode("utf-8")).hexdigest()
    return digest[:12]


def parse_feed(
    source: RedditSource,
    subreddit: str,
    body: str,
    cutoff: dt.datetime,
    limit: int,
    skip_title_keywords: list[str],
) -> list[RedditPost]:
    root = ET.fromstring(body)
    posts: list[RedditPost] = []
    skipped = {keyword.lower() for keyword in skip_title_keywords}

    for entry in root.findall("atom:entry", ATOM_NS)[:limit]:
        title = (entry.findtext("atom:title", default="", namespaces=ATOM_NS) or "").strip()
        if any(keyword in title.lower() for keyword in skipped):
            continue

        link_el = entry.find("atom:link", ATOM_NS)
        url = link_el.attrib.get("href", "") if link_el is not None else ""
        published = entry.findtext("atom:published", default="", namespaces=ATOM_NS) or ""
        published_dt = parse_datetime(published)
        if published_dt and published_dt < cutoff:
            continue

        content = entry.findtext("atom:content", default="", namespaces=ATOM_NS) or ""
        summary = clean_html(content)
        posts.append(
            RedditPost(
                id=stable_post_id(url, title),
                source_name=source.name,
                subreddit=subreddit,
                title=title,
                url=url,
                published=published,
                summary=summary[:900],
                heuristic_score=heuristic_score(title, summary, published_dt),
            )
        )

    return posts


def heuristic_score(title: str, summary: str, published_dt: dt.datetime | None) -> float:
    text = f"{title} {summary}".lower()
    score = 0.0
    score += sum(2.0 for term in ISSUE_TERMS if term in text)
    score += sum(1.5 for term in NEWS_TERMS if term in text)
    if "?" in title:
        score += 2.0
    if published_dt:
        age_hours = max(0.0, (dt.datetime.now(dt.timezone.utc) - published_dt).total_seconds() / 3600)
        score += max(0.0, 4.0 - age_hours / 24)
    return round(score, 2)


def collect_posts(settings: RedditSettings, progress: Progress) -> tuple[list[RedditPost], list[FeedStatus]]:
    cutoff = dt.datetime.now(dt.timezone.utc) - dt.timedelta(days=settings.days)
    posts: list[RedditPost] = []
    statuses: list[FeedStatus] = []
    seen_urls: set[str] = set()

    for index, source in enumerate(settings.sources, start=1):
        if index > 1:
            time.sleep(settings.request_delay_seconds)

        subreddit = subreddit_from_ref(source.url)
        progress.log(f"Scanning r/{subreddit} ({index}/{len(settings.sources)})")
        attempts: list[FeedAttempt] = []

        for url in feed_urls(source, settings.feed_hosts):
            status, body = fetch_with_rate_limit_retry(url, settings, progress)
            attempts.append(FeedAttempt(url=url, status=status))
            if not looks_like_feed(body):
                continue

            try:
                source_posts = parse_feed(
                    source,
                    subreddit,
                    body,
                    cutoff,
                    settings.per_source_limit,
                    settings.skip_title_keywords,
                )
            except Exception as exc:
                attempts[-1] = FeedAttempt(
                    url=url,
                    status=f"{status}, parse:{compact_status_from_exception(exc)}",
                )
                continue

            unique_posts = []
            for post in source_posts:
                if post.url in seen_urls:
                    continue
                seen_urls.add(post.url)
                unique_posts.append(post)

            posts.extend(unique_posts)
            statuses.append(
                FeedStatus(
                    source_name=source.name,
                    subreddit=subreddit,
                    ok=True,
                    selected_url=url,
                    attempts=attempts,
                    entries=len(unique_posts),
                )
            )
            break
        else:
            statuses.append(
                FeedStatus(
                    source_name=source.name,
                    subreddit=subreddit,
                    ok=False,
                    selected_url="",
                    attempts=attempts,
                    entries=0,
                )
            )

    posts.sort(key=lambda post: (post.heuristic_score, post.published), reverse=True)
    progress.log(f"Collected {len(posts)} candidate posts from {len(statuses)} configured sources")
    return posts, statuses
