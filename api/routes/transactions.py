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

