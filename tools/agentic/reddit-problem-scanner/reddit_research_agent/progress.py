from __future__ import annotations

import datetime as dt
import sys


class Progress:
    def __init__(self, enabled: bool = True) -> None:
        self.enabled = enabled

    def log(self, message: str) -> None:
        if not self.enabled:
            return
        now = dt.datetime.now().strftime("%H:%M:%S")
        print(f"[{now}] {message}", file=sys.stderr, flush=True)
