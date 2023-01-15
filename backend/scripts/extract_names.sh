#!/bin/bash

# extract_names.sh

# Store the input and output file paths in variables
input_file="$1"
output_file="$2"

# Use the 'grep' command to search for lines in the input file that contain the string "@amazon.com" or "@Amazon.com" in a case-insensitive manner.
# Pipe the output to 'awk' command to extract the names and redirect it to the output file
grep -i "@amazon.com" "$input_file" | awk -F, '{print $3 " " $2}' > "$output_file"