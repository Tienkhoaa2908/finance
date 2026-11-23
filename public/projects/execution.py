"""Mô phỏng trạng thái lệnh / execution state. Run: python execution.py."""
from dataclasses import dataclass, field


@dataclass
class Order:
    quantity: int
    filled: int = 0
    state: str = "submitted"
    seen: set = field(default_factory=set)

    def __post_init__(self):
        if type(self.quantity) is not int or self.quantity <= 0:
            raise ValueError("Quantity must be a positive integer")

    def apply(self, event_id, kind, amount=0):
        if event_id in self.seen:
            return  # idempotent replay
        if kind == "accepted" and self.state == "submitted":
            self.state = "accepted"
        elif kind == "fill" and self.state in ("accepted", "partial"):
            if type(amount) is not int or amount <= 0 or self.filled + amount > self.quantity:
                raise ValueError("Invalid fill quantity")
            self.filled += amount
            self.state = "filled" if self.filled == self.quantity else "partial"
        elif kind == "cancelled" and self.state in ("accepted", "partial"):
            self.state = "cancelled"
        else:
            # Real systems must reconcile late fills against venue state, not discard them.
            raise ValueError("Unexpected event: reconcile before continuing")
        self.seen.add(event_id)


if __name__ == "__main__":
    order = Order(10)
    order.apply("a", "accepted")
    order.apply("b", "fill", 4)
    order.apply("b", "fill", 4)
    assert order.filled == 4
    order.apply("c", "fill", 6)
    assert order.state == "filled" and order.filled == 10
    print(order)
    # Extend: durable event storage, order IDs, reconnect reconciliation and kill switch.
