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
const base_service_1 = require('./base.service')
class TipoBrinquedoServices extends base_service_1.BaseService {
  constructor() {
    super(new prisma_client_1.PrismaClient())
    this.getAll = () =>
      __awaiter(this, void 0, void 0, function* () {
        return yield this.prisma.tipoBrinquedo.findMany()
      })
    this.getOne = pk =>
      __awaiter(this, void 0, void 0, function* () {
        return yield this.prisma.tipoBrinquedo.findUnique({
          where: { cod: pk },
        })
      })
    this.create = data =>
      __awaiter(this, void 0, void 0, function* () {
        const createdTipoBrinquedo = yield this.prisma.tipoBrinquedo.create({
          data,
        })
        return createdTipoBrinquedo
      })
    this.update = (pk, data) =>
      __awaiter(this, void 0, void 0, function* () {
        // Atualiza o tipo brinquedo utilizando o método update do Prisma
        const updatedTipoBrinquedo = yield this.prisma.tipoBrinquedo.update({
          where: { cod: pk },
          data,
        })
        return updatedTipoBrinquedo
      })
    this.delete = pk =>
      __awaiter(this, void 0, void 0, function* () {
        try {
          yield this.prisma.tipoBrinquedo.delete({
            where: { cod: pk },
          })
          return true
        } catch (error) {
          return false
        }
      })
  }
}
exports.default = TipoBrinquedoServices
