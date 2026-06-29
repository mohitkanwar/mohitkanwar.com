# Reddit Problem Scanner

This folder contains two tools:

- `scripts/reddit_problem_scanner.py`: lightweight keyword-based RSS scanner.
- `scripts/reddit_research_agent.py`: LangGraph-based AI research agent that uses local Ollama models.

## LangGraph Ollama Agent

The agent:

1. Reads configurable Reddit URLs or subreddit names.
2. Fetches public subreddit RSS feeds.
3. Falls back between `old.reddit.com` and `www.reddit.com` when one feed is blocked or rate-limited.
4. Uses LangGraph nodes for collection, candidate selection, Ollama analysis, synthesis, and report rendering.
5. Writes a prioritized markdown brief for blog ideation.

## Setup

Install the Python dependency:

```bash
python3 -m pip install -r tools/agentic/reddit-problem-scanner/requirements.txt
```

Start Ollama and make sure the configured model is available:

```bash
ollama serve
ollama list
```

The provided configs use `qwen2.5-coder:7b` because it is available in this workspace. Change `ollama.model` in a config file or pass `--model` to use another local model.

## Run

From the repo root:

```bash
python3 tools/agentic/reddit-problem-scanner/scripts/reddit_research_agent.py \
  --config tools/agentic/reddit-problem-scanner/configs/default.json \
  --output /tmp/reddit-research-report.md
```

Open the report:

```bash
open /tmp/reddit-research-report.md
```

The command prints progress to stderr while it runs.

## Useful Configurations

Default mixed scan:

```bash
python3 tools/agentic/reddit-problem-scanner/scripts/reddit_research_agent.py \
  --config tools/agentic/reddit-problem-scanner/configs/default.json \
  --output /tmp/reddit-research-report.md
```

Architecture-focused scan:

```bash
python3 tools/agentic/reddit-problem-scanner/scripts/reddit_research_agent.py \
  --config tools/agentic/reddit-problem-scanner/configs/software-architecture.json \
  --output /tmp/reddit-architecture-report.md
```

FinTech and AI scan:

```bash
python3 tools/agentic/reddit-problem-scanner/scripts/reddit_research_agent.py \
  --config tools/agentic/reddit-problem-scanner/configs/fintech-ai.json \
  --output /tmp/reddit-fintech-ai-report.md
```

Override model, days, and sources:

```bash
python3 tools/agentic/reddit-problem-scanner/scripts/reddit_research_agent.py \
  --config tools/agentic/reddit-problem-scanner/configs/default.json \
  --model qwen2.5-coder:7b \
  --days 3 \
  --source https://old.reddit.com/r/LocalLLaMA/ \
  --source softwareengineering \
  --output /tmp/reddit-custom-report.md
```

Run a quick single-source scan without editing config:

```bash
python3 tools/agentic/reddit-problem-scanner/scripts/reddit_research_agent.py \
  --config tools/agentic/reddit-problem-scanner/configs/default.json \
  --only-source https://old.reddit.com/r/softwarearchitecture/ \
  --days 2 \
  --max-posts 5 \
  --output /tmp/reddit-architecture-quick.md
```

## Config Format

Configs are JSON files under `configs/`.

Key fields:

- `reddit.sources`: list of Reddit URLs or named URL objects.
- `reddit.days`: recency window.
- `reddit.per_source_limit`: maximum RSS entries inspected per subreddit.
- `reddit.request_delay_seconds`: pause between configured sources.
- `reddit.rate_limit_pause_seconds`: wait and retry when Reddit returns `429`.
- `analysis.focus`: what the model should care about.
- `analysis.audience`: who the final brief is for.
- `analysis.max_posts_for_ai`: cap on posts sent to Ollama.
- `analysis.batch_size`: posts per Ollama analysis call.
- `ollama.model`: local model name.
- `report.max_items_per_section`: report length control.

## Output

The markdown report contains:

- Priority brief.
- Top prioritized signals.
- Important news.
- Major issues people are facing.
- Blog opportunities.
- Feed status.
- Evidence appendix.

## Notes

This uses public Reddit RSS feeds only. If a feed is rate-limited or blocked, the report keeps the feed status visible and uses whatever partial evidence is available.
