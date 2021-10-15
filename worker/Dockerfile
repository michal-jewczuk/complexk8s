FROM node:alpine

USER node
RUN mkdir -p /home/node/worker
WORKDIR '/home/node/worker'

COPY --chown=node:node ./package.json ./
RUN npm install

COPY --chown=node:node ./ ./

CMD ["npm", "run", "start"]
