import { Request } from 'express'
import { Pagamento, PrismaClient } from '../../generated/prisma_client'
import { z } from 'zod'
import { PagamentoSchema } from '../schemas/schemas'
import { BaseService } from './BaseService'
import LocacaoServices from './LocacaoServices'

export default class PagamentoServices extends BaseService<Pagamento> {
  constructor() {
    super(new PrismaClient())
  }

  public getAll = async (): Promise<Pagamento[]> => {
    try {
      return await this.prisma.pagamento.findMany()
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error fetching all payments:', error.message)
        throw new Error(`Database error: ${error.message}`)
      }
      throw new Error('An unknown error occurred while fetching payments.')
    }
  }

  public getOne = async (pk: string): Promise<Pagamento | null> => {
    try {
      return await this.prisma.pagamento.findUnique({
        where: { cod: pk },
        include: {
          locacao: true, // consulta populada: nome usaso no prisma schema
        },
      })
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error fetching payment:', error.message)
        throw new Error(`Database error: ${error.message}`)
      }
      throw new Error('An unknown error occurred while fetching payment.')
    }
  }

  public create = async (req: Request): Promise<Pagamento> => {
    try {
      // Valida os dados recebidos no corpo da requisição
      const validatedData = PagamentoSchema.parse(req.body)
      // É preciso atualizar valor total, através da locação e seus respectivos itens locados
      const locacaoService = new LocacaoServices()
      validatedData.valor_locacao = await locacaoService.getTotalValue(
        validatedData.cod_locacao,
      )

      // Salva o novo pagamento utilizando o método create do Prisma
      const createdPagamento = await this.prisma.pagamento.create({
        data: validatedData,
      })

      return createdPagamento
    } catch (error: unknown) {
      // Trata erros de validação do Zod
      if (error instanceof z.ZodError) {
        console.error('Validation error on create payment:', error.errors)
        throw new Error(
          `Validation error: ${error.errors.map(err => err.message).join(', ')}`,
        )
      }
      // Trata erros genéricos (incluindo erros do Prisma)
      if (error instanceof Error) {
        console.error('Database error on create payment:', error.message)
        throw new Error(`Database error: ${error.message}`)
      }
      throw new Error('An unknown error occurred while saving payment.')
    }
  }

  public update = async (
    pk: string,
    req: Request,
  ): Promise<Partial<Pagamento>> => {
    try {
      // Cria uma versão parcial do schema para permitir atualizações parciais
      const partialSchema = PagamentoSchema.partial()

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
      delete updateData['valor_locacao']

      if (validatedData.cod_locacao) {
        const locacaoService = new LocacaoServices()
        validatedData.valor_locacao = await locacaoService.getTotalValue(
          validatedData.cod_locacao,
        )
      }

      // É preciso atualizar valor total, através da locação e seus respectivos itens locados

      // Atualiza o pagamento utilizando o método update do Prisma
      const updatedPagamento = await this.prisma.pagamento.update({
        where: { cod: pk },
        data: updateData,
      })

      return updatedPagamento
    } catch (error: unknown) {
      if (error instanceof z.ZodError) {
        console.error('Validation error on update payment:', error.errors)
        throw new Error(
          `Validation error: ${error.errors.map(err => err.message).join(', ')}`,
        )
      }
      if (error instanceof Error) {
        console.error('Database error on update payment:', error.message)
        throw new Error(`Database error: ${error.message}`)
      }
      throw new Error('An unknown error occurred while updating payment.')
    }
  }

  public delete = async (pk: string): Promise<boolean> => {
    try {
      await this.prisma.pagamento.delete({
        where: { cod: pk },
      })
      return true
    } catch (error: unknown) {
      return false
    }
  }
}
