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
const prisma_client_1 = require('../../generated/prisma_client')
const base_service_1 = require('./base.service')
const locacao_services_1 = __importDefault(require('./locacao.services'))
const api_error_util_1 = require('../utils/api-error.util')
class PagamentoServices extends base_service_1.BaseService {
  constructor() {
    super(new prisma_client_1.PrismaClient())
    this.getAll = () =>
      __awaiter(this, void 0, void 0, function* () {
        return yield this.prisma.pagamento.findMany()
      })
    this.getOne = pk =>
      __awaiter(this, void 0, void 0, function* () {
        return yield this.prisma.pagamento.findUnique({
          where: { cod: pk },
          include: {
            locacao: true,
          },
        })
      })
    this.create = data =>
      __awaiter(this, void 0, void 0, function* () {
        // It is necessary to update the rental payment status (rental is only allowed if there is payment)
        const locacaoDB = yield this.prisma.locacao.findUnique({
          where: { cod: data.cod_locacao },
        })
        if (!locacaoDB) {
          throw new api_error_util_1.ApiError(404, 'Rental not found')
        }
        // Get the total rental value
        const totalValue = yield this.locacaoService.getTotalValue(
          data.cod_locacao,
        )
        // Check if the value is sufficient
        if (data.valor_pagamento < totalValue) {
          throw new api_error_util_1.ApiError(
            404,
            'Payment value is not enought',
          )
        }
        // Update rental payment status
        const updatedLocadao = yield this.locacaoService.update(
          data.cod_locacao,
          {
            pgto_status: 'PAGO',
          },
        )
        if (!updatedLocadao) {
          throw new api_error_util_1.ApiError(500, 'Unable to update rental')
        }
        // Save the new payment using Prisma's create method
        const createdPagamento = yield this.prisma.pagamento.create({
          data: Object.assign(Object.assign({}, data), {
            valor_locacao: totalValue,
          }),
        })
        return createdPagamento
      })
    this.update = (pk, data) =>
      __awaiter(this, void 0, void 0, function* () {
        throw new Error('Method not implemented.')
      })
    this.delete = pk =>
      __awaiter(this, void 0, void 0, function* () {
        throw new Error('Method not implemented.')
      })
    this.locacaoService = new locacao_services_1.default()
  }
}
exports.default = PagamentoServices
