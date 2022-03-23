from flask import jsonify, request
from flask_praetorian import auth_required, current_user

from api.app import app
from api.utils.diem_blockchain import get_account_resources, format_resources_to_tokens, get_totalusercoin_inpool, get_usd_rate


@app.route("/wallet", methods=["GET"])
@auth_required
def wallet():
    if request.method == "GET":
        ret_format = request.args.get("format", 'basic')

        resources = get_account_resources(current_user().address)
        tokens = format_resources_to_tokens(resources)

        if ret_format != 'table':
            # TODO: Add USD equivalent amount as well
            return jsonify(tokens)
        else:
            total_in_pool = get_totalusercoin_inpool(current_user().address)

            values = []

            for coin in tokens:
                name = 'Coin ' + coin[-1].upper() if coin[-1] != 'd' else 'USD'
                available = tokens.get(coin, "0")
                in_pool = total_in_pool.get(coin, "0")
                amount = str(int(available) + int(in_pool))
                perc_in_pool = f"{(float(in_pool) / float(available) * 100):.2f}%"
                worth = f"${(get_usd_rate(coin) * int(amount)):.2f}"

                data = [
                    name,
                    amount,
                    available,
                    in_pool,
                    perc_in_pool,
                    worth,
                ]
                values.append(data)

            # Go back and calculate total worth and percent of worth
            total_worth = sum([float(v[5][1:]) for v in values])
            for val in values:
                val.append(f"{(float(val[5][1:])/total_worth*100):.2f}%")

            wallet_data = {
                'total': total_worth,
                'headers': [
                  "Token",
                  "Amount",
                  "Available",
                  "In Pool",
                  "% in Pool",
                  "Worth (USD)",
                  "% of Net Worth",
                ],
                'values': values,
                'mobile_cols': [0, 1, 5],
              }

            return jsonify(wallet_data)

