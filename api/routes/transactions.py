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
            'mint_coin_c': "Mint Coin C",
            'mint_coin_d': "Mint USD",
        }

        values = []
        for t in raw_txns:
            date = datetime.datetime.fromtimestamp(int(t['expiration_timestamp_secs'])).strftime('%b %d, %Y')
            description = script_to_event.get(t.get('payload', {}).get('function', '::a::').split('::')[2], 'Undefined Event')
            coin_1 = t.get('payload').get('arguments')[0]
            coin_2 = t.get('payload').get('arguments')[1] if len(t.get('payload').get('arguments')) > 1 else '-'

            values.append([
                date,
                description,
                coin_1,
                coin_2,
                t.get('hash'),
            ])

        return jsonify(
            {
                'headers': [
                    "Date",
                    "Description",
                    "Amount (Token)",
                    "Amount (Token)",
                    "Hash",
                ],
                'values': values,
                'mobile_cols': [0, 1, 2, 3],
          }
        )

