FROM node:6.7.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm install -g yarn

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn install --pure-lockfile

COPY . .
