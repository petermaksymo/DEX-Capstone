from time import sleep
from flask import jsonify, request
from flask_praetorian import auth_required, current_user

from api.app import app
from api.utils.diem_blockchain import get_exchange_pools, get_user_stake, get_usercoin_inpool, get_usd_rate, run_move_script

MODULE_ADDRESS = "C4FA5B6A7E4016A5872943DF9DF13D60"
EXCHANGE_ADDRESS = "be5a08fa6e183ece929b169fc7b965c9".upper()

@app.route("/pool", methods=["GET", "POST"])
@auth_required
def pool():
    if request.method == "GET":
        ret_format = request.args.get("format", 'basic')
        pools = get_exchange_pools()

        if ret_format != 'table':
            return jsonify(pools)
        else:
            stakes = get_user_stake(current_user().address)
            in_pool = get_usercoin_inpool(current_user().address)

            values = []
            for pool in pools:
                coin1_name = "Coin " + pool[-2].upper()
                coin2_name = "Coin " + pool[-1].upper()
                coin1_id = "coin_" + pool[-2]
                coin2_id = "coin_" + pool[-1]

                coin1_in_pool = in_pool.get(pool, {}).get(coin1_id, 0)
                coin2_in_pool = in_pool.get(pool, {}).get(coin2_id, 0)

                usd_coin1 = get_usd_rate('coin_a') * coin1_in_pool
                usd_coin2 = get_usd_rate('coin_a') * coin2_in_pool

                name = f"{coin1_name} - {coin2_name}"
                amount_1 = f"{coin1_in_pool} {coin1_name}"
                amount_2 = f"{coin2_in_pool} {coin2_name}"
                perc_pool = f"{stakes.get(pool, -1):.2f}%"
                worth = f"${(usd_coin1 + usd_coin2):.2f}"

                data = [
                    name,
                    amount_1,
                    amount_2,
                    perc_pool,
                    worth
                ]
                if perc_pool != "-1.00%":
                    values.append(data)

            stake_data = {
                'total': sum([float(v[4][1:]) for v in values]),
                'headers': [
                    "Pool",
                    "Amount (Token)",
                    "Amount (Token)",
                    "% of Pool",
                    "Worth (USD)",
                ],
                'values': values,
                'mobile_cols': [0, 3, 4],
            }

            print(stake_data)

            return jsonify(stake_data)
    elif request.method == "POST":
        print('IN POOL POST')
        
        action = request.form.get("action")
        coin1 = request.form.get("coin1")
        amount1 = request.form.get("amount1")
        coin2 = request.form.get("coin2")

        if action not in ['add', 'remove']:
            return "Invalid action type", 400

        if coin1 not in ['coin_a', 'coin_b', 'coin_c', 'coin_d'] or coin2 not in ['coin_a', 'coin_b', 'coin_c', 'coin_d']:
            return "Invalid coin", 400
        
        if amount1 is None:
            amount1 = 0

        script_names = {
            'add': 'add_exchange_liquidity',
            'remove': 'remove_exchange_liquidity'
        }

        temp = coin1[-1].upper()
        temp2 = coin2[-1].upper()
        exchange = 'Exchange' + temp + temp2

        args = [
            {"type": "address", "value": EXCHANGE_ADDRESS},
            {"type": "address", "value": current_user().address},
            {"type": "uint_64", "value": amount1}
        ]

        print('Script Name: ', script_names[action], ' exchange: ', exchange, ' args: ', args)

        res = run_move_script(current_user().private_bytes, exchange, script_names[action], args)

        return jsonify(res)

