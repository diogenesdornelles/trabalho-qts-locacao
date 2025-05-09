import { Request, Response, NextFunction } from 'express'
import { BaseController } from './base.controller'
import { CreateTokenDTO } from '../dtos/create/createToken.dto'
import DTOValidator from '../validators/dto.validator'
import PagamentoService from '../services/pagamento.service'
import { CreatePagamentoDTO } from '../dtos/create/createPagamento.dto'
import { ResponsePagamentoDTO } from '../dtos/response/responsePagamento.dto'

/**
 * Controller for managing payments.
 *
 * @export
 * @class PaymentController
 * @extends {BaseController<PagamentoService>}
 */
export default class PagamentoController extends BaseController<PagamentoService> {
  /**
   * Creates an instance of LoginController.
   * @memberof PagamentoController
   */
  constructor() {
    super(new PagamentoService(), new DTOValidator())
  }

  /**
   * Create a new login token.
   *
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The next middleware function.
   * @memberof LoginController
   */
  public create = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      // Validate the request body
      const validatedData: CreatePagamentoDTO =
        this.validator.createPagamento<CreateTokenDTO>(req.body)
      // Calls the service to create a new token
      const result: ResponsePagamentoDTO = await this.service.create(validatedData)
      // If no error is found, return 201, created
      res.status(201).json(result)
      return
    } catch (error) {
      // If error, calls next func. with error
      // This will be handled by the error middleware
      next(error)
      return
    }
  }

  /**
   * Get all tokens.
   *
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The next middleware function.
   * @memberof LoginController
   */
  public getAll(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    throw new Error('Method not implemented.')
  }

  /**
   * Get one token by identifier.
   *
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The next middleware function.
   * @memberof LoginController
   */
  public getOne(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    throw new Error('Method not implemented.')
  }

  /**
   * Update a token by identifier.
   *
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The next middleware function.
   * @memberof LoginController
   */
  public update(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    throw new Error('Method not implemented.')
  }

  /**
   * Delete a token by identifier.
   *
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The next middleware function.
   * @memberof LoginController
   */
  public delete(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
