import { Request } from 'express'
import {
  Funcionario,
  PrismaClient,
  Funcao,
} from '../../generated/prisma_client'
import { z } from 'zod'
import { FuncionarioSchema } from '../schemas/schemas'
import { BaseService } from './BaseService'
import hashPassword from '../utils/hashPwd'

export default class FuncionarioServices extends BaseService<Funcionario> {
  constructor() {
    super(new PrismaClient())
  }
  public getAll = async (): Promise<Funcionario[]> => {
    try {
      return await this.prisma.funcionario.findMany()
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error fetching all employees:', error.message)
        throw new Error(`Database error: ${error.message}`)
      }
      throw new Error('An unknown error occurred while fetching employees.')
    }
  }

  public getOne = async (pk: string): Promise<Funcionario | null> => {
    try {
      return await this.prisma.funcionario.findUnique({
        where: { cpf: pk },
      })
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error fetching employee:', error.message)
        throw new Error(`Database error: ${error.message}`)
      }
      throw new Error('An unknown error occurred while fetching employee.')
    }
  }

  public create = async (req: Request): Promise<Funcionario> => {
    try {
      // Valida os dados recebidos no corpo da requisição
      const validatedData = FuncionarioSchema.parse(req.body)
      // tornar oculto o pwd no bd
      validatedData.senha = await hashPassword(validatedData.senha)

      // Salva o novo funcionário utilizando o método create do Prisma
      const createdFuncionario = await this.prisma.funcionario.create({
        data: {
          cpf: validatedData.cpf,
          telefone: validatedData.telefone,
          funcao: validatedData.funcao as Funcao,
          nome: validatedData.nome,
          senha: validatedData.senha,
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
    req: Request,
  ): Promise<Partial<Funcionario>> => {
    try {
      // Cria uma versão parcial do schema para permitir atualizações parciais
      const partialSchema = FuncionarioSchema.partial()

      // Valida os dados enviados (parciais) no corpo da requisição
      const validatedData = partialSchema.parse(req.body)

      // Remove as chaves com valor undefined
      const updateData = Object.fromEntries(
        Object.entries(validatedData).filter(
          ([_, value]) => value !== undefined,
        ),
      )

      // Remove o campo 'cpf' caso esteja presente, para evitar atualizar a PK
      delete updateData['cpf']

      if (validatedData.senha) {
        validatedData.senha = await hashPassword(validatedData.senha)
      }

      // Atualiza o funcionário utilizando o método update do Prisma
      const updatedFuncionario = await this.prisma.funcionario.update({
        where: { cpf: pk },
        data: updateData,
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
