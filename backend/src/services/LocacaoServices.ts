import { Request } from 'express'
import {
  BrinquedoLocado,
  Locacao,
  PrismaClient,
} from '../../generated/prisma_client'
import { z } from 'zod'
import { LocacaoSchema } from '../schemas/schemas'
import { BaseService } from './BaseService'

type LocacaoComBrinquedos = Locacao & {
  brinquedosLocados: BrinquedoLocado[]
}

export default class LocacaoServices extends BaseService<Locacao> {
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

  public getOne = async (pk: string): Promise<LocacaoComBrinquedos | null> => {
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

  public create = async (req: Request): Promise<Locacao> => {
    try {
      // Valida os dados recebidos no corpo da requisição
      const validatedData = LocacaoSchema.parse(req.body)

      // Salva o novo funcionário utilizando o método create do Prisma
      const createdLocacao = await this.prisma.locacao.create({
        data: {
          cpf_cliente: validatedData.cpf_cliente,
        },
      })
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

  public update = async (pk: string, req: Request): Promise<Locacao> => {
    try {
      // Cria uma versão parcial do schema para permitir atualizações parciais
      const partialSchema = LocacaoSchema.partial()

      // Valida os dados enviados (parciais) no corpo da requisição
      const validatedData = partialSchema.parse(req.body)

      // Remove as chaves com valor undefined
      const updateData = Object.fromEntries(
        Object.entries(validatedData).filter(
          ([_, value]) => value !== undefined,
        ),
      )

      // Remove cod (pk) se houver, para evitar update
      delete updateData['cod']

      // Atualiza o funcionário utilizando o método update do Prisma
      const updatedLocacao = await this.prisma.locacao.update({
        where: { cod: pk },
        data: updateData,
      })
      return updatedLocacao
    } catch (error: unknown) {
      if (error instanceof z.ZodError) {
        console.error('Validation error on update rental:', error.errors)
        throw new Error(
          `Validation error: ${error.errors.map(err => err.message).join(', ')}`,
        )
      }
      if (error instanceof Error) {
        console.error('Database error on update rental:', error.message)
        throw new Error(`Database error: ${error.message}`)
      }
      throw new Error('An unknown error occurred while updating rental.')
    }
  }

  public delete = async (pk: string): Promise<boolean> => {
    try {
      await this.prisma.locacao.delete({
        where: { cod: pk },
      })
      return true
    } catch (error: unknown) {
      return false
    }
  }
}
