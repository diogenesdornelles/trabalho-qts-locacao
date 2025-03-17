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
class BrinquedoServices extends BaseService_1.BaseService {
  constructor() {
    super(new prisma_client_1.PrismaClient())
    this.getAll = () =>
      __awaiter(this, void 0, void 0, function* () {
        return yield this.prisma.brinquedo.findMany({
          include: {
            tipoBrinquedo: true,
          },
        })
      })
    this.getOne = pk =>
      __awaiter(this, void 0, void 0, function* () {
        return yield this.prisma.brinquedo.findUnique({
          where: { cod: pk },
          include: {
            tipoBrinquedo: true, // consulta populada: nome usaso no prisma schema
          },
        })
      })
    this.create = data =>
      __awaiter(this, void 0, void 0, function* () {
        // Salva o novo brinquedo utilizando o método create do Prisma
        const createdBrinquedo = yield this.prisma.brinquedo.create({ data })
        return createdBrinquedo
      })
    this.update = (pk, data) =>
      __awaiter(this, void 0, void 0, function* () {
        const updatedBrinquedo = yield this.prisma.brinquedo.update({
          where: { cod: pk },
          data,
        })
        return updatedBrinquedo
      })
    this.delete = pk =>
      __awaiter(this, void 0, void 0, function* () {
        try {
          yield this.prisma.brinquedo.delete({
            where: { cod: pk },
          })
          return true
        } catch (error) {
          return false
        }
      })
  }
}
exports.default = BrinquedoServices
