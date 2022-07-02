#!/bin/bash
rm -rf secrets/out
mkdir -p secrets/out

for f in secrets/enc/*; do
  echo "$PASSWORD" | gpg -d --cipher-algo AES256 --batch --yes --passphrase-fd 0 --output secrets/out/$(basename $f) $f
done
chmod 400 secrets/out/*.pem
