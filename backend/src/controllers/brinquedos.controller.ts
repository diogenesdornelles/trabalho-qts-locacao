import { Request, Response, NextFunction } from 'express'
import BrinquedoServices from '../services/brinquedo.services'
import { BaseController } from './base.controller'
import { ResponseBrinquedoDTO } from '../dtos/response/response-brinquedo.dto'
import { ResponseBrinquedoComTipoDTO } from '../dtos/response/response-brinquedo-response-com-tipo.dto'
import { CreateBrinquedoDTO } from '../dtos/create/create-brinquedo.dto'
import { UpdateBrinquedoDTO } from '../dtos/update/update-brinquedo.dto'
import DTOValidator from '../validators/dto.validator'

export default class BrinquedosController extends BaseController<BrinquedoServices> {
  constructor() {
    super(new BrinquedoServices(), new DTOValidator())
  }

  public getAll = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const brinquedos: ResponseBrinquedoComTipoDTO[] =
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
      const brinquedo: ResponseBrinquedoComTipoDTO | null =
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
      const validatedData: CreateBrinquedoDTO =
        this.validator.createBrinquedo<CreateBrinquedoDTO>(req.body)
      const brinquedo: ResponseBrinquedoDTO =
        await this.service.create(validatedData)
      res.status(201).json(brinquedo)
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

      const validatedData: UpdateBrinquedoDTO =
        this.validator.updateBrinquedo<UpdateBrinquedoDTO>(req.body)
      const updatedBrinquedo: Partial<ResponseBrinquedoDTO> =
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
