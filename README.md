# ECE496 DEX

## Install

Install the move cli with optional debug flag - Note: as of Jan 27 the move cli has been moved to a separate repo:
```
cargo install --debug --git https://github.com/diem/move#6ab59227 move-cli
```
CD into the `dex_modules` directory which contains our Move modules/scripts

Run our `clean_and_publish.sh` script to publish the DEX modules:
```
./clean_and_publish.sh
```
You can then run scripts with:
```
./better_move.sh run scripts/<script_name>
```

## Testing:
Testing can be done with:
```
move sandbox exp-test
```

To update the baseline of test cases:
```
UPDATE_BASELINE=1 move sandbox exp-test
```

## Publishing to local test net:
Modules can be published to local diem test net to run on the blockchain.

Run diem local test net with 
```
cargo run -p diem-node -- --test
```

Then in a new terminal, run diem client with follow command (replace variable with the ones provided by your local test net instance)
```
cargo run -p cli -- -c $CHAIN_ID -m $ROOT_KEY -u $endpoint --waypoint $WAYPOINT
```

In diem client, enable custom_scripts `dev s` and then compile modules to be published
```
dev c <path to src folder> language/move-stdlib/modules language/move-stdlib/nursery
```
It should produce results similar to following
```
>> Compiling program
    Finished dev [unoptimized + debuginfo] target(s) in 0.58s
     Running `target/debug/move-build src -o /tmp/77102b2265db0a777f82e839c2bd8d1f -d language/move-stdlib/modules -d language/move-stdlib/nursery`
Successfully compiled a program at:
  /tmp/77102b2265db0a777f82e839c2bd8d1f/scripts/main.mv
  /tmp/77102b2265db0a777f82e839c2bd8d1f/modules/0_CoinA.mv
```

To publish modules
```
dev publish 0000000000000000000000000a550c18 <path to module from the compiled result>
```
Note: Module has to be at address 0x1 to be successfully published 

To execute script
```
dev execute 0000000000000000000000000a550c18 <path to script from the compiled result> [parameters]
```
Note: Script execution can only be done with root account on local net as far we can tell. The signer for the root account is automatically passed as the first argument. Other accounts have to be passed as an address. We will need to discuss the end-user workflow once Noah and Peter come back. 


## Creating Parent VASP Account

Generate an auth key and address using the client from the python sdk [client](https://github.com/diem/my-first-client/tree/master/python/src).

Using the top half of the authentication_key as the dummy_prefix in create_parent_vasp_account.move.

Compile the script and then execute it as the TC account, with the address of the account you created (from the client) as the argument.
```
dev execute <TC account address> <loaction of compiled code> <address of account>
```

You can inspect it with `query account_state <address>`


## Bringing up the Web App

1. `cd` into the `app` directory
2. Run `yarn install`, [yarn installation](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable)
3. Run `yarn run dev` and the app should be running on `localhost:3000`
