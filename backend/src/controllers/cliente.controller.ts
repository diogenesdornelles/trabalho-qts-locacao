import { Request, Response, NextFunction } from 'express'
import ClienteService from '../services/cliente.service'
import { BaseController } from './base.controller'
import { ResponseClienteDTO } from '../dtos/response/responseCliente.dto'
import { CreateClienteDTO } from '../dtos/create/createCliente.dto'
import DTOValidator from '../validators/dto.validator'
import { UpdateClienteDTO } from '../dtos/update/updateCliente.dto'

/**
 * Controller for managing customers.
 *
 * @export
 * @class ClientesController
 * @extends {BaseController<ClienteService>}
 */
export default class ClientesController extends BaseController<ClienteService> {
  /**
   * Creates an instance of ClientesController.
   * @memberof ClientesController
   */
  constructor() {
    super(new ClienteService(), new DTOValidator())
  }

  /**
   * Get all customers.
   *
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The next middleware function.
   * @memberof ClientesController
   */
  public getAll = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      // Calls the service to get all customers
      const customers: ResponseClienteDTO[] = await this.service.getAll()
      // If no error is found, return 200
      res.status(200).json(customers)
      return
    } catch (error) {
      // If error, calls next func. with error
      // This will be handled by the error middleware
      next(error)
      return
    }
  }

  /**
   * Get one customer by CPF.
   *
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The next middleware function.
   * @memberof ClientesController
   */
  public getOne = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      // Get the CPF from req.params
      const { cpf } = req.params
      // Calls the service to get one customer
      const customer: ResponseClienteDTO | null = await this.service.getOne(cpf)
      // If not found, return 404
      if (!customer) {
        res.status(404).json({ message: 'Customer not found' })
        return
      }
      // If no error is found, return 200
      res.status(200).json(customer)
      return
    } catch (error) {
      // If error, calls next func. with error
      // This will be handled by the error middleware
      next(error)
      return
    }
  }

  /**
   * Create a new customer.
   *
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The next middleware function.
   * @memberof ClientesController
   */
  public create = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      // Validate the request body
      const validatedData: CreateClienteDTO =
        this.validator.createCliente<CreateClienteDTO>(req.body)
      // Calls the service to create a new customer
      const customer: ResponseClienteDTO =
        await this.service.create(validatedData)
      // If no error is found, return 201, created
      res.status(201).json(customer)
      return
    } catch (error) {
      // If error, calls next func. with error
      // This will be handled by the error middleware
      next(error)
      return
    }
  }

  /**
   * Update a customer by CPF.
   *
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The next middleware function.
   * @memberof ClientesController
   */
  public update = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      // Get the CPF from req.params
      const { cpf } = req.params
      // Validate the request body
      const validatedData: UpdateClienteDTO =
        this.validator.updateCliente<UpdateClienteDTO>(req.body)
      // Calls the service to update the customer
      const updatedCustomer: Partial<ResponseClienteDTO> =
        await this.service.update(cpf, validatedData)
      // If not found, return 404
      if (!updatedCustomer) {
        res.status(404).json({ message: 'Customer not found' })
        return
      }
      // If no error is found, return 200
      res.status(200).json(updatedCustomer)
      return
    } catch (error) {
      // If error, calls next func. with error
      // This will be handled by the error middleware
      next(error)
      return
    }
  }

  /**
   * Delete a customer by CPF.
   *
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The next middleware function.
   * @memberof ClientesController
   */
  public delete = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    throw new Error('Method not implemented.')
  }
}
