"""Pipeline dữ liệu mô phỏng / synthetic pipeline. Run: python data_pipeline.py."""
import csv
import hashlib
import io
import json
import math
from datetime import date

RAW = "date,close\n2025-01-02,100\n2025-01-03,101\n2025-01-03,101\n2025-01-06,-2\n2025-01-07,103\n"


def clean(text):
    accepted, rejected, seen = [], [], set()
    for line, row in enumerate(csv.DictReader(io.StringIO(text)), start=2):
        try:
            day, price = date.fromisoformat(row["date"]), float(row["close"])
            if not math.isfinite(price) or price <= 0:
                raise ValueError("price must be positive and finite")
            if day in seen:
                raise ValueError("duplicate timestamp: inspect before resolving")
            seen.add(day)
            accepted.append({"date": day.isoformat(), "close": price})
        except (ValueError, KeyError, TypeError) as exc:
            rejected.append({"line": line, "row": row, "reason": str(exc)})
    return sorted(accepted, key=lambda x: x["date"]), rejected


if __name__ == "__main__":
    rows, rejected = clean(RAW)
    assert len(rows) == 3 and len(rejected) == 2
    assert clean(RAW) == clean(RAW)
    with open("prices.csv", "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=["date", "close"])
        writer.writeheader()
        writer.writerows(rows)
    manifest = {"source": "embedded synthetic fixture", "sha256": hashlib.sha256(RAW.encode()).hexdigest(), "rows": len(rows), "rejected": rejected}
    with open("manifest.json", "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=2)
    print(manifest)
    # Extend: timezone-aware event/availability timestamps, exchange calendars, revisions.
