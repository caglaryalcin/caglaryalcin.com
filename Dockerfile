FROM node:18-alpine

LABEL maintainer="Caglar Yalcin <caglaryalcin.com>"
LABEL org.opencontainers.image.source="https://github.com/caglaryalcin/caglaryalcin.com"

WORKDIR /app

RUN apk add --no-cache \
    python3 \
    build-base \
    vips-dev \
    fftw-dev \
    automake \
    autoconf \
    libtool \
    nasm

RUN npm install -g node-gyp

COPY . .

RUN yarn install --frozen-lockfile && yarn cache clean

RUN yarn build

EXPOSE 9000

CMD ["yarn", "serve", "-H", "0.0.0.0"]