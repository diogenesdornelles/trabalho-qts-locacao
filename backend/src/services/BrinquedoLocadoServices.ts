import { Request } from 'express'
import { BrinquedoLocado, PrismaClient } from '../../generated/prisma_client'
import { z } from 'zod'
import { BrinquedoLocadoSchema } from '../schemas/schemas'
import { BaseService } from './BaseService'

export default class BrinquedoLocadoServices extends BaseService<BrinquedoLocado> {
  constructor() {
    super(new PrismaClient())
  }

  public getAll = async (): Promise<BrinquedoLocado[]> => {
    try {
      return await this.prisma.brinquedoLocado.findMany()
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error fetching all rented toys:', error.message)
        throw new Error(`Database error: ${error.message}`)
      }
      throw new Error('An unknown error occurred while fetching toys.')
    }
  }

  public getOne = async (pk: string): Promise<BrinquedoLocado | null> => {
    try {
      return await this.prisma.brinquedoLocado.findUnique({
        where: { cod: pk },
      })
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error fetching rented toy:', error.message)
        throw new Error(`Database error: ${error.message}`)
      }
      throw new Error('An unknown error occurred while fetching rented toy.')
    }
  }

  public create = async (req: Request): Promise<BrinquedoLocado> => {
    try {
      // Valida os dados recebidos no corpo da requisição
      const validatedData = BrinquedoLocadoSchema.parse(req.body)

      // Salva o novo brinquedo locado utilizando o método create do Prisma
      const createdBrinquedoLocado = await this.prisma.brinquedoLocado.create({
        data: validatedData,
      })
      return createdBrinquedoLocado
    } catch (error: unknown) {
      // Trata erros de validação do Zod
      if (error instanceof z.ZodError) {
        console.error('Validation error on create rented toy:', error.errors)
        throw new Error(
          `Validation error: ${error.errors.map(err => err.message).join(', ')}`,
        )
      }
      // Trata erros genéricos (incluindo erros do Prisma)
      if (error instanceof Error) {
        console.error('Database error on create rented toy:', error.message)
        throw new Error(`Database error: ${error.message}`)
      }
      throw new Error('An unknown error occurred while saving rented toy.')
    }
  }

  public update = async (
    pk: string,
    req: Request,
  ): Promise<Partial<BrinquedoLocado>> => {
    try {
      // Cria uma versão parcial do schema para permitir atualizações parciais
      const partialSchema = BrinquedoLocadoSchema.partial()

      // Valida os dados enviados (parciais) no corpo da requisição
      const validatedData = partialSchema.parse(req.body)

      // Remove as chaves com valor undefined
      const updateData = Object.fromEntries(
        Object.entries(validatedData).filter(
          ([_, value]) => value !== undefined,
        ),
      )

      // Remove o campo 'cod' caso esteja presente, para evitar atualizar a PK
      delete updateData['cod']

      // Atualiza o brinquedo locado utilizando o método update do Prisma
      const updatedBrinquedoLocado = await this.prisma.brinquedoLocado.update({
        where: { cod: pk },
        data: updateData,
      })

      return updatedBrinquedoLocado
    } catch (error: unknown) {
      if (error instanceof z.ZodError) {
        console.error('Validation error on update rented toy:', error.errors)
        throw new Error(
          `Validation error: ${error.errors.map(err => err.message).join(', ')}`,
        )
      }
      if (error instanceof Error) {
        console.error('Database error on update rented toy:', error.message)
        throw new Error(`Database error: ${error.message}`)
      }
      throw new Error('An unknown error occurred while updating rented toy.')
    }
  }

  public delete = async (pk: string): Promise<boolean> => {
    try {
      await this.prisma.brinquedoLocado.delete({
        where: { cod: pk },
      })
      return true
    } catch (error: unknown) {
      return false
    }
  }
}
