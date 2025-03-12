'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.CreateBrinquedoValidator = void 0
const zod_1 = require('zod')
const GeneralValidator_1 = __importDefault(require('./GeneralValidator'))
const dateSchema_1 = require('./dateSchema')
/* ================================
   Schema para validação de criação do modelo Brinquedo
   ================================ */
exports.CreateBrinquedoValidator = zod_1.z
  .object({
    nome: zod_1.z.string().min(3).max(255),
    // Nome da chave ajustado para corresponder ao Prisma (tipo_brinquedo)
    tipo_brinquedo: zod_1.z.string().uuid(),
    marca: zod_1.z.string().min(3).max(255),
    data_aquisicao: dateSchema_1.dateSchema,
    valor_locacao: zod_1.z
      .number()
      .gte(0)
      .refine(GeneralValidator_1.default.validateMoney, {
        message: 'valor_locacao must be a money float type',
      }),
  })
  .strict()
