import { Request, Response, NextFunction } from 'express'
import PagamentoServices from '../services/pagamento.services'
import { BaseController } from './base.controller'
import { ResponsePagamentoDTO } from '../dtos/response/response-pagamento.dto'
import { CreatePagamentoDTO } from '../dtos/create/create-pagamento.dto'
import DTOValidator from '../validators/dto.validator'

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
      const pagamentos: ResponsePagamentoDTO[] = await this.service.getAll()
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

      const pagamento: ResponsePagamentoDTO | null =
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
      const pagamento: ResponsePagamentoDTO =
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
