import { PrismaClient } from '../../generated/prisma_client'
import { BaseService } from './BaseService'
import { ClienteResponseDTO } from '../dtos/response/ClienteResponseDTO'
import { CreateClienteDTO } from '../dtos/create/CreateClienteDTO'
import { UpdateClienteDTO } from '../dtos/update/UpdateClienteDTO'

export default class ClienteServices extends BaseService<
  ClienteResponseDTO,
  CreateClienteDTO,
  UpdateClienteDTO
> {
  constructor() {
    super(new PrismaClient())
  }
  public getAll = async (): Promise<ClienteResponseDTO[]> => {
    // Encontra todos os clientes
    return await this.prisma.cliente.findMany()
  }

  public getOne = async (pk: string): Promise<ClienteResponseDTO | null> => {
    return await this.prisma.cliente.findUnique({
      where: { cpf: pk },
    })
  }

  public create = async (
    data: CreateClienteDTO,
  ): Promise<ClienteResponseDTO> => {
    const createdCliente = await this.prisma.cliente.create({ data })
    return createdCliente
  }

  public update = async (
    pk: string,
    data: UpdateClienteDTO,
  ): Promise<Partial<ClienteResponseDTO>> => {
    const updatedCliente = await this.prisma.cliente.update({
      where: { cpf: pk },
      data,
    })

    return updatedCliente
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
