'use strict'
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const zod_1 = require('zod')
const prisma_client_1 = require('./generated/prisma_client')
const schemas_1 = require('./src/schemas/schemas')
const hashPwd_1 = __importDefault(require('./src/utils/hashPwd'))
const prisma = new prisma_client_1.PrismaClient()
function main() {
  return __awaiter(this, void 0, void 0, function* () {
    try {
      const data = {
        cpf: '00480171084',
        nome: 'Diogenes',
        telefone: '1199111111',
        funcao: prisma_client_1.Funcao.GERENTE, // Use os valores do enum como string
        senha: '#123ABCabd',
      }
      const validatedData = schemas_1.FuncionarioSchema.parse(data)
      validatedData.senha = yield (0, hashPwd_1.default)(validatedData.senha)
      const gerente = yield prisma.funcionario.create({
        data: {
          cpf: validatedData.cpf,
          telefone: validatedData.telefone,
          funcao: validatedData.funcao,
          nome: validatedData.nome,
          senha: validatedData.senha,
        },
      })
      console.log(gerente)
    } catch (error) {
      // Trata erros de validação do Zod
      if (error instanceof zod_1.z.ZodError) {
        console.error('Validation error on create employee:', error.errors)
        throw new Error(
          `Validation error: ${error.errors.map(err => err.message).join(', ')}`,
        )
      }
      // Trata erros genéricos (incluindo erros do Prisma)
      if (error instanceof Error) {
        console.error('Database error on create employee:', error.message)
        throw new Error(`Database error: ${error.message}`)
      }
      throw new Error('An unknown error occurred while saving employee.')
    }
  })
}
main()
  .catch(e => {
    console.error(e)
  })
  .finally(() =>
    __awaiter(void 0, void 0, void 0, function* () {
      yield prisma.$disconnect()
    }),
  )
