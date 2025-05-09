import { PrismaClient } from '../../generated/prisma_client'
import { BaseService } from './base.service'
import { ResponseClienteDTO } from '../dtos/response/responseCliente.dto'
import { CreateClienteDTO } from '../dtos/create/createCliente.dto'
import { UpdateClienteDTO } from '../dtos/update/updateCliente.dto'

/**
 * Service for managing customers.
 *
 * @export
 * @class ClienteService
 * @extends {BaseService<ResponseClienteDTO, CreateClienteDTO, UpdateClienteDTO>}
 */
export default class ClienteService extends BaseService<
  ResponseClienteDTO,
  CreateClienteDTO,
  UpdateClienteDTO
> {
  /**
   * Creates an instance of ClienteService.
   * @memberof ClienteService
   */
  constructor() {
    super(new PrismaClient())
  }

  /**
   * Get all customers.
   *
   * @memberof ClienteService
   * @returns {Promise<ResponseClienteDTO[]>} A list of customers.
   */
  public getAll = async (): Promise<ResponseClienteDTO[]> => {
    return await this.prisma.cliente.findMany()
  }

  /**
   * Get one customer by CPF.
   *
   * @param {string} pk - The CPF of the customer.
   * @returns {Promise<ResponseClienteDTO | null>} The customer or null if not found.
   */
  public getOne = async (pk: string): Promise<ResponseClienteDTO | null> => {
    return await this.prisma.cliente.findUnique({
      where: { cpf: pk },
    })
  }

  /**
   * Create a new customer.
   *
   * @param {CreateClienteDTO} data - The data for the new customer.
   * @returns {Promise<ResponseClienteDTO>} The created customer.
   */
  public create = async (
    data: CreateClienteDTO,
  ): Promise<ResponseClienteDTO> => {
    return await this.prisma.cliente.create({ data })
  }

  /**
   * Update a customer by CPF.
   *
   * @param {string} pk - The CPF of the customer.
   * @param {UpdateClienteDTO} data - The data to update the customer.
   * @returns {Promise<Partial<ResponseClienteDTO>>} The updated customer.
   */
  public update = async (
    pk: string,
    data: UpdateClienteDTO,
  ): Promise<Partial<ResponseClienteDTO>> => {
    return await this.prisma.cliente.update({
      where: { cpf: pk },
      data,
    })
  }

  /**
   * Delete a customer by CPF.
   *
   * @param {string} pk - The CPF of the customer.
   * @returns {Promise<boolean>} True if the customer was deleted, false otherwise.
   */
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
