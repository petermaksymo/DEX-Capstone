from flask import jsonify, request
from flask_praetorian import auth_required, current_user

from api.app import app
from api.utils.diem_blockchain import get_exchange_pools, get_user_stake, get_usercoin_inpool, get_usd_rate


@app.route("/pool", methods=["GET"])
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

