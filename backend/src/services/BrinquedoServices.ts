import { PrismaClient } from '../../generated/prisma_client'
import { BaseService } from './BaseService'
import { BrinquedoResponseComTipoDTO } from '../dtos/response/BrinquedoResponseComTipoDTO'
import { BrinquedoResponseDTO } from '../dtos/response/BrinquedoResponseDTO'
import { CreateBrinquedoDTO } from '../dtos/create/CreateBrinquedoDTO'
import { UpdateBrinquedoDTO } from '../dtos/update/UpdateBrinquedoDTO'

export default class BrinquedoServices extends BaseService<
  BrinquedoResponseDTO,
  CreateBrinquedoDTO,
  UpdateBrinquedoDTO
> {
  constructor() {
    super(new PrismaClient())
  }

  public getAll = async (): Promise<BrinquedoResponseComTipoDTO[]> => {
    return await this.prisma.brinquedo.findMany({
      include: {
        tipoBrinquedo: true,
      },
    })
  }

  public getOne = async (
    pk: string,
  ): Promise<BrinquedoResponseComTipoDTO | null> => {
    return await this.prisma.brinquedo.findUnique({
      where: { cod: pk },
      include: {
        tipoBrinquedo: true, // consulta populada: nome usaso no prisma schema
      },
    })
  }

  public create = async (
    data: CreateBrinquedoDTO,
  ): Promise<BrinquedoResponseDTO> => {
    // Salva o novo brinquedo utilizando o método create do Prisma
    const createdBrinquedo = await this.prisma.brinquedo.create({ data })
    return createdBrinquedo
  }

  public update = async (
    pk: string,
    data: UpdateBrinquedoDTO,
  ): Promise<Partial<BrinquedoResponseDTO>> => {
    const updatedBrinquedo = await this.prisma.brinquedo.update({
      where: { cod: pk },
      data,
    })

    return updatedBrinquedo
  }

  public delete = async (pk: string): Promise<boolean> => {
    try {
      await this.prisma.brinquedo.delete({
        where: { cod: pk },
      })
      return true
    } catch (error: unknown) {
      return false
    }
  }
}
