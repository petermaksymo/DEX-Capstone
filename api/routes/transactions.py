from flask import jsonify, request
import datetime

from api.app import app
from api.database import db
from api.database.models import Account
from api.utils.diem_blockchain import get_account_transactions

@app.route("/transactions", methods=["GET"])
def transactions():
    if request.method == "GET":
        username = request.args.get("username")

        if username is None:
            return "Must specify a username", 400

        # Get associated account
        query = db.session.query(Account)
        query = query.filter_by(username=username)
        account = query.first()

        raw_txns = get_account_transactions(account.private_bytes)

        script_to_event = {
            'mint_coin_a': "Mint Coin A",
            'mint_coin_b': "Mint Coin B",
        }

        return jsonify(
            {
                'headers': [
                    "Date",
                    "Description",
                    "Amount (Token)",
                    "Amount (Token)",
                    "Worth (USD)",
                    "Hash",
                ],
                'values': [
                    [
                        datetime.datetime.fromtimestamp(int(t['expiration_timestamp_secs'])).strftime('%b %d, %Y'),
                        script_to_event[t['payload']['function'].split('::')[2]],
                        t['payload']['arguments'][0],
                        "-",
                        "$XXX.XX",
                        t['hash'],
                    ] for t in raw_txns
                ],
                'mobile_cols': [0, 1, 4],
          }
        )

