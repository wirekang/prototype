SHELL := /bin/bash

run-local:
	- bash -c "trap \
	 'docker-compose -f docker-compose.local.yml down' EXIT; \
	 docker-compose -f docker-compose.local.yml up --build"

ssh-production:
	source scripts/ssh-production.sh

encrypt:
	PASSWORD=$$(cat password) . scripts/encrypt.sh
	make decrypt

decrypt:
	PASSWORD=$$(cat password) . scripts/decrypt.sh

db-connect-local:
	mysql -h localhost -P 3306 --protocol=tcp -u root -pasdf
