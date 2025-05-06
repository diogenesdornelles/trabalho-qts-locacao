import { Request, Response, NextFunction } from 'express'
import LocacaoService from '../services/locacao.service'
import { BaseController } from './base.controller'
import { ResponseLocacaoDTO } from '../dtos/response/response-locacao.dto'
import { UpdateLocacaoDTO } from '../dtos/update/update-locacao.dto'
import { CreateLocacaoDTO } from '../dtos/create/create-locacao.dto'
import DTOValidator from '../validators/dto.validator'

/**
 * Controller for managing rentals.
 *
 * @export
 * @class LocacaoController
 * @extends {BaseController<LocacaoService>}
 */
export default class LocacaoController extends BaseController<LocacaoService> {
  /**
   * Creates an instance of LocacaoController.
   * @memberof LocacaoController
   */
  constructor() {
    super(new LocacaoService(), new DTOValidator())
  }

  /**
   * Get all rentals.
   *
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The next middleware function.
   * @memberof LocacaoController
   */
  public getAll = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      // Calls the service to get all rentals
      const rentals: ResponseLocacaoDTO[] = await this.service.getAll()
      // If no error is found, return 200
      res.status(200).json(rentals)
      return
    } catch (error) {
      // If error, calls next func. with error
      // This will be handled by the error middleware
      next(error)
      return
    }
  }

  /**
   * Get one rental by CPF.
   *
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The next middleware function.
   * @memberof LocacaoController
   */
  public getOne = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      // Get the CPF from req.params
      const { cod } = req.params
      // Calls the service to get one rental
      const rental: ResponseLocacaoDTO | null =
        await this.service.getOne(cod)
      // If not found, return 404
      if (!rental) {
        res.status(404).json({ message: 'rental not found' })
        return
      }
      // If no error is found, return 200
      res.status(200).json(rental)
      return
    } catch (error) {
      // If error, calls next func. with error
      // This will be handled by the error middleware
      next(error)
      return
    }
  }

  /**
   * Create a new rental.
   *
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The next middleware function.
   * @memberof LocacaoController
   */
  public create = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      // Validate the request body
      const validatedData: CreateLocacaoDTO =
        this.validator.createLocacao<CreateLocacaoDTO>(req.body)
      // Calls the service to create a new rental
      const rental: ResponseLocacaoDTO =
        await this.service.create(validatedData)
      // If no error is found, return 201, created
      res.status(201).json(rental)
      return
    } catch (error) {
      // If error, calls next func. with error
      // This will be handled by the error middleware
      next(error)
      return
    }
  }

  /**
   * Update an rental by CPF.
   *
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The next middleware function.
   * @memberof LocacaoController
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
      const validatedData: UpdateLocacaoDTO =
        this.validator.updateLocacao<UpdateLocacaoDTO>(req.body)
      // Calls the service to update the rental
      const updatedRental: Partial<ResponseLocacaoDTO> | null =
        await this.service.update(cod, validatedData)
      // If not found, return 404
      if (!updatedRental) {
        res.status(404).json({ message: 'rental not found' })
        return
      }
      // If no error is found, return 200
      res.status(200).json(updatedRental)
      return
    } catch (error) {
      // If error, calls next func. with error
      // This will be handled by the error middleware
      next(error)
      return
    }
  }

  /**
   * Delete an rental by CPF.
   *
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The next middleware function.
   * @memberof LocacaoController
   */
  public delete = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      // Get the cod from req.params
      const { cod } = req.params
      // Calls the service to delete the rental
      const success = await this.service.delete(cod)
      // If not success, return 404, not found
      if (!success) {
        res.status(404).json({ message: 'rental not found' })
        return
      }
      // If no error is found, return 200
      res.status(200).json({ message: 'rental deleted!' })
      return
    } catch (error) {
      // If error, calls next func. with error
      // This will be handled by the error middleware
      next(error)
      return
    }
  }
}
