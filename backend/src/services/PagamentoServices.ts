import { Pagamento, PrismaClient } from '../../generated/prisma_client'
import { z } from 'zod'
import { BaseService } from './BaseService'
import LocacaoServices from './LocacaoServices'
import { PagamentoResponseDTO } from '../dtos/PagamentoResponseDTO'
import { CreatePagamentoDTO } from '../dtos/CreatePagamentoDTO'
import { UpdatePagamentoDTO } from '../dtos/UpdatePagamentoDTO'

export default class PagamentoServices extends BaseService<
  PagamentoResponseDTO,
  CreatePagamentoDTO,
  UpdatePagamentoDTO
> {
  constructor() {
    super(new PrismaClient())
  }

  public getAll = async (): Promise<Pagamento[]> => {
    try {
      return await this.prisma.pagamento.findMany()
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error fetching all payments:', error.message)
        throw new Error(`Database error: ${error.message}`)
      }
      throw new Error('An unknown error occurred while fetching payments.')
    }
  }

  public getOne = async (pk: string): Promise<PagamentoResponseDTO | null> => {
    try {
      return await this.prisma.pagamento.findUnique({
        where: { cod: pk },
        include: {
          locacao: true, // consulta populada: nome usaso no prisma schema
        },
      })
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error fetching payment:', error.message)
        throw new Error(`Database error: ${error.message}`)
      }
      throw new Error('An unknown error occurred while fetching payment.')
    }
  }

  public create = async (
    data: CreatePagamentoDTO,
  ): Promise<PagamentoResponseDTO> => {
    try {
      // É preciso atualizar valor total, através da locação e seus respectivos itens locados
      const locacaoService = new LocacaoServices()
      data.valor_locacao = await locacaoService.getTotalValue(data.cod_locacao)

      // Salva o novo pagamento utilizando o método create do Prisma
      const createdPagamento = await this.prisma.pagamento.create({ data })

      return createdPagamento
    } catch (error: unknown) {
      // Trata erros de validação do Zod
      if (error instanceof z.ZodError) {
        console.error('Validation error on create payment:', error.errors)
        throw new Error(
          `Validation error: ${error.errors.map(err => err.message).join(', ')}`,
        )
      }
      // Trata erros genéricos (incluindo erros do Prisma)
      if (error instanceof Error) {
        console.error('Database error on create payment:', error.message)
        throw new Error(`Database error: ${error.message}`)
      }
      throw new Error('An unknown error occurred while saving payment.')
    }
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
