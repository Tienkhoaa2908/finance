"""Sổ giao dịch / trade ledger. Run: python ledger.py. Synthetic data, no dependencies."""
import csv


def ledger(events, initial_cash, mark):
    cash, quantity, basis, realized = initial_cash, 0, 0.0, 0.0
    rows = []
    for kind, qty, price, fee in events:
        if qty <= 0 or price < 0 or fee < 0:
            raise ValueError("Invalid event")
        if kind == "buy":
            amount = qty * price + fee
            cash -= amount
            quantity += qty
            basis += amount
        elif kind == "sell":
            if qty > quantity:
                raise ValueError("Cannot sell more than held")
            cost = basis * qty / quantity
            proceeds = qty * price - fee
            realized += proceeds - cost
            cash += proceeds
            quantity -= qty
            basis -= cost
        elif kind == "dividend":
            if qty != quantity:
                raise ValueError("Dividend must match eligible position in this example")
            cash += qty * price - fee
            realized += qty * price - fee
        else:
            raise ValueError("Unknown event")
        rows.append(dict(event=kind, cash=cash, quantity=quantity, basis=basis, realized=realized))
    unrealized = quantity * mark - basis
    equity = cash + quantity * mark
    assert abs(equity - initial_cash - realized - unrealized) < 1e-8
    return rows, equity, realized, unrealized


if __name__ == "__main__":
    events = [("buy", 10, 100, 1), ("dividend", 10, 2, 0), ("sell", 4, 108, 1)]
    rows, equity, realized, unrealized = ledger(events, 2000, 108)
    assert abs(equity - 2098) < 1e-8
    assert abs(realized + unrealized - 98) < 1e-8
    with open("ledger.csv", "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=rows[0].keys())
        writer.writeheader()
        writer.writerows(rows)
    print(dict(equity=equity, realized=realized, unrealized=unrealized))
    # Extend: timestamped events, explicit currency, split adjustments and tax lots.
