import { PrismaClient } from '../../generated/prisma_client'
import { BaseService } from './base.service'
import { ResponseBrinquedoComTipoDTO } from '../dtos/response/response-brinquedo-response-com-tipo.dto'
import { ResponseBrinquedoDTO } from '../dtos/response/response-brinquedo.dto'
import { CreateBrinquedoDTO } from '../dtos/create/create-brinquedo.dto'
import { UpdateBrinquedoDTO } from '../dtos/update/update-brinquedo.dto'

/**
 * Service for managing toys.
 *
 * @export
 * @class BrinquedoServices
 * @extends {BaseService<ResponseBrinquedoDTO, CreateBrinquedoDTO, UpdateBrinquedoDTO>}
 */
export default class BrinquedoServices extends BaseService<
  ResponseBrinquedoDTO,
  CreateBrinquedoDTO,
  UpdateBrinquedoDTO
> {
  /**
   * Creates an instance of BrinquedoServices.
   * @memberof BrinquedoServices
   */
  constructor() {
    super(new PrismaClient())
  }

  /**
   * Get all toys.
   *
   * @memberof BrinquedoServices
   * @returns {Promise<ResponseBrinquedoComTipoDTO[]>} A list of toys with their types.
   */
  public getAll = async (): Promise<ResponseBrinquedoComTipoDTO[]> => {
    return await this.prisma.brinquedo.findMany({
      include: {
        tipoBrinquedo: true, // Populated query: name used in the Prisma schema
      },
    })
  }

  /**
   * Get one toy by UUID.
   *
   * @param {string} pk - The UUID of the toy.
   * @returns {Promise<ResponseBrinquedoComTipoDTO | null>} The toy with its type or null if not found.
   */
  public getOne = async (
    pk: string,
  ): Promise<ResponseBrinquedoComTipoDTO | null> => {
    return await this.prisma.brinquedo.findUnique({
      where: { cod: pk },
      include: {
        tipoBrinquedo: true, // Populated query: name used in the Prisma schema
      },
    })
  }

  /**
   * Create a new toy.
   *
   * @param {CreateBrinquedoDTO} data - The data for the new toy.
   * @returns {Promise<ResponseBrinquedoDTO>} The created toy.
   */
  public create = async (
    data: CreateBrinquedoDTO,
  ): Promise<ResponseBrinquedoDTO> => {
    const createdBrinquedo = await this.prisma.brinquedo.create({ data })
    return createdBrinquedo
  }

  /**
   * Update a toy by UUID.
   *
   * @param {string} pk - The UUID of the toy.
   * @param {UpdateBrinquedoDTO} data - The data to update the toy.
   * @returns {Promise<Partial<ResponseBrinquedoDTO>>} The updated toy.
   */
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

  /**
   * Delete a toy by UUID.
   *
   * @param {string} pk - The UUID of the toy.
   * @returns {Promise<boolean>} True if the toy was deleted, false otherwise.
   */
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
