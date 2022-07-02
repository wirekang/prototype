SHELL := /bin/bash

debug:
	bash -c "trap \
	 'docker-compose -f docker-compose-dev.yml down' EXIT; \
	 docker-compose -f docker-compose-dev.yml up"

ssh-production:
	source scripts/ssh-production.sh

encrypt:
	PASSWORD=$$(cat password) . scripts/encrypt.sh

decrypt:
	PASSWORD=$$(cat password) . scripts/decrypt.sh