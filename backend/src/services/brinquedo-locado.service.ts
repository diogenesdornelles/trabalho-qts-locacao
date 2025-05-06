import { PrismaClient } from '../../generated/prisma_client'
import { BaseService } from './base.service'
import { ResponseBrinquedoLocadoDTO } from '../dtos/response/response-brinquedo-locado.dto'
import { CreateBrinquedoLocadoDTO } from '../dtos/create/create-brinquedo-locado.dto'
import { UpdateBrinquedoLocadoDTO } from '../dtos/update/update-brinquedo-locado.dto'

/**
 * Service for managing rented toys.
 *
 * @export
 * @class BrinquedoLocadoService
 * @extends {BaseService<ResponseBrinquedoLocadoDTO, CreateBrinquedoLocadoDTO, UpdateBrinquedoLocadoDTO>}
 */
export default class BrinquedoLocadoService extends BaseService<
  ResponseBrinquedoLocadoDTO,
  CreateBrinquedoLocadoDTO,
  UpdateBrinquedoLocadoDTO
> {
  /**
   * Creates an instance of BrinquedoLocadoService.
   * @memberof BrinquedoLocadoService
   */
  constructor() {
    super(new PrismaClient())
  }

  /**
   * Get all rented toys.
   *
   * @memberof BrinquedoLocadoService
   * @returns {Promise<ResponseBrinquedoLocadoDTO[]>} A list of rented toys.
   */
  public getAll = async (): Promise<ResponseBrinquedoLocadoDTO[]> => {
    return await this.prisma.brinquedoLocado.findMany()
  }

  /**
   * Get one rented toy by UUID.
   *
   * @param {string} pk - The UUID of the rented toy.
   * @returns {Promise<ResponseBrinquedoLocadoDTO | null>} The rented toy or null if not found.
   */
  public getOne = async (
    pk: string,
  ): Promise<ResponseBrinquedoLocadoDTO | null> => {
    return await this.prisma.brinquedoLocado.findUnique({
      where: { cod: pk },
    })
  }

  /**
   * Create a new rented toy.
   *
   * @param {CreateBrinquedoLocadoDTO} data - The data for the new rented toy.
   * @returns {Promise<ResponseBrinquedoLocadoDTO | null>} The created rented toy or null if creation fails.
   */
  public create = async (
    data: CreateBrinquedoLocadoDTO,
  ): Promise<ResponseBrinquedoLocadoDTO | null> => {
    // Fetch the toy from the database to populate fields like unit value and name. The toy must be active.
    const DBToy = await this.prisma.brinquedo.findUnique({
      where: { cod: data.cod_brinquedo, ativo: true },
    })

    // If the toy exists
    if (DBToy) {
      // Business rule: Set tomorrow's date as the return date
      let today = new Date()
      let tomorrow = new Date()
      tomorrow.setDate(today.getDate() + 1)

      // Save the new rented toy using Prisma's create method
      const createdBrinquedoLocado = await this.prisma.brinquedoLocado.create({
        data: {
          ...data,
          valor_unitario: DBToy.valor_locacao,
          nome: DBToy.nome,
          data_devolucao: tomorrow,
        },
      })
      return createdBrinquedoLocado
    }

    // If the toy does not exist
    throw new Error(
      `Validation error: toy code ${data.cod_brinquedo} not found or toy not active`,
    )
  }

  /**
   * Update a rented toy.
   *
   * @param {string} pk - The UUID of the rented toy.
   * @param {UpdateBrinquedoLocadoDTO} data - The data to update the rented toy.
   * @returns {Promise<Partial<ResponseBrinquedoLocadoDTO | null>>} The updated rented toy or null if not found.
   */
  public update = async (
    pk: string,
    data: UpdateBrinquedoLocadoDTO,
  ): Promise<Partial<ResponseBrinquedoLocadoDTO | null>> => {
    // Object to hold the updated data
    let updatedData: Record<string, any> | null = null

    // If the request contains a toy UUID, fetch the toy to update fields like unit value and name
    if (data.cod_brinquedo) {
      const DBToy = await this.prisma.brinquedo.findUnique({
        where: { cod: data.cod_brinquedo, ativo: true },
      })

      // If the toy exists, update the data
      if (DBToy) {
        updatedData = {
          ...data,
          valor_unitario: DBToy.valor_locacao,
          nome: DBToy.nome,
        }
      } else {
        // If the toy does not exist, throw an error
        throw new Error(
          `Validation error: toy code ${data.cod_brinquedo} not found or toy not active`,
        )
      }
    }

    // Update the rented toy using Prisma's update method
    const updatedBrinquedoLocado = await this.prisma.brinquedoLocado.update({
      where: { cod: pk },
      data: updatedData ? updatedData : data,
    })

    return updatedBrinquedoLocado
  }

  /**
   * Delete a rented toy by UUID.
   *
   * @param {string} pk - The UUID of the rented toy.
   * @returns {Promise<boolean>} True if the toy was deleted, false otherwise.
   */
  public delete = async (pk: string): Promise<boolean> => {
    try {
      await this.prisma.brinquedoLocado.delete({
        where: { cod: pk, ativo: true },
      })
      return true
    } catch (error: unknown) {
      return false
    }
  }
}
