"""Backtest mô phỏng, không phải bằng chứng lợi nhuận. Run: python backtest.py."""
import math


def backtest(prices, cost_bps=10):
    if len(prices) < 4 or not all(math.isfinite(p) and p > 0 for p in prices):
        raise ValueError("Need at least four positive finite prices")
    if not math.isfinite(cost_bps) or not 0 <= cost_bps <= 100:
        raise ValueError("Invalid costs")
    equity, peak, drawdown, position, turnover = 1.0, 1.0, 0.0, 0, 0
    rows = []
    for t in range(1, len(prices)):
        # Signal uses t-2 vs t-3, fills at t-1 close, holds to t close.
        target = int(t >= 3 and prices[t-2] > prices[t-3])
        trade = abs(target - position)
        cost = cost_bps / 10000
        fee = cost/(1+cost) if target > position else cost if target < position else 0
        gross = target * (1-fee) * (prices[t] / prices[t-1] - 1)
        equity *= 1 + gross - fee
        turnover += trade
        peak = max(peak, equity)
        drawdown = min(drawdown, equity / peak - 1)
        rows.append((t, target, equity))
        position = target
    # Open position is marked at the final close, not liquidated.
    return dict(equity=equity, drawdown=drawdown, turnover=turnover, rows=rows)


if __name__ == "__main__":
    prices = [100, 102, 101, 104, 103, 105, 100, 98, 101, 103, 102, 106]
    result = backtest(prices)
    assert backtest(prices, 0)["equity"] >= result["equity"]
    changed = prices[:-1] + [200]
    assert backtest(changed)["rows"][:-1] == result["rows"][:-1]
    assert backtest([100] * 10)["equity"] == 1
    print(result)
    # Extend: time split, benchmark, corporate actions, capacity and delistings.
