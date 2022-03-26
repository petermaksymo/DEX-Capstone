from diem import AuthKey, jsonrpc, diem_types, utils, testnet

from api import guard
from api.database import db
from api.database.models import Account
from api.utils.diem_blockchain import create_account, run_move_script


TESTNET_URL: str = "http://0.0.0.0:8080"  # "https://testnet.diem.com/v1"
FAUCET_URL: str = "http://0.0.0.0:8000"  # "https://testnet.diem.com/mint"
CHAIN_ID = diem_types.ChainId(4)  # testnet.CHAIN_ID
CURRENCY = "XUS"
EXCHANGE_ADDRESS = "52154769e64b1b80f76baebf8ede473a"
COINS = ["A", "B", "C", "D"]
EXCHANGES = ["AB", "AC", "AD", "BC", "BD", "CD"]


def create_admin():
    private_bytes, address = create_account()

    new_entry = Account(
        username="admin",
        password=guard.hash_password("admin"),
        address=address,
        private_bytes=private_bytes
    )
    db.session.add(new_entry)
    db.session.commit()
    return private_bytes, address


def initialize_exchanges():
    print("creating admin")
    private_bytes, address = create_admin()

    print("INITIALIZING")
    print(private_bytes, address)

    # Mint a bunch of each coin type
    for coin in COINS:
        args = [{"type": "uint_64", "value": 100_000_000}]
        run_move_script(private_bytes, f"Coin{coin}", f"mint_coin_{coin.lower()}", args)

    print("MINTING COMPLETE")

    # Initialize each exchange
    for exchange in EXCHANGES:
        # Mint LP coin for the exchange
        args = [
            {"type": "uint_64", "value": 0},
        ]
        run_move_script(private_bytes, f"Exchange{exchange}", f"mint_lp", args)

        # Initialize the exchange
        args = [
            {"type": "address", "value": address}, #initializer
            {"type": "uint_64", "value": 30}, #comm_rate
            {"type": "uint_64", "value": 100_000}, #coin1
            {"type": "uint_64", "value": 500_000}, #coin2
        ]
        run_move_script(private_bytes, f"Exchange{exchange}", f"initialize_exchange", args)

    return "success"