# Instruções de uso: backend

- É possível subir a aplicação via docker-compose ou localmente

## 1. Simplificado via localhost

- schemas prisma estão no README.md, na raiz do projeto; inseri-las em /prisma/schema.prisma;
- criar a database com a primeira migrate em postgres via localhost;
- `npx prisma init`;
- após, rodar o comando: `npm run db:dev`;
- a URI para conexao com a database deve ser setada em .env com o *shape*:
  - `DATABASE_URL="postgresql://postgres:<senha>@localhost:5432/<nome_db>?schema=public"`;
- para *startar*: `npm run dev`;

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

## Example .env MODEL

``` plaintext
# .env
DATABASE_URL="postgresql://postgres:<dbpwd>@localhost:<dbport>/<dbname>?schema=public"

PORT=3000

HOST=localhost

NODE_OPTIONS=--tls-min-v1.0

SECRET_KEY=<your secret key>

POSTGRES_DB=<dbname>

POSTGRES_USER=<dbuser>

POSTGRES_PASSWORD=<dbpwd>

SUPER_USER_NOME=<app super user name>

SUPER_USER_PWD=<app super user password>

SUPER_USER_CPF=<app super user cpf>

EXPIRES_IN="2d"

```
