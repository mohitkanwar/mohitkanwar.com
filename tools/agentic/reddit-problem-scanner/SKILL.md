---
name: reddit-problem-scanner
description: Scan Reddit for current software developer, DevOps, SRE, and software architecture pain points using public subreddit RSS feeds. Use when Codex needs evidence-backed topic ideas, market/problem discovery, developer-problem analysis, Reddit trend scans, or recurring research on engineering pain points without manually repeating subreddit collection and classification.
---

# Reddit Problem Scanner

Use this repo-local agentic tool to identify current problems software developers, DevOps engineers, SREs, and software architects are discussing on Reddit.

## LangGraph Ollama Agent

Use `scripts/reddit_research_agent.py` when you need a readable AI-generated research brief for blog ideation.

```bash
python3 tools/agentic/reddit-problem-scanner/scripts/reddit_research_agent.py \
  --config tools/agentic/reddit-problem-scanner/configs/default.json \
  --output /tmp/reddit-research-report.md
```

The LangGraph agent scans configured public Reddit RSS feeds, shows progress, analyzes posts with a local Ollama model, and writes a prioritized markdown report with important news, major user issues, and blog opportunities.

## Workflow

1. Run `scripts/reddit_problem_scanner.py` with relevant subreddits and a short recency window.
2. The scanner tries `old.reddit.com/r/<subreddit>/.rss` first, then falls back to `www.reddit.com/r/<subreddit>/.rss` when old Reddit is rate-limited or empty.
3. Use the generated markdown report as the working summary.
4. Cite Reddit post URLs from the report when presenting findings.
5. If both RSS feeds return `429`, empty bodies, or network-security pages, report the access limitation and use the partial evidence rather than bypassing controls.

## Typical Commands

```bash
python3 tools/agentic/reddit-problem-scanner/scripts/reddit_problem_scanner.py \
  --subreddits softwarearchitecture devops ExperiencedDevs programming cscareerquestions webdev sre \
  --days 14 \
  --limit 20 \
  --format markdown
```

Write a report file:

```bash
python3 tools/agentic/reddit-problem-scanner/scripts/reddit_problem_scanner.py \
  --subreddits softwarearchitecture devops \
  --days 7 \
  --output /tmp/reddit-problems.md
```

Machine-readable output:

```bash
python3 tools/agentic/reddit-problem-scanner/scripts/reddit_problem_scanner.py \
  --subreddits softwarearchitecture devops \
  --format json
```

## Interpretation Rules

- Treat RSS entries as post-level signals, not statistically representative survey data.
- Separate direct evidence from inference.
- Favor repeated themes across subreddits over isolated posts.
- Preserve dates, subreddit names, and post URLs.
- Avoid long Reddit quotes; paraphrase unless a short quote is necessary.
- For blog ideation, convert problems into practical article angles: playbooks, checklists, architecture patterns, governance models, and failure-mode analyses.

## Useful Reference

Read `references/problem-taxonomy.md` when adjusting classification categories or adding new topic clusters.
