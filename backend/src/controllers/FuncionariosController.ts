import { Request, Response, NextFunction } from 'express'
import FuncionarioServices from '../services/FuncionarioServices'
import { BaseController } from './BaseController'
import { CreateFuncionarioValidator } from '../validators/CreateFuncionarioValidator'
import { UpdateFuncionarioValidator } from '../validators/UpdateFuncionarioValidator'

export default class FuncionariosController extends BaseController<FuncionarioServices> {
  constructor() {
    super(new FuncionarioServices())
  }

  public getAll = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const funcionarios = await this.service.getAll()
      res.status(200).json(funcionarios)
      return
    } catch (error) {
      next(error)
      return
    }
  }

  public getOne = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { cpf } = req.params
      const funcionario = await this.service.getOne(cpf)
      if (!funcionario) {
        res.status(404).json({ message: 'Employee not found' })
        return
      }
      res.status(200).json(funcionario)
      return
    } catch (error) {
      next(error)
      return
    }
  }

  public create = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const validatedData = CreateFuncionarioValidator.parse(req.body)
      const funcionario = await this.service.create(validatedData)
      res.status(201).json(funcionario)
      return
    } catch (error) {
      next(error)
      return
    }
  }

  public update = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { cpf } = req.params

      const validatedData = UpdateFuncionarioValidator.parse(req.body)
      const updatedFuncionario = await this.service.update(cpf, validatedData)
      if (!updatedFuncionario) {
        res.status(404).json({ message: 'Employee not found' })
        return
      }
      res.status(200).json(updatedFuncionario)
      return
    } catch (error) {
      next(error)
      return
    }
  }

  public delete = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { cpf } = req.params
      const success = await this.service.delete(cpf)
      if (!success) {
        res.status(404).json({ message: 'Employee not found' })
        return
      }
      res.status(200).json({ message: 'Employee deleted!' })
      return
    } catch (error) {
      next(error)
      return
    }
  }
}
