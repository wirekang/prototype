#!/bin/bash
rm -rf secrets/enc
mkdir -p secrets/enc

for f in secrets/src/*; do
  gpg --cipher-algo AES256 --passphrase "$PASSWORD" -c --batch --yes --output secrets/enc/$(basename $f) $f
done
