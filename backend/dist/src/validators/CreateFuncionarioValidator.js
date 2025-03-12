'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.CreateFuncionarioValidator = exports.FuncaoEnum = void 0
const zod_1 = require('zod')
const GeneralValidator_1 = __importDefault(require('./GeneralValidator'))
/* ======================================
   Schema de validação para o modelo criação de Funcionario
   ====================================== */
exports.FuncaoEnum = zod_1.z.enum([
  'GERENTE',
  'ANALISTA_LOCACAO',
  'ANALISTA_CADASTRO',
  'ALMOXARIFE',
  'CAIXA',
])
exports.CreateFuncionarioValidator = zod_1.z
  .object({
    cpf: zod_1.z.string().refine(GeneralValidator_1.default.validateCpf, {
      message: 'Invalid CPF format. Please provide a valid CPF.',
    }),
    nome: zod_1.z.string().min(3).max(255),
    telefone: zod_1.z
      .string()
      .refine(GeneralValidator_1.default.validatePhone, {
        message: 'Please provide a valid Phone.',
      }),
    senha: zod_1.z.string().refine(GeneralValidator_1.default.isValidPwd, {
      message: `
            // - Pelo menos 8 caracteres
            // - Pelo menos uma letra minúscula
            // - Pelo menos uma letra maiúscula
            // - Pelo menos um dígito
            // - Pelo menos um caractere especial
        `,
    }),
    funcao: exports.FuncaoEnum,
  })
  .strict()
