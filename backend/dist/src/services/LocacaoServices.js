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
Object.defineProperty(exports, '__esModule', { value: true })
const prisma_client_1 = require('../../generated/prisma_client')
const BaseService_1 = require('./BaseService')
class LocacaoServices extends BaseService_1.BaseService {
  constructor() {
    super(new prisma_client_1.PrismaClient())
    this.getAll = () =>
      __awaiter(this, void 0, void 0, function* () {
        return yield this.prisma.locacao.findMany()
      })
    this.getTotalValue = pk =>
      __awaiter(this, void 0, void 0, function* () {
        let totalValorUnitario = 0.0
        const locacao = yield this.getOne(pk)
        if (locacao && locacao.brinquedosLocados.length > 0) {
          totalValorUnitario = locacao.brinquedosLocados.reduce(
            (total, brinquedo) => {
              // Converte o valor_unitario para número, se necessário
              return total + Number(brinquedo.valor_unitario)
            },
            0,
          )
        }
        return totalValorUnitario
      })
    this.getOne = pk =>
      __awaiter(this, void 0, void 0, function* () {
        return yield this.prisma.locacao.findUnique({
          where: { cod: pk },
          include: {
            brinquedosLocados: true, // consulta populada: nome usaso no prisma schema
          },
        })
      })
    this.create = data =>
      __awaiter(this, void 0, void 0, function* () {
        const createdLocacao = yield this.prisma.locacao.create({ data })
        return createdLocacao
      })
    this.update = (pk, data) =>
      __awaiter(this, void 0, void 0, function* () {
        throw new Error('Method not implemented.')
      })
    this.delete = pk =>
      __awaiter(this, void 0, void 0, function* () {
        throw new Error('Method not implemented.')
      })
  }
}
exports.default = LocacaoServices
