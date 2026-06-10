#!/usr/bin/env bash
set -euo pipefail

TARGET_BLOGS=2
TARGET_VIDEOS=1
TARGET_SOLUTIONS=1

NOW_MONTH="$(date +%Y-%m)"

extract_month() {
  local file="$1"
  local date_line
  date_line="$(grep -m1 '^date:' "$file" || true)"
  if [[ -z "$date_line" ]]; then
    echo ""
    return
  fi

  local value
  value="$(echo "$date_line" | sed -E 's/^date:[[:space:]]*//; s/"//g; s/'"'"'//g')"
  echo "$value" | cut -c1-7
}

count_for_month() {
  local root="$1"
  local count=0
  while IFS= read -r -d '' file; do
    local month
    month="$(extract_month "$file")"
    if [[ "$month" == "$NOW_MONTH" ]]; then
      count=$((count + 1))
    fi
  done < <(find "$root" -type f -name '*.md' -print0)
  echo "$count"
}

BLOGS_COUNT="$(count_for_month "content/blogs")"
VIDEOS_COUNT="$(count_for_month "content/videos")"
SOLUTIONS_COUNT="$(count_for_month "content/solutions")"

echo "Content Rhythm Check for $NOW_MONTH"
echo "- Blogs:     $BLOGS_COUNT / $TARGET_BLOGS"
echo "- Videos:    $VIDEOS_COUNT / $TARGET_VIDEOS"
echo "- Solutions: $SOLUTIONS_COUNT / $TARGET_SOLUTIONS"

status=0
if (( BLOGS_COUNT < TARGET_BLOGS )); then
  echo "WARN: Blog target not met."
  status=1
fi
if (( VIDEOS_COUNT < TARGET_VIDEOS )); then
  echo "WARN: Video target not met."
  status=1
fi
if (( SOLUTIONS_COUNT < TARGET_SOLUTIONS )); then
  echo "WARN: Solution target not met."
  status=1
fi

if (( status == 0 )); then
  echo "PASS: Monthly content rhythm target met."
else
  echo "ACTION: Publish missing content to meet monthly rhythm."
fi

exit "$status"
