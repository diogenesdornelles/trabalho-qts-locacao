import { PrismaClient } from '../../generated/prisma_client'
import { z } from 'zod'
import { BaseService } from './BaseService'
import { BrinquedoLocadoResponseDTO } from '../dtos/response/BrinquedoLocadoResponseDTO'
import { CreateBrinquedoLocadoDTO } from '../dtos/create/CreateBrinquedoLocadoDTO'
import { UpdateBrinquedoLocadoDTO } from '../dtos/update/UpdateBrinquedoLocadoDTO'

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
  ): Promise<BrinquedoLocadoResponseDTO | null> => {
    try {
      // obtém o brinquedo no DB para preencher campos valor_unitario e nome
      const brinquedoDB = await this.prisma.brinquedo.findUnique({
        where: { cod: data.cod_brinquedo },
      })

      if (brinquedoDB) {
        // Salva o novo brinquedo locado utilizando o método create do Prisma
        const createdBrinquedoLocado = await this.prisma.brinquedoLocado.create(
          {
            data: {
              ...data,
              valor_unitario: brinquedoDB.valor_locacao,
              nome: brinquedoDB.nome,
            },
          },
        )
        return createdBrinquedoLocado
      }
      throw new Error(
        `Validation error: toy code ${data.cod_brinquedo} not found`,
      )
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
    data: UpdateBrinquedoLocadoDTO,
  ): Promise<Partial<BrinquedoLocadoResponseDTO | null>> => {
    try {
      let updatedData: Record<string, any> | null = null
      // Se há uma chave cod de brinquedo, atualizar valor unitario e nome
      if (data.cod_brinquedo) {
        // obtém o brinquedo no DB para preencher campos valor_unitario e nome
        const brinquedoDB = await this.prisma.brinquedo.findUnique({
          where: { cod: data.cod_brinquedo },
        })
        if (brinquedoDB) {
          updatedData = {
            ...data,
            valor_unitario: brinquedoDB.valor_locacao,
            nome: brinquedoDB.nome,
          }
        } else {
          throw new Error(
            `Validation error: toy code ${data.cod_brinquedo} not found`,
          )
        }
      }
      // Atualiza o brinquedo locado utilizando o método update do Prisma
      const updatedBrinquedoLocado = await this.prisma.brinquedoLocado.update({
        where: { cod: pk },
        data: updatedData ? updatedData : data,
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
