from flask import jsonify, request
from flask_praetorian import auth_accepted, current_user

from api import guard
from api.app import app
from api.database import db
from api.database.models import Account
from api.utils.diem_blockchain import create_account


@app.route("/account", methods=["GET", "POST"])
@auth_accepted
def account():
    if request.method == "GET":
        try:
            current_user()
        except:
            return "Not authenticated", 401

        username = current_user().username

        query = db.session.query(Account)
        query = query.filter_by(username=username)
        result = query.first()

        print(result.private_bytes)
        return jsonify(result.to_dict())

    if request.method == "POST":
        username = request.form.get("username")

        print(username)
        private_bytes, address = create_account()

        new_entry = Account(
            username=username,
            password=guard.hash_password(username),
            address=address,
            private_bytes=private_bytes
        )
        db.session.add(new_entry)
        db.session.commit()

        return jsonify(new_entry.to_dict())


@app.route("/login", methods=["POST"])
def login():
    """
    Logs a user in by parsing a POST request containing user credentials and issuing a JWT token.
    """
    username = request.form.get("username")

    print(username)
    user = guard.authenticate(username, username)
    ret = {"access_token": guard.encode_jwt_token(user)}

    print(ret)
    print("Helloo")
    return jsonify(ret), 200


@app.route("/refresh", methods=["POST"])
def refresh():
    """
    Refreshes an existing JWT by creating a new one that is a copy of the old except that it has a refrehsed access expiration.
    """
    old_token = guard.read_token_from_header()
    new_token = guard.refresh_jwt_token(old_token)
    return jsonify(access_token=new_token)