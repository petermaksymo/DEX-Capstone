from operator import itemgetter
from flask import jsonify, request

from api.app import app
from api.database import db
from api.database.models import Account
from api.utils.diem_blockchain import run_move_script


@app.route("/mint", methods=["POST"])
def mint():
    if request.method == "POST":
        coin = request.form.get("coin")
        username = request.form.get("username")

        coin = "CoinB"

        account = db.session.query(Account).filter_by(username=username).first()
        private_bytes = account.private_bytes
        print(private_bytes)

        res = run_move_script(private_bytes, coin, "mint_coin_b", 1000)

        return jsonify(res)
