#!/bin/bash
set -e

echo "Starting Pixel-to-Pattern deployment..."

# System update
sudo apt update && sudo apt upgrade -y

# Install Docker
if ! [ -x "$(command -v docker)" ]; then
  echo "Installing Docker..."
  curl -fsSL https://get.docker.com | sh
fi

# Install Docker Compose
if ! [ -x "$(command -v docker compose)" ]; then
  echo "🧩 Installing Docker Compose plugin..."
  sudo apt install -y docker-compose-plugin
fi

# Clone repo if not exists
if [ ! -d "pixel-to-pattern" ]; then
  echo "Cloning repository..."
  git clone https://github.com/<your-username>/pixel-to-pattern.git
fi

cd pixel-to-pattern

# Pull latest changes
git pull origin main

# Build and run containers
echo "🛠 Building and starting containers..."
docker compose build
docker compose up -d

echo "Deployment complete! App running at http://<YOUR_VM_IP>:3000"
