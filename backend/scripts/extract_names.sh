#!/bin/bash

# extract_names.sh

# Store input in a variable
input="$1"

# $(grep -i "@amazon.com" "$file" | awk -F, '{print $3, $2}' ) > output_names.txt

output=$(grep -i "@amazon.com" "$file" | awk -F, '{print $3, $2}' ) > output_names.txt

echo "$output"