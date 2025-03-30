import { Request, Response, NextFunction } from 'express'
import TipoBrinquedoServices from '../services/tipo-brinquedo.services'
import { BaseController } from './base.controller'
import { ResponseTipoBrinquedoDTO } from '../dtos/response/response-tipo-brinquedo.dto'
import { CreateTipoBrinquedoDTO } from '../dtos/create/create-tipo-brinquedo.dto'
import { UpdateTipoBrinquedoDTO } from '../dtos/update/update-tipo-brinquedo.dto'
import DTOValidator from '../validators/dto.validator'

export default class TiposBrinquedosController extends BaseController<TipoBrinquedoServices> {
  constructor() {
    super(new TipoBrinquedoServices(), new DTOValidator())
  }
  public getAll = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const tipos: ResponseTipoBrinquedoDTO[] = await this.service.getAll()
      res.status(200).json(tipos)
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
      const tipo: ResponseTipoBrinquedoDTO | null =
        await this.service.getOne(cod)
      if (!tipo) {
        res.status(404).json({ message: 'Type toy not found' })
        return
      }
      res.status(200).json(tipo)
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
      const validatedData: CreateTipoBrinquedoDTO =
        this.validator.createTipoBrinquedo<CreateTipoBrinquedoDTO>(req.body)
      const tipo: ResponseTipoBrinquedoDTO =
        await this.service.create(validatedData)
      res.status(201).json(tipo)
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
      const validatedData: UpdateTipoBrinquedoDTO =
        this.validator.updateTipoBrinquedo<UpdateTipoBrinquedoDTO>(req.body)
      const updatedTipo: Partial<ResponseTipoBrinquedoDTO> =
        await this.service.update(cod, validatedData)
      if (!updatedTipo) {
        res.status(404).json({ message: 'Type toy not found' })
        return
      }
      res.status(200).json(updatedTipo)
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
    throw new Error('Method not implemented.')
  }
}
