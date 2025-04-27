import { Request, Response, NextFunction } from 'express'
import BrinquedoServices from '../services/brinquedo.services'
import { BaseController } from './base.controller'
import { ResponseBrinquedoDTO } from '../dtos/response/response-brinquedo.dto'
import { ResponseBrinquedoComTipoDTO } from '../dtos/response/response-brinquedo-response-com-tipo.dto'
import { CreateBrinquedoDTO } from '../dtos/create/create-brinquedo.dto'
import { UpdateBrinquedoDTO } from '../dtos/update/update-brinquedo.dto'
import DTOValidator from '../validators/dto.validator'

/**
 * Controller for managing toys.
 *
 * @export
 * @class BrinquedosController
 * @extends {BaseController<BrinquedoServices>}
 */
export default class BrinquedosController extends BaseController<BrinquedoServices> {
  /**
   * Creates an instance of BrinquedosController.
   * @memberof BrinquedosController
   */
  constructor() {
    super(new BrinquedoServices(), new DTOValidator())
  }

  /**
   * Get all toys
   *
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The next middleware function.
   * @memberof BrinquedosController
   */
  public getAll = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      // Calls the service to get all toys
      const brinquedos: ResponseBrinquedoComTipoDTO[] =
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
   * Get one toy by UUID cod
   *
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The next middleware function.
   * @memberof BrinquedosController
   */
  public getOne = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      // Get cod from params
      const { cod } = req.params
      // Calls the service to get one toy
      const brinquedo: ResponseBrinquedoComTipoDTO | null =
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
   * Create a new toy
   *
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The next middleware function.
   * @memberof BrinquedosController
   */
  public create = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      // Validate the request body
      const validatedData: CreateBrinquedoDTO =
        this.validator.createBrinquedo<CreateBrinquedoDTO>(req.body)
      // Calls the service to create a new toy
      const brinquedo: ResponseBrinquedoDTO =
        await this.service.create(validatedData)
      // If no error is found, return 201, created
      res.status(201).json(brinquedo)
      return
    } catch (error) {
      // If error, calls next func. with error
      // This will be handled by the error middleware
      next(error)
      return
    }
  }

  /**
   * Update a toy by UUID cod
   *
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The next middleware function.
   * @memberof BrinquedosController
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
      const validatedData: UpdateBrinquedoDTO =
        this.validator.updateBrinquedo<UpdateBrinquedoDTO>(req.body)
      // Calls the service to update the toy
      const updatedBrinquedo: Partial<ResponseBrinquedoDTO> =
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
   * Delete a toy by UUID cod
   *
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The next middleware function.
   * @memberof BrinquedosController
   */
  public delete = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      // Get cod from params
      const { cod } = req.params
      // Calls the service to delete the toy
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
