FROM node:18-alpine AS builder

LABEL maintainer="Caglar Yalcin <caglaryalcin.com>"
LABEL org.opencontainers.image.source="https://github.com/caglaryalcin/caglaryalcin.com"

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

FROM nginx:alpine

COPY --from=builder /app/public /usr/share/nginx/html

EXPOSE 9000

CMD ["nginx", "-g", "daemon off;"]