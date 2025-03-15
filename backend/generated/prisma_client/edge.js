
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.5.0
 * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
 */
Prisma.prismaVersion = {
  client: "6.5.0",
  engine: "173f8d54f8d52e692c7e27e72a88314ec7aeff60"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.BrinquedoScalarFieldEnum = {
  cod: 'cod',
  nome: 'nome',
  tipo_brinquedo: 'tipo_brinquedo',
  marca: 'marca',
  data_aquisicao: 'data_aquisicao',
  valor_locacao: 'valor_locacao'
};

exports.Prisma.BrinquedoLocadoScalarFieldEnum = {
  cod: 'cod',
  valor_unitario: 'valor_unitario',
  nome: 'nome',
  cod_locacao: 'cod_locacao',
  data_devolucao: 'data_devolucao',
  cod_brinquedo: 'cod_brinquedo'
};

exports.Prisma.ClienteScalarFieldEnum = {
  cpf: 'cpf',
  nome: 'nome',
  endereco: 'endereco',
  data_nascimento: 'data_nascimento',
  telefone: 'telefone'
};

exports.Prisma.FuncionarioScalarFieldEnum = {
  cpf: 'cpf',
  nome: 'nome',
  telefone: 'telefone',
  funcao: 'funcao',
  senha: 'senha'
};

exports.Prisma.LocacaoScalarFieldEnum = {
  cod: 'cod',
  data_hora: 'data_hora',
  cpf_cliente: 'cpf_cliente',
  pgto_status: 'pgto_status'
};

exports.Prisma.PagamentoScalarFieldEnum = {
  cod: 'cod',
  cpf_cliente: 'cpf_cliente',
  cod_locacao: 'cod_locacao',
  data_pagamento: 'data_pagamento',
  valor_pagamento: 'valor_pagamento',
  valor_locacao: 'valor_locacao'
};

exports.Prisma.TipoBrinquedoScalarFieldEnum = {
  cod: 'cod',
  nome: 'nome'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};
exports.Funcao = exports.$Enums.Funcao = {
  GERENTE: 'GERENTE',
  CAIXA: 'CAIXA',
  AGENTE_LOCACAO: 'AGENTE_LOCACAO',
  ANALISTA_CADASTRO: 'ANALISTA_CADASTRO',
  ALMOXARIFE: 'ALMOXARIFE'
};

exports.PgtoStatus = exports.$Enums.PgtoStatus = {
  PENDENTE: 'PENDENTE',
  PAGO: 'PAGO',
  ATRASO: 'ATRASO'
};

exports.Prisma.ModelName = {
  Brinquedo: 'Brinquedo',
  BrinquedoLocado: 'BrinquedoLocado',
  Cliente: 'Cliente',
  Funcionario: 'Funcionario',
  Locacao: 'Locacao',
  Pagamento: 'Pagamento',
  TipoBrinquedo: 'TipoBrinquedo'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/diodornelles/programacao/trabalho-qts-locacao/backend/generated/prisma_client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "/home/diodornelles/programacao/trabalho-qts-locacao/backend/prisma/schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "6.5.0",
  "engineVersion": "173f8d54f8d52e692c7e27e72a88314ec7aeff60",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\ngenerator client {\n  provider = \"prisma-client-js\"\n  output   = \"../generated/prisma_client\"\n}\n\nmodel Brinquedo {\n  cod               String            @id @default(uuid()) @db.Uuid\n  nome              String            @unique @db.VarChar(255)\n  tipo_brinquedo    String            @db.Uuid\n  marca             String            @db.VarChar(255)\n  data_aquisicao    DateTime          @db.Date\n  valor_locacao     Decimal           @db.Money\n  tipoBrinquedo     TipoBrinquedo     @relation(fields: [tipo_brinquedo], references: [cod])\n  brinquedosLocados BrinquedoLocado[]\n\n  @@map(\"brinquedos\")\n}\n\nmodel BrinquedoLocado {\n  cod            String    @id @default(uuid()) @db.Uuid\n  valor_unitario Decimal   @db.Money\n  nome           String    @db.VarChar(255)\n  cod_locacao    String    @db.Uuid\n  data_devolucao DateTime  @db.Date\n  cod_brinquedo  String    @db.Uuid\n  locacao        Locacao   @relation(fields: [cod_locacao], references: [cod])\n  brinquedo      Brinquedo @relation(fields: [cod_brinquedo], references: [cod])\n\n  @@map(\"brinquedos_locados\")\n}\n\nmodel Cliente {\n  cpf             String      @id @db.Char(11)\n  nome            String      @db.VarChar(255)\n  endereco        String      @db.VarChar(255)\n  data_nascimento DateTime    @db.Date\n  telefone        String      @db.VarChar(11)\n  locacoes        Locacao[]\n  pagamentos      Pagamento[]\n\n  @@map(\"clientes\")\n}\n\nenum Funcao {\n  GERENTE\n  CAIXA\n  AGENTE_LOCACAO\n  ANALISTA_CADASTRO\n  ALMOXARIFE\n}\n\nmodel Funcionario {\n  cpf      String @id @db.Char(11)\n  nome     String @db.VarChar(255)\n  telefone String @db.VarChar(11)\n  funcao   Funcao\n  senha    String @db.VarChar(128)\n\n  @@map(\"funcionarios\")\n}\n\nenum PgtoStatus {\n  PENDENTE\n  PAGO\n  ATRASO\n}\n\nmodel Locacao {\n  cod               String            @id @default(uuid()) @db.Uuid\n  data_hora         DateTime          @default(now()) @db.Date\n  cpf_cliente       String            @db.Char(11)\n  pgto_status       PgtoStatus        @default(PENDENTE)\n  brinquedosLocados BrinquedoLocado[]\n  cliente           Cliente           @relation(fields: [cpf_cliente], references: [cpf])\n  pagamento         Pagamento?\n\n  @@map(\"locacoes\")\n}\n\nmodel Pagamento {\n  cod             String   @id @default(uuid()) @db.Uuid\n  cpf_cliente     String   @db.Char(11)\n  cod_locacao     String   @unique @db.Uuid\n  data_pagamento  DateTime @default(now()) @db.Date\n  valor_pagamento Decimal  @db.Money\n  valor_locacao   Decimal  @db.Money\n  locacao         Locacao  @relation(fields: [cod_locacao], references: [cod])\n  cliente         Cliente  @relation(fields: [cpf_cliente], references: [cpf])\n\n  @@map(\"pagamentos\")\n}\n\nmodel TipoBrinquedo {\n  cod        String      @id @default(uuid()) @db.Uuid\n  nome       String      @unique @db.VarChar(255)\n  brinquedos Brinquedo[]\n\n  @@map(\"tipos_brinquedos\")\n}\n",
  "inlineSchemaHash": "39fb310d9d834f566900d4a0c6538b5db33e59273da64ec34767ef093c6c140e",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Brinquedo\":{\"dbName\":\"brinquedos\",\"schema\":null,\"fields\":[{\"name\":\"cod\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo_brinquedo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"marca\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data_aquisicao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"valor_locacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Money\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipoBrinquedo\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TipoBrinquedo\",\"nativeType\":null,\"relationName\":\"BrinquedoToTipoBrinquedo\",\"relationFromFields\":[\"tipo_brinquedo\"],\"relationToFields\":[\"cod\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brinquedosLocados\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BrinquedoLocado\",\"nativeType\":null,\"relationName\":\"BrinquedoToBrinquedoLocado\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"BrinquedoLocado\":{\"dbName\":\"brinquedos_locados\",\"schema\":null,\"fields\":[{\"name\":\"cod\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"valor_unitario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Money\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cod_locacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data_devolucao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cod_brinquedo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"locacao\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Locacao\",\"nativeType\":null,\"relationName\":\"BrinquedoLocadoToLocacao\",\"relationFromFields\":[\"cod_locacao\"],\"relationToFields\":[\"cod\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brinquedo\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brinquedo\",\"nativeType\":null,\"relationName\":\"BrinquedoToBrinquedoLocado\",\"relationFromFields\":[\"cod_brinquedo\"],\"relationToFields\":[\"cod\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Cliente\":{\"dbName\":\"clientes\",\"schema\":null,\"fields\":[{\"name\":\"cpf\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"11\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endereco\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data_nascimento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"telefone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"11\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"locacoes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Locacao\",\"nativeType\":null,\"relationName\":\"ClienteToLocacao\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pagamentos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Pagamento\",\"nativeType\":null,\"relationName\":\"ClienteToPagamento\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Funcionario\":{\"dbName\":\"funcionarios\",\"schema\":null,\"fields\":[{\"name\":\"cpf\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"11\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"telefone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"11\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"funcao\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Funcao\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"senha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"128\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Locacao\":{\"dbName\":\"locacoes\",\"schema\":null,\"fields\":[{\"name\":\"cod\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data_hora\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cpf_cliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"11\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pgto_status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"PgtoStatus\",\"nativeType\":null,\"default\":\"PENDENTE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brinquedosLocados\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BrinquedoLocado\",\"nativeType\":null,\"relationName\":\"BrinquedoLocadoToLocacao\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cliente\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Cliente\",\"nativeType\":null,\"relationName\":\"ClienteToLocacao\",\"relationFromFields\":[\"cpf_cliente\"],\"relationToFields\":[\"cpf\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pagamento\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Pagamento\",\"nativeType\":null,\"relationName\":\"LocacaoToPagamento\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Pagamento\":{\"dbName\":\"pagamentos\",\"schema\":null,\"fields\":[{\"name\":\"cod\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cpf_cliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"11\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cod_locacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data_pagamento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"valor_pagamento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Money\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"valor_locacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Money\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"locacao\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Locacao\",\"nativeType\":null,\"relationName\":\"LocacaoToPagamento\",\"relationFromFields\":[\"cod_locacao\"],\"relationToFields\":[\"cod\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cliente\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Cliente\",\"nativeType\":null,\"relationName\":\"ClienteToPagamento\",\"relationFromFields\":[\"cpf_cliente\"],\"relationToFields\":[\"cpf\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TipoBrinquedo\":{\"dbName\":\"tipos_brinquedos\",\"schema\":null,\"fields\":[{\"name\":\"cod\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brinquedos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brinquedo\",\"nativeType\":null,\"relationName\":\"BrinquedoToTipoBrinquedo\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"Funcao\":{\"values\":[{\"name\":\"GERENTE\",\"dbName\":null},{\"name\":\"CAIXA\",\"dbName\":null},{\"name\":\"AGENTE_LOCACAO\",\"dbName\":null},{\"name\":\"ANALISTA_CADASTRO\",\"dbName\":null},{\"name\":\"ALMOXARIFE\",\"dbName\":null}],\"dbName\":null},\"PgtoStatus\":{\"values\":[{\"name\":\"PENDENTE\",\"dbName\":null},{\"name\":\"PAGO\",\"dbName\":null},{\"name\":\"ATRASO\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

