# Subir a aplicação via docker-compose

## 1 UP simplificado no localhost

- Crirar a database no db pg em localhost;
- `npx prisma init`;
- cria o arquivo para inserir schemas p/ migration inicial, em /prisma/schema.prisma;
- schemas prisma estão no README.md, na raiz do projeto;
- comando: `npm run db:dev` (equivale a `npx prisma migrate dev --name init && npx ts-node seed.ts`);
- a URI para desenvolvimento local, em root no backend, deve ser setada em .env como:
  - `DATABASE_URL="postgresql://postgres:<senha>@localhost:5432/<nome_db>?schema=public"`;
- Para startar: `npm run dev`;

## 2. UP containers node e postgres para desenvolvimento em ambiente dev

Após configurar docker-compose.yml e Dockerfile (que se encontram em ./backend):

- `npx prisma init`;
- cria o arquivo para inserir schemas p/ migration inicial, em /prisma/schema.prisma;
- schemas prisma estão no README.md, na raiz do projeto;
- após, `sudo docker compose -f docker-compose.yml up --build -d` # (*usando compose, equivalente a "sudo docker run --name postgres_db -e POSTGRES_PASSWORD=senha -p 5433:5432 -d*);
- vai buildar o container com base nas imagens e vai colocar a rodar, ao mesmo tempo;
- o container com a imagem node/prisma, embora criada, não vai ser rodado!;
- comando: `npm run db:dev` (equivale a `npx prisma migrate dev --name init && npx ts-node seed.ts`);
- a URI para desenvolvimento local, em root no backend, deve ser setada em .env como:
- `DATABASE_URL="postgresql://postgres:<senha>@localhost:5433/<nome_db>?schema=public"`
- cria usuário padrão postgres, senha, porta externa 5433 no localhost (para não conflitar), porta interna padrão 5432 em postgres, nome container default postgres_db;
- A aplicação pode ser configurada para usar http ou https. Se nao tiver os certificados, inicie aplicação passando 'http' em app.ts
- faça requisições na porta 3000, em localhost;
- há script para a criação de um super user gerente e senha e cpf devem ser inseridos em .env;

## 3. UP containers node e postgres para produção

Após configurar docker-compose.yml e Dockerfile:

- `npx prisma init`;
- cria o arquivo para inserir schemas p/ migration inicial, em /prisma/schema.prisma;
- schemas estão no README.md, na raiz do projeto;
- após, `sudo docker compose -f docker-compose.yml up --build -d` # (*usando compose, equivalente a "sudo docker run --name postgres_db -e POSTGRES_PASSWORD=senha -p 5433:5432 -d*).
- vai buildar o container com base nas imagens e vai colocar a rodar, ao mesmo tempo;
- URI para desenvolvimento local, em root no backend, use em .env:
  - `DATABASE_URL="postgresql://postgres:<senha>@postgres_db:5432/locacaotest?schema=public"`
- cria usuário padrão postgres, senha 123456, porta externa 5433 no localhost (para não conflitar), porta interna padrão 5432 em postgres, nome container default postgres_db;
- gera a container node/prisma contendo a aplicação, escutando na porta 5000:3000;
- A aplicação pode ser configurada para usar http ou https. Se nao tiver os certificados, inicie aplicação passando 'http' em app.ts
- faça requisições na porta 3000, em localhost;
- é possível fazer requisições de duas formas:
  - na porta 3000, caso tenha feito comando npm run dev;
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
