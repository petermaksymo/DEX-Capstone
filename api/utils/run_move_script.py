import time
import diem.stdlib
from diem import (
    AuthKey,
    identifier,
    jsonrpc,
    diem_types,
    stdlib,
    utils,
    testnet
)
from numpy import uintp
from cryptography.hazmat.primitives.asymmetric.ed25519 import Ed25519PrivateKey

TESTNET_URL: str = "http://0.0.0.0:8080" #"https://testnet.diem.com/v1"
FAUCET_URL: str = "http://0.0.0.0:8000" #"https://testnet.diem.com/mint"
CHAIN_ID = diem_types.ChainId(4) #testnet.CHAIN_ID
CURRENCY = "XUS"


def move():
    print("#1 connect to testnet")
    client = jsonrpc.Client(TESTNET_URL)

    print("#2 Generate Keys")
    # generate private key for sender account
    sender_private_key = Ed25519PrivateKey.generate()
    # generate auth key for sender account
    sender_auth_key = AuthKey.from_public_key(sender_private_key.public_key())
    print(f"Generated sender address: {utils.account_address_hex(sender_auth_key.account_address())}")

    print("#3 Create account")
    faucet = testnet.Faucet(client=client, url=FAUCET_URL)
    testnet.Faucet.mint(faucet, sender_auth_key.hex(), 100000000, CURRENCY)

    print("#4 Get account information")
    sender_account = client.get_account(sender_auth_key.account_address())

    events_key = sender_account.received_events_key
    print("#5 Start event listener")
    # get_events_example.subscribe(client, events_key)

    print("#6 Add money to account")
    faucet = testnet.Faucet(client=client, url=FAUCET_URL)
    testnet.Faucet.mint(faucet, sender_auth_key.hex(), 100, CURRENCY)

    print("#6.5 build transaction payload")
    script = diem.stdlib.TransactionPayload__ScriptFunction(
        value=diem.stdlib.ScriptFunction(
            module=diem.stdlib.ModuleId(
                address=utils.account_address('DDE26D2F8225B409375ECC386BF87F4E'),
                name=diem.stdlib.Identifier("CoinB")
            ),
            function=diem.stdlib.Identifier("mint_coin_b"),
            ty_args=[],
            args=[
                diem.stdlib.encode_u64_argument(uintp(42069))
            ]
        )
    )

    print("#7 Create transaction")
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

    print("#8 sign transaction")
    signature = sender_private_key.sign(utils.raw_transaction_signing_msg(raw_transaction))
    public_key_bytes = utils.public_key_bytes(sender_private_key.public_key())

    signed_txn = utils.create_signed_transaction(raw_transaction, public_key_bytes, signature)
    print("#9 submit transaction")
    client.submit(signed_txn)


    print("#10 wait for transaction")
    client.wait_for_transaction(signed_txn)


if __name__ == "__main__":
    print("starting script...")
    move()
    print("script ran")