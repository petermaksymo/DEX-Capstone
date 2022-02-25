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


def run_move_script(sender_private_bytes, module, script_name, arg):
    client = jsonrpc.Client(TESTNET_URL)

    sender_private_key = Ed25519PrivateKey.from_private_bytes(sender_private_bytes)
    sender_auth_key = AuthKey.from_public_key(sender_private_key.public_key())
    sender_account = client.get_account(sender_auth_key.account_address())

    script = diem.stdlib.TransactionPayload__ScriptFunction(
        value=diem.stdlib.ScriptFunction(
            module=diem.stdlib.ModuleId(
                address=utils.account_address(EXCHANGE_ADDRESS),
                name=diem.stdlib.Identifier(module),
            ),
            function=diem.stdlib.Identifier(script_name),
            ty_args=[],
            args=[diem.stdlib.encode_u64_argument(uintp(arg))],
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


def get_account_transactions(sender_private_bytes):
    client = jsonrpc.Client(TESTNET_URL)

    # Overkill to use the private key for this but seems easiest at this point
    sender_private_key = Ed25519PrivateKey.from_private_bytes(sender_private_bytes)
    sender_auth_key = AuthKey.from_public_key(sender_private_key.public_key())
    sender_account = client.get_account(sender_auth_key.account_address())

    res = requests.get(f'{TESTNET_URL}/accounts/{sender_account.address}/transactions')
    txns = res.json()

    return [t for t in txns if t['success'] is True]


def get_user_stake(sender_private_bytes):
    client_addr = jsonrpc.Client(TESTNET_URL)

    # Get user account resources
    sender_private_key = Ed25519PrivateKey.from_private_bytes(sender_private_bytes)
    sender_auth_key = AuthKey.from_public_key(sender_private_key.public_key())
    sender_account = client_addr.get_account(sender_auth_key.account_address())
    r = requests.get(f'{TESTNET_URL}/accounts/{sender_account.address}/resources')

    client = r.json()
    exchange = get_exchange_pools()

    # Cleaning up user return data/getting all their pool contributions
    user = {}
    pair = None
    for each in client:
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
            userstake = user[pool] / exchange[pool]['LP_minted'] * 100
            stakes[pool] = userstake

    return stakes


def get_exchange_pools():
    client = jsonrpc.Client(TESTNET_URL)

    r = requests.get(f'{TESTNET_URL}/accounts/{EXCHANGE_ADDRESS}/resources')
    resources = r.json()

    token = {}
    for res in resources:
        if res['type'] == f'0x{EXCHANGE_ADDRESS.lower()}::ExchangeAB::Exchange':
            token['pool_ab'] = res['data']
        elif res['type'] == f'0x{EXCHANGE_ADDRESS.lower()}::ExchangeAC::Exchange':
            token['pool_ac'] = res['data']
        elif res['type'] == f'0x{EXCHANGE_ADDRESS.lower()}::ExchangeAD::Exchange':
            token['pool_ad'] = res['data']
        elif res['type'] == f'0x{EXCHANGE_ADDRESS.lower()}::ExchangeBC::Exchange':
            token['pool_bc'] = res['data']
        elif res['type'] == f'0x{EXCHANGE_ADDRESS.lower()}::ExchangeBD::Exchange':
            token['pool_bd'] = res['data']
        elif res['type'] == f'0x{EXCHANGE_ADDRESS.lower()}::ExchangeCD::Exchange':
            token['pool_cd'] = res['data']

    return token


def get_account_resources(sender_private_bytes):
    client = jsonrpc.Client(TESTNET_URL)

    # Overkill to use the private key for this but seems easiest at this point
    sender_private_key = Ed25519PrivateKey.from_private_bytes(sender_private_bytes)
    sender_auth_key = AuthKey.from_public_key(sender_private_key.public_key())
    sender_account = client.get_account(sender_auth_key.account_address())

    r = requests.get(f'{TESTNET_URL}/accounts/{sender_account.address}/resources')
    resources = r.json()

    # Hard-coded for coin b/a right now
    tokens = {}
    for res in resources:
        if res['type'] == f'0x{EXCHANGE_ADDRESS.lower()}::CoinB::CoinB':
            tokens['coin_b'] = res['data']['value']

        if res['type'] == f'0x{EXCHANGE_ADDRESS.lower()}::CoinA::CoinA':
            tokens['coin_a'] = res['data']['value']

    return tokens