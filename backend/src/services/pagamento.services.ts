import { Pagamento, PrismaClient } from '../../generated/prisma_client'
import { BaseService } from './base.service'
import LocacaoServices from './locacao.services'
import { ResponsePagamentoDTO } from '../dtos/response/response-pagamento.dto'
import { CreatePagamentoDTO } from '../dtos/create/create-pagamento.dto'
import { UpdatePagamentoDTO } from '../dtos/update/update.pagamento.dto'
import { ApiError } from '../utils/api-error.util'

export default class PagamentoServices extends BaseService<
  ResponsePagamentoDTO,
  CreatePagamentoDTO,
  UpdatePagamentoDTO
> {
  protected locacaoService: LocacaoServices
  constructor() {
    super(new PrismaClient())
    this.locacaoService = new LocacaoServices()
  }

  public getAll = async (): Promise<Pagamento[]> => {
    return await this.prisma.pagamento.findMany()
  }

  public getOne = async (pk: string): Promise<ResponsePagamentoDTO | null> => {
    return await this.prisma.pagamento.findUnique({
      where: { cod: pk },
      include: {
        locacao: true,
      },
    })
  }

  public create = async (
    data: CreatePagamentoDTO,
  ): Promise<ResponsePagamentoDTO> => {
    // It is necessary to update the rental payment status (rental is only allowed if there is payment)
    const locacaoDB = await this.prisma.locacao.findUnique({
      where: { cod: data.cod_locacao },
    })
    if (!locacaoDB) {
      throw new ApiError(404, 'Rental not found')
    }

    // Get the total rental value
    const totalValue = await this.locacaoService.getTotalValue(data.cod_locacao)

    // Check if the value is sufficient
    if (data.valor_pagamento < totalValue) {
      throw new ApiError(404, 'Payment value is not enought')
    }

    // Update rental payment status
    const updatedLocadao = await this.locacaoService.update(data.cod_locacao, {
      pgto_status: 'PAGO',
    })

    if (!updatedLocadao) {
      throw new ApiError(500, 'Unable to update rental')
    }

    // Save the new payment using Prisma's create method
    const createdPagamento = await this.prisma.pagamento.create({
      data: { ...data, valor_locacao: totalValue },
    })

    return createdPagamento
  }

  public update = async (
    pk: string,
    data: UpdatePagamentoDTO,
  ): Promise<ResponsePagamentoDTO> => {
    throw new Error('Method not implemented.')
  }

  public delete = async (pk: string): Promise<boolean> => {
    throw new Error('Method not implemented.')
  }
}
