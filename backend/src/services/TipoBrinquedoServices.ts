import { TipoBrinquedo, PrismaClient } from '../../generated/prisma_client'
import { BaseService } from './BaseService'
import { TipoBrinquedoResponseDTO } from '../dtos/response/TipoBrinquedoResponseDTO'
import { CreateTipoBrinquedoDTO } from '../dtos/create/CreateTipoBrinquedoDTO'
import { UpdateTipoBrinquedoDTO } from '../dtos/update/UpdateTipoBrinquedoDTO'

export default class TipoBrinquedoServices extends BaseService<
  TipoBrinquedoResponseDTO,
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
  ): Promise<TipoBrinquedoResponseDTO | null> => {
    return await this.prisma.tipoBrinquedo.findUnique({
      where: { cod: pk },
    })
  }

  public create = async (
    data: CreateTipoBrinquedoDTO,
  ): Promise<TipoBrinquedoResponseDTO> => {
    const createdTipoBrinquedo = await this.prisma.tipoBrinquedo.create({
      data,
    })
    return createdTipoBrinquedo
  }

  public update = async (
    pk: string,
    data: UpdateTipoBrinquedoDTO,
  ): Promise<Partial<TipoBrinquedoResponseDTO>> => {
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
