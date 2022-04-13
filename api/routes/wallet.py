from flask import jsonify, request
from flask_praetorian import auth_required, current_user

from api.app import app
from api.utils.diem_blockchain import (
    get_account_resources,
    format_resources_to_tokens,
    get_totalusercoin_inpool,
    get_exchange_pools,
    get_exchange_rate,
    get_usd_rate,
    convert_fixed
)


@app.route("/wallet", methods=["GET"])
@auth_required
def wallet():
    if request.method == "GET":
        ret_format = request.args.get("format", "basic")

        resources = get_account_resources(current_user().address)
        tokens = format_resources_to_tokens(resources)

        if ret_format != "table":
            data = {}
            pools = get_exchange_pools()
            rates = {}

            for pool_name in pools:
                pool = pools[pool_name]
                rates[f"{pool_name[-2]}{pool_name[-1]}"] = get_exchange_rate(
                    int(pool[f"coin_{pool_name[-2]}"]),
                    int(pool[f"coin_{pool_name[-1]}"]),
                    int(pool["comm_rate"]),
                )
                rates[f"{pool_name[-1]}{pool_name[-2]}"] = get_exchange_rate(
                    int(pool[f"coin_{pool_name[-1]}"]),
                    int(pool[f"coin_{pool_name[-2]}"]),
                    int(pool["comm_rate"]),
                )

            for coin in tokens:
                coin_data = {}

                coin_data["balance"] = convert_fixed(tokens[coin])
                coin_data[
                    "usd_amt"
                ] = convert_fixed(get_usd_rate(coin) * float(tokens[coin]))
                for other_coins in tokens:
                    if coin != other_coins:
                        rate = rates[f"{coin[-1]}{other_coins[-1]}"]
                        coin_data[other_coins] = f"{rate:.3f}"

                data[coin] = coin_data

            return jsonify(data)
        else:
            total_in_pool = get_totalusercoin_inpool(current_user().address)

            values = []

            for coin in tokens:
                name = "Coin " + coin[-1].upper() if coin[-1] != "d" else "USD"
                available = tokens.get(coin, "0")
                in_pool = total_in_pool.get(coin, "0")
                amount = str(int(available) + int(in_pool))
                perc_in_pool = f"{(float(in_pool) / float(amount) * 100):.2f}%"
                worth = get_usd_rate(coin) * int(amount)

                data = [
                    name,
                    convert_fixed(amount),
                    convert_fixed(available),
                    convert_fixed(in_pool),
                    perc_in_pool,
                    f"${convert_fixed(worth)}",
                ]
                values.append(data)

            # Go back and calculate total worth and percent of worth
            total_worth = sum([float(v[5][1:]) for v in values])
            for val in values:
                val.append(f"{(float(val[5][1:])/total_worth*100):.2f}%")

            wallet_data = {
                "total": f"{total_worth:.2f}",
                "headers": [
                    "Token",
                    "Amount",
                    "Available",
                    "In Pool",
                    "% in Pool",
                    "Worth (USD)",
                    "% of Net Worth",
                ],
                "values": values,
                "mobile_cols": [0, 1, 5],
            }

            return jsonify(wallet_data)
