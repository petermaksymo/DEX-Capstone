from flask import jsonify, request

from api.app import app
from api.database import db
from api.database.models import Account
from api.utils.diem_blockchain import create_account


@app.route("/account", methods=["GET", "POST"])
def account():
    if request.method == "GET":
        username = request.args.get("username")

        if username is None:
            return "Must specify a username", 400

        query = db.session.query(Account)
        query = query.filter_by(username=username)
        result = query.first()

        print(result.private_bytes)
        return jsonify(result.to_dict())

    if request.method == "POST":
        username = request.form.get("username")

        private_bytes = create_account()
        print(private_bytes)

        new_entry = Account(username=username, private_bytes=private_bytes)
        db.session.add(new_entry)
        db.session.commit()

        return jsonify(new_entry.to_dict())
