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
'''
UPDATE_BASELINE=1 move sandbox test ./
'''