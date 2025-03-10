import { z } from 'zod'
import GeneralValidator from '../validators/GeneralValidator'

// Schema auxiliar para converter strings ou Date em objeto Date
const dateSchema = z.preprocess(arg => {
  if (typeof arg === 'string' || arg instanceof Date) {
    const d = new Date(arg)
    if (!isNaN(d.getTime())) return d
  }
  return undefined
}, z.date())

const telefoneSchema = z
  .string()
  .regex(/^\d{10,11}$/, 'Telefone deve conter exatamente 10 ou 11 dígitos')

/* ================================
   Schema para o modelo Brinquedo
   ================================ */
export const BrinquedoSchema = z.object({
  cod: z.string().uuid().optional(), // Gerado automaticamente
  nome: z.string().max(255),
  // Nome da chave ajustado para corresponder ao Prisma (tipo_brinquedo)
  tipo_brinquedo: z.string().uuid(),
  marca: z.string().max(255),
  data_aquisicao: dateSchema,
  valor_locacao: z.number().gte(0).refine(GeneralValidator.validateMoney, {
    message: 'valor_locacao must be a money float type',
  }),
  // Relação com TipoBrinquedo: pode ser validada separadamente
  tipoBrinquedo: z.any().optional(),
})

/* ================================
   Schema para o modelo Cliente
   ================================ */
export const ClienteSchema = z.object({
  cpf: z.string().refine(GeneralValidator.validateCpf, {
    message: 'Invalid CPF format. Please provide a valid CPF.',
  }),
  nome: z.string().max(255),
  endereco: z.string().max(255),
  data_nascimento: dateSchema,
  telefone: telefoneSchema,
  // Relações opcionais
  locacoes: z.array(z.any()).optional(),
  pagamentos: z.array(z.any()).optional(),
})

/* ======================================
   Schema para o modelo Funcionario
   ====================================== */
export const FuncaoEnum = z.enum([
  'GERENTE',
  'ANALISTA_LOCACAO',
  'ANALISTA_CADASTRO',
  'ALMOXARIFE',
])
export const FuncionarioSchema = z.object({
  cpf: z.string().refine(GeneralValidator.validateCpf, {
    message: 'Invalid CPF format. Please provide a valid CPF.',
  }),
  nome: z.string().max(255),
  telefone: telefoneSchema,
  senha: z.string().max(30),
  funcao: FuncaoEnum,
})

/* ======================================
   Schema para o modelo BrinquedoLocado
   ====================================== */
export const BrinquedoLocadoSchema = z.object({
  cod: z.string().uuid().optional(), // Gerado automaticamente
  valor_unitario: z.number().gte(0).refine(GeneralValidator.validateMoney, {
    message: 'valor_unitario must be a money float type',
  }),
  nome: z.string().max(255),
  cod_locacao: z.string().uuid(),
  // Campo adicionado conforme o Prisma
  cod_brinquedo: z.string().uuid(),
  data_devolucao: dateSchema,
})

/* ======================================
   Schema para o modelo Locacao
   ====================================== */
export const LocacaoSchema = z.object({
  cod: z.string().uuid().optional(), // Gerado automaticamente
  data_hora: dateSchema.optional(), // Se não informado, usa "now"
  cpf_cliente: z.string().refine(GeneralValidator.validateCpf, {
    message: 'Invalid CPF format. Please provide a valid CPF.',
  }),
  brinquedosLocados: z.array(BrinquedoLocadoSchema).optional(),
  // Relações de leitura
  cliente: z.any().optional(),
  pagamento: z.any().optional(),
})

/* ======================================
   Schema para o modelo Pagamento
   ====================================== */
export const PagamentoSchema = z.object({
  cod: z.string().uuid().optional(), // Gerado automaticamente
  cpf_cliente: z.string().refine(GeneralValidator.validateCpf, {
    message: 'Invalid CPF format. Please provide a valid CPF.',
  }),
  cod_locacao: z.string().uuid(),
  data_pagamento: dateSchema.optional(), // Default now se não informado
  valor_pagamento: z.number().gte(0).refine(GeneralValidator.validateMoney, {
    message: 'valor_pagamento must be a money float type',
  }),
  valor_locacao: z.number().gte(0).refine(GeneralValidator.validateMoney, {
    message: 'valor_locacao must be a money float type',
  }),
  // Relações opcionais na entrada
  locacao: z.any().optional(),
  cliente: z.any().optional(),
})

/* ======================================
   Schema para o modelo TipoBrinquedo
   ====================================== */
export const TipoBrinquedoSchema = z.object({
  cod: z.string().uuid().optional(), // Gerado automaticamente
  nome: z.string().max(255),
  brinquedos: z.array(BrinquedoSchema).optional(),
})
