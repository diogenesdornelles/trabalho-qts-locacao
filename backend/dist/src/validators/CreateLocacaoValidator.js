'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.CreateLocacaoValidator = void 0
const zod_1 = require('zod')
const GeneralValidator_1 = __importDefault(require('./GeneralValidator'))
/* ======================================
   Schema de validação para criação do modelo Locacao
   ====================================== */
exports.CreateLocacaoValidator = zod_1.z
  .object({
    cpf_cliente: zod_1.z
      .string()
      .refine(GeneralValidator_1.default.validateCpf, {
        message: 'Invalid CPF format. Please provide a valid CPF.',
      }),
  })
  .strict()
