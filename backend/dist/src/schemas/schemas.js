"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoBrinquedoSchema = exports.PagamentoSchema = exports.LocacaoSchema = exports.BrinquedoLocadoSchema = exports.FuncionarioSchema = exports.FuncaoEnum = exports.ClienteSchema = exports.BrinquedoSchema = void 0;
const zod_1 = require("zod");
const GeneralValidator_1 = __importDefault(require("../validators/GeneralValidator"));
// Schema auxiliar para converter strings ou Date em objeto Date
const dateSchema = zod_1.z.preprocess(arg => {
    if (typeof arg === 'string' || arg instanceof Date) {
        const d = new Date(arg);
        if (!isNaN(d.getTime()))
            return d;
    }
    return undefined;
}, zod_1.z.date());
const telefoneSchema = zod_1.z
    .string()
    .regex(/^\d{10,11}$/, 'Telefone deve conter exatamente 10 ou 11 dígitos');
/* ================================
   Schema para o modelo Brinquedo
   ================================ */
exports.BrinquedoSchema = zod_1.z.object({
    cod: zod_1.z.string().uuid().optional(), // Gerado automaticamente
    nome: zod_1.z.string().max(255),
    // Nome da chave ajustado para corresponder ao Prisma (tipo_brinquedo)
    tipo_brinquedo: zod_1.z.string().uuid(),
    marca: zod_1.z.string().max(255),
    data_aquisicao: dateSchema,
    valor_locacao: zod_1.z.number().gte(0).refine(GeneralValidator_1.default.validateMoney, {
        message: 'valor_locacao must be a money float type',
    }),
    // Relação com TipoBrinquedo: pode ser validada separadamente
    tipoBrinquedo: zod_1.z.any().optional(),
});
/* ================================
   Schema para o modelo Cliente
   ================================ */
exports.ClienteSchema = zod_1.z.object({
    cpf: zod_1.z.string().refine(GeneralValidator_1.default.validateCpf, {
        message: 'Invalid CPF format. Please provide a valid CPF.',
    }),
    nome: zod_1.z.string().max(255),
    endereco: zod_1.z.string().max(255),
    data_nascimento: dateSchema,
    telefone: telefoneSchema,
    // Relações opcionais
    locacoes: zod_1.z.array(zod_1.z.any()).optional(),
    pagamentos: zod_1.z.array(zod_1.z.any()).optional(),
});
/* ======================================
   Schema para o modelo Funcionario
   ====================================== */
exports.FuncaoEnum = zod_1.z.enum([
    'GERENTE',
    'ANALISTA_LOCACAO',
    'ANALISTA_CADASTRO',
    'ALMOXARIFE',
]);
exports.FuncionarioSchema = zod_1.z.object({
    cpf: zod_1.z.string().refine(GeneralValidator_1.default.validateCpf, {
        message: 'Invalid CPF format. Please provide a valid CPF.',
    }),
    nome: zod_1.z.string().max(255),
    telefone: telefoneSchema,
    senha: zod_1.z.string().max(30),
    funcao: exports.FuncaoEnum,
});
/* ======================================
   Schema para o modelo BrinquedoLocado
   ====================================== */
exports.BrinquedoLocadoSchema = zod_1.z.object({
    cod: zod_1.z.string().uuid().optional(), // Gerado automaticamente
    valor_unitario: zod_1.z.number().gte(0).refine(GeneralValidator_1.default.validateMoney, {
        message: 'valor_unitario must be a money float type',
    }),
    nome: zod_1.z.string().max(255),
    cod_locacao: zod_1.z.string().uuid(),
    // Campo adicionado conforme o Prisma
    cod_brinquedo: zod_1.z.string().uuid(),
    data_devolucao: dateSchema,
});
/* ======================================
   Schema para o modelo Locacao
   ====================================== */
exports.LocacaoSchema = zod_1.z.object({
    cod: zod_1.z.string().uuid().optional(), // Gerado automaticamente
    data_hora: dateSchema.optional(), // Se não informado, usa "now"
    cpf_cliente: zod_1.z.string().refine(GeneralValidator_1.default.validateCpf, {
        message: 'Invalid CPF format. Please provide a valid CPF.',
    }),
    brinquedosLocados: zod_1.z.array(exports.BrinquedoLocadoSchema).optional(),
    // Relações de leitura
    cliente: zod_1.z.any().optional(),
    pagamento: zod_1.z.any().optional(),
});
/* ======================================
   Schema para o modelo Pagamento
   ====================================== */
exports.PagamentoSchema = zod_1.z.object({
    cod: zod_1.z.string().uuid().optional(), // Gerado automaticamente
    cpf_cliente: zod_1.z.string().refine(GeneralValidator_1.default.validateCpf, {
        message: 'Invalid CPF format. Please provide a valid CPF.',
    }),
    cod_locacao: zod_1.z.string().uuid(),
    data_pagamento: dateSchema.optional(), // Default now se não informado
    valor_pagamento: zod_1.z.number().gte(0).refine(GeneralValidator_1.default.validateMoney, {
        message: 'valor_pagamento must be a money float type',
    }),
    valor_locacao: zod_1.z.number().gte(0).refine(GeneralValidator_1.default.validateMoney, {
        message: 'valor_locacao must be a money float type',
    }),
    // Relações opcionais na entrada
    locacao: zod_1.z.any().optional(),
    cliente: zod_1.z.any().optional(),
});
/* ======================================
   Schema para o modelo TipoBrinquedo
   ====================================== */
exports.TipoBrinquedoSchema = zod_1.z.object({
    cod: zod_1.z.string().uuid().optional(), // Gerado automaticamente
    nome: zod_1.z.string().max(255),
    brinquedos: zod_1.z.array(exports.BrinquedoSchema).optional(),
});
