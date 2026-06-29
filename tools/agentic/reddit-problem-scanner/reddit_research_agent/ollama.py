from __future__ import annotations

import json
import urllib.error
import urllib.request
from typing import Any

from .models import OllamaSettings


class OllamaError(RuntimeError):
    pass


class OllamaClient:
    def __init__(self, settings: OllamaSettings) -> None:
        self.settings = settings
        self.base_url = settings.base_url.rstrip("/")

    def generate(self, prompt: str, *, system: str | None = None, json_mode: bool = False) -> str:
        payload: dict[str, Any] = {
            "model": self.settings.model,
            "prompt": prompt,
            "stream": False,
            "options": {
                "temperature": self.settings.temperature,
            },
        }
        if system:
            payload["system"] = system
        if json_mode:
            payload["format"] = "json"

        request = urllib.request.Request(
            f"{self.base_url}/api/generate",
            data=json.dumps(payload).encode("utf-8"),
            headers={"Content-Type": "application/json"},
            method="POST",
        )
        try:
            with urllib.request.urlopen(request, timeout=self.settings.timeout_seconds) as response:
                raw = response.read().decode("utf-8", errors="replace")
        except urllib.error.URLError as exc:
            raise OllamaError(
                f"Could not reach Ollama at {self.base_url}. Start it with `ollama serve` "
                f"and make sure model `{self.settings.model}` is pulled."
            ) from exc

        try:
            data = json.loads(raw)
        except json.JSONDecodeError as exc:
            raise OllamaError(f"Ollama returned non-JSON response: {raw[:300]}") from exc

        if "error" in data:
            raise OllamaError(str(data["error"]))
        return str(data.get("response", "")).strip()


def extract_json_object(value: str) -> dict[str, Any]:
    try:
        loaded = json.loads(value)
        if isinstance(loaded, dict):
            return loaded
    except json.JSONDecodeError:
        pass

    start = value.find("{")
    end = value.rfind("}")
    if start == -1 or end == -1 or end <= start:
        raise ValueError("No JSON object found in model response")
    loaded = json.loads(value[start : end + 1])
    if not isinstance(loaded, dict):
        raise ValueError("Model response JSON was not an object")
    return loaded
