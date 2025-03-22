import { Pagamento, PrismaClient } from '../../generated/prisma_client'
import { BaseService } from './BaseService'
import LocacaoServices from './LocacaoServices'
import { PagamentoResponseDTO } from '../dtos/response/PagamentoResponseDTO'
import { CreatePagamentoDTO } from '../dtos/create/CreatePagamentoDTO'
import { UpdatePagamentoDTO } from '../dtos/update/UpdatePagamentoDTO'
import { ApiError } from '../utils/ApiError'

export default class PagamentoServices extends BaseService<
  PagamentoResponseDTO,
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

  public getOne = async (pk: string): Promise<PagamentoResponseDTO | null> => {
    return await this.prisma.pagamento.findUnique({
      where: { cod: pk },
      include: {
        locacao: true, // consulta populada: nome usaso no prisma schema
      },
    })
  }

  public create = async (
    data: CreatePagamentoDTO,
  ): Promise<PagamentoResponseDTO> => {
    // É preciso atualizar o status de pagamento
    const locacaoDB = await this.prisma.locacao.findUnique({
      where: { cod: data.cod_locacao },
    })
    if (!locacaoDB) {
      throw new ApiError(404, 'Rental not found')
    }

    // Obter o valor total de locação
    const totalValue = await this.locacaoService.getTotalValue(data.cod_locacao)

    // verificar se o valor é suficiente
    if (data.valor_pagamento < totalValue) {
      throw new ApiError(404, 'Payment value is not enought')
    }

    // atualizar o status de pgto da locação
    const updatedLocadao = await this.locacaoService.update(data.cod_locacao, {
      pgto_status: 'PAGO',
    })

    if (!updatedLocadao) {
      throw new ApiError(500, 'Unable to update rental')
    }

    // Salva o novo pagamento utilizando o método create do Prisma
    const createdPagamento = await this.prisma.pagamento.create({
      data: { ...data, valor_locacao: totalValue },
    })

    return createdPagamento
  }

  public update = async (
    pk: string,
    data: UpdatePagamentoDTO,
  ): Promise<PagamentoResponseDTO> => {
    throw new Error('Method not implemented.')
  }

  public delete = async (pk: string): Promise<boolean> => {
    throw new Error('Method not implemented.')
  }
}
