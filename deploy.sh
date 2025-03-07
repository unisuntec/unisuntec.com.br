#!/bin/bash

# Exit on any error
set -e

# Enable verbose output
set -x

# Clean previous builds
rm -rf out .next

# Install dependencies
pnpm install

# Build for GitHub Pages
GITHUB_PAGES=true pnpm build

# Verify the contents of the out directory
echo "Contents of out directory:"
ls -la out
echo "CSS files in out directory:"
find out -name "*.css"
echo "JS files in out directory:"
find out -name "*.js"
echo "Font files in out directory:"
find out -name "*.woff2"

# Add the exported files to git
git add out/

# Commit the build
git commit -m "Build for GitHub Pages: $(date +'%Y-%m-%d %H:%M:%S')"

# Push to the GitHub Pages branch
git subtree push --prefix out github gh-pages
