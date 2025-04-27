import { Request, Response, NextFunction } from 'express'
import FuncionarioServices from '../services/funcionario.services'
import { BaseController } from './base.controller'
import { ResponseFuncionarioDTO } from '../dtos/response/response-funcionario.dto'
import { UpdateFuncionarioDTO } from '../dtos/update/update-funcionario.dto'
import { CreateFuncionarioDTO } from '../dtos/create/create-funcionario.dto'
import DTOValidator from '../validators/dto.validator'

/**
 * Controller for managing employees.
 *
 * @export
 * @class FuncionariosController
 * @extends {BaseController<FuncionarioServices>}
 */
export default class FuncionariosController extends BaseController<FuncionarioServices> {
  /**
   * Creates an instance of FuncionariosController.
   * @memberof FuncionariosController
   */
  constructor() {
    super(new FuncionarioServices(), new DTOValidator())
  }

  /**
   * Get all employees.
   *
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The next middleware function.
   * @memberof FuncionariosController
   */
  public getAll = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      // Calls the service to get all employees
      const funcionarios: ResponseFuncionarioDTO[] = await this.service.getAll()
      // If no error is found, return 200
      res.status(200).json(funcionarios)
      return
    } catch (error) {
      // If error, calls next func. with error
      // This will be handled by the error middleware
      next(error)
      return
    }
  }

  /**
   * Get one employee by CPF.
   *
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The next middleware function.
   * @memberof FuncionariosController
   */
  public getOne = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      // Get the CPF from req.params
      const { cpf } = req.params
      // Calls the service to get one employee
      const funcionario: ResponseFuncionarioDTO | null =
        await this.service.getOne(cpf)
      // If not found, return 404
      if (!funcionario) {
        res.status(404).json({ message: 'Employee not found' })
        return
      }
      // If no error is found, return 200
      res.status(200).json(funcionario)
      return
    } catch (error) {
      // If error, calls next func. with error
      // This will be handled by the error middleware
      next(error)
      return
    }
  }

  /**
   * Create a new employee.
   *
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The next middleware function.
   * @memberof FuncionariosController
   */
  public create = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      // Validate the request body
      const validatedData: CreateFuncionarioDTO =
        this.validator.createFuncionario<CreateFuncionarioDTO>(req.body)
      // Calls the service to create a new employee
      const funcionario: ResponseFuncionarioDTO =
        await this.service.create(validatedData)
      // If no error is found, return 201, created
      res.status(201).json(funcionario)
      return
    } catch (error) {
      // If error, calls next func. with error
      // This will be handled by the error middleware
      next(error)
      return
    }
  }

  /**
   * Update an employee by CPF.
   *
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The next middleware function.
   * @memberof FuncionariosController
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
      const validatedData: UpdateFuncionarioDTO =
        this.validator.updateFuncionario<UpdateFuncionarioDTO>(req.body)
      // Calls the service to update the employee
      const updatedFuncionario: Partial<ResponseFuncionarioDTO> =
        await this.service.update(cpf, validatedData)
      // If not found, return 404
      if (!updatedFuncionario) {
        res.status(404).json({ message: 'Employee not found' })
        return
      }
      // If no error is found, return 200
      res.status(200).json(updatedFuncionario)
      return
    } catch (error) {
      // If error, calls next func. with error
      // This will be handled by the error middleware
      next(error)
      return
    }
  }

  /**
   * Delete an employee by CPF.
   *
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The next middleware function.
   * @memberof FuncionariosController
   */
  public delete = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      // Get the CPF from req.params
      const { cpf } = req.params
      // Calls the service to delete the employee
      const success = await this.service.delete(cpf)
      // If not success, return 404, not found
      if (!success) {
        res.status(404).json({ message: 'Employee not found' })
        return
      }
      // If no error is found, return 200
      res.status(200).json({ message: 'Employee deleted!' })
      return
    } catch (error) {
      // If error, calls next func. with error
      // This will be handled by the error middleware
      next(error)
      return
    }
  }
}
