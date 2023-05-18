#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# deleting local.env.local to prevent Next.js from use it
rm -f ./.env.local

# building the Next.js application
yarn run next:build

# creating the build/cache/images folder and give it
# the read/write permissions
mkdir -p build/cache/images
chmod -R 666 build/cache/images