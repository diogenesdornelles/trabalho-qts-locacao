import { Request, Response, NextFunction } from 'express'
import FuncionarioServices from '../services/FuncionarioServices'
import { BaseController } from './BaseController'
import { CreateFuncionarioValidator } from '../validators/CreateFuncionarioValidator'
import { UpdateFuncionarioValidator } from '../validators/UpdateFuncionarioValidator'
import { FuncionarioResponseDTO } from '../dtos/response/FuncionarioResponseDTO'
import { UpdateFuncionarioDTO } from '../dtos/update/UpdateFuncionarioDTO'
import { CreateFuncionarioDTO } from '../dtos/create/CreateFuncionarioDTO'

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
      const funcionarios: FuncionarioResponseDTO[] = await this.service.getAll()
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
      const funcionario: FuncionarioResponseDTO | null = await this.service.getOne(cpf)
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
      const validatedData: CreateFuncionarioDTO = CreateFuncionarioValidator.parse(req.body)
      const funcionario: FuncionarioResponseDTO = await this.service.create(validatedData)
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

      const validatedData: UpdateFuncionarioDTO = UpdateFuncionarioValidator.parse(req.body)
      const updatedFuncionario: Partial<FuncionarioResponseDTO>= await this.service.update(cpf, validatedData)
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
