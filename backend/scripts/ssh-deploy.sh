#!/bin/bash
source env/deploy
ssh -i $SERVER_KEY $SERVER_USER@$SERVER_HOST
