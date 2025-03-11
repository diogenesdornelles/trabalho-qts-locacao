import { Locacao, PrismaClient } from '../../generated/prisma_client'
import { z } from 'zod'
import { BaseService } from './BaseService'
import { LocacaoResponseDTO } from '../dtos/response/LocacaoResponseDTO'
import { LocacaoResponseComBrinquedosDTO } from '../dtos/response/LocacaoResponseComBrinquedosDTO'
import { CreateLocacaoDTO } from '../dtos/create/CreateLocacaoDTO'
import { UpdateLocacaoDTO } from '../dtos/update/UpdateLocacaoDTO'

export default class LocacaoServices extends BaseService<
  LocacaoResponseDTO,
  CreateLocacaoDTO,
  UpdateLocacaoDTO
> {
  constructor() {
    super(new PrismaClient())
  }

  public getAll = async (): Promise<Locacao[]> => {
    try {
      return await this.prisma.locacao.findMany()
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error fetching all rentals:', error.message)
        throw new Error(`Database error: ${error.message}`)
      }
      throw new Error('An unknown error occurred while fetching rentals.')
    }
  }

  public getTotalValue = async (pk: string): Promise<number> => {
    let totalValorUnitario = 0.0
    const locacao = await this.getOne(pk)
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
  }

  public getOne = async (
    pk: string,
  ): Promise<LocacaoResponseComBrinquedosDTO | null> => {
    try {
      return await this.prisma.locacao.findUnique({
        where: { cod: pk },
        include: {
          brinquedosLocados: true, // consulta populada: nome usaso no prisma schema
        },
      })
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error fetching rental:', error.message)
        throw new Error(`Database error: ${error.message}`)
      }
      throw new Error('An unknown error occurred while fetching rental.')
    }
  }

  public create = async (
    data: CreateLocacaoDTO,
  ): Promise<LocacaoResponseDTO> => {
    try {
      const createdLocacao = await this.prisma.locacao.create({ data })
      return createdLocacao
    } catch (error: unknown) {
      // Trata erros de validação do Zod
      if (error instanceof z.ZodError) {
        console.error('Validation error on create rental:', error.errors)
        throw new Error(
          `Validation error: ${error.errors.map(err => err.message).join(', ')}`,
        )
      }
      // Trata erros genéricos (incluindo erros do Prisma)
      if (error instanceof Error) {
        console.error('Database error on create rental:', error.message)
        throw new Error(`Database error: ${error.message}`)
      }
      throw new Error('An unknown error occurred while saving rental.')
    }
  }

  public update = async (
    pk: string,
    data: UpdateLocacaoDTO,
  ): Promise<LocacaoResponseDTO> => {
    throw new Error('Method not implemented.')
  }

  public delete = async (pk: string): Promise<boolean> => {
    throw new Error('Method not implemented.')
  }
}
