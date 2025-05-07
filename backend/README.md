# Instruções de uso: backend

- É possível subir a aplicação via docker-compose ou localmente

## 1. Simplificado via localhost (postgres)

- Lembre-se de criar a database junto ao banco de dados;
- `npx prisma init`;
- schemas prisma estão no README.md, na raiz do projeto; inseri-las em /prisma/schema.prisma;
- após, rodar o comando: `npm run db:dev`;
- a URI para conexao com a database deve ser setada em .env com o *shape*:
  - `DATABASE_URL="postgresql://postgres:<senha>@localhost:5432/<nome_db>?schema=public"`;
- para *startar* o app: `npm run dev`;
- Para usar via mysql, ajuste os parâmetros necessários em .env (por exemplo, port: 3306), no schema (provider === mysql) e instale os pacotes node necessários (driver mysql2, etc);

## Schema prisma

Está no README.md na raiz do projeto

## Exemplo de .env MODEL

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
