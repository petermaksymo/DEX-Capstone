#!/bin/bash

cd ../diem
rm 'test_net'

# Run Diem test net in the backgroud
cargo run -p diem-node -- --test > "test_net" &
diem_PID=$!

# Wait for all information to be generated from diem
sleep 5

# Parse key path, waypoint, and endpoint
while IFS= read line
do
  for i in $(echo $line | tr " " '\n')
  do 
    if [[ $i =~ .key ]]; then
      key=$i 
    elif [[ $i =~ ^0: ]]; then
      waypoint=$i
    elif [[ $i =~ ^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3} ]]; then
      endpoint=$i
    fi
  done
done < "test_net"

new_key=$(echo $key | tr '"' ' ')

echo $new_key
echo $waypoint
echo $endpoint

# Run Diem client with parsed information
cargo run -p cli -- -c TESTING -m $new_key -u "http://"$endpoint --waypoint $waypoint

# Kill local net on exit
kill $diem_PID
