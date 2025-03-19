import { Request, Response, NextFunction } from 'express'
import LoginServices from '../services/LoginServices'
import { BaseController } from './BaseController'
import { CreateLoginValidator } from '../validators/CreateLoginValidator'
import { CreateTokenDTO } from '../dtos/create/CreateTokenDTO'
import { TokenResponseDTO } from '../dtos/response/TokenResponseDTO'

export default class LoginController extends BaseController<LoginServices> {
  constructor() {
    super(new LoginServices())
  }

  public create = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const validatedData: CreateTokenDTO = CreateLoginValidator.parse(req.body)
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
