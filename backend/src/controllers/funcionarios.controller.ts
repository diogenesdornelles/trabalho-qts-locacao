import { Request, Response, NextFunction } from 'express'
import FuncionarioServices from '../services/funcionario.services'
import { BaseController } from './base.controller'
import { ResponseFuncionarioDTO } from '../dtos/response/response-funcionario.dto'
import { UpdateFuncionarioDTO } from '../dtos/update/update-funcionario.dto'
import { CreateFuncionarioDTO } from '../dtos/create/create-funcionario.dto'
import DTOValidator from '../validators/dto.validator'

export default class FuncionariosController extends BaseController<FuncionarioServices> {
  constructor() {
    super(new FuncionarioServices(), new DTOValidator())
  }

  public getAll = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const funcionarios: ResponseFuncionarioDTO[] = await this.service.getAll()
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
      const funcionario: ResponseFuncionarioDTO | null =
        await this.service.getOne(cpf)
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
      const validatedData: CreateFuncionarioDTO =
        this.validator.createFuncionario<CreateFuncionarioDTO>(req.body)
      const funcionario: ResponseFuncionarioDTO =
        await this.service.create(validatedData)
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

      const validatedData: UpdateFuncionarioDTO =
        this.validator.updateFuncionario<UpdateFuncionarioDTO>(req.body)
      const updatedFuncionario: Partial<ResponseFuncionarioDTO> =
        await this.service.update(cpf, validatedData)
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
