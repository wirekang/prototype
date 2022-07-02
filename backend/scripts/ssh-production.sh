#!/bin/bash
. secrets/out/production-server
ssh -i secrets/key.pem $SERVER_USER@$SERVER_HOST
