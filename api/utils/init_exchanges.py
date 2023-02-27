from api import guard
from api.constants import EXCHANGES, COINS
from api.database import db
from api.database.models import Account
from api.utils.diem_blockchain import get_exchange_account, run_move_script


def create_admin():
    address, private_bytes = get_exchange_account()

    new_entry = Account(
        username="1f8c16044419c48333715ae2a712e6e0a30722d3c56bc9f581496910af47df8d",
        password=guard.hash_password("1f8c16044419c48333715ae2a712e6e0a30722d3c56bc9f581496910af47df8d"),
        address=address,
        private_bytes=private_bytes,
    )
    db.session.add(new_entry)
    db.session.commit()
    return private_bytes, address


def initialize_exchanges():
    private_bytes, address = create_admin()

    # Mint a bunch of each coin type
    for coin in COINS:
        # Initialize Coin Events
        run_move_script(
            private_bytes, f"Coin{coin}", f"initialize_coin_{coin.lower()}", []
        )

        # Mint a lot of coins
        args = [{"type": "uint_64", "value": 1_000_000_000}]
        run_move_script(private_bytes, f"Coin{coin}", f"mint_coin_{coin.lower()}", args)

    for exchange in EXCHANGES:
        init_values = {
            "AB": 1.1,
            "AC": 1.2,
            "AD": 1.4,
            "BC": 1.1,
            "BD": 1.2,
            "CD": 1.1
        }

        # Initialize Coin Events
        run_move_script(
            private_bytes,
            f"Exchange{exchange}",
            f"initialize_lp_coin_{exchange.lower()}",
            [],
        )

        # Mint LP coin for the exchange
        args = [
            {"type": "uint_64", "value": 0},
        ]
        run_move_script(private_bytes, f"Exchange{exchange}", "mint_lp", args)

        # Initialize each exchange
        args = [
            {"type": "uint_64", "value": 30},  # comm_rate
            {"type": "uint_64", "value": 50_000_000},  # coin1
            {"type": "uint_64", "value": init_values[exchange] * 50_000_000},  # coin2
        ]
        run_move_script(
            private_bytes, f"Exchange{exchange}", "initialize_exchange", args
        )

    return "success"
