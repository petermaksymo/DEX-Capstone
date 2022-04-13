from flask import jsonify, request
from random import randint

from api.database import db
from api.database.models import Account
from api.app import app
from api.utils.diem_blockchain import run_move_script, get_exchange_pools
from api.utils.arb_trader import arb_trader

coin_mapping = {0: 'a', 1: 'b', 2: 'c', 3: 'd'}

@app.route("/bot", methods=["GET"])
def bot():
    if request.method == "GET":

        query = db.session.query(Account)
        query = query.filter_by(username='tradingBot')
        result = query.first()
        traded = False

        # for i in range(4):
        #
        #     pool_info = get_exchange_pools()
        #
        #     multiplier, rate, path = arb_trader(pool_info, i)
        #
        #     if multiplier[0] > 1.1:
        #         # print(path)
        #
        #         amt = 1000
        #
        #         for i, j in zip(path[0][:-1], path[0][1:]):
        #             amt *= rate[i][j]
        #             trade(result, coin_mapping[i], coin_mapping[j], amt)
        #             traded = True
            
            # print(multiplier)
            # print(rate)
            # print(path)

        if traded:
            return "trade success", 200
        else:
            rand_coin1 = randint(0, 3)
            rand_coin2 = randint(0, 3)
            while rand_coin1 == rand_coin2:
                rand_coin2 = randint(0, 3)

            trade(result, coin_mapping[rand_coin1], coin_mapping[rand_coin2], randint(20_000, 50_000))
            return "Made chaos", 200

def trade(account, from_coin, to_coin, amt):

    module = (
        "Exchange"
        + min(from_coin.upper(), to_coin.upper())
        + max(from_coin.upper(), to_coin.upper())
    )

    func_name = f"exchange_coin{from_coin.upper()}_to_coin{to_coin.upper()}"

    args = [
        {"type": "address", "value": account.address},
        {"type": "uint_64", "value": amt},
    ]

    res = run_move_script(account.private_bytes, module, func_name, args)