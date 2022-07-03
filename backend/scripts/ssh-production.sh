#!/bin/bash
. secrets/out/github-actions.prod.env
ssh -i secrets/out/key.pem $remote_user@$remote_host
