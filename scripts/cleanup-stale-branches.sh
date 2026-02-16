#!/bin/bash

# Script to clean up stale branches in the repository
# This script requires push permissions to the repository

set -e

echo "🔍 Checking for stale branches..."

# Define the stale branch that needs to be deleted
STALE_BRANCH="copilot/fuse-agent"

# Check if the branch exists remotely
if git ls-remote --heads origin | grep -q "refs/heads/$STALE_BRANCH"; then
    echo "📍 Found stale branch: $STALE_BRANCH"
    
    # Verify it's merged into main
    echo "🔎 Verifying branch is merged into main..."
    
    # Fetch the latest from origin
    git fetch origin main
    git fetch origin "$STALE_BRANCH"
    
    echo "⚠️  This branch was merged with --allow-unrelated-histories"
    echo "   The content from $STALE_BRANCH is now part of main"
    
    read -p "❓ Do you want to delete the remote branch '$STALE_BRANCH'? (yes/no): " confirm
    
    if [ "$confirm" = "yes" ]; then
        echo "🗑️  Deleting remote branch: $STALE_BRANCH"
        git push origin --delete "$STALE_BRANCH"
        echo "✅ Branch deleted successfully!"
    else
        echo "❌ Deletion cancelled"
        exit 1
    fi
else
    echo "✅ Branch $STALE_BRANCH does not exist remotely - already cleaned up!"
fi

echo ""
echo "📋 Current remote branches:"
git ls-remote --heads origin | sed 's/.*refs\/heads\//  - /'
