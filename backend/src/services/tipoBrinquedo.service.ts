import { TipoBrinquedo, PrismaClient } from '../../generated/prisma_client'
import { BaseService } from './base.service'
import { ResponseTipoBrinquedoDTO } from '../dtos/response/responseTipoBrinquedo.dto'
import { CreateTipoBrinquedoDTO } from '../dtos/create/createTipoBrinquedo.dto'
import { UpdateTipoBrinquedoDTO } from '../dtos/update/updateTipoBrinquedo.dto'

/**
 * Service for managing toy types.
 *
 * @export
 * @class TipoBrinquedoService
 * @extends {BaseService<ResponseTipoBrinquedoDTO, CreateTipoBrinquedoDTO, UpdateTipoBrinquedoDTO>}
 */
export default class TipoBrinquedoService extends BaseService<
  ResponseTipoBrinquedoDTO,
  CreateTipoBrinquedoDTO,
  UpdateTipoBrinquedoDTO
> {
  /**
   * Creates an instance of TipoBrinquedoService.
   * @memberof TipoBrinquedoService
   */
  constructor() {
    super(new PrismaClient())
  }

  /**
   * Get all toy types.
   *
   * @memberof TipoBrinquedoService
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
   * @memberof TipoBrinquedoService
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
   * @memberof TipoBrinquedoService
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
   * @memberof TipoBrinquedoService
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
   * @memberof TipoBrinquedoService
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
