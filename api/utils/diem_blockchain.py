import time
import diem.stdlib
from diem import AuthKey, jsonrpc, diem_types, utils, testnet
from numpy import uintp
from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.primitives.asymmetric.ed25519 import Ed25519PrivateKey
import requests
import re

TESTNET_URL: str = "http://0.0.0.0:8080"  # "https://testnet.diem.com/v1"
FAUCET_URL: str = "http://0.0.0.0:8000"  # "https://testnet.diem.com/mint"
CHAIN_ID = diem_types.ChainId(4)  # testnet.CHAIN_ID
CURRENCY = "XUS"
EXCHANGE_ADDRESS = "DDE26D2F8225B409375ECC386BF87F4E"


def create_account():
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
    client = jsonrpc.Client(TESTNET_URL)

    sender_private_key = Ed25519PrivateKey.from_private_bytes(sender_private_bytes)
    sender_auth_key = AuthKey.from_public_key(sender_private_key.public_key())
    sender_account = client.get_account(sender_auth_key.account_address())

    arg_encoders = {
        "uint_64": lambda arg: diem.stdlib.encode_u64_argument(uintp(arg)),
        "address": diem.stdlib.encode_address_argument
    }

    script = diem.stdlib.TransactionPayload__ScriptFunction(
        value=diem.stdlib.ScriptFunction(
            module=diem.stdlib.ModuleId(
                address=utils.account_address(EXCHANGE_ADDRESS),
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
    r = requests.get(f'{TESTNET_URL}/accounts/{address}/resources')
    resources = r.json()

    return resources


def get_account_transactions(address):
    res = requests.get(f'{TESTNET_URL}/accounts/{address}/transactions')
    txns = res.json()

    return [t for t in txns if t['success'] is True and t["payload"].get("type") == "script_function_payload"]


def get_price_quote(input_amount, input_reserve, output_reserve, comm_rate):
    numerator = input_amount * (10000 - comm_rate) * output_reserve
    denominator = (input_reserve * 10000) + ( input_amount * (10000 - comm_rate) )
    return float(numerator) / float(denominator)


def get_exchange_rate(input_reserve, output_reserve, comm_rate):
    return get_price_quote(1, input_reserve, output_reserve, comm_rate)


# Gets the exchange rate w.r.t. USD (aka Coin D)
def get_usd_rate(coin_name):
    pools = get_exchange_pools()
    # pool = pools[f'pool_{coin_name[-1].lower()}d']
    pool = pools['pool_ab']

    return get_exchange_rate(int(pool[coin_name]), int(pool['coin_b']), int(pool['comm_rate']))


def get_usercoin_inpool(address):
    user = get_user_stake(address)
    exchange = get_exchange_pools()

    ret = {}

    for pool in user:
        coin1_id = 'coin_' + pool[-2]
        coin2_id = 'coin_' + pool[-1]

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
        coin1_id = 'coin_' + pool[-2]
        coin2_id = 'coin_' + pool[-1]

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
    resources = get_account_resources(address)
    exchange = get_exchange_pools()

    # Cleaning up user return data/getting all their pool contributions
    user = {}
    pair = None
    for each in resources:
        isLP = re.search(f'0x{EXCHANGE_ADDRESS.lower()}::Exchange..::LPCoin', each['type'])
        if isLP:
            pair = re.findall(f'Exchange..', each['type'])
            pair = pair[0][-2:].lower()
            temp = 'pool_' + pair
            user[temp] = each['data']['value']

    # Calculating each of the user's stakes
    stakes = {}
    if pair is not None:
        for pool in user:
            userstake = float(user[pool]) / float(exchange[pool]['LP_minted']) * 100
            stakes[pool] = userstake

    return stakes


def get_exchange_pools():
    resources = get_account_resources(EXCHANGE_ADDRESS)

    pools = {}
    for res in resources:
        if res['type'] == f'0x{EXCHANGE_ADDRESS.lower()}::ExchangeAB::Exchange':
            pools['pool_ab'] = res['data']
        elif res['type'] == f'0x{EXCHANGE_ADDRESS.lower()}::ExchangeAC::Exchange':
            pools['pool_ac'] = res['data']
        elif res['type'] == f'0x{EXCHANGE_ADDRESS.lower()}::ExchangeAD::Exchange':
            pools['pool_ad'] = res['data']
        elif res['type'] == f'0x{EXCHANGE_ADDRESS.lower()}::ExchangeBC::Exchange':
            pools['pool_bc'] = res['data']
        elif res['type'] == f'0x{EXCHANGE_ADDRESS.lower()}::ExchangeBD::Exchange':
            pools['pool_bd'] = res['data']
        elif res['type'] == f'0x{EXCHANGE_ADDRESS.lower()}::ExchangeCD::Exchange':
            pools['pool_cd'] = res['data']

    print("EXCHANGE RATE A/B:", get_exchange_rate(int(pools['pool_ab']['coin_a']), int(pools['pool_ab']['coin_b']), int(pools['pool_ab']['comm_rate'])))
    print("EXCHANGE RATE B/A:", get_exchange_rate(int(pools['pool_ab']['coin_b']), int(pools['pool_ab']['coin_a']), int(pools['pool_ab']['comm_rate'])))

    return pools


def format_resources_to_tokens(resources):
    # Hard-coded for coin b/a right now
    tokens = {}
    for res in resources:
        if res['type'] == f'0x{EXCHANGE_ADDRESS.lower()}::CoinB::CoinB':
            tokens['coin_b'] = res['data']['value']

        if res['type'] == f'0x{EXCHANGE_ADDRESS.lower()}::CoinA::CoinA':
            tokens['coin_a'] = res['data']['value']

    return tokens