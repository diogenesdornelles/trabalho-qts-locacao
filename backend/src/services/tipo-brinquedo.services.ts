import { TipoBrinquedo, PrismaClient } from '../../generated/prisma_client'
import { BaseService } from './base.service'
import { ResponseTipoBrinquedoDTO } from '../dtos/response/response-tipo-brinquedo.dto'
import { CreateTipoBrinquedoDTO } from '../dtos/create/create-tipo-brinquedo.dto'
import { UpdateTipoBrinquedoDTO } from '../dtos/update/update-tipo-brinquedo.dto'

export default class TipoBrinquedoServices extends BaseService<
  ResponseTipoBrinquedoDTO,
  CreateTipoBrinquedoDTO,
  UpdateTipoBrinquedoDTO
> {
  constructor() {
    super(new PrismaClient())
  }

  public getAll = async (): Promise<TipoBrinquedo[]> => {
    return await this.prisma.tipoBrinquedo.findMany()
  }

  public getOne = async (
    pk: string,
  ): Promise<ResponseTipoBrinquedoDTO | null> => {
    return await this.prisma.tipoBrinquedo.findUnique({
      where: { cod: pk },
    })
  }

  public create = async (
    data: CreateTipoBrinquedoDTO,
  ): Promise<ResponseTipoBrinquedoDTO> => {
    const createdTipoBrinquedo = await this.prisma.tipoBrinquedo.create({
      data,
    })
    return createdTipoBrinquedo
  }

  public update = async (
    pk: string,
    data: UpdateTipoBrinquedoDTO,
  ): Promise<Partial<ResponseTipoBrinquedoDTO>> => {
    // Atualiza o tipo brinquedo utilizando o método update do Prisma
    const updatedTipoBrinquedo = await this.prisma.tipoBrinquedo.update({
      where: { cod: pk },
      data,
    })

    return updatedTipoBrinquedo
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
