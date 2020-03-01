# 安定バージョン
FROM node:12.16.1-alpine3.9

# make the 'app' folder the current working directory
WORKDIR /usr/src/app

RUN apk update && \
    npm install -g npm @vue/cli