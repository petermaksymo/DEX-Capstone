from flask import json, jsonify, request

from api.app import app 
from api.resources import coins

@app.route("/currency", methods=["GET"])
def currency():
    if request.method == "GET":
        coin = request.args.get("coin")

        result = None
        if coin is not None:
            result = coins.getCoins(coin)
        return jsonify(result)