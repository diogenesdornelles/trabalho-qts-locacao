import { Request, Response, NextFunction } from 'express'
import TipoBrinquedoServices from '../services/TipoBrinquedoServices'
import { BaseController } from './BaseController'

export default class TiposBrinquedosController extends BaseController<TipoBrinquedoServices> {
  constructor() {
    super(new TipoBrinquedoServices())
  }
  public getAll = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const tipos = await this.service.getAll()
      res.status(200).json(tipos)
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
      const tipo = await this.service.getOne(cod)
      if (!tipo) {
        res.status(404).json({ message: 'Type toy not found' })
        return
      }
      res.status(200).json(tipo)
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
      const tipo = await this.service.create(req)
      res.status(201).json(tipo)
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
    try {
      const { cod } = req.params
      const updatedTipo = await this.service.update(cod, req)
      if (!updatedTipo) {
        res.status(404).json({ message: 'Type toy not found' })
        return
      }
      res.status(200).json(updatedTipo)
      return
    } catch (error) {
      next(error)
    }
  }
  public delete = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    throw new Error('Method not implemented.')
  }
}
