import { Request, Response, NextFunction } from 'express'
import LoginServices from '../services/login.services'
import { BaseController } from './base.controller'
import { CreateTokenDTO } from '../dtos/create/create-token.dto'
import { ResponseTokenDTO } from '../dtos/response/response-token.dto'
import DTOValidator from '../validators/dto.validator'

export default class LoginController extends BaseController<LoginServices> {
  constructor() {
    super(new LoginServices(), new DTOValidator())
  }

  public create = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const validatedData: CreateTokenDTO =
        this.validator.createLogin<CreateTokenDTO>(req.body)
      const result: ResponseTokenDTO = await this.service.create(validatedData)
      res.status(201).json(result)
      return
    } catch (error) {
      next(error)
      return
    }
  }

  public getAll(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    throw new Error('Method not implemented.')
  }
  public getOne(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    throw new Error('Method not implemented.')
  }
  public update(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    throw new Error('Method not implemented.')
  }
  public delete(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
