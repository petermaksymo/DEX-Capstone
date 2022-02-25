from flask import jsonify, request
from flask_praetorian import auth_required, current_user

from api.app import app
from api.utils.diem_blockchain import get_account_resources, format_resources_to_tokens, get_totalusercoin_inpool


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
                worth = "$XXX.XX"
                perc_of_worth = "XX.XX%"

                data = [
                    name,
                    amount,
                    available,
                    in_pool,
                    perc_in_pool,
                    worth,
                    perc_of_worth
                ]
                values.append(data)

            wallet_data = {
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

