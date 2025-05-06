FROM node:18-alpine AS builder

WORKDIR /app

RUN apk add --no-cache vips-dev fftw-dev nasm python3 build-base autoconf automake libtool

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /app/public /usr/share/nginx/html

EXPOSE 9000

CMD ["nginx", "-g", "daemon off;"]