FROM node:16.15.1-alpine as deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --silent --frozen-lockfile

FROM node:16.15.1-alpine as build
WORKDIR /app
COPY --from=deps /app/node_modules /app/node_modules
COPY . .
RUN yarn build

FROM node:16.15.1-alpine as production
WORKDIR /app
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
CMD node dist/main