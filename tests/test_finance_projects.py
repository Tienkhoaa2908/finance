"""Run with: python -m unittest discover -s tests -p test_finance_projects.py"""
import importlib.util
from pathlib import Path
import sys
import unittest

ROOT = Path(__file__).resolve().parents[1] / "public" / "projects"


def load(name):
    spec = importlib.util.spec_from_file_location(name, ROOT / (name + ".py"))
    module = importlib.util.module_from_spec(spec)
    sys.modules[name] = module
    spec.loader.exec_module(module)
    return module


class FinanceProjects(unittest.TestCase):
    def test_missing_csv_cell_is_rejected_without_aborting(self):
        rows, rejected = load("data_pipeline").clean("date,close\n2025-01-01\n2025-01-02,100\n")
        self.assertEqual(len(rows), 1)
        self.assertEqual(len(rejected), 1)

    def test_execution_rejects_nan_without_mutating_position(self):
        order = load("execution").Order(10)
        order.apply("accepted", "accepted")
        with self.assertRaises(ValueError):
            order.apply("bad", "fill", float("nan"))
        self.assertEqual(order.filled, 0)
        order.apply("one", "fill", 4)
        order.apply("one", "fill", 4)
        self.assertEqual(order.filled, 4)

    def test_backtest_entry_is_fully_funded(self):
        backtest = load("backtest").backtest
        self.assertAlmostEqual(backtest([100, 110, 100, 50], 100)["equity"], .5 / 1.01)
        self.assertGreater(backtest([100, 110, 100, .000001], 100)["equity"], 0)
        prices = [100, 102, 101, 104, 103]
        self.assertEqual(backtest(prices)["rows"][:-1], backtest(prices[:-1] + [500])["rows"][:-1])

    def test_ledger_partial_exit_reconciles(self):
        rows, equity, realized, unrealized = load("ledger").ledger(
            [("buy", 10, 100, 1), ("dividend", 10, 2, 0), ("sell", 4, 108, 1)], 2000, 108)
        self.assertAlmostEqual(equity, 2098)
        self.assertAlmostEqual(realized + unrealized, 98)
        self.assertEqual(rows[-1]["quantity"], 6)

    def test_replication_and_covariance(self):
        result = load("pricing").call_one_step(100, 100, 1.2, .8, .05)
        self.assertAlmostEqual(result["price"], 11.904761904761905)
        self.assertAlmostEqual(load("risk").covariance([1, 2, 3], [2, 4, 6]), 2)


if __name__ == "__main__":
    unittest.main()
