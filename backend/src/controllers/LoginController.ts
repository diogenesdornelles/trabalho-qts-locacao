import { Request, Response, NextFunction } from 'express'
import LoginServices from '../services/LoginServices'
import { BaseController } from './BaseController'
import { CreateTokenDTO } from '../dtos/create/CreateTokenDTO'
import { TokenResponseDTO } from '../dtos/response/TokenResponseDTO'
import DTOValidator from '../validators/DTOValidator'

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
      const result: TokenResponseDTO = await this.service.create(validatedData)
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
