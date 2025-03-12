import { Request, Response, NextFunction } from 'express'
import BrinquedoLocadoServices from '../services/BrinquedoLocadoServices'
import { BaseController } from './BaseController'
import { CreateBrinquedoLocadoValidator } from '../validators/CreateBrinquedoLocadoValidator'
import { UpdateBrinquedoLocadoValidator } from '../validators/UpdateBrinquedoLocadoValidator'

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
      const brinquedo = await this.service.getOne(cod)
      if (!brinquedo) {
        res.status(404).json({ message: 'Toy not found' })
        return
      }
      res.status(200).json(brinquedo)
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
      const validatedData = CreateBrinquedoLocadoValidator.parse(req.body)
      const brinquedo = await this.service.create(validatedData)
      if (!brinquedo) {
        res.status(201).json(brinquedo)
        return
      }
      res.status(404).json({ message: 'Toy not created' })
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
      const { cod } = req.params
      const validatedData = UpdateBrinquedoLocadoValidator.parse(req.body)
      const updatedBrinquedo = await this.service.update(cod, validatedData)
      if (!updatedBrinquedo) {
        res.status(404).json({ message: 'Toy not found' })
        return
      }
      res.status(200).json(updatedBrinquedo)
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
      return
    }
  }
}
