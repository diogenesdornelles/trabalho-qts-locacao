import { PrismaClient } from '../../generated/prisma_client'
import { z } from 'zod'
import { BaseService } from './BaseService'
import { BrinquedoLocadoResponseDTO } from '../dtos/BrinquedoLocadoResponseDTO'
import { UpdateBrinquedoDTO } from '../dtos/UpdateBrinquedoDTO'
import { CreateBrinquedoLocadoDTO } from '../dtos/CreateBrinquedoLocadoDTO'
import { UpdateBrinquedoLocadoDTO } from '../dtos/UpdateBrinquedoLocadoDTO'

export default class BrinquedoLocadoServices extends BaseService<
  BrinquedoLocadoResponseDTO,
  CreateBrinquedoLocadoDTO,
  UpdateBrinquedoLocadoDTO
> {
  constructor() {
    super(new PrismaClient())
  }

  public getAll = async (): Promise<BrinquedoLocadoResponseDTO[]> => {
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

  public getOne = async (
    pk: string,
  ): Promise<BrinquedoLocadoResponseDTO | null> => {
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

  public create = async (
    data: CreateBrinquedoLocadoDTO,
  ): Promise<BrinquedoLocadoResponseDTO> => {
    try {
      // Salva o novo brinquedo locado utilizando o método create do Prisma
      const createdBrinquedoLocado = await this.prisma.brinquedoLocado.create({
        data,
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
    data: UpdateBrinquedoDTO,
  ): Promise<Partial<BrinquedoLocadoResponseDTO>> => {
    try {
      // Atualiza o brinquedo locado utilizando o método update do Prisma
      const updatedBrinquedoLocado = await this.prisma.brinquedoLocado.update({
        where: { cod: pk },
        data,
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
