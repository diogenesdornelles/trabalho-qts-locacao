import { Request, Response, NextFunction } from 'express'
import BrinquedoLocadoServices from '../services/BrinquedoLocadoServices'
import { BaseController } from './BaseController'

export default class BrinquedosLocadosController extends BaseController<BrinquedoLocadoServices> {
  constructor() {
    super(new BrinquedoLocadoServices())
  }

  public getAll = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const brinquedos = await this.service.getAll()
      res.status(200).json(brinquedos)
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
      const brinquedo = await this.service.getOne(cod)
      if (!brinquedo) {
        res.status(404).json({ message: 'Toy not found' })
        return
      }
      res.status(200).json(brinquedo)
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
      const brinquedo = await this.service.create(req)
      res.status(201).json(brinquedo)
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
      const updatedBrinquedo = await this.service.update(cod, req)
      if (!updatedBrinquedo) {
        res.status(404).json({ message: 'Toy not found' })
        return
      }
      res.status(200).json(updatedBrinquedo)
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
    try {
      const { cod } = req.params
      const success = await this.service.delete(cod)
      if (!success) {
        res.status(404).json({ message: 'Toy not found' })
        return
      }
      res.status(200).json({ message: 'Toy deleted!' })
      return
    } catch (error) {
      next(error)
    }
  }
}
