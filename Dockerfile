FROM node:18
LABEL name "nodejs-api"
WORKDIR /usr/src/app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml .
RUN pnpm install

COPY tsconfig.json .
COPY src ./src
COPY migrations ./migrations

RUN pnpm run build
