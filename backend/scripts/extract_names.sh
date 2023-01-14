#!/bin/bash

# extract_names.sh

# Store the spreadsheet URL in a variable
spreadsheet_url="https://docs.google.com/spreadsheets/d/1fYT7vLFdgEbPKCNxJ0lY3esgEPSSkRhsajhNHf_rA4I/export?format=csv"

# Use the 'curl' command to download the spreadsheet content and pipe it to the 'awk' command to extract the names
curl -L $spreadsheet_url | awk -F "," 'tolower($4) ~ /@amazon.com/ {print $3 " " $2}'