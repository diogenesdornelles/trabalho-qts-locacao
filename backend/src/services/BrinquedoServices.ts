import { PrismaClient } from '../../generated/prisma_client'
import { z } from 'zod'
import { BaseService } from './BaseService'
import { BrinquedoResponseComTipoDTO } from '../dtos/response/BrinquedoResponseComTipoDTO'
import { BrinquedoResponseDTO } from '../dtos/response/BrinquedoResponseDTO'
import { CreateBrinquedoDTO } from '../dtos/create/CreateBrinquedoDTO'
import { UpdateBrinquedoDTO } from '../dtos/update/UpdateBrinquedoDTO'

export default class BrinquedoServices extends BaseService<
  BrinquedoResponseDTO,
  CreateBrinquedoDTO,
  UpdateBrinquedoDTO
> {
  constructor() {
    super(new PrismaClient())
  }

  public getAll = async (): Promise<BrinquedoResponseComTipoDTO[]> => {
    try {
      return await this.prisma.brinquedo.findMany({
        include: {
          tipoBrinquedo: true,
        },
      })
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error fetching all toys:', error.message)
        throw new Error(`Database error: ${error.message}`)
      }
      throw new Error('An unknown error occurred while fetching toys.')
    }
  }

  public getOne = async (
    pk: string,
  ): Promise<BrinquedoResponseComTipoDTO | null> => {
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

  public create = async (
    data: CreateBrinquedoDTO,
  ): Promise<BrinquedoResponseDTO> => {
    try {
      // Salva o novo brinquedo utilizando o método create do Prisma
      const createdBrinquedo = await this.prisma.brinquedo.create({ data })
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
    data: UpdateBrinquedoDTO,
  ): Promise<Partial<BrinquedoResponseDTO>> => {
    try {
      const updatedBrinquedo = await this.prisma.brinquedo.update({
        where: { cod: pk },
        data,
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
