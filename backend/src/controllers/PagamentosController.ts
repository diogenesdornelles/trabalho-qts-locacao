import { Request, Response, NextFunction } from 'express'
import PagamentoServices from '../services/PagamentoServices'
import { BaseController } from './BaseController'
import { PagamentoResponseDTO } from '../dtos/response/PagamentoResponseDTO'
import { CreatePagamentoDTO } from '../dtos/create/CreatePagamentoDTO'
import DTOValidator from '../validators/DTOValidator'

export default class PagamentosController extends BaseController<PagamentoServices> {
  constructor() {
    super(new PagamentoServices(), new DTOValidator())
  }
  public getAll = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const pagamentos: PagamentoResponseDTO[] = await this.service.getAll()
      res.status(200).json(pagamentos)
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

      const pagamento: PagamentoResponseDTO | null =
        await this.service.getOne(cod)
      if (!pagamento) {
        res.status(404).json({ message: 'Payment not found' })
        return
      }
      res.status(200).json(pagamento)
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
      const validatedData: CreatePagamentoDTO =
        this.validator.createPagamento<CreatePagamentoDTO>(req.body)
      const pagamento: PagamentoResponseDTO =
        await this.service.create(validatedData)
      res.status(201).json(pagamento)
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
  public delete = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    throw new Error('Method not implemented.')
  }
}
