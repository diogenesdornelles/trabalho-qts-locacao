import { Request, Response, NextFunction } from 'express'
import LocacaoServices from '../services/LocacaoServices'
import { BaseController } from './BaseController'
import { LocacaoResponseDTO } from '../dtos/response/LocacaoResponseDTO'
import { CreateLocacaoDTO } from '../dtos/create/CreateLocacaoDTO'
import DTOValidator from '../validators/DTOValidator'

export default class LocacoesController extends BaseController<LocacaoServices> {
  constructor() {
    super(new LocacaoServices(), new DTOValidator())
  }
  public getAll = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const locacoes: LocacaoResponseDTO[] = await this.service.getAll()
      res.status(200).json(locacoes)
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
      const { cod } = req.params
      const locacao: LocacaoResponseDTO | null = await this.service.getOne(cod)
      if (!locacao) {
        res.status(404).json({ message: 'Rental not found' })
        return
      }
      res.status(200).json(locacao)
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
      const validatedData: CreateLocacaoDTO =
        this.validator.createLocacao<CreateLocacaoDTO>(req.body)
      const locacao: LocacaoResponseDTO =
        await this.service.create(validatedData)
      res.status(201).json(locacao)
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
    throw new Error('Method not implemented.')
  }
  public async delete(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
