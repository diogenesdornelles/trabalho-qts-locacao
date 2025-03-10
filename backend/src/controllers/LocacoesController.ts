import { Request, Response, NextFunction } from 'express'
import LocacaoServices from '../services/LocacaoServices'
import { BaseController } from './BaseController'

export default class LocacoesController extends BaseController<LocacaoServices> {
  constructor() {
    super(new LocacaoServices())
  }
  public getAll = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const locacoes = await this.service.getAll()
      res.status(200).json(locacoes)
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
      const locacao = await this.service.getOne(cod)
      if (!locacao) {
        res.status(404).json({ message: 'Rental not found' })
        return
      }
      res.status(200).json(locacao)
      return
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
      const locacao = await this.service.create(req)
      res.status(201).json(locacao)
      return
    } catch (error) {
      next(error)
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
