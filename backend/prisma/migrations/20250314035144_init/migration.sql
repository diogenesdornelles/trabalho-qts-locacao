-- CreateEnum
CREATE TYPE "Funcao" AS ENUM ('GERENTE', 'CAIXA', 'AGENTE_LOCACAO', 'ANALISTA_CADASTRO', 'ALMOXARIFE');

-- CreateTable
CREATE TABLE "brinquedos" (
    "cod" UUID NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "tipo_brinquedo" UUID NOT NULL,
    "marca" VARCHAR(255) NOT NULL,
    "data_aquisicao" DATE NOT NULL,
    "valor_locacao" MONEY NOT NULL,

    CONSTRAINT "brinquedos_pkey" PRIMARY KEY ("cod")
);

-- CreateTable
CREATE TABLE "brinquedos_locados" (
    "cod" UUID NOT NULL,
    "valor_unitario" MONEY NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "cod_locacao" UUID NOT NULL,
    "data_devolucao" DATE NOT NULL,
    "cod_brinquedo" UUID NOT NULL,

    CONSTRAINT "brinquedos_locados_pkey" PRIMARY KEY ("cod")
);

-- CreateTable
CREATE TABLE "clientes" (
    "cpf" CHAR(11) NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "endereco" VARCHAR(255) NOT NULL,
    "data_nascimento" DATE NOT NULL,
    "telefone" VARCHAR(11) NOT NULL,

    CONSTRAINT "clientes_pkey" PRIMARY KEY ("cpf")
);

-- CreateTable
CREATE TABLE "funcionarios" (
    "cpf" CHAR(11) NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "telefone" VARCHAR(11) NOT NULL,
    "funcao" "Funcao" NOT NULL,
    "senha" VARCHAR(128) NOT NULL,

    CONSTRAINT "funcionarios_pkey" PRIMARY KEY ("cpf")
);

-- CreateTable
CREATE TABLE "locacoes" (
    "cod" UUID NOT NULL,
    "data_hora" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cpf_cliente" CHAR(11) NOT NULL,

    CONSTRAINT "locacoes_pkey" PRIMARY KEY ("cod")
);

-- CreateTable
CREATE TABLE "pagamentos" (
    "cod" UUID NOT NULL,
    "cpf_cliente" CHAR(11) NOT NULL,
    "cod_locacao" UUID NOT NULL,
    "data_pagamento" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "valor_pagamento" MONEY NOT NULL,
    "valor_locacao" MONEY NOT NULL,

    CONSTRAINT "pagamentos_pkey" PRIMARY KEY ("cod")
);

-- CreateTable
CREATE TABLE "tipos_brinquedos" (
    "cod" UUID NOT NULL,
    "nome" VARCHAR(255) NOT NULL,

    CONSTRAINT "tipos_brinquedos_pkey" PRIMARY KEY ("cod")
);

-- CreateIndex
CREATE UNIQUE INDEX "brinquedos_nome_key" ON "brinquedos"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "pagamentos_cod_locacao_key" ON "pagamentos"("cod_locacao");

-- CreateIndex
CREATE UNIQUE INDEX "tipos_brinquedos_nome_key" ON "tipos_brinquedos"("nome");

-- AddForeignKey
ALTER TABLE "brinquedos" ADD CONSTRAINT "brinquedos_tipo_brinquedo_fkey" FOREIGN KEY ("tipo_brinquedo") REFERENCES "tipos_brinquedos"("cod") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "brinquedos_locados" ADD CONSTRAINT "brinquedos_locados_cod_locacao_fkey" FOREIGN KEY ("cod_locacao") REFERENCES "locacoes"("cod") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "brinquedos_locados" ADD CONSTRAINT "brinquedos_locados_cod_brinquedo_fkey" FOREIGN KEY ("cod_brinquedo") REFERENCES "brinquedos"("cod") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "locacoes" ADD CONSTRAINT "locacoes_cpf_cliente_fkey" FOREIGN KEY ("cpf_cliente") REFERENCES "clientes"("cpf") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pagamentos" ADD CONSTRAINT "pagamentos_cod_locacao_fkey" FOREIGN KEY ("cod_locacao") REFERENCES "locacoes"("cod") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pagamentos" ADD CONSTRAINT "pagamentos_cpf_cliente_fkey" FOREIGN KEY ("cpf_cliente") REFERENCES "clientes"("cpf") ON DELETE RESTRICT ON UPDATE CASCADE;
