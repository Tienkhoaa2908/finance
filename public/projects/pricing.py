"""Quyền chọn mua châu Âu, cây một bước. Run: python pricing.py."""


def call_one_step(spot, strike, up, down, rate):
    if spot <= 0 or strike < 0 or not 0 < down < 1 + rate < up:
        raise ValueError("Require spot > 0, strike >= 0 and 0 < d < 1+r < u")
    payoff_up, payoff_down = max(spot*up-strike, 0), max(spot*down-strike, 0)
    probability = (1+rate-down)/(up-down)
    price = (probability*payoff_up + (1-probability)*payoff_down)/(1+rate)
    delta = (payoff_up-payoff_down)/(spot*(up-down))
    cash = (payoff_down-delta*spot*down)/(1+rate)
    assert abs(delta*spot+cash-price) < 1e-10
    assert abs(delta*spot*up+cash*(1+rate)-payoff_up) < 1e-10
    assert abs(delta*spot*down+cash*(1+rate)-payoff_down) < 1e-10
    return dict(price=price, delta=delta, cash=cash, risk_neutral_probability=probability)


if __name__ == "__main__":
    result = call_one_step(100, 100, 1.2, 0.8, 0.05)
    assert abs(result["price"]-11.904761904761905) < 1e-10
    print(result)
    # Extend: multi-period tree, put-call parity and dividends.
