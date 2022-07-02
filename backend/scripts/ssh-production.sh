#!/bin/bash
. secrets/out/github-actions.env
ssh -i secrets/out/key.pem $REMOTE_USER@$REMOTE_HOST
