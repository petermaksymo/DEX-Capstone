from flask import jsonify, request
from flask_praetorian import auth_required, current_user

from api.app import app
from api.utils.diem_blockchain import get_account_resources, format_resources_to_tokens
from api.utils.diem_blockchain import get_exchange_pools, get_user_stake


@app.route("/wallet", methods=["GET"])
@auth_required
def wallet():
    if request.method == "GET":
        ret_format = request.args.get("format", 'basic')

        # resources = get_account_resources(current_user().address)
        # tokens = format_resources_to_tokens(resources)

        tokens = get_user_stake('DDE26D2F8225B409375ECC386BF87F4E')
        print(tokens)

        if ret_format != 'table':
            return jsonify(tokens)
        else:
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
                'values': [
                  [
                    "Coin A",
                    "XXX.XX",
                    tokens['coin_a'],
                    "XXX.XX",
                    "XX.XX",
                    "$XXX.XX",
                    "XX.XX",
                  ],
                  [
                    "Coin B",
                    "XXX.XX",
                    tokens['coin_b'],
                    "XXX.XX",
                    "XX.XX",
                    "$XXX.XX",
                    "XX.XX",
                  ],
                  [
                    "Coin C",
                    "XXXXX.XX",
                    "XXX.XX",
                    "XXX.XX",
                    "XX.XX",
                    "$XXX.XX",
                    "XX.XX",
                  ],
                  [
                    "Coin D",
                    "XXXXX.XX",
                    "XXX.XX",
                    "XXX.XX",
                    "XX.XX",
                    "$XXX.XX",
                    "XX.XX",
                  ],
                ],
                'mobile_cols': [0, 1, 5],
              }

            return jsonify(wallet_data)

