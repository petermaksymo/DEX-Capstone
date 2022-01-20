import os
from flask import json, jsonify

from api import create_app
from api.database import db
from api.database.models import Coin

ENVIRONMENT = os.getenv("ENVIRONMENT", "development")

app = create_app(ENVIRONMENT)


@app.route("/status", methods=["GET"])
def index():
    return jsonify(status="API is Up!")


# A Sketchy way to reset the db data
@app.route("/db_reset", methods=["GET"])
def reset():
    if ENVIRONMENT != "development":
        return "Unauthorized", 401

    # wipe current DB
    db.drop_all()
    db.create_all()

    # Add Coin data in /resources/coins.json
    coin_file = open("resources/coins.json")
    coins_data = json.load(coin_file)

    for coin in coins_data:
        coin_data = coins_data[coin]

        new_coin = Coin(
            id=coin,
            name=coin_data["name"],
            short_name=coin_data["short_name"],
            color=coin_data["color"],
            price=coin_data["price"],
        )
        db.session.add(new_coin)
        db.session.commit()

    return "Reset Complete", 200


# Import routes/endpoints
import api.routes.coins