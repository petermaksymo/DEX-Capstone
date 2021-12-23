#!/bin/bash

# Prints strings in green and removed the [debug] text
LIGHT_GREEN='\033[1;32m'
NC='\033[0m'

while read LINE; do
  if [[ $LINE =~ "[debug] (&)" ]]
  then
    cleaned_ASCII_decimals=$(echo $LINE | sed "s/[^0-9]/ /g")
    printf ${LIGHT_GREEN}
    printf '%b' $(printf '\\%03o' ${cleaned_ASCII_decimals})
    printf "\n${NC}"
  else
    removed_debug=$(echo $LINE | sed "s/\[debug\] //g")
    echo -e "$removed_debug"
  fi
done