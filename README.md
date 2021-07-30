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
move sandbox run scripts/<script_name>
```

##Testing:
Testing can be done with option coverage check:
```
move sandbox test --track-cov ./
```