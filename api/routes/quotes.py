from flask import jsonify, request

from api.app import app
from api.utils.diem_blockchain import get_events


@app.route("/quotes", methods=["GET"])
def quotes():
    if request.method == "GET":
        is_single = request.args.get("single", "true") == "true"
        coin1 = request.args.get("coin1", "coin_a")
        coin2 = request.args.get("coin2", "coin_b")
        flip = coin1 > coin2

        module = (
            f"Exchange{coin2[-1].upper()}{coin1[-1].upper()}"
            if flip
            else f"Exchange{coin1[-1].upper()}{coin2[-1].upper()}"
        )
        res = get_events(module, "exchange_price_change_events")

        def parse_event(event):
            data = event["data"]

            price = float(data["ratio_a_to_b"]) / 10_000.0
            if flip:
                price = 1 / price

            return data["timestamp"], f"{price:.3f}"

        if is_single:
            return parse_event(res[-1])[1], 200

        return jsonify([parse_event(e) for e in res]), 200
