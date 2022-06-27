#!/bin/bash
source env/production
ssh -i $SERVER_KEY $SERVER_USER@$SERVER_HOST
