# Subir a aplicação via docker-compose

## UP containers node e postgres para desenvolvimento em ambiente dev

Após configurar docker-compose.yml e Dockerfile:

- npx prisma ini;
- cria o schema e /prisma;
- sudo docker compose -f docker-compose.yml up --build -d # (*usando compose, equivalente a "sudo docker run --name postgres_db -e POSTGRES_PASSWORD=123456 -p 5433:5432 -d*);
- O container com a imagem node/prisma, embora criada, não vai ser rodado!;
- npm run db:dev;
- A URI para desenvolvimento local, use em .env:
  - DATABASE_URL="postgresql://postgres:123456@localhost:5433/locacaotest?schema=public"
- cria usuário padrão postgres, senha 123456, porta externa 5433 no localhost (para não conflitar), porta interna padrão 5432 em postgres, nome container default postgres_db;
- npm run dev;
- faça requisições na porta 3000;

## UP containers node e postgres para produção

Após configurar docker-compose.yml e Dockerfile:

- npx prisma ini;
- cria o schema em /prisma;
- sudo docker compose -f docker-compose.yml up --build -d # (*usando compose, equivalente a "sudo docker run --name postgres_db -e POSTGRES_PASSWORD=123456 -p 5433:5432 -d*);
- URI para desenvolvimento local, use em .env:
  - DATABASE_URL="postgresql://postgres:123456@postgres_db:5432/locacaotest?schema=public"
- cria usuário padrão postgres, senha 123456, porta externa 5433 no localhost (para não conflitar), porta interna padrão 5432 em postgres, nome container default postgres_db;
- gera a container node/prisma contendo a aplicação, escutando na porta 5000:3000;
- é possível fazer requisições de duas formas:
  - na porta 3000, caso tenha feito comando npm run dev;
  - na porta 5000, diretamente à aplicação docker;

## apaga o container up pelo compose e remove volumes

- docker-compose down -v
- sudo docker compose f docker-compose.yml down --remove-orphans

## Schema prisma

Está no README.md na raiz do projeto

##

URIS de conexão

### para um serviço entre containers use

- DATABASE_URL="postgresql://postgres:123456@postgres:5432/locacaotest?schema=public"

### para desenvolvimento local, use

- DATABASE_URL="postgresql://postgres:123456@localhost:5433/locacaotest?schema=public"
