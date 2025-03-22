import { PrismaClient } from '../../generated/prisma_client'
import { BaseService } from './base.service'
import { ResponseBrinquedoLocadoDTO } from '../dtos/response/response-brinquedo-locado.dto'
import { CreateBrinquedoLocadoDTO } from '../dtos/create/create-brinquedo-locado.dto'
import { UpdateBrinquedoLocadoDTO } from '../dtos/update/update-brinquedo-locado.dto'

export default class BrinquedoLocadoServices extends BaseService<
  ResponseBrinquedoLocadoDTO,
  CreateBrinquedoLocadoDTO,
  UpdateBrinquedoLocadoDTO
> {
  constructor() {
    super(new PrismaClient())
  }

  public getAll = async (): Promise<ResponseBrinquedoLocadoDTO[]> => {
    return await this.prisma.brinquedoLocado.findMany()
  }

  public getOne = async (
    pk: string,
  ): Promise<ResponseBrinquedoLocadoDTO | null> => {
    return await this.prisma.brinquedoLocado.findUnique({
      where: { cod: pk },
    })
  }

  public create = async (
    data: CreateBrinquedoLocadoDTO,
  ): Promise<ResponseBrinquedoLocadoDTO | null> => {
    // Get the toy in the DB to fill the fields unit_value and name
    const brinquedoDB = await this.prisma.brinquedo.findUnique({
      where: { cod: data.cod_brinquedo },
    })

    if (brinquedoDB) {
      // RN02: Get and insert tomorrow's date
      let today = new Date()
      let tomorrow = new Date()
      tomorrow.setDate(today.getDate() + 1)
      // Save the new rented toy using Prisma's create method
      const createdBrinquedoLocado = await this.prisma.brinquedoLocado.create({
        data: {
          ...data,
          valor_unitario: brinquedoDB.valor_locacao,
          nome: brinquedoDB.nome,
          data_devolucao: tomorrow,
        },
      })
      return createdBrinquedoLocado
    }
    throw new Error(
      `Validation error: toy code ${data.cod_brinquedo} not found`,
    )
  }

  public update = async (
    pk: string,
    data: UpdateBrinquedoLocadoDTO,
  ): Promise<Partial<ResponseBrinquedoLocadoDTO | null>> => {
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
