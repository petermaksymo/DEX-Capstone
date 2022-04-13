from flask import jsonify, request
from flask_praetorian import auth_required, current_user
import datetime

from api.app import app
from api.utils.diem_blockchain import get_account_transactions


@app.route("/transactions", methods=["GET"])
@auth_required
def transactions():
    if request.method == "GET":
        raw_txns = get_account_transactions(current_user().address)

        def decode_hex(hex):
            return bytearray.fromhex(hex[2:]).decode()

        coin_from_letter = {"A": "Coin A", "B": "Coin B", "C": "Coin C", "USD": "USD"}

        values = []
        for t in raw_txns:
            payload = t["payload"]
            events = t["events"]

            # All notable transactions have events
            if len(events) == 0:
                continue
            date = datetime.datetime.fromtimestamp(
                int(events[0]["data"]["timestamp"])
            ).strftime("%b %d, %Y - %I:%M %p")

            if "MintCoinEvent" in events[0]["type"]:
                data = events[0]["data"]
                amount = data["amount"]
                coin = decode_hex(data["coin"])

                # Ignore 0 coin mints
                if amount == "0":
                    continue

                values.insert(
                    0,
                    [
                        date,
                        f"Mint {coin}",
                        "-",
                        f"+ {amount} {coin}",
                        t.get("hash"),
                    ],
                )
            elif "exchange_coin" in payload["function"]:
                sent, received = {}, {}

                for event in events:
                    if "TransferCoinEvent" in event["type"]:
                        data = event["data"]

                        if data["from_addr"][2:] == current_user().address:
                            sent["coin"] = decode_hex(data["coin"])
                            sent["amount"] = data["amount"]
                        else:
                            received["coin"] = decode_hex(data["coin"])
                            received["amount"] = data["amount"]

                values.insert(
                    0,
                    [
                        date,
                        f"Exchange {sent['coin']} for {received['coin']}",
                        f"- {sent['amount']} {sent['coin']}",
                        f"+ {received['amount']} {received['coin']}",
                        t.get("hash"),
                    ],
                )
            elif "add_exchange_liquidity" in payload["function"]:
                event = next(e for e in events if "AddLiquidityEvent" in e["type"])
                data = event["data"]

                exchange = decode_hex(data["exchange"])  # eg. 'Pool A - B'
                coin1 = coin_from_letter[exchange.split()[1]]
                coin2 = coin_from_letter[exchange.split()[-1]]

                values.insert(
                    0,
                    [
                        date,
                        f"Add Liqudity to {exchange}",
                        f"- {data['a_amount']} {coin1}, \n- {data['b_amount']} {coin2}",
                        f"+ {data['lp_amount']} LPCoin",
                        t.get("hash"),
                    ],
                )
            elif "remove_exchange_liquidity" in payload["function"]:
                event = next(e for e in events if "RemoveLiquidityEvent" in e["type"])
                data = event["data"]

                exchange = decode_hex(data["exchange"])  # eg. 'Pool A - B'
                coin1 = coin_from_letter[exchange.split()[1]]
                coin2 = coin_from_letter[exchange.split()[-1]]

                values.insert(
                    0,
                    [
                        date,
                        f"Withdraw Liqudity from {exchange}",
                        f"- {data['lp_amount']} LPCoin",
                        f"+ {data['a_amount']} {coin1}, \n+ {data['b_amount']} {coin2}",
                        t.get("hash"),
                    ],
                )

        return jsonify(
            {
                "headers": [
                    "Date",
                    "Description",
                    "Sent",
                    "Received",
                    "Hash",
                ],
                "values": values,
                "mobile_cols": [0, 1, 2, 3],
            }
        )
