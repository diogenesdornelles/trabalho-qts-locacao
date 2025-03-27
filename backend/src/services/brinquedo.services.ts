import { PrismaClient } from '../../generated/prisma_client'
import { BaseService } from './base.service'
import { ResponseBrinquedoComTipoDTO } from '../dtos/response/response-brinquedo-response-com-tipo.dto'
import { ResponseBrinquedoDTO } from '../dtos/response/response-brinquedo.dto'
import { CreateBrinquedoDTO } from '../dtos/create/create-brinquedo.dto'
import { UpdateBrinquedoDTO } from '../dtos/update/update-brinquedo.dto'

export default class BrinquedoServices extends BaseService<
  ResponseBrinquedoDTO,
  CreateBrinquedoDTO,
  UpdateBrinquedoDTO
> {
  constructor() {
    super(new PrismaClient())
  }

  public getAll = async (): Promise<ResponseBrinquedoComTipoDTO[]> => {
    return await this.prisma.brinquedo.findMany({
      include: {
        tipoBrinquedo: true, // Populated query: name used in the prisma schema
      },
    })
  }

  public getOne = async (
    pk: string,
  ): Promise<ResponseBrinquedoComTipoDTO | null> => {
    return await this.prisma.brinquedo.findUnique({
      where: { cod: pk },
      include: {
        tipoBrinquedo: true, // Populated query: name used in the prisma schema
      },
    })
  }

  public create = async (
    data: CreateBrinquedoDTO,
  ): Promise<ResponseBrinquedoDTO> => {
    const createdBrinquedo = await this.prisma.brinquedo.create({ data })
    return createdBrinquedo
  }

  public update = async (
    pk: string,
    data: UpdateBrinquedoDTO,
  ): Promise<Partial<ResponseBrinquedoDTO>> => {
    const updatedBrinquedo = await this.prisma.brinquedo.update({
      where: { cod: pk },
      data,
    })

    return updatedBrinquedo
  }

  public delete = async (pk: string): Promise<boolean> => {
    try {
      await this.prisma.brinquedo.delete({
        where: { cod: pk, ativo: true },
      })
      return true
    } catch (error: unknown) {
      return false
    }
  }
}
