import { Request } from 'express'
import {
  Brinquedo,
  PrismaClient,
  TipoBrinquedo,
} from '../../generated/prisma_client'
import { z } from 'zod'
import { BrinquedoSchema } from '../schemas/schemas'
import { BaseService } from './BaseService'

type BrinquedoComTipo = Brinquedo & {
  tipoBrinquedo: TipoBrinquedo
}

export default class BrinquedoServices extends BaseService<Brinquedo> {
  constructor() {
    super(new PrismaClient())
  }

  public getAll = async (): Promise<Brinquedo[]> => {
    try {
      return await this.prisma.brinquedo.findMany()
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error fetching all toys:', error.message)
        throw new Error(`Database error: ${error.message}`)
      }
      throw new Error('An unknown error occurred while fetching toys.')
    }
  }

  public getOne = async (pk: string): Promise<BrinquedoComTipo | null> => {
    try {
      return await this.prisma.brinquedo.findUnique({
        where: { cod: pk },
        include: {
          tipoBrinquedo: true, // consulta populada: nome usaso no prisma schema
        },
      })
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error fetching toy:', error.message)
        throw new Error(`Database error: ${error.message}`)
      }
      throw new Error('An unknown error occurred while fetching toy.')
    }
  }

  public create = async (req: Request): Promise<Brinquedo> => {
    try {
      // Valida os dados recebidos no corpo da requisição
      const validatedData = BrinquedoSchema.parse(req.body)

      // Salva o novo brinquedo utilizando o método create do Prisma
      const createdBrinquedo = await this.prisma.brinquedo.create({
        data: validatedData,
      })
      return createdBrinquedo
    } catch (error: unknown) {
      // Trata erros de validação do Zod
      if (error instanceof z.ZodError) {
        console.error('Validation error on create toy:', error.errors)
        throw new Error(
          `Validation error: ${error.errors.map(err => err.message).join(', ')}`,
        )
      }
      // Trata erros genéricos (incluindo erros do Prisma)
      if (error instanceof Error) {
        console.error('Database error on create toy:', error.message)
        throw new Error(`Database error: ${error.message}`)
      }
      throw new Error('An unknown error occurred while saving toy.')
    }
  }

  public update = async (
    pk: string,
    req: Request,
  ): Promise<Partial<Brinquedo>> => {
    try {
      // Cria uma versão parcial do schema para permitir atualizações parciais
      const partialSchema = BrinquedoSchema.partial()

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

      // Atualiza o brinquedo utilizando o método update do Prisma
      const updatedBrinquedo = await this.prisma.brinquedo.update({
        where: { cod: pk },
        data: updateData,
      })

      return updatedBrinquedo
    } catch (error: unknown) {
      if (error instanceof z.ZodError) {
        console.error('Validation error on update toy:', error.errors)
        throw new Error(
          `Validation error: ${error.errors.map(err => err.message).join(', ')}`,
        )
      }
      if (error instanceof Error) {
        console.error('Database error on update toy:', error.message)
        throw new Error(`Database error: ${error.message}`)
      }
      throw new Error('An unknown error occurred while updating toy.')
    }
  }

  public delete = async (pk: string): Promise<boolean> => {
    try {
      await this.prisma.brinquedo.delete({
        where: { cod: pk },
      })
      return true
    } catch (error: unknown) {
      return false
    }
  }
}
