import { Request, Response, NextFunction } from 'express'
import BrinquedoServices from '../services/BrinquedoLocadoServices'
import { BaseController } from './BaseController'

export default class BrinquedosController extends BaseController<BrinquedoServices> {
  constructor() {
    super(new BrinquedoServices())
  }

  public getAll = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const brinquedos = await this.service.getAll()
      res.status(200).json(brinquedos)
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
      const brinquedo = await this.service.getOne(cod)
      if (!brinquedo) {
        res.status(404).json({ message: 'Toy not found' })
        return
      }
      res.status(200).json(brinquedo)
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
      const brinquedo = await this.service.create(req)
      res.status(201).json(brinquedo)
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
      const updatedBrinquedo = await this.service.update(cod, req)
      if (!updatedBrinquedo) {
        res.status(404).json({ message: 'Toy not found' })
        return
      }
      res.status(200).json(updatedBrinquedo)
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
      const { cod } = req.params
      const success = await this.service.delete(cod)
      if (!success) {
        res.status(404).json({ message: 'Toy not found' })
        return
      }
      res.status(200).json({ message: 'Toy deleted!' })
    } catch (error) {
      next(error)
    }
  }
}
