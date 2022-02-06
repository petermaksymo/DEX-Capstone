from flask import jsonify, request

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

        result = get_account_transactions(account.private_bytes)
        print(result)

        return jsonify(result)

