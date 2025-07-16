#!/bin/sh
set -e

echo "[INFO] Building Docker image..."
docker build -t profile-editor-assessment .
echo "[INFO] Starting container..."
docker run -d --rm -p 3000:3000 --name profile-editor-container profile-editor-assessment
sleep 4

echo "[INFO] Container started. App should be available at http://localhost:3000"
