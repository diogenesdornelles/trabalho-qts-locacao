import { Request } from 'express'
import { Cliente, Locacao, PrismaClient } from '../../generated/prisma_client'
import { z } from 'zod'
import { ClienteSchema } from '../schemas/schemas'
import { BaseService } from './BaseService'
import { CreateClienteValidator } from '../validators/CreateClienteValidator'
import { UpdateBrinquedoValidator } from '../validators/UpdateBrinquedoValidator'
import { ClienteResponseDTO } from '../dtos/ClienteResponseDTO'
import { CreateClienteDTO } from '../dtos/CreateClienteDTO'
import { UpdateClienteDTO } from '../dtos/UpdateClienteDTO'

export default class ClienteServices extends BaseService<
  ClienteResponseDTO,
  CreateClienteDTO,
  UpdateClienteDTO
> {
  constructor() {
    super(new PrismaClient())
  }
  public getAll = async (): Promise<ClienteResponseDTO[]> => {
    try {
      // Encontra todos os clientes
      return await this.prisma.cliente.findMany()
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error fetching all customers:', error.message)
        throw new Error(`Database error: ${error.message}`)
      }
      throw new Error('An unknown error occurred while fetching customers.')
    }
  }

  public getOne = async (pk: string): Promise<ClienteResponseDTO | null> => {
    try {
      return await this.prisma.cliente.findUnique({
        where: { cpf: pk },
      })
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error fetching customer:', error.message)
        throw new Error(`Database error: ${error.message}`)
      }
      throw new Error('An unknown error occurred while fetching customer.')
    }
  }

  public create = async (
    data: CreateClienteDTO,
  ): Promise<ClienteResponseDTO> => {
    try {
      const createdCliente = await this.prisma.cliente.create({ data })
      return createdCliente
    } catch (error: unknown) {
      // Trata erros de validação do Zod
      if (error instanceof z.ZodError) {
        console.error('Validation error on create customer:', error.errors)
        throw new Error(
          `Validation error: ${error.errors.map(err => err.message).join(', ')}`,
        )
      }
      // Trata erros genéricos (incluindo erros do Prisma)
      if (error instanceof Error) {
        console.error('Database error on create customer:', error.message)
        throw new Error(`Database error: ${error.message}`)
      }
      throw new Error('An unknown error occurred while saving customer.')
    }
  }

  public update = async (
    pk: string,
    data: UpdateClienteDTO,
  ): Promise<Partial<ClienteResponseDTO>> => {
    try {
      const updatedCliente = await this.prisma.cliente.update({
        where: { cpf: pk },
        data,
      })

      return updatedCliente
    } catch (error: unknown) {
      if (error instanceof z.ZodError) {
        console.error('Validation error on update customer:', error.errors)
        throw new Error(
          `Validation error: ${error.errors.map(err => err.message).join(', ')}`,
        )
      }
      if (error instanceof Error) {
        console.error('Database error on update customer:', error.message)
        throw new Error(`Database error: ${error.message}`)
      }
      throw new Error('An unknown error occurred while updating customer.')
    }
  }

  public delete = async (pk: string): Promise<boolean> => {
    try {
      await this.prisma.cliente.delete({
        where: { cpf: pk },
      })
      return true
    } catch (error: unknown) {
      return false
    }
  }
}
