from flask import jsonify, request
from flask_praetorian import auth_required, current_user

from api.app import app
from api.database import db
from api.database.models import Account
from api.utils.diem_blockchain import get_account_resources


@app.route("/wallet", methods=["GET"])
@auth_required
def wallet():
    if request.method == "GET":
        username = current_user().username
        ret_format = request.args.get("format", 'basic')

        if username is None:
            return "Must specify a username", 400

        # Get associated account
        query = db.session.query(Account)
        query = query.filter_by(username=username)
        account = query.first()

        tokens = get_account_resources(account.private_bytes)

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
                    tokens['coin_a'],
                    "XXX.XX",
                    "XXX.XX",
                    "XX.XX",
                    "$XXX.XX",
                    "XX.XX",
                  ],
                  [
                    "Coin B",
                    tokens['coin_b'],
                    "XXX.XX",
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

