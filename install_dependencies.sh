#!/bin/bash

# Check if Docker is installed
if ! command -v docker &> /dev/null
then
    echo "Docker is not installed."
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v /usr/local/bin/docker-compose &> /dev/null
then
    echo "Docker Compose is not installed."
    exit 1
fi

# Navigate to the directory containing the docker-compose.yml file
cd /home/ec2-user/swiftmarket-ui || exit 1

cp -f /home/ec2-user/swiftmarket-ui/aws/.env /home/ec2-user/swiftmarket-ui/.env

# Start your services
/usr/local/bin/docker-compose -f /home/ec2-user/swiftmarket-ui/aws/docker-compose.yml up -d
