#!/usr/bin/env bash

# Directory containing the session files
SESSION_DIR="./data/sessions"

# Loop through each YAML file in the session directory
for file in "$SESSION_DIR"/*.yml; do
  # Extract the key value
  key=$(grep '^key:' "$file" | awk '{print $2}')

  # Remove underscores from the key value
  openfeedback=$(echo "$key" | tr -d '_')
  openfeedback=${openfeedback:0:64}

  # Create a temporary file
  tmpfile=$(mktemp)

  # Insert the openfeedback field after the key field
  awk -v openfeedback="$openfeedback" '/^key:/ {print; print "openfeedbackId: " openfeedback; next}1' "$file" > "$tmpfile"

  # Move the temporary file to the original file
  mv "$tmpfile" "$file"
done