#!/bin/bash

# Clean previous builds
rm -rf out .next

# Build the project
pnpm build

# Start a simple Python HTTP server in the out directory
python3 -m http.server 8000 --directory out
