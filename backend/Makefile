SHELL := /bin/bash

debug:
	bash -c "trap \
	 'docker-compose -f docker-compose-dev.yml down' EXIT; \
	 docker-compose -f docker-compose-dev.yml up"

ssh-deploy:
	source scripts/ssh-deploy.sh

deploy:
	source scripts/deploy.sh