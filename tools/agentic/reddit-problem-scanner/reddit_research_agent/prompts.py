from __future__ import annotations

import json

from .models import AnalysisSettings, PostAnalysis, RedditPost


def analysis_system_prompt(settings: AnalysisSettings) -> str:
    return (
        "You are a research analyst for software architecture, fintech, AI, and engineering leadership. "
        "Analyze Reddit posts as weak signals. Separate evidence from inference. "
        "Do not invent facts beyond the title and summary. Return strict JSON only."
    )


def analysis_prompt(posts: list[RedditPost], settings: AnalysisSettings) -> str:
    payload = [
        {
            "id": post.id,
            "subreddit": post.subreddit,
            "published": post.published[:10],
            "title": post.title,
            "summary": post.summary[:650],
            "url": post.url,
        }
        for post in posts
    ]
    return f"""
Audience: {settings.audience}
Focus: {settings.focus}

Analyze each Reddit post and return this JSON shape:
{{
  "items": [
    {{
      "id": "same id from input",
      "is_news": true,
      "is_issue": true,
      "importance": 1,
      "issue_severity": 1,
      "newsworthiness": 1,
      "audience_relevance": 1,
      "summary": "one sentence factual summary",
      "why_it_matters": "why this matters for the target audience",
      "people_problem": "the pain, risk, confusion, or unmet need people are facing",
      "blog_angle": "specific blog topic this could become",
      "tags": ["short", "lowercase", "tags"]
    }}
  ]
}}

Scoring:
- Use 1 to 5 for all scores.
- importance: overall strategic importance.
- issue_severity: how painful or repeated the problem appears.
- newsworthiness: how much this looks like a timely update, trend, release, regulation, breach, outage, or market signal.
- audience_relevance: relevance to the configured audience.
- If a post is not useful, still include it with low scores.

Posts:
{json.dumps(payload, ensure_ascii=False, indent=2)}
""".strip()


def synthesis_system_prompt() -> str:
    return (
        "You create concise editorial research briefs for blog ideation. "
        "Use only the provided analyzed evidence. Do not claim trends, industries, or risks "
        "that are not visible in the evidence. If evidence is thin, say so directly. Return markdown."
    )


def synthesis_prompt(
    posts_by_id: dict[str, RedditPost],
    analyses: list[PostAnalysis],
    settings: AnalysisSettings,
) -> str:
    ranked = sorted(analyses, key=lambda item: item.priority_score, reverse=True)[:12]
    payload = []
    for analysis in ranked:
        post = posts_by_id.get(analysis.post_id)
        if not post:
            continue
        payload.append(
            {
                "title": post.title,
                "subreddit": post.subreddit,
                "published": post.published[:10],
                "url": post.url,
                "priority_score": analysis.priority_score,
                "is_news": analysis.is_news,
                "is_issue": analysis.is_issue,
                "summary": analysis.summary,
                "why_it_matters": analysis.why_it_matters,
                "people_problem": analysis.people_problem,
                "blog_angle": analysis.blog_angle,
                "tags": analysis.tags,
            }
        )

    return f"""
Audience: {settings.audience}
Focus: {settings.focus}

Create a short markdown section with:
1. Executive summary, 3 bullets.
2. What changed or looks newsworthy, 3 bullets.
3. Major issues people are facing, 3 bullets.
4. Best blog opportunities, 5 bullets with concrete titles.

Rules:
- Use only the evidence below.
- Do not mention a subreddit, industry, technology, or trend unless it appears in the evidence.
- Avoid broad claims like "adoption is rising" unless multiple evidence items support it.
- If there is only one evidence item, keep the synthesis narrow and say that evidence is limited.

Evidence:
{json.dumps(payload, ensure_ascii=False, indent=2)}
""".strip()
