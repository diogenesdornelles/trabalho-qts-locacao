# Instruções de uso: backend

- É possível subir a aplicação via docker-compose ou localmente

## 1. Simplificado via localhost

- criar a database em postgres via localhost;
- `npx prisma init`;
- schemas prisma estão no README.md, na raiz do projeto; inseri-las em /prisma/schema.prisma;
- após, rodar o comando: `npm run db:dev`;
- a URI para conexao com a database deve ser setada em .env com o *shape*:
  - `DATABASE_URL="postgresql://postgres:<senha>@localhost:5432/<nome_db>?schema=public"`;
- para *startar*: `npm run dev`;

## 2. Containers node e postgres para desenvolvimento em ambiente dev

- `npx prisma init`;
- schemas prisma estão no README.md, na raiz do projeto; inseri-las em /prisma/schema.prisma;
- após, `sudo docker compose -f docker-compose.yml up --build -d`;
- comando: `npm run db:dev` (equivale a `npx prisma migrate dev --name init && npx ts-node seed.ts`);
- a URI para desenvolvimento local, em root no backend, deve ser setada em .env como:
- `DATABASE_URL="postgresql://postgres:<senha>@localhost:5433/<nome_db>?schema=public"`;
- para *startar*: `npm run dev`;
- cria usuário padrão postgres, senha e usa porta externa 5433 no localhost;
- a aplicação pode ser configurada para usar http ou https;
- se nao tiver os certificados, inicie aplicação passando 'http' em app.ts
- faça requisições na porta 3000, em localhost;
- há script para a criação de um super user gerente e senha e cpf devem ser inseridos em .env;

## 3. UP containers node e postgres para produção

Após configurar docker-compose.yml e Dockerfile:

- `npx prisma init`;
- schemas prisma estão no README.md, na raiz do projeto; inseri-las em /prisma/schema.prisma;
- após, `sudo docker compose -f docker-compose.yml up --build -d`;
- URI para desenvolvimento local, em root no backend, use em .env:
  - `DATABASE_URL="postgresql://postgres:<senha>@postgres_db:5432/locacaotest?schema=public"`
- cria usuário padrão postgres, senha 123456, porta externa 5433 no localhost;
- gera a container node/prisma contendo a aplicação, escutando na porta externa 5000;
- A aplicação pode ser configurada para usar http ou https. Se nao tiver os certificados, inicie aplicação passando 'http' em app.ts;
- é possível fazer requisições de duas formas:
  - na porta 3000, caso tenha utilizado comando `npm run dev`;
  - na porta 5000, diretamente à aplicação docker;

## apaga o container up pelo compose e remove volumes

- `docker-compose down -v`
- `sudo docker compose -f docker-compose.yml down --remove-orphans`

## Schema prisma

Está no README.md na raiz do projeto

##

URIS de conexão

### para um serviço entre containers use

- `DATABASE_URL="postgresql://postgres:123456@postgres:5432/locacaotest?schema=public"`

### para desenvolvimento local, com npm run dev, use

- `DATABASE_URL="postgresql://postgres:123456@localhost:5433/locacaotest?schema=public"`

## Conexão PgAdmin4

Create -> Server group

Register -> Server

General -> Name: qualquer

Connection -> Host -> localhost

Username -> postgres

Port -> 5433

Senha - xxx

Save
