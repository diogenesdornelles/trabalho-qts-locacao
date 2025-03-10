import { Request } from 'express'
import { Cliente, Locacao, PrismaClient } from '../../generated/prisma_client'
import { z } from 'zod'
import { ClienteSchema } from '../schemas/schemas'
import { BaseService } from './BaseService'

type ClienteComLocacoes = Cliente & {
  locacoes: Locacao[]
}

export default class ClienteServices extends BaseService<Cliente> {
  constructor() {
    super(new PrismaClient())
  }
  public getAll = async (): Promise<Cliente[]> => {
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

  public getOne = async (pk: string): Promise<ClienteComLocacoes | null> => {
    try {
      return await this.prisma.cliente.findUnique({
        where: { cpf: pk },
        include: {
          locacoes: true, // consulta populada: nome usaso no prisma schema
        },
      })
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error fetching customer:', error.message)
        throw new Error(`Database error: ${error.message}`)
      }
      throw new Error('An unknown error occurred while fetching customer.')
    }
  }

  public create = async (req: Request): Promise<Cliente> => {
    try {
      // Valida os dados recebidos no corpo da requisição
      const validatedData = ClienteSchema.parse(req.body)

      // pk = cpf não é opcional

      // Salva o novo cliente utilizando o método create do Prisma
      const createdCliente = await this.prisma.cliente.create({
        data: {
          cpf: validatedData.cpf,
          nome: validatedData.nome,
          telefone: validatedData.telefone,
          endereco: validatedData.endereco,
          data_nascimento: validatedData.data_nascimento,
        },
      })
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
    req: Request,
  ): Promise<Partial<Cliente>> => {
    try {
      // Cria uma versão parcial do schema para permitir atualizações parciais
      const partialSchema = ClienteSchema.partial()

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

      // Atualiza o cliente utilizando o método update do Prisma
      const updatedCliente = await this.prisma.cliente.update({
        where: { cpf: pk },
        data: updateData,
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
