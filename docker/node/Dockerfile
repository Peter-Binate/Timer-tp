FROM node:lts-slim

# Définit le répertoire de travail à l'intérieur du conteneur
WORKDIR /home/node/app

COPY ../../src/api/package*.json .

# Changer les permissions
RUN chown -R node:node /home/node/app

RUN npm install typescript --save-dev

EXPOSE 3000

USER node

CMD [ "npm", "start"]

# CMD [ "npm", 'dist/server.js'] lancer directement le serveur dans la version prod