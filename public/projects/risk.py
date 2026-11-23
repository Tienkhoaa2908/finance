"""Hiệp phương sai và rủi ro danh mục / portfolio risk. Run: python risk.py."""
from statistics import mean, variance
from math import sqrt


def covariance(x, y):
    if len(x) != len(y) or len(x) < 2:
        raise ValueError("Aligned samples with n >= 2 required")
    mx, my = mean(x), mean(y)
    return sum((a-mx)*(b-my) for a, b in zip(x, y)) / (len(x)-1)


if __name__ == "__main__":
    a = [0.01, -0.02, 0.015, 0.005, -0.01]
    b = [-0.005, 0.01, 0.005, -0.01, 0.015]
    w = 0.6
    portfolio = [w*x + (1-w)*y for x, y in zip(a, b)]
    risk = w*w*variance(a) + (1-w)**2*variance(b) + 2*w*(1-w)*covariance(a, b)
    assert abs(risk - variance(portfolio)) < 1e-12
    print(dict(mean=mean(portfolio), variance=risk, volatility=sqrt(risk)))
    # Extend: more assets, estimation windows, missing dates and stress scenarios.
    # Annualization is intentionally omitted: choose a calendar and assumptions first.
