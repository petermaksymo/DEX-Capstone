from flask import jsonify, request
from flask_praetorian import auth_required, current_user

from api.app import app
from api.utils.diem_blockchain import run_move_script


@app.route("/mint", methods=["POST"])
@auth_required
def mint():
    if request.method == "POST":
        coin = request.form.get("coin", 'CoinA')
        amount = request.form.get('amount', 100)

        if coin not in ['CoinA', 'CoinB']:
            return "Invalid coin", 400


        script_names = {
            'CoinA': 'mint_coin_a',
            'CoinB': 'mint_coin_b'
        }

        res = run_move_script(current_user().private_bytes, coin, script_names[coin], amount)

        return jsonify(res)
