import { TipoBrinquedo, PrismaClient } from '../../generated/prisma_client'
import { BaseService } from './base.service'
import { ResponseTipoBrinquedoDTO } from '../dtos/response/response-tipo-brinquedo.dto'
import { CreateTipoBrinquedoDTO } from '../dtos/create/create-tipo-brinquedo.dto'
import { UpdateTipoBrinquedoDTO } from '../dtos/update/update-tipo-brinquedo.dto'

/**
 * Service for managing toy types.
 *
 * @export
 * @class TipoBrinquedoServices
 * @extends {BaseService<ResponseTipoBrinquedoDTO, CreateTipoBrinquedoDTO, UpdateTipoBrinquedoDTO>}
 */
export default class TipoBrinquedoServices extends BaseService<
  ResponseTipoBrinquedoDTO,
  CreateTipoBrinquedoDTO,
  UpdateTipoBrinquedoDTO
> {
  /**
   * Creates an instance of TipoBrinquedoServices.
   * @memberof TipoBrinquedoServices
   */
  constructor() {
    super(new PrismaClient())
  }

  /**
   * Get all toy types.
   *
   * @memberof TipoBrinquedoServices
   * @returns {Promise<TipoBrinquedo[]>} A list of all toy types.
   */
  public getAll = async (): Promise<TipoBrinquedo[]> => {
    return await this.prisma.tipoBrinquedo.findMany()
  }

  /**
   * Get one toy type by UUID.
   *
   * @param {string} pk - The UUID of the toy type.
   * @returns {Promise<ResponseTipoBrinquedoDTO | null>} The toy type or null if not found.
   * @memberof TipoBrinquedoServices
   */
  public getOne = async (
    pk: string,
  ): Promise<ResponseTipoBrinquedoDTO | null> => {
    return await this.prisma.tipoBrinquedo.findUnique({
      where: { cod: pk },
    })
  }

  /**
   * Create a new toy type.
   *
   * @param {CreateTipoBrinquedoDTO} data - The data for the new toy type.
   * @returns {Promise<ResponseTipoBrinquedoDTO>} The created toy type.
   * @memberof TipoBrinquedoServices
   */
  public create = async (
    data: CreateTipoBrinquedoDTO,
  ): Promise<ResponseTipoBrinquedoDTO> => {
    return await this.prisma.tipoBrinquedo.create({
      data,
    })
  }

  /**
   * Update a toy type by UUID.
   *
   * @param {string} pk - The UUID of the toy type.
   * @param {UpdateTipoBrinquedoDTO} data - The data to update the toy type.
   * @returns {Promise<Partial<ResponseTipoBrinquedoDTO>>} The updated toy type.
   * @memberof TipoBrinquedoServices
   */
  public update = async (
    pk: string,
    data: UpdateTipoBrinquedoDTO,
  ): Promise<Partial<ResponseTipoBrinquedoDTO>> => {
    // Update the toy type using Prisma's update method
    const updatedTipoBrinquedo = await this.prisma.tipoBrinquedo.update({
      where: { cod: pk },
      data,
    })

    return updatedTipoBrinquedo
  }

  /**
   * Delete a toy type by UUID.
   *
   * @param {string} pk - The UUID of the toy type.
   * @returns {Promise<boolean>} True if the toy type was deleted, false otherwise.
   * @memberof TipoBrinquedoServices
   */
  public delete = async (pk: string): Promise<boolean> => {
    try {
      await this.prisma.tipoBrinquedo.delete({
        where: { cod: pk, ativo: true },
      })
      return true
    } catch (error: unknown) {
      return false
    }
  }
}
