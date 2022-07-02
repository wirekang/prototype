SHELL := /bin/bash

debug:
	- bash -c "trap \
	 'docker-compose -f docker-compose.local.yml down' EXIT; \
	 docker-compose -f docker-compose.local.yml up --build"

ssh-production:
	source scripts/ssh-production.sh

encrypt:
	PASSWORD=$$(cat password) . scripts/encrypt.sh

decrypt:
	PASSWORD=$$(cat password) . scripts/decrypt.sh

init-localhost-ssl:
	openssl req -x509 -out localhost.crt -keyout localhost.key \
	-newkey rsa:2048 -nodes -sha256 \
	-subj '/CN=localhost' -extensions EXT -config <( \
	printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")
	mkdir -p nginx/localhost-ssl
	mv localhost.crt nginx/localhost-ssl/
	mv localhost.key nginx/localhost-ssl/