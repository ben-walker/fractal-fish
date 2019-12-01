FROM node:13-alpine

RUN mkdir -p /app/node_modules && chown -R node:node /app

WORKDIR /app

COPY package*.json ./

USER node

RUN yarn install

COPY --chown=node:node . .

EXPOSE 3000

CMD [ "yarn", "run", "start" ]
