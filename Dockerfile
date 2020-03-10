FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ARG MONGODB_HOST=localhost
ARG MONGODB_PORT=27017
ARG MONGODB_DB_NAME=order-service

ENV MONGODB_HOST=${MONGODB_HOST}
ENV MONGODB_PORT=${MONGODB_PORT}
ENV MONGODB_DB_NAME=${MONGODB_DB_NAME}

EXPOSE 53001

CMD [ "npm", "run","grpc" ]