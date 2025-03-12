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
const dateSchema_1 = require('./dateSchema')
/* ======================================
   Schema de valicação para o modelo Pagamento
   ====================================== */
exports.CreatePagamentoValidator = zod_1.z
  .object({
    cpf_cliente: zod_1.z
      .string()
      .refine(GeneralValidator_1.default.validateCpf, {
        message: 'Invalid CPF format. Please provide a valid CPF.',
      }),
    cod_locacao: zod_1.z.string().uuid(),
    data_pagamento: dateSchema_1.dateSchema.optional(), // Default now se não informado
    valor_pagamento: zod_1.z
      .number()
      .gte(0)
      .refine(GeneralValidator_1.default.validateMoney, {
        message: 'valor_pagamento must be a money float type',
      }),
  })
  .strict()
