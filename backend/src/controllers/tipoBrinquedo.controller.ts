import { Request, Response, NextFunction } from 'express'
import TipoBrinquedoService from '../services/tipoBrinquedo.service'
import { BaseController } from './base.controller'
import { ResponseTipoBrinquedoDTO } from '../dtos/response/responseTipoBrinquedo.dto'
import { CreateTipoBrinquedoDTO } from '../dtos/create/createTipoBrinquedo.dto'
import { UpdateTipoBrinquedoDTO } from '../dtos/update/updateTipoBrinquedo.dto'
import DTOValidator from '../validators/dto.validator'

/**
 * Controller for managing toy types.
 *
 * @export
 * @class TipoBrinquedoController
 * @extends {BaseController<TipoBrinquedoService>}
 */
export default class TipoBrinquedoController extends BaseController<TipoBrinquedoService> {
  /**
   * Creates an instance of TipoBrinquedoController.
   * @memberof TipoBrinquedoController
   */
  constructor() {
    super(new TipoBrinquedoService(), new DTOValidator())
  }

  /**
   * Get all toy types.
   *
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The next middleware function.
   * @memberof TipoBrinquedoController
   */
  public getAll = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      // Calls the service to get all toy types
      const tipos: ResponseTipoBrinquedoDTO[] = await this.service.getAll()
      // If no error is found, return 200
      res.status(200).json(tipos)
      return
    } catch (error) {
      // If error, calls next func. with error
      // This will be handled by the error middleware
      next(error)
      return
    }
  }

  /**
   * Get one toy type by UUID cod.
   *
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The next middleware function.
   * @memberof TipoBrinquedoController
   */
  public getOne = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      // Get the cod from req.params
      const { cod } = req.params
      // Calls the service to get one toy type
      const tipo: ResponseTipoBrinquedoDTO | null =
        await this.service.getOne(cod)
      // If not found, return 404
      if (!tipo) {
        res.status(404).json({ message: 'Type toy not found' })
        return
      }
      // If no error is found, return 200
      res.status(200).json(tipo)
      return
    } catch (error) {
      // If error, calls next func. with error
      // This will be handled by the error middleware
      next(error)
      return
    }
  }

  /**
   * Create a new toy type.
   *
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The next middleware function.
   * @memberof TipoBrinquedoController
   */
  public create = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      // Validate the request body
      const validatedData: CreateTipoBrinquedoDTO =
        this.validator.createTipoBrinquedo<CreateTipoBrinquedoDTO>(req.body)
      // Calls the service to create a new toy type
      const tipo: ResponseTipoBrinquedoDTO =
        await this.service.create(validatedData)
      // If no error is found, return 201, created
      res.status(201).json(tipo)
      return
    } catch (error) {
      // If error, calls next func. with error
      // This will be handled by the error middleware
      next(error)
      return
    }
  }

  /**
   * Update a toy type by UUID cod.
   *
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The next middleware function.
   * @memberof TipoBrinquedoController
   */
  public update = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      // Get the cod from req.params
      const { cod } = req.params
      // Validate the request body
      const validatedData: UpdateTipoBrinquedoDTO =
        this.validator.updateTipoBrinquedo<UpdateTipoBrinquedoDTO>(req.body)
      // Calls the service to update the toy type
      const updatedTipo: Partial<ResponseTipoBrinquedoDTO> =
        await this.service.update(cod, validatedData)
      // If not found, return 404
      if (!updatedTipo) {
        res.status(404).json({ message: 'Type toy not found' })
        return
      }
      // If no error is found, return 200
      res.status(200).json(updatedTipo)
      return
    } catch (error) {
      // If error, calls next func. with error
      // This will be handled by the error middleware
      next(error)
      return
    }
  }

  /**
   * Delete a toy type by UUID cod.
   *
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The next middleware function.
   * @memberof TipoBrinquedoController
   */
  public delete = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    throw new Error('Method not implemented.')
  }
}
