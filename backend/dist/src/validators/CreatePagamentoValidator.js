'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.CreatePagamentoValidator = void 0
const zod_1 = require('zod')
const GeneralValidator_1 = __importDefault(require('./GeneralValidator'))
/* ======================================
   Schema de valicação para o modelo Pagamento
   ====================================== */
exports.CreatePagamentoValidator = zod_1.z
  .object({
    cpf_cliente: zod_1.z
      .string()
      .transform(str => str.replace(/\D/g, ''))
      .refine(GeneralValidator_1.default.validateCpf, {
        message: 'Invalid CPF format. Please provide a valid CPF.',
      }),
    cod_locacao: zod_1.z.string().uuid(),
    valor_pagamento: zod_1.z
      .number()
      .gte(0)
      .transform(num => Math.round(num * 100) / 100),
  })
  .strict()
