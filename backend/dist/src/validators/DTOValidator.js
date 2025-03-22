'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const zod_1 = require('zod')
const GeneralValidator_1 = __importDefault(require('./GeneralValidator'))
class DTOValidator {
  constructor() {
    /*
            Definindo os esquemas (schemas) como propriedades privadas
            para cada tipo de validação.
        
            Para usar no frontend, basta fazer as importações e usar como na camada controller
          */
    this.dateSchema = zod_1.z.preprocess(arg => {
      if (typeof arg === 'string' || arg instanceof Date) {
        const d = new Date(arg)
        if (!isNaN(d.getTime())) return d
      }
      return undefined
    }, zod_1.z.date())
    this.createBrinquedoSchema = zod_1.z
      .object({
        nome: zod_1.z
          .string()
          .min(3, 'Nome precisa ter ao menos 3 caracteres')
          .max(255, 'Nome pode ter no máximo 255 caracteres'),
        // Chave ajustada para corresponder ao Prisma (tipo_brinquedo)
        tipo_brinquedo: zod_1.z
          .string()
          .uuid('Deve ser informado UUID válido de tipo brinquedo'),
        marca: zod_1.z
          .string()
          .min(3, 'Marca deve ter no mínimo 3 caracteres')
          .max(255, 'Marca deve ter no máximo 255 caracteres'),
        data_aquisicao: this.dateSchema.refine(date => date <= new Date(), {
          message: 'Data de aquisição deve ser menor ou igual a data atual',
        }),
        valor_locacao: zod_1.z
          .number()
          .gt(0, 'Valor mínimo de compra deve ser R$ 0,01')
          .transform(num => Math.round(num * 100) / 100),
      })
      .strict()
    this.createBrinquedoLocadoSchema = zod_1.z
      .object({
        cod_locacao: zod_1.z
          .string()
          .uuid('Deve informar UUID de locação válido'),
        cod_brinquedo: zod_1.z
          .string()
          .uuid('Deve informar UUID de brinquedo válido'),
      })
      .strict()
    this.createClienteSchema = zod_1.z
      .object({
        cpf: zod_1.z
          .string()
          .transform(str => str.replace(/\D/g, ''))
          .refine(GeneralValidator_1.default.validateCpf, {
            message: 'CPF inválido',
          }),
        nome: zod_1.z
          .string()
          .min(3, 'Nome deve ter no mínimo 3 caracteres')
          .max(255, 'Nome pode ter no máximo 255 caracteres'),
        endereco: zod_1.z
          .string()
          .min(3, 'Endereço deve ter no mínimo 3 caracteres')
          .max(255, 'Endereço deve ter no máximo 255 caracteres'),
        data_nascimento: this.dateSchema.refine(date => date <= new Date(), {
          message: 'Data de nascimento deve ser menor ou igual a atual',
        }),
        telefone: zod_1.z
          .string()
          .transform(str => str.replace(/\D/g, ''))
          .refine(GeneralValidator_1.default.validatePhone, {
            message: 'Forneça um telefone entre 10 e 11 dígitos',
          }),
      })
      .strict()
    this.FuncaoEnum = zod_1.z.enum([
      'GERENTE',
      'AGENTE_LOCACAO',
      'ANALISTA_CADASTRO',
      'ALMOXARIFE',
      'CAIXA',
    ])
    this.createFuncionarioSchema = zod_1.z
      .object({
        cpf: zod_1.z
          .string()
          .transform(str => str.replace(/\D/g, ''))
          .refine(GeneralValidator_1.default.validateCpf, {
            message: 'Forneça um CPF válido.',
          }),
        nome: zod_1.z
          .string()
          .min(3, 'Nome deve ter no mínimo 3 caracteres')
          .max(255, 'Nome deve ter no máximo 255 caracteres'),
        telefone: zod_1.z
          .string()
          .transform(str => str.replace(/\D/g, ''))
          .refine(GeneralValidator_1.default.validatePhone, {
            message: 'Telefone deve ter entre 10 e 11 dígitos',
          }),
        senha: zod_1.z.string().refine(GeneralValidator_1.default.isValidPwd, {
          message: `
            Ao menos 8 caracteres
            Ao menos um caracter minúsculo
            Ao menos um caracter maiúsculo
            Ao menos um dígito
            Ao menos um caracter especial 
        `,
        }),
        funcao: this.FuncaoEnum,
      })
      .strict()
    this.createLocacaoSchema = zod_1.z
      .object({
        cpf_cliente: zod_1.z
          .string()
          .transform(str => str.replace(/\D/g, ''))
          .refine(GeneralValidator_1.default.validateCpf, {
            message: 'CPF inválido.',
          }),
      })
      .strict()
    this.createLoginSchema = zod_1.z
      .object({
        cpf: zod_1.z
          .string()
          .transform(str => str.replace(/\D/g, ''))
          .refine(GeneralValidator_1.default.validateCpf, {
            message: 'Invalid CPF format. Please provide a valid CPF.',
          }),
        senha: zod_1.z.string().refine(GeneralValidator_1.default.isValidPwd, {
          message: `
            Ao menos 8 caracteres
            Ao menos um caracter minúsculo
            Ao menos um caracter maiúsculo
            Ao menos um dígito
            Ao menos um caracter especial 
        `,
        }),
      })
      .strict()
    this.createPagamentoSchema = zod_1.z
      .object({
        cpf_cliente: zod_1.z
          .string()
          .transform(str => str.replace(/\D/g, ''))
          .refine(GeneralValidator_1.default.validateCpf, {
            message: 'CPF inválido.',
          }),
        cod_locacao: zod_1.z
          .string()
          .uuid('Forneça um UUID de locação correto'),
        valor_pagamento: zod_1.z
          .number()
          .gt(0, 'Valor mínimo de compra deve ser R$ 0,01')
          .transform(num => Math.round(num * 100) / 100),
      })
      .strict()
    this.createTipoBrinquedoSchema = zod_1.z
      .object({
        nome: zod_1.z
          .string()
          .min(3, 'Nome deve ter no mínimo 3 caracteres')
          .max(255, 'Nome deve ter no máximo 255 caracteres'),
      })
      .strict()
    // Esquemas de atualização
    this.updateBrinquedoLocadoSchema =
      this.createBrinquedoLocadoSchema.partial()
    this.updateBrinquedoSchema = this.createBrinquedoSchema.partial()
    this.updateClienteSchema = this.createClienteSchema
      .omit({ cpf: true })
      .partial()
    this.updateFuncionarioSchema = this.createFuncionarioSchema
      .omit({ cpf: true })
      .partial()
    this.PgtoStatusEnum = zod_1.z.enum(['PAGO', 'PENDENTE', 'ATRASO'])
    this.updateLocacaoSchema = zod_1.z
      .object({
        cpf_cliente: zod_1.z
          .string()
          .transform(str => str.replace(/\D/g, ''))
          .refine(GeneralValidator_1.default.validateCpf, {
            message: 'CPF inválido',
          }),
        pgto_status: this.PgtoStatusEnum,
      })
      .strict()
    this.updatePagamentoSchema = this.createPagamentoSchema.partial()
    this.updateTipoBrinquedoSchema = this.createTipoBrinquedoSchema.partial()
  }
  /*
        Métodos estáticos para validação, que recebem o objeto de entrada,
        executam o parse e retornam o objeto validado ou lançam erros caso haja divergências.
      */
  createBrinquedo(obj) {
    return this.createBrinquedoSchema.parse(obj)
  }
  createBrinquedoLocado(obj) {
    return this.createBrinquedoLocadoSchema.parse(obj)
  }
  createCliente(obj) {
    return this.createClienteSchema.parse(obj)
  }
  createFuncionario(obj) {
    return this.createFuncionarioSchema.parse(obj)
  }
  createLocacao(obj) {
    return this.createLocacaoSchema.parse(obj)
  }
  createLogin(obj) {
    return this.createLoginSchema.parse(obj)
  }
  createPagamento(obj) {
    return this.createPagamentoSchema.parse(obj)
  }
  createTipoBrinquedo(obj) {
    return this.createTipoBrinquedoSchema.parse(obj)
  }
  updateBrinquedoLocado(obj) {
    return this.updateBrinquedoLocadoSchema.parse(obj)
  }
  updateBrinquedo(obj) {
    return this.updateBrinquedoSchema.parse(obj)
  }
  updateCliente(obj) {
    return this.updateClienteSchema.parse(obj)
  }
  updateFuncionario(obj) {
    return this.updateFuncionarioSchema.parse(obj)
  }
  updateLocacao(obj) {
    return this.updateLocacaoSchema.parse(obj)
  }
  updatePagamento(obj) {
    return this.updatePagamentoSchema.parse(obj)
  }
  updateTipoBrinquedo(obj) {
    return this.updateTipoBrinquedoSchema.parse(obj)
  }
}
exports.default = DTOValidator
