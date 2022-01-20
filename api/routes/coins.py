from operator import itemgetter
from flask import jsonify, request

from api.app import app
from api.database import db
from api.database.models import Coin


@app.route("/coins", methods=["GET", "POST", "PATCH"])
def coins():
    if request.method == "GET":
        coin = request.args.get("coin")

        query = db.session.query(Coin)
        if coin is not None:
            query = query.filter_by(id=coin)
        result = query.all()

        coin_dict = dict()
        for item in result:
            item = item.to_dict()
            coin_dict[item["id"]] = item

        return jsonify(coin_dict)

    if request.method == "POST":
        id, name, short_name, color, price = itemgetter(
            "id", "name", "short_name", "color", "price"
        )(request.form)

        new_entry = Coin(
            id=id, name=name, short_name=short_name, color=color, price=price
        )
        db.session.add(new_entry)
        db.session.commit()
        return jsonify(new_entry.to_dict())

    if request.method == "PATCH":
        coin_id = request.args.get("id")
        new_price = request.form.get("price")

        entry = Coin.query.filter_by(id=coin_id).first()
        entry.price = new_price
        db.session.commit()

        return jsonify(entry.to_dict())
