import { PrismaClient } from '../../generated/prisma_client'
import { BaseService } from './base.service'
import { ResponseClienteDTO } from '../dtos/response/response-cliente.dto'
import { CreateClienteDTO } from '../dtos/create/create-cliente.dto'
import { UpdateClienteDTO } from '../dtos/update/update-cliente.dto'

export default class ClienteServices extends BaseService<
  ResponseClienteDTO,
  CreateClienteDTO,
  UpdateClienteDTO
> {
  constructor() {
    super(new PrismaClient())
  }
  public getAll = async (): Promise<ResponseClienteDTO[]> => {
    return await this.prisma.cliente.findMany()
  }

  public getOne = async (pk: string): Promise<ResponseClienteDTO | null> => {
    return await this.prisma.cliente.findUnique({
      where: { cpf: pk },
    })
  }

  public create = async (
    data: CreateClienteDTO,
  ): Promise<ResponseClienteDTO> => {
    return await this.prisma.cliente.create({ data })
  }

  public update = async (
    pk: string,
    data: UpdateClienteDTO,
  ): Promise<Partial<ResponseClienteDTO>> => {
    return await this.prisma.cliente.update({
      where: { cpf: pk },
      data,
    })
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
