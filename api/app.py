import os
from flask import json, jsonify

from api import create_app, guard
from api.database import db
from api.database.models import Account
from api.database.models import Coin
from api.utils.diem_blockchain import create_account
from api.utils.init_exchanges import initialize_exchanges

ENVIRONMENT = os.getenv("ENVIRONMENT", "development")

app = create_app(ENVIRONMENT)


@app.route("/status", methods=["GET"])
def index():
    return jsonify(status="API is Up!")


@app.route("/initialize", methods=["GET"])
def initialize():
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
            key=coin,
            name=coin_data["name"],
            short_name=coin_data["short_name"],
            color=coin_data["color"],
            price=coin_data["price"],
        )
        db.session.add(new_coin)
        db.session.commit()

    # Initialize the exchange pools and events
    initialize_exchanges()

    # Create accounts for the bot and for us
    private_bytes, address = create_account(1_000_000_000)
    new_entry = Account(
        username='tradingBot',
        password=guard.hash_password('tradingBot'),
        address=address,
        private_bytes=private_bytes,
    )
    db.session.add(new_entry)
    db.session.commit()

    private_bytes, address = create_account(1_000_000_000)
    new_entry = Account(
        username='ihateece444',
        password=guard.hash_password('ihateece444'),
        address=address,
        private_bytes=private_bytes,
    )
    db.session.add(new_entry)
    db.session.commit()

    return "Success!", 200


# Import routes/endpoints
import api.routes.coins
import api.routes.account
import api.routes.pool
import api.routes.quotes
import api.routes.transactions
import api.routes.wallet
import api.routes.exchange
import api.routes.bot
