from flask import json, jsonify, request

from api.app import app 

@app.route("/coins", methods=["GET"])
def currency():
    coin_file = open('resources/coins.json')
    coin_data = json.load(coin_file)

    if request.method == "GET":
        coin = request.args.get("coin")

        result = coin_data
        if coin is not None:
            result = coin_data[coin]
        return jsonify(result)