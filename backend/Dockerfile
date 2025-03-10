# # Use a imagem base do Node 20
# FROM node:20

# # Define o diretório de trabalho
# WORKDIR /home/node/app

# # Copia os arquivos de package para instalar as dependências
# COPY package*.json ./

# # Instala as dependências (npm install ou yarn install)
# RUN npm install

# # Copia o restante do código da aplicação
# COPY . .

# # Garante que o script wait-for.sh tenha permissão de execução
# RUN chmod +x /home/node/app/wait-for.sh

# # Expõe a porta 3000, que é a porta da aplicação
# EXPOSE 3000

# # O comando default é sobrescrito pelo docker-compose
# CMD [ "npm", "start" ]

FROM node:lts-alpine3.17

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

# para deploy
# CMD ["sh", "-c", "npm run db:deploy && npm run dev"]

CMD ["sh", "-c", "npm run db:dev && npm run dev"]