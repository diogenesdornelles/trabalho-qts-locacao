import { Request } from 'express'
import { TipoBrinquedo, PrismaClient } from '../../generated/prisma_client'
import { z } from 'zod'
import { TipoBrinquedoSchema } from '../schemas/schemas'
import { BaseService } from './BaseService'

export default class TipoBrinquedoServices extends BaseService<TipoBrinquedo> {
  constructor() {
    super(new PrismaClient())
  }

  public getAll = async (): Promise<TipoBrinquedo[]> => {
    try {
      return await this.prisma.tipoBrinquedo.findMany()
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error fetching all type toys:', error.message)
        throw new Error(`Database error: ${error.message}`)
      }
      throw new Error('An unknown error occurred while fetching type toys.')
    }
  }

  public getOne = async (pk: string): Promise<TipoBrinquedo | null> => {
    try {
      return await this.prisma.tipoBrinquedo.findUnique({
        where: { cod: pk },
      })
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error fetching type toy:', error.message)
        throw new Error(`Database error: ${error.message}`)
      }
      throw new Error('An unknown error occurred while fetching type toy.')
    }
  }

  public create = async (req: Request): Promise<TipoBrinquedo> => {
    try {
      // Valida os dados recebidos no corpo da requisição
      const validatedData = TipoBrinquedoSchema.parse(req.body)

      // Salva o novo tipo brinquedo utilizando o método create do Prisma
      const createdTipoBrinquedo = await this.prisma.tipoBrinquedo.create({
        data: {
          nome: validatedData.nome,
        },
      })
      return createdTipoBrinquedo
    } catch (error: unknown) {
      // Trata erros de validação do Zod
      if (error instanceof z.ZodError) {
        console.error('Validation error on create type toy:', error.errors)
        throw new Error(
          `Validation error: ${error.errors.map(err => err.message).join(', ')}`,
        )
      }
      // Trata erros genéricos (incluindo erros do Prisma)
      if (error instanceof Error) {
        console.error('Database error on create type toy:', error.message)
        throw new Error(`Database error: ${error.message}`)
      }
      throw new Error('An unknown error occurred while saving typpe toy.')
    }
  }

  public update = async (
    pk: string,
    req: Request,
  ): Promise<Partial<TipoBrinquedo>> => {
    try {
      // Cria uma versão parcial do schema para permitir atualizações parciais
      const partialSchema = TipoBrinquedoSchema.partial()

      // Valida os dados enviados (parciais) no corpo da requisição
      const validatedData = partialSchema.parse(req.body)

      // Remove as chaves com valor undefined
      const updateData = Object.fromEntries(
        Object.entries(validatedData).filter(
          ([_, value]) => value !== undefined,
        ),
      )

      // Remove o campo 'cpf' caso esteja presente, para evitar atualizar a PK
      delete updateData['cod']

      // Atualiza o tipo brinquedo utilizando o método update do Prisma
      const updatedTipoBrinquedo = await this.prisma.tipoBrinquedo.update({
        where: { cod: pk },
        data: updateData,
      })

      return updatedTipoBrinquedo
    } catch (error: unknown) {
      if (error instanceof z.ZodError) {
        console.error('Validation error on update type toy:', error.errors)
        throw new Error(
          `Validation error: ${error.errors.map(err => err.message).join(', ')}`,
        )
      }
      if (error instanceof Error) {
        console.error('Database error on update type toy:', error.message)
        throw new Error(`Database error: ${error.message}`)
      }
      throw new Error('An unknown error occurred while updating type toy.')
    }
  }

  public delete = async (pk: string): Promise<boolean> => {
    try {
      await this.prisma.tipoBrinquedo.delete({
        where: { cod: pk },
      })
      return true
    } catch (error: unknown) {
      return false
    }
  }
}
