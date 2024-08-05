FROM alpine:3.18

ENV NODE_VERSION=18.19.0

LABEL maintainer="Caglar Yalcin <caglaryalcin.com>"
LABEL org.opencontainers.image.source="https://github.com/caglaryalcin/caglaryalcin.com"

EXPOSE 9000

RUN apk update && apk upgrade && rm -rf /var/cache/apk/*

RUN apk add --no-cache \
    nodejs \
    npm \
    python3 \
    build-base \
    vips-dev \
    fftw-dev \
    automake \
    autoconf \
    libtool \
    nasm

RUN npm install -g gatsby-cli node-gyp yarn

WORKDIR /app

COPY . .

RUN yarn install && yarn cache clean

RUN yarn build

CMD ["yarn", "serve", "-H", "0.0.0.0"]