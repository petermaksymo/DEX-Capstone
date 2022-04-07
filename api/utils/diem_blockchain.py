import time
import diem.stdlib
from diem import AuthKey, jsonrpc, diem_types, utils, testnet
from numpy import uintp
from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.primitives.asymmetric.ed25519 import Ed25519PrivateKey
import requests
import re
import os

from api.constants import COINS, EXCHANGES

TESTNET_URL: str = "http://0.0.0.0:8080"  # "https://testnet.diem.com/v1"
FAUCET_URL: str = "http://0.0.0.0:8000"  # "https://testnet.diem.com/mint"
CHAIN_ID = diem_types.ChainId(4)  # testnet.CHAIN_ID
CURRENCY = "XUS"


def get_exchange_account():
    client = jsonrpc.Client(TESTNET_URL)

    with open(
        os.path.expanduser("~/.shuffle/networks/localhost/accounts/latest/dev.key"),
        "rb",
    ) as key_file:
        data = key_file.read()

        read_bytes = diem.bcs.deserialize(data, bytes)
        sender_private_key = Ed25519PrivateKey.from_private_bytes(read_bytes[0])
        sender_auth_key = AuthKey.from_public_key(sender_private_key.public_key())
        sender_account = client.get_account(sender_auth_key.account_address())
        private_bytes = sender_private_key.private_bytes(
            encoding=serialization.Encoding.Raw,
            format=serialization.PrivateFormat.Raw,
            encryption_algorithm=serialization.NoEncryption(),
        )

        return sender_account.address, private_bytes


def get_exchange_address():
    return get_exchange_account()[0]


def create_account(coin_amounts=10_000):
    """
    creates an account on the testnet
    :return:
    (string): a byte string of the private key so it can be regenerated later
    """
    client = jsonrpc.Client(TESTNET_URL)
    faucet = testnet.Faucet(client=client, url=FAUCET_URL)

    sender_private_key = Ed25519PrivateKey.generate()
    sender_auth_key = AuthKey.from_public_key(sender_private_key.public_key())
    testnet.Faucet.mint(faucet, sender_auth_key.hex(), 100, CURRENCY)
    bytes = sender_private_key.private_bytes(
        encoding=serialization.Encoding.Raw,
        format=serialization.PrivateFormat.Raw,
        encryption_algorithm=serialization.NoEncryption(),
    )

    sender_account = client.get_account(sender_auth_key.account_address())

    # Mint a bunch of each coin type
    for coin in COINS:
        args = [{"type": "uint_64", "value": coin_amounts}]
        run_move_script(bytes, f"Coin{coin}", f"mint_coin_{coin.lower()}", args)

    for exchange in EXCHANGES:
        # Mint LP coin for the exchange
        args = [
            {"type": "uint_64", "value": 0},
        ]
        run_move_script(bytes, f"Exchange{exchange}", "mint_lp", args)

    return bytes, sender_account.address


def run_move_script(sender_private_bytes, module, script_name, args):
    """
    Encodes and runs a Move script on the blockchain
    :param sender_private_bytes: Sender's private bytes, found in account db table
    :param module: Move module name (eg. CoinA)
    :param script_name: Script name within the module (eg. mint_coin_a)
    :param args: List of dicts of unencoded arguments needed for the script. See arg_encoders
    :return: "success" on success or it will error out
    """
    exchange_address = get_exchange_address()
    client = jsonrpc.Client(TESTNET_URL)

    sender_private_key = Ed25519PrivateKey.from_private_bytes(sender_private_bytes)
    sender_auth_key = AuthKey.from_public_key(sender_private_key.public_key())
    sender_account = client.get_account(sender_auth_key.account_address())

    arg_encoders = {
        "uint_64": lambda arg: diem.stdlib.encode_u64_argument(uintp(arg)),
        "address": lambda arg: diem.stdlib.encode_address_argument(
            diem.diem_types.AccountAddress.from_hex(arg)
        ),
    }

    script = diem.stdlib.TransactionPayload__ScriptFunction(
        value=diem.stdlib.ScriptFunction(
            module=diem.stdlib.ModuleId(
                address=utils.account_address(exchange_address),
                name=diem.stdlib.Identifier(module),
            ),
            function=diem.stdlib.Identifier(script_name),
            ty_args=[],
            args=[arg_encoders[arg["type"]](arg["value"]) for arg in args],
        )
    )

    raw_transaction = diem_types.RawTransaction(
        sender=sender_auth_key.account_address(),
        sequence_number=sender_account.sequence_number,
        payload=script,
        max_gas_amount=uintp(1_000_000),
        gas_unit_price=uintp(0),
        gas_currency_code=CURRENCY,
        expiration_timestamp_secs=uintp(int(time.time()) + 30),
        chain_id=CHAIN_ID,
    )

    signature = sender_private_key.sign(
        utils.raw_transaction_signing_msg(raw_transaction)
    )
    public_key_bytes = utils.public_key_bytes(sender_private_key.public_key())

    signed_txn = utils.create_signed_transaction(
        raw_transaction, public_key_bytes, signature
    )

    client.submit(signed_txn)
    client.wait_for_transaction(signed_txn)

    return "success"


def get_account_resources(address):
    r = requests.get(f"{TESTNET_URL}/accounts/{address}/resources")
    resources = r.json()

    return resources


def get_account_transactions(address):
    res = requests.get(f"{TESTNET_URL}/accounts/{address}/transactions")
    txns = res.json()

    return [
        t
        for t in txns
        if t["success"] is True
        and t["payload"].get("type") == "script_function_payload"
    ]


def get_price_quote(input_amount, input_reserve, output_reserve, comm_rate):
    numerator = input_amount * (10000 - comm_rate) * output_reserve
    denominator = (input_reserve * 10000) + (input_amount * (10000 - comm_rate))
    return float(numerator) / float(denominator)


def get_exchange_rate(input_reserve, output_reserve, comm_rate):
    return get_price_quote(1, input_reserve, output_reserve, comm_rate)


# Gets the exchange rate w.r.t. USD (aka Coin D)
def get_usd_rate(coin_name):
    if coin_name == "coin_d":
        return 1.0

    pools = get_exchange_pools()
    pool = pools[f"pool_{coin_name[-1].lower()}d"]

    return get_exchange_rate(
        int(pool[coin_name]), int(pool["coin_d"]), int(pool["comm_rate"])
    )


def get_usercoin_inpool(address):
    user = get_user_stake(address)
    exchange = get_exchange_pools()

    ret = {}

    for pool in user:
        coin1_id = "coin_" + pool[-2]
        coin2_id = "coin_" + pool[-1]

        totalcoin1 = float(user[pool]) * float(exchange[pool][coin1_id]) / 100
        totalcoin2 = float(user[pool]) * float(exchange[pool][coin2_id]) / 100

        ret[pool] = {coin1_id: int(totalcoin1), coin2_id: int(totalcoin2)}

    # ret['pool_ab'] --> {coin_a: XXXXXX, coin_b:XXXXXX}

    return ret


def get_totalusercoin_inpool(address):
    user = get_user_stake(address)
    exchange = get_exchange_pools()

    # exchange['pool_ab'][coin_a/coin_b]
    # stake['pool_ab']

    ret = {}
    # returns key string as each
    for pool in user:
        coin1_id = "coin_" + pool[-2]
        coin2_id = "coin_" + pool[-1]

        totalcoin1 = float(user[pool]) * float(exchange[pool][coin1_id]) / 100
        totalcoin2 = float(user[pool]) * float(exchange[pool][coin2_id]) / 100

        if coin1_id not in ret:
            ret[coin1_id] = totalcoin1
        else:
            ret[coin1_id] = ret[coin1_id] + totalcoin1

        if coin2_id not in ret:
            ret[coin2_id] = totalcoin2
        else:
            ret[coin2_id] = ret[coin2_id] + totalcoin2

    return ret


def get_user_stake(address):
    exchange_address = get_exchange_address()
    resources = get_account_resources(address)
    exchange = get_exchange_pools()

    # Cleaning up user return data/getting all their pool contributions
    user = {}
    pair = None
    for each in resources:
        isLP = re.search(f"^0x{exchange_address}::Exchange..::LPCoin..", each["type"])
        if isLP:
            pair = re.findall("Exchange..", each["type"])
            pair = pair[0][-2:].lower()
            temp = "pool_" + pair
            user[temp] = each["data"]["value"]

    # Calculating each of the user's stakes
    stakes = {}
    if pair is not None:
        for pool in user:
            userstake = float(user[pool]) / float(exchange[pool]["LP_minted"]) * 100
            stakes[pool] = userstake

    return stakes


def get_exchange_pools():
    exchange_address = get_exchange_address()
    resources = get_account_resources(exchange_address)

    pools = {}
    for res in resources:
        if res["type"] == f"0x{exchange_address}::ExchangeAB::ExchangeAB":
            pools["pool_ab"] = res["data"]
        elif res["type"] == f"0x{exchange_address}::ExchangeAC::ExchangeAC":
            pools["pool_ac"] = res["data"]
        elif res["type"] == f"0x{exchange_address}::ExchangeAD::ExchangeAD":
            pools["pool_ad"] = res["data"]
        elif res["type"] == f"0x{exchange_address}::ExchangeBC::ExchangeBC":
            pools["pool_bc"] = res["data"]
        elif res["type"] == f"0x{exchange_address}::ExchangeBD::ExchangeBD":
            pools["pool_bd"] = res["data"]
        elif res["type"] == f"0x{exchange_address}::ExchangeCD::ExchangeCD":
            pools["pool_cd"] = res["data"]

    return pools


def format_resources_to_tokens(resources):
    exchange_address = get_exchange_address()

    tokens = {}
    for res in resources:
        if res["type"] == f"0x{exchange_address}::CoinA::CoinA":
            tokens["coin_a"] = res["data"]["value"]

        if res["type"] == f"0x{exchange_address}::CoinB::CoinB":
            tokens["coin_b"] = res["data"]["value"]

        if res["type"] == f"0x{exchange_address}::CoinC::CoinC":
            tokens["coin_c"] = res["data"]["value"]

        if res["type"] == f"0x{exchange_address}::CoinD::CoinD":
            tokens["coin_d"] = res["data"]["value"]

    return tokens
