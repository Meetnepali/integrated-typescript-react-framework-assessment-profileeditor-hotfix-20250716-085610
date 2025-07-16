#!/bin/sh
set -e
sh ./install.sh
echo "[INFO] Environment setup complete."
echo "[INFO] Access the application at: http://localhost:3000"
echo "[INFO] To run tests inside the container:"
echo "  docker exec -it profile-editor-container npm run build"
echo "  docker exec -it profile-editor-container npm run lint"
