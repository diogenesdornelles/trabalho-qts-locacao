import { Request, Response, NextFunction } from 'express'
import FuncionarioServices from '../services/FuncionarioServices'
import { BaseController } from './BaseController'

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
    } catch (error) {
      next(error)
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
    } catch (error) {
      next(error)
    }
  }

  public create = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const funcionario = await this.service.create(req)
      res.status(201).json(funcionario)
    } catch (error) {
      next(error)
    }
  }

  public update = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { cpf } = req.params
      const updatedFuncionario = await this.service.update(cpf, req)
      if (!updatedFuncionario) {
        res.status(404).json({ message: 'Employee not found' })
        return
      }
      res.status(200).json(updatedFuncionario)
    } catch (error) {
      next(error)
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
    } catch (error) {
      next(error)
    }
  }
}
