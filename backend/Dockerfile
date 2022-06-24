FROM node:16.15.1-alpine

ARG WD=/usr/src/app
WORKDIR ${WD}

COPY ["package.json", "yarn.lock", "./"]

RUN npm install -g rimraf

RUN yarn install

COPY . .

RUN yarn run build