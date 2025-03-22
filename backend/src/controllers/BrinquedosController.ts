import { Request, Response, NextFunction } from 'express'
import BrinquedoServices from '../services/BrinquedoServices'
import { BaseController } from './BaseController'
import { BrinquedoResponseDTO } from '../dtos/response/BrinquedoResponseDTO'
import { BrinquedoResponseComTipoDTO } from '../dtos/response/BrinquedoResponseComTipoDTO'
import { CreateBrinquedoDTO } from '../dtos/create/CreateBrinquedoDTO'
import { UpdateBrinquedoDTO } from '../dtos/update/UpdateBrinquedoDTO'
import DTOValidator from '../validators/DTOValidator'

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
      const brinquedos: BrinquedoResponseComTipoDTO[] =
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
      const brinquedo: BrinquedoResponseComTipoDTO | null =
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
      const brinquedo: BrinquedoResponseDTO =
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
      const updatedBrinquedo: Partial<BrinquedoResponseDTO> =
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
