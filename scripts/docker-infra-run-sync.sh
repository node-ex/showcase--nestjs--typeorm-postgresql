#!/usr/bin/env bash

set -e

./scripts/docker-infra-run.sh --detach $@

POSTGRES_CONTAINER_NAME="showcase--postgres"

while [ "$(docker inspect --format='{{.State.Health.Status}}' "$POSTGRES_CONTAINER_NAME")" != "healthy" ]; do
    sleep 5
done

# npm run migrations:run
