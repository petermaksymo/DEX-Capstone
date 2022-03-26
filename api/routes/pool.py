from time import sleep
from flask import jsonify, request
from flask_praetorian import auth_required, current_user

from api.app import app
from api.utils.diem_blockchain import get_price_quote, get_exchange_pools, get_user_stake, get_usercoin_inpool, get_usd_rate, run_move_script

MODULE_ADDRESS = "B5054D9A423CFD600765DC36619E1C43"
EXCHANGE_ADDRESS = "4061f01e07f100061961fdc46fb1aa74".upper()

coin_info = {
    "coin_a": {
    "name": "Coin A",
    "short_name": "A",
    "color": "#FF8686"
    },
    "coin_b": {
        "name": "Coin B",
        "short_name": "B",
        "color": "#FBC4AB"
    },
    "coin_c": {
        "name": "Coin C",
        "short_name": "C",
        "color": "#EB83A0"
    },
    "coin_d": {
        "name": "USD",
        "short_name": "U",
        "color": "#6677DA"
    }
}

@app.route("/pool", methods=["GET", "POST"])
@auth_required
def pool():
    if request.method == "GET":
        ret_format = request.args.get("format", 'basic')

        #get pool information from shuffle        
        exchange = get_exchange_pools()
        user = get_usercoin_inpool(current_user().address)
        userstake = get_user_stake(current_user().address)
        userpools = user.keys()

        if ret_format == 'dealership':
            data = {}
            for pool in userpools:
                coin1_name = 'coin_' + pool[-2].lower()
                coin2_name = 'coin_' + pool[-1].lower()
                coin1 = coin_info[coin1_name]['name']
                coin2 = coin_info[coin2_name]['name']

                coin1_exchange = exchange[pool][coin1_name]
                coin2_exchange = exchange[pool][coin2_name]

                totalvalue = get_usd_rate(coin1_name)*float(coin1_exchange) + get_usd_rate(coin2_name)*int(coin2_exchange)
                poolshare =  userstake[pool]

                coin1_supply = user[pool][coin1_name]
                coin2_supply = user[pool][coin2_name]

                coin2per1 = get_price_quote(1, float(exchange[pool][coin1_name]), float(exchange[pool][coin2_name]), float(exchange[pool]['comm_rate']))
                coin1per2 = get_price_quote(1, float(exchange[pool][coin2_name]), float(exchange[pool][coin1_name]), float(exchange[pool]['comm_rate']))
                
                coin1_details = {
                    'title': coin1.upper(),
                    'body': coin1,
                    'short_name': coin_info[coin2_name]['short_name'],
                    'color': coin_info[coin1_name]['color']
                }

                coin2_details = {
                    'title': coin2.upper(),
                    'body': coin2,
                    'short_name': coin_info[coin1_name]['short_name'],
                    'color': coin_info[coin2_name]['color']
                }

                poolstats = {
                    'pool_size': str(totalvalue),
                    'share': str(poolshare) + '%',
                    'coin1Owned': str(coin1_supply),
                    'coin2Owned': str(coin2_supply),
                    'coin1per2': str(coin1per2),
                    'coin2per1': str(coin2per1)
                }

                pooldata = {
                    'coin1': coin1_details,
                    'coin2': coin2_details,
                    'stats': poolstats
                }
                data[pool] = pooldata
            
            print('---------------(DEALERSHIP)This is pool data for user------------------- \n')
            print(data)
            print('------------------------------------------------------------------------ \n')
            return jsonify(data)
        elif ret_format == 'equivalentamt':
            coin1type = request.args.get('coin1type')
            coin2type = request.args.get('coin2type')
            coin1added = request.args.get('coin1added')
            coin2added = request.args.get('coin2added')
            pool = 'pool_' + coin1type[-1] + coin2type[-1]

            if float(coin1added) == 0.0:
                equivalent = get_price_quote(float(coin2added), float(exchange[pool][coin2type]), float(exchange[pool][coin1type]), float(exchange[pool]['comm_rate']))
                coin1added = equivalent
            else:
                equivalent = get_price_quote(float(coin1added), float(exchange[pool][coin1type]), float(exchange[pool][coin2type]), float(exchange[pool]['comm_rate']))
                coin2added = equivalent

            newlp = float(coin1added)/float(exchange[pool][coin1type])*float(exchange[pool]['LP_minted'])
            newshare = (float(coin1added)+float(user[pool][coin1type]))/(float(coin1added)+float(exchange[pool][coin1type]))*100.0
            newvalue = get_usd_rate(coin1type)*float(coin1added) * 2.0

            print(coin1type, coin2type, coin1added, coin2added, equivalent, newlp, newshare, newvalue)
            return jsonify({
                'equivalent': equivalent,
                'newlp': newlp,
                'newshare': newshare,
                'newvalue': newvalue
            })
        elif ret_format == 'table':
            values = []
            for pool in exchange:
                coin1_name = "Coin " + pool[-2].upper()
                coin2_name = "Coin " + pool[-1].upper()
                coin1_id = "coin_" + pool[-2]
                coin2_id = "coin_" + pool[-1]

                coin1_in_pool = user.get(pool, {}).get(coin1_id, 0)
                coin2_in_pool = user.get(pool, {}).get(coin2_id, 0)

                usd_coin1 = get_usd_rate('coin_a') * coin1_in_pool
                usd_coin2 = get_usd_rate('coin_a') * coin2_in_pool

                name = f"{coin1_name} - {coin2_name}"
                amount_1 = f"{coin1_in_pool} {coin1_name}"
                amount_2 = f"{coin2_in_pool} {coin2_name}"
                perc_pool = f"{userstake.get(pool, -1):.2f}%"
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

            print('---------------(GARAGE)This is stake data for user------------------- \n')
            print(stake_data)
            print('--------------------------------------------------------------------- \n')
            return jsonify(stake_data)
        else:
            return jsonify(exchange)
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

