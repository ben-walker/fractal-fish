FROM node:13

RUN mkdir -p /app/node_modules && chown -R node:node /app

WORKDIR /app

COPY package*.json ./

USER node

RUN yarn install

COPY --chown=node:node . .

RUN yarn build:dev

EXPOSE 3000

CMD node ./build/app.bundle.js
