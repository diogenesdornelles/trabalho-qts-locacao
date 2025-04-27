import { Request, Response, NextFunction } from 'express'
import BrinquedoLocadoServices from '../services/brinquedo-locado.services'
import { BaseController } from './base.controller'
import { ResponseBrinquedoLocadoDTO } from '../dtos/response/response-brinquedo-locado.dto'
import { CreateBrinquedoLocadoDTO } from '../dtos/create/create-brinquedo-locado.dto'
import { UpdateBrinquedoLocadoDTO } from '../dtos/update/update-brinquedo-locado.dto'
import DTOValidator from '../validators/dto.validator'

/**
 * Controller for managing toy rentals.
 *
 * @export
 * @class BrinquedosLocadosController
 * @extends {BaseController<BrinquedoLocadoServices>}
 */
export default class BrinquedosLocadosController extends BaseController<BrinquedoLocadoServices> {
  /**
   * Creates an instance of BrinquedosLocadosController.
   * @memberof BrinquedosLocadosController
   */
  constructor() {
    super(new BrinquedoLocadoServices(), new DTOValidator())
  }

  /**
   * Get all rented toys
   *
   * @param {Request} req
   * @param {Response} res
   * @param {NextFunction} next
   * @memberof BrinquedosLocadosController
   */
  public getAll = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      // Calls the service to get all rented toys
      const brinquedos: ResponseBrinquedoLocadoDTO[] =
        await this.service.getAll()
      // If no error is found, return 200
      res.status(200).json(brinquedos)
      return
    } catch (error) {
      // If error, calls next func. with error
      // This will be handled by the error middleware
      next(error)
      return
    }
  }

  /**
   * Get one rented toy by UUID cod
   *
   * @param {Request} req
   * @param {Response} res
   * @param {NextFunction} next
   * @memberof BrinquedosLocadosController
   */
  public getOne = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      // Get cod from params
      const { cod } = req.params
      // Get one toy
      const brinquedo: ResponseBrinquedoLocadoDTO | null =
        await this.service.getOne(cod)
      // If not found, return 404
      if (!brinquedo) {
        res.status(404).json({ message: 'Toy not found' })
        return
      }
      // If no error is found, return 200
      res.status(200).json(brinquedo)
      return
    } catch (error) {
      // If error, calls next func. with error
      // This will be handled by the error middleware
      next(error)
      return
    }
  }

  /**
   * Create a new rented toy
   *
   * @param {Request} req
   * @param {Response} res
   * @param {NextFunction} next
   * @memberof BrinquedosLocadosController
   */
  public create = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      // Validate the request body
      const validatedData: CreateBrinquedoLocadoDTO =
        this.validator.createBrinquedoLocado<CreateBrinquedoLocadoDTO>(req.body)
      // Calls the service t create a new toy
      const brinquedo: ResponseBrinquedoLocadoDTO | null =
        await this.service.create(validatedData)
      // If no error is found, return 201, created
      if (brinquedo) {
        res.status(201).json(brinquedo)
      } else {
        // If error is found, return 400
        res.status(404).json({ message: 'Toy not created' })
      }
      return
    } catch (error) {
      // If error, calls next func. with error
      // This will be handled by the error middleware
      next(error)
      return
    }
  }

  /**
   * Update a rented toy by UUID cod
   *
   * @param {Request} req
   * @param {Response} res
   * @param {NextFunction} next
   * @memberof BrinquedosLocadosController
   */
  public update = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      // Get cod from params
      const { cod } = req.params
      // Validate the request body
      const validatedData: UpdateBrinquedoLocadoDTO =
        this.validator.updateBrinquedoLocado<UpdateBrinquedoLocadoDTO>(req.body)
      // Calls the service to update a toy
      const updatedBrinquedo: Partial<ResponseBrinquedoLocadoDTO | null> =
        await this.service.update(cod, validatedData)
      // If not found, return 404
      if (!updatedBrinquedo) {
        res.status(404).json({ message: 'Toy not found' })
        return
      }
      // If no error is found, return 200, OK
      res.status(200).json(updatedBrinquedo)
      return
    } catch (error) {
      // If error, calls next func. with error
      // This will be handled by the error middleware
      next(error)
      return
    }
  }

  /**
   * Delete a rented toy by UUID cod
   *
   * @param {Request} req
   * @param {Response} res
   * @param {NextFunction} next
   * @memberof BrinquedosLocadosController
   */
  public delete = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      // Get cod from params
      const { cod } = req.params
      // Calls the service to delete a toy
      const success: boolean = await this.service.delete(cod)
      // If not success, return 404, not found
      if (!success) {
        res.status(404).json({ message: 'Toy not found' })
        return
      }
      // If no error is found, return 200, OK
      res.status(200).json({ message: 'Toy deleted!' })
      return
    } catch (error) {
      // If error, calls next func. with error
      // This will be handled by the error middleware
      next(error)
      return
    }
  }
}
