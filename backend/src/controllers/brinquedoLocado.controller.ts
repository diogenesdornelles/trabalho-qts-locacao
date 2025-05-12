import { Request, Response, NextFunction } from 'express'
import BrinquedoLocadoService from '../services/brinquedoLocado.service'
import { BaseController } from './base.controller'
import { ResponseBrinquedoLocadoDTO } from '../dtos/response/responseBrinquedoLocado.dto'
import { CreateBrinquedoLocadoDTO } from '../dtos/create/createBrinquedoLocado.dto'
import { UpdateBrinquedoLocadoDTO } from '../dtos/update/updateBrinquedoLocado.dto'
import DTOValidator from '../validators/dto.validator'

/**
 * Controller for managing toy rentals.
 *
 * @export
 * @class BrinquedoLocadoController
 * @extends {BaseController<BrinquedoLocadoService>}
 */
export default class BrinquedoLocadoController extends BaseController<BrinquedoLocadoService> {
  /**
   * Creates an instance of BrinquedoLocadoController.
   * @memberof BrinquedoLocadoController
   */
  constructor() {
    super(new BrinquedoLocadoService(), new DTOValidator())
  }

  /**
   * Get all rented toys
   *
   * @param {Request} req
   * @param {Response} res
   * @param {NextFunction} next
   * @memberof BrinquedoLocadoController
   */
  public getAll = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      // Calls the service to get all rented toys
      const toys: ResponseBrinquedoLocadoDTO[] =
        await this.service.getAll()
      // If no error is found, return 200
      res.status(200).json(toys)
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
   * @memberof BrinquedoLocadoController
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
      const toy: ResponseBrinquedoLocadoDTO | null =
        await this.service.getOne(cod)
      // If not found, return 404
      if (!toy) {
        res.status(404).json({ message: 'Rented toy not found' })
        return
      }
      // If no error is found, return 200
      res.status(200).json(toy)
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
   * @memberof BrinquedoLocadoController
   */
  public create = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      console.log(req.body)
      // Validate the request body
      const validatedData: CreateBrinquedoLocadoDTO =
        this.validator.createBrinquedoLocado<CreateBrinquedoLocadoDTO>(req.body)
      // Calls the service to create a new toy
      const toy: ResponseBrinquedoLocadoDTO | null =
        await this.service.create(validatedData)
      // If no error is found, return 201, created
      if (toy) {
        res.status(201).json(toy)
      } else {
        // If error is found, return 400
        res.status(404).json({ message: 'Rented toy not created' })
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
   * @memberof BrinquedoLocadoController
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
      // Calls the service to update a rented toy
      const updatedToy: Partial<ResponseBrinquedoLocadoDTO | null> =
        await this.service.update(cod, validatedData)
      // If not found, return 404
      if (!updatedToy) {
        res.status(404).json({ message: 'Rented toy not found' })
        return
      }
      // If no error is found, return 200, OK
      res.status(200).json(updatedToy)
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
   * @memberof BrinquedoLocadoController
   */
  public delete = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      // Get cod from params
      const { cod } = req.params
      // Calls the service to delete a rented toy
      const success: boolean = await this.service.delete(cod)
      // If not success, return 404, not found
      if (!success) {
        res.status(404).json({ message: 'Rented toy not found' })
        return
      }
      // If no error is found, return 200, OK
      res.status(200).json({ message: 'Rented toy deleted!' })
      return
    } catch (error) {
      // If error, calls next func. with error
      // This will be handled by the error middleware
      next(error)
      return
    }
  }
}
