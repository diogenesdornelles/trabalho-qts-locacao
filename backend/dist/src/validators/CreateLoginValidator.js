'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.CreateLoginValidator = void 0
const zod_1 = require('zod')
const GeneralValidator_1 = __importDefault(require('./GeneralValidator'))
/* ======================================
   Schema para o modelo Login
   ====================================== */
exports.CreateLoginValidator = zod_1.z
  .object({
    cpf: zod_1.z
      .string()
      .transform(str => str.replace(/\D/g, ''))
      .refine(GeneralValidator_1.default.validateCpf, {
        message: 'Invalid CPF format. Please provide a valid CPF.',
      }),
    senha: zod_1.z.string().refine(GeneralValidator_1.default.isValidPwd, {
      message: `
            // - At least 8 chars
            // - At least one lower char
            // - At least one upper char
            // - At least one digit
            // - At least one special char
        `,
    }),
  })
  .strict()
