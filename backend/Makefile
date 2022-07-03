SHELL := /bin/bash

debug:
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
