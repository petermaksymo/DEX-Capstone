# ECE496 DEX

## Install

Install the move cli with optional debug flag:
```
cargo install --debug --git https://github.com/diem/diem#8bf547ff move-cli
```
Run our `clean_and_publish.sh` script to publish the DEX modules:
```
./clean_and_publish.sh
```
You can then run scripts with:
```
./better_move.sh run scripts/<script_name>
```

## Testing:
Testing can be done with the optional coverage check:
```
move sandbox test --track-cov ./
```

To update the baseline of test cases:
```
UPDATE_BASELINE=1 move sandbox test ./
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

In diem client, compile modules to be published
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
Note: Module has to be at address 0x1 to be sucessfully published 

To execute script
```
dev execute 0000000000000000000000000a550c18 <path to script from the compiled result>
```
Note: we still have to figure out how to pass an argument to the script executed
