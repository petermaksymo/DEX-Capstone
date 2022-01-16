from operator import itemgetter
from flask import json, jsonify, request

from api.app import app
from api.database import db
from api.database.models import Coin


@app.route("/coins", methods=["GET", "POST"])
def coins():
    coin_file = open('resources/coins.json')
    coin_data = json.load(coin_file)

    if request.method == "GET":
        coin = request.args.get("coin")

        result = coin_data
        if coin is not None:
            result = coin_data[coin]
        return jsonify(result)

    if request.method == "POST":
        id, name, short_name, color, price = itemgetter('id', 'name', 'short_name', 'color', 'price')(request.form)

        new_entry = Coin(id=id, name=name, short_name=short_name, color=color, price=price)
        db.session.add(new_entry)
        db.session.commit()
        return jsonify(new_entry.to_dict())