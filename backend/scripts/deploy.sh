#!/bin/bash
source env/deploy

DOCKER_COMPOSE_FILE=docker-compose.prod.yml

docker compose -f $DOCKER_COMPOSE_FILE build

function docker-login() {
  aws ecr get-login-password --region $AWS_DEFAULT_REGION |
    docker login --username AWS --password-stdin $DOCKER_REPO
}

docker-login

for r in $(grep 'image: \${DOCKER_REPO}' $DOCKER_COMPOSE_FILE | sed -e 's/^.*\///'); do
  aws ecr describe-repositories --repository-names $r || aws ecr create-repository --repository-name $r
done

docker compose -f $DOCKER_COMPOSE_FILE push

docker logout

source env/docker-host
eval $(ssh-agent)
ssh-add $SERVER_KEY
docker-login
docker compose -f $DOCKER_COMPOSE_FILE pull
docker compose -f $DOCKER_COMPOSE_FILE up -d

docker logout
