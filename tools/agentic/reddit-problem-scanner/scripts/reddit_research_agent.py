#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

from reddit_research_agent.config import DEFAULT_CONFIG_PATH, apply_overrides, load_config
from reddit_research_agent.graph import run_agent, state_as_dict


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Run a LangGraph Reddit research agent using local Ollama models."
    )
    parser.add_argument(
        "--config",
        default=str(DEFAULT_CONFIG_PATH),
        help="Path to a JSON config file.",
    )
    parser.add_argument(
        "--output",
        default="/tmp/reddit-research-report.md",
        help="Markdown report output path.",
    )
    parser.add_argument("--model", help="Override the Ollama model from config.")
    parser.add_argument("--days", type=int, help="Override the Reddit recency window.")
    parser.add_argument("--max-posts", type=int, help="Override max posts sent to Ollama.")
    parser.add_argument(
        "--source",
        action="append",
        default=[],
        help="Add an extra subreddit name or Reddit URL. Can be repeated.",
    )
    parser.add_argument(
        "--only-source",
        action="append",
        default=[],
        help="Use only this subreddit name or Reddit URL, replacing config sources. Can be repeated.",
    )
    parser.add_argument("--quiet", action="store_true", help="Hide progress output.")
    parser.add_argument(
        "--print",
        action="store_true",
        help="Print the markdown report to stdout after writing it.",
    )
    parser.add_argument(
        "--json-state",
        help="Optional path to write the final LangGraph state as JSON for debugging.",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    config = load_config(args.config)
    config = apply_overrides(
        config,
        model=args.model,
        days=args.days,
        max_posts_for_ai=args.max_posts,
        extra_sources=args.source,
        only_sources=args.only_source,
    )

    try:
        state = run_agent(config, output_path=args.output, quiet=args.quiet)
    except RuntimeError as exc:
        print(f"error: {exc}", file=sys.stderr)
        return 2

    if args.json_state:
        path = Path(args.json_state)
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(json.dumps(state_as_dict(state), indent=2, ensure_ascii=False), encoding="utf-8")

    if args.print:
        print(state.get("report_markdown", ""))

    if state.get("errors"):
        print("Completed with warnings:", file=sys.stderr)
        for error in state["errors"]:
            print(f"- {error}", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
