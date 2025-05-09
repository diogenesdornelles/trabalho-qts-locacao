import { PrismaClient } from '../../generated/prisma_client'
import { BaseService } from './base.service'
import { ResponseLocacaoDTO } from '../dtos/response/responseLocacao.dto'
import { ResponseLocacaoComBrinquedosDTO } from '../dtos/response/responseLocacaoComBrinquedos.dto'
import { CreateLocacaoDTO } from '../dtos/create/createLocacao.dto'
import { UpdateLocacaoDTO } from '../dtos/update/updateLocacao.dto'
import { ApiError } from '../utils/apiError.util'

/**
 * Service for managing rentals.
 *
 * @export
 * @class LocacalService
 * @extends {BaseService<ResponseLocacaoDTO, CreateLocacaoDTO, UpdateLocacaoDTO>}
 */
export default class LocacalService extends BaseService<
  ResponseLocacaoDTO,
  CreateLocacaoDTO,
  UpdateLocacaoDTO
> {
  /**
   * Creates an instance of LocacalService.
   * @memberof LocacalService
   */
  constructor() {
    super(new PrismaClient())
  }

  /**
   * Get all rentals.
   *
   * @memberof LocacalService
   * @returns {Promise<ResponseLocacaoDTO[]>} A list of rentals.
   */
  public getAll = async (): Promise<ResponseLocacaoDTO[]> => {
    return await this.prisma.locacao.findMany()
  }

  /**
   * Get the total value of a rental by UUID.
   *
   * @param {string} pk - The UUID of the rental.
   * @returns {Promise<number>} The total value of the rental.
   */
  public getTotalValue = async (pk: string): Promise<number> => {
    // Initialize variable with 0 value
    let totalUnitValue = 0.0
    // Get rental by UUID
    const rental = await this.getOne(pk)
    // If there is a rental and it has at least one item
    if (rental && rental.brinquedosLocados.length > 0) {
      totalUnitValue = rental.brinquedosLocados.reduce((total, toy) => {
        // Add the unit value if the toy is active
        return toy.ativo ? total + Number(toy.valor_unitario) : total
      }, 0)
    }
    return totalUnitValue
  }

  /**
   * Get one rental by UUID.
   *
   * @param {string} pk - The UUID of the rental.
   * @returns {Promise<ResponseLocacaoComBrinquedosDTO | null>} The rental with its rented toys or null if not found.
   */
  public getOne = async (
    pk: string,
  ): Promise<ResponseLocacaoComBrinquedosDTO | null> => {
    return await this.prisma.locacao.findUnique({
      where: { cod: pk },
      include: {
        brinquedosLocados: true, // Populated query: name used in the Prisma schema
      },
    })
  }

  /**
   * Create a new rental.
   *
   * @param {CreateLocacaoDTO} data - The data for the new rental.
   * @returns {Promise<ResponseLocacaoDTO>} The created rental.
   */
  public create = async (
    data: CreateLocacaoDTO,
  ): Promise<ResponseLocacaoDTO> => {
    return await this.prisma.locacao.create({ data })
  }

  /**
   * Update a rental by UUID.
   *
   * @param {string} pk - The UUID of the rental.
   * @param {Partial<UpdateLocacaoDTO>} data - The data to update the rental.
   * @returns {Promise<ResponseLocacaoDTO | null>} The updated rental or null if not found.
   */
  public update = async (
    pk: string,
    data: Partial<UpdateLocacaoDTO>,
  ): Promise<ResponseLocacaoDTO | null> => {
    try {
      return await this.prisma.locacao.update({
        where: { cod: pk },
        data,
      })
    } catch (error) {
      console.error('Error updating locacao:', error)
      throw new ApiError(500, 'Failed to update locacao')
    }
  }

  /**
   * Delete a rental by UUID.
   *
   * @param {string} pk - The UUID of the rental.
   * @returns {Promise<boolean>} True if the rental was deleted, false otherwise.
   */
  public delete = async (pk: string): Promise<boolean> => {
    try {
      await this.prisma.locacao.delete({
        where: { cod: pk },
      })
      return true
    } catch (error) {
      console.error('Error deleting locacao:', error)
      return false
    }
  }
}
