#!/bin/bash

# extract_names.sh

# Store input in a variable
input="$1"

# Use the 'curl' command to download the input content and pipe it to the 'awk' command to extract the names
# curl -L $input | awk -F "," 'tolower($4) ~ /@amazon.com/ {print $3 " " $2}' > output_names.txt
$(grep -i "@amazon.com" "$file" | awk -F, '{print $3, $2}' ) > output_names.txt
