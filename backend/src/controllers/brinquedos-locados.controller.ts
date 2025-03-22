import { Request, Response, NextFunction } from 'express'
import BrinquedoLocadoServices from '../services/brinquedo-locado.services'
import { BaseController } from './base.controller'
import { ResponseBrinquedoLocadoDTO } from '../dtos/response/response-brinquedo-locado.dto'
import { CreateBrinquedoLocadoDTO } from '../dtos/create/create-brinquedo-locado.dto'
import { UpdateBrinquedoLocadoDTO } from '../dtos/update/update-brinquedo-locado.dto'
import DTOValidator from '../validators/dto.validator'

export default class BrinquedosLocadosController extends BaseController<BrinquedoLocadoServices> {
  constructor() {
    super(new BrinquedoLocadoServices(), new DTOValidator())
  }

  public getAll = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const brinquedos: ResponseBrinquedoLocadoDTO[] =
        await this.service.getAll()
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
      const brinquedo: ResponseBrinquedoLocadoDTO | null =
        await this.service.getOne(cod)
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
      const validatedData: CreateBrinquedoLocadoDTO =
        this.validator.createBrinquedoLocado<CreateBrinquedoLocadoDTO>(req.body)
      const brinquedo: ResponseBrinquedoLocadoDTO | null =
        await this.service.create(validatedData)
      if (brinquedo) {
        res.status(201).json(brinquedo)
      } else {
        res.status(404).json({ message: 'Toy not created' })
      }
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
      const validatedData: UpdateBrinquedoLocadoDTO =
        this.validator.updateBrinquedoLocado<UpdateBrinquedoLocadoDTO>(req.body)
      const updatedBrinquedo: Partial<ResponseBrinquedoLocadoDTO | null> =
        await this.service.update(cod, validatedData)
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
      const success: boolean = await this.service.delete(cod)
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
