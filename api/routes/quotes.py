from flask import jsonify, request
from datetime import datetime, timezone
import time

from api import cache
from api.app import app
from api.utils.diem_blockchain import get_events


@app.route("/quotes", methods=["GET"])
def quotes():
    if request.method == "GET":
        time_interval = int(request.args.get("interval", 180)) * 60
        coin1 = request.args.get("coin1", "coin_a")
        coin2 = request.args.get("coin2", "coin_b")
        flip = coin1 > coin2

        module = (
            f"Exchange{coin2[-1].upper()}{coin1[-1].upper()}"
            if flip
            else f"Exchange{coin1[-1].upper()}{coin2[-1].upper()}"
        )

        return jsonify(get_data_for_pair(time_interval, module, flip)), 200


@cache.memoize(timeout=5)
def get_data_for_pair(time_interval, module, flip):
        res = get_events(module, "exchange_price_change_events")

        if len(res) == 0:
            raise Exception("uninitialized")

        def parse_event(event):
            data = event["data"]

            price = float(data["ratio_a_to_b"]) / 10_000.0
            if flip:
                price = 1 / price
            return {"x": int(data["timestamp"]), "y": price}

        data = []
        cutoff = int(time.time() - time_interval)  # 3 hours ago
        first = parse_event(res[0])
        for entry in res:
            parsed = parse_event(entry)
            ttime = parsed["x"]
            timedif = ttime - cutoff

            if timedif <= 0:
                first = parsed
            else:
                parsed["x"] = datetime.fromtimestamp(
                    int(parsed["x"]), tz=timezone.utc
                ).strftime("%Y-%m-%dT%H:%M:%S%z")
                data.append(parsed)

        first["x"] = datetime.fromtimestamp(int(cutoff), tz=timezone.utc).strftime(
            "%Y-%m-%dT%H:%M:%S%z"
        )
        data.insert(0, first)

        data.append(
            {
                "x": datetime.now(tz=timezone.utc).strftime("%Y-%m-%dT%H:%M:%S%z"),
                "y": data[-1]["y"],
            }
        )

        return data
