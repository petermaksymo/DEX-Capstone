from flask import jsonify, request
from flask_praetorian import auth_required, current_user

from api.constants import EXCHANGE_ADDRESS
from api.database import db
from api.database.models import Account
from api.app import app
from api.utils.diem_blockchain import run_move_script


@app.route("/exchange", methods=["POST"])
@auth_required
def exchange():
    if request.method == "POST":

        # Parse request
        from_coin = request.form.get("from")[-1]
        to_coin = request.form.get("to")[-1]
        amt = request.form.get("amt")

        # print(from_coin, to_coin, amt)

        # Submit transaction to chain'
        username = current_user().username

        query = db.session.query(Account)
        query = query.filter_by(username=username)
        result = query.first()

        module = (
            "Exchange"
            + min(from_coin.upper(), to_coin.upper())
            + max(from_coin.upper(), to_coin.upper())
        )

        func_name = f"exchange_coin{from_coin.upper()}_to_coin{to_coin.upper()}"

        args = [
            {"type": "address", "value": current_user().address},
            {"type": "address", "value": EXCHANGE_ADDRESS},
            {"type": "uint_64", "value": amt},
        ]

        res = run_move_script(result.private_bytes, module, func_name, args)

        print(res)

        # return result to user
        return jsonify(res)

    else:
        raise Exception("Unknown endpoint")
