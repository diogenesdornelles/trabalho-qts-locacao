import { PrismaClient, Funcao } from '../../generated/prisma_client'
import { z } from 'zod'
import { BaseService } from './BaseService'
import hashPassword from '../utils/hashPwd'
import { FuncionarioResponseDTO } from '../dtos/response/FuncionarioResponseDTO'
import { CreateFuncionarioDTO } from '../dtos/create/CreateFuncionarioDTO'
import { UpdateFuncionarioDTO } from '../dtos/update/UpdateFuncionarioDTO'

export default class FuncionarioServices extends BaseService<
  FuncionarioResponseDTO,
  CreateFuncionarioDTO,
  UpdateFuncionarioDTO
> {
  constructor() {
    super(new PrismaClient())
  }
  public getAll = async (): Promise<FuncionarioResponseDTO[]> => {
    try {
      return await this.prisma.funcionario.findMany({
        select: {
          cpf: true,
          nome: true,
          telefone: true,
          funcao: true,
          senha: false,
        },
      })
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error fetching all employees:', error.message)
        throw new Error(`Database error: ${error.message}`)
      }
      throw new Error('An unknown error occurred while fetching employees.')
    }
  }

  public getOne = async (
    pk: string,
  ): Promise<FuncionarioResponseDTO | null> => {
    try {
      return await this.prisma.funcionario.findUnique({
        where: { cpf: pk },
        select: {
          cpf: true,
          nome: true,
          telefone: true,
          funcao: true,
          senha: false,
        },
      })
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error fetching employee:', error.message)
        throw new Error(`Database error: ${error.message}`)
      }
      throw new Error('An unknown error occurred while fetching employee.')
    }
  }

  public create = async (
    data: CreateFuncionarioDTO,
  ): Promise<FuncionarioResponseDTO> => {
    try {
      // tornar oculto o pwd no bd
      data.senha = await hashPassword(data.senha)

      // Salva o novo funcionário utilizando o método create do Prisma
      const createdFuncionario = await this.prisma.funcionario.create({
        data: {
          ...data,
          funcao: data.funcao as Funcao,
        },
      })
      return createdFuncionario
    } catch (error: unknown) {
      // Trata erros de validação do Zod
      if (error instanceof z.ZodError) {
        console.error('Validation error on create employee:', error.errors)
        throw new Error(
          `Validation error: ${error.errors.map(err => err.message).join(', ')}`,
        )
      }
      // Trata erros genéricos (incluindo erros do Prisma)
      if (error instanceof Error) {
        console.error('Database error on create employee:', error.message)
        throw new Error(`Database error: ${error.message}`)
      }
      throw new Error('An unknown error occurred while saving employee.')
    }
  }

  public update = async (
    pk: string,
    data: UpdateFuncionarioDTO,
  ): Promise<Partial<FuncionarioResponseDTO>> => {
    try {
      if (data.senha) {
        data.senha = await hashPassword(data.senha)
      }

      // Atualiza o funcionário utilizando o método update do Prisma
      const updatedFuncionario = await this.prisma.funcionario.update({
        where: { cpf: pk },
        data: {
          ...data,
          funcao: data.funcao as Funcao,
        },
      })

      return updatedFuncionario
    } catch (error: unknown) {
      if (error instanceof z.ZodError) {
        console.error('Validation error on update employee:', error.errors)
        throw new Error(
          `Validation error: ${error.errors.map(err => err.message).join(', ')}`,
        )
      }
      if (error instanceof Error) {
        console.error('Database error on update employee:', error.message)
        throw new Error(`Database error: ${error.message}`)
      }
      throw new Error('An unknown error occurred while updating employee.')
    }
  }

  public delete = async (pk: string): Promise<boolean> => {
    try {
      await this.prisma.funcionario.delete({
        where: { cpf: pk },
      })
      return true
    } catch (error: unknown) {
      return false
    }
  }
}
