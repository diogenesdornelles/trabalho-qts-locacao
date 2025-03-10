import { Request, Response, NextFunction } from 'express'
import PagamentoServices from '../services/PagamentoServices'
import { BaseController } from './BaseController'

export default class PagamentosController extends BaseController<PagamentoServices> {
  constructor() {
    super(new PagamentoServices())
  }
  public getAll = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const pagamentos = await this.service.getAll()
      res.status(200).json(pagamentos)
      return
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
      const { cod } = req.params

      const pagamento = await this.service.getOne(cod)
      console.log(pagamento)
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
      const locacao = await this.service.create(req)
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
  public delete = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    throw new Error('Method not implemented.')
  }
}
