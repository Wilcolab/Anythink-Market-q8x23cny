FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig.json ./

RUN yarn install

COPY . .

EXPOSE 8001

CMD ["yarn", "start"]