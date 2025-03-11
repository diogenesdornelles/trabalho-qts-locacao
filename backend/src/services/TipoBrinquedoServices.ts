import { TipoBrinquedo, PrismaClient } from '../../generated/prisma_client'
import { z } from 'zod'
import { BaseService } from './BaseService'
import { TipoBrinquedoResponseDTO } from '../dtos/response/TipoBrinquedoResponseDTO'
import { CreateTipoBrinquedoDTO } from '../dtos/create/CreateTipoBrinquedoDTO'
import { UpdateTipoBrinquedoDTO } from '../dtos/update/UpdateTipoBrinquedoDTO'

export default class TipoBrinquedoServices extends BaseService<
  TipoBrinquedoResponseDTO,
  CreateTipoBrinquedoDTO,
  UpdateTipoBrinquedoDTO
> {
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

  public getOne = async (
    pk: string,
  ): Promise<TipoBrinquedoResponseDTO | null> => {
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

  public create = async (
    data: CreateTipoBrinquedoDTO,
  ): Promise<TipoBrinquedoResponseDTO> => {
    try {
      const createdTipoBrinquedo = await this.prisma.tipoBrinquedo.create({
        data,
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
    data: UpdateTipoBrinquedoDTO,
  ): Promise<Partial<TipoBrinquedoResponseDTO>> => {
    try {
      // Atualiza o tipo brinquedo utilizando o método update do Prisma
      const updatedTipoBrinquedo = await this.prisma.tipoBrinquedo.update({
        where: { cod: pk },
        data,
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
