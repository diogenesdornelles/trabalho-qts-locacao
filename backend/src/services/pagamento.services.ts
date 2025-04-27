import { Pagamento, PrismaClient } from '../../generated/prisma_client'
import { BaseService } from './base.service'
import LocacaoServices from './locacao.services'
import { ResponsePagamentoDTO } from '../dtos/response/response-pagamento.dto'
import { CreatePagamentoDTO } from '../dtos/create/create-pagamento.dto'
import { UpdatePagamentoDTO } from '../dtos/update/update.pagamento.dto'
import { ApiError } from '../utils/api-error.util'

/**
 * Service for managing payments.
 *
 * @export
 * @class PagamentoServices
 * @extends {BaseService<ResponsePagamentoDTO, CreatePagamentoDTO, UpdatePagamentoDTO>}
 */
export default class PagamentoServices extends BaseService<
  ResponsePagamentoDTO,
  CreatePagamentoDTO,
  UpdatePagamentoDTO
> {
  protected locacaoService: LocacaoServices

  /**
   * Creates an instance of PagamentoServices.
   * @memberof PagamentoServices
   */
  constructor() {
    super(new PrismaClient())
    this.locacaoService = new LocacaoServices()
  }

  /**
   * Get all payments.
   *
   * @memberof PagamentoServices
   * @returns {Promise<Pagamento[]>} A list of payments.
   */
  public getAll = async (): Promise<Pagamento[]> => {
    return await this.prisma.pagamento.findMany()
  }

  /**
   * Get one payment by UUID.
   *
   * @param {string} pk - The UUID of the payment.
   * @returns {Promise<ResponsePagamentoDTO | null>} The payment or null if not found.
   */
  public getOne = async (pk: string): Promise<ResponsePagamentoDTO | null> => {
    return await this.prisma.pagamento.findUnique({
      where: { cod: pk },
      include: {
        locacao: true, // Populated query: includes rental details
      },
    })
  }

  /**
   * Create a new payment.
   *
   * @param {CreatePagamentoDTO} data - The data for the new payment.
   * @returns {Promise<ResponsePagamentoDTO>} The created payment.
   * @throws {ApiError} If the rental does not exist, is not active, or the payment value is insufficient.
   */
  public create = async (
    data: CreatePagamentoDTO,
  ): Promise<ResponsePagamentoDTO> => {
    return await this.prisma.$transaction(async prisma => {
      // Check if the rental exists and is active
      const locacaoDB = await prisma.locacao.findUnique({
        where: { cod: data.cod_locacao, ativo: true },
      })

      // If the rental does not exist or is not active, throw an error
      if (!locacaoDB) {
        throw new ApiError(404, 'Rental not found or not active')
      }

      // Get the total rental value
      const totalValue = await this.locacaoService.getTotalValue(
        data.cod_locacao,
      )

      // Check if the payment value is sufficient
      if (data.valor_pagamento < totalValue) {
        throw new ApiError(400, 'Payment value is not enough')
      }

      // Update the rental payment status
      const updatedLocacao = await prisma.locacao.update({
        where: { cod: locacaoDB.cod },
        data: { pgto_status: 'PAGO' },
      })

      // If the rental update fails, throw an error
      if (!updatedLocacao) {
        throw new ApiError(500, 'Unable to update rental')
      }

      // Save the new payment
      const createdPagamento = await prisma.pagamento.create({
        data: { ...data, valor_locacao: totalValue },
      })

      return createdPagamento
    })
  }

  /**
   * Update a payment by UUID.
   *
   * @param {string} pk - The UUID of the payment.
   * @param {UpdatePagamentoDTO} data - The data to update the payment.
   * @returns {Promise<ResponsePagamentoDTO>} The updated payment.
   * @throws {Error} Method not implemented.
   */
  public update = async (
    pk: string,
    data: UpdatePagamentoDTO,
  ): Promise<ResponsePagamentoDTO> => {
    throw new Error('Method not implemented.')
  }

  /**
   * Delete a payment by UUID.
   *
   * @param {string} pk - The UUID of the payment.
   * @returns {Promise<boolean>} True if the payment was deleted, false otherwise.
   * @throws {Error} Method not implemented.
   */
  public delete = async (pk: string): Promise<boolean> => {
    throw new Error('Method not implemented.')
  }
}
