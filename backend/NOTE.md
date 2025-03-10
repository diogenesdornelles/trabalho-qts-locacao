# Subir a aplicação via docker-compose

## UP containers node e postgres

Após configurar docker-compose.yml e Dockerfile:

- npx prisma ini;
- cria o schema;
- npx prisma migrate dev --name init;
- sudo docker compose -f docker-compose.yml up --build -d # (*usando compose, equivalente a "sudo docker run --name postgresdb -e POSTGRES_PASSWORD=123456 -p 5433:5432 -d*);
- cria usuário padrão postgres, senha 123456, porta externa 5433 no localhost (para não conflitar), porta interna padrão 5432 em postgres, nome container default postgresdb;
- gera a container node contendo a aplicação, escutando na porta 3000:3000;

## apaga o container up pelo compose e remove volumes

- docker-compose down -v
- sudo docker compose f docker-compose.yml down --remove-orphans

## Schema prisma

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
  output = "../generated/prisma_client"
}

model Brinquedo {
  cod              String            @id @default(uuid()) @db.Uuid
  nome             String            @unique @db.VarChar(255)
  tipo_brinquedo   String            @db.Uuid
  marca            String            @db.VarChar(255)
  data_aquisicao   DateTime          @db.Date
  valor_locacao    Decimal           @db.Money
  tipoBrinquedo    TipoBrinquedo     @relation(fields: [tipo_brinquedo], references: [cod])
  brinquedosLocados BrinquedoLocado[]

  @@map("brinquedos")
}

model BrinquedoLocado {
  cod            String     @id @default(uuid()) @db.Uuid
  valor_unitario Decimal    @db.Money
  nome           String     @db.VarChar(255)
  cod_locacao    String     @db.Uuid
  data_devolucao DateTime   @db.Date
  cod_brinquedo  String     @db.Uuid
  locacao        Locacao    @relation(fields: [cod_locacao], references: [cod])
  brinquedo      Brinquedo  @relation(fields: [cod_brinquedo], references: [cod])

  @@map("brinquedos_locados")
}

model Cliente {
  cpf             String      @id @db.Char(11)
  nome            String      @db.VarChar(255)
  endereco        String      @db.VarChar(255)
  data_nascimento DateTime    @db.Date
  telefone        String      @db.VarChar(11)
  locacoes        Locacao[]
  pagamentos      Pagamento[]

  @@map("clientes")
}

enum Funcao {
  GERENTE
  CAIXA
  AGENTE_LOCACAO
  AGENTE_CADASTRO
  ALMOXARIFE
}

model Funcionario {
  cpf      String @id @db.Char(11)
  nome     String @db.VarChar(255)
  telefone String @db.VarChar(11)
  funcao   Funcao
  senha    String @db.VarChar(30)

  @@map("funcionarios")
}

model Locacao {
  cod               String            @id @default(uuid()) @db.Uuid
  data_hora         DateTime          @default(now()) @db.Date
  cpf_cliente       String            @db.Char(11)
  brinquedosLocados BrinquedoLocado[]
  cliente           Cliente           @relation(fields: [cpf_cliente], references: [cpf])
  pagamento         Pagamento?

  @@map("locacoes")
}

model Pagamento {
  cod             String   @id @default(uuid()) @db.Uuid
  cpf_cliente     String   @db.Char(11)
  cod_locacao     String   @unique @db.Uuid
  data_pagamento  DateTime @default(now()) @db.Date
  valor_pagamento Decimal  @db.Money
  valor_locacao   Decimal  @db.Money
  locacao         Locacao  @relation(fields: [cod_locacao], references: [cod])
  cliente         Cliente  @relation(fields: [cpf_cliente], references: [cpf])

  @@map("pagamentos")
}

model TipoBrinquedo {
  cod        String      @id @default(uuid()) @db.Uuid
  nome       String      @unique @db.VarChar(255)
  brinquedos Brinquedo[]

  @@map("tipos_brinquedos")
}

##

URIS de conexão

### para um serviço entre containers use

- DATABASE_URL="postgresql://postgres:123456@postgres:5432/locacaotest?schema=public"

### para desenvolvimento local, use

- DATABASE_URL="postgresql://postgres:123456@localhost:5433/locacaotest?schema=public"
