FROM node:lts-alpine3.17

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

# para deploy
CMD ["sh", "-c", "npm run db:deploy && npm run dev"]

# CMD ["sh", "-c", "npm run db:dev && npm run dev"]