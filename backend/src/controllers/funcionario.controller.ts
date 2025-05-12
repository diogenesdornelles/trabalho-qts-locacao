import { Request, Response, NextFunction } from 'express'
import FuncionarioService from '../services/funcionario.service'
import { BaseController } from './base.controller'
import { ResponseFuncionarioDTO } from '../dtos/response/responseFuncionario.dto'
import { UpdateFuncionarioDTO } from '../dtos/update/updateFuncionario.dto'
import { CreateFuncionarioDTO } from '../dtos/create/createFuncionario.dto'
import DTOValidator from '../validators/dto.validator'

/**
 * Controller for managing employees.
 *
 * @export
 * @class FuncionariosController
 * @extends {BaseController<FuncionarioService>}
 */
export default class FuncionariosController extends BaseController<FuncionarioService> {
  /**
   * Creates an instance of FuncionariosController.
   * @memberof FuncionariosController
   */
  constructor() {
    super(new FuncionarioService(), new DTOValidator())
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
      const employees: ResponseFuncionarioDTO[] = await this.service.getAll()
      // If no error is found, return 200
      res.status(200).json(employees)
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
      const employee: ResponseFuncionarioDTO | null =
        await this.service.getOne(cpf)
      // If not found, return 404
      if (!employee) {
        res.status(404).json({ message: 'Employee not found' })
        return
      }
      // If no error is found, return 200
      res.status(200).json(employee)
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
      console.log(req.body)
      // Validate the request body
      const validatedData: CreateFuncionarioDTO =
        this.validator.createFuncionario<CreateFuncionarioDTO>(req.body)
      // Calls the service to create a new employee
      const employee: ResponseFuncionarioDTO =
        await this.service.create(validatedData)
      // If no error is found, return 201, created
      res.status(201).json(employee)
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
      const updatedEmployee: Partial<ResponseFuncionarioDTO> =
        await this.service.update(cpf, validatedData)
      // If not found, return 404
      if (!updatedEmployee) {
        res.status(404).json({ message: 'Employee not found' })
        return
      }
      // If no error is found, return 200
      res.status(200).json(updatedEmployee)
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
