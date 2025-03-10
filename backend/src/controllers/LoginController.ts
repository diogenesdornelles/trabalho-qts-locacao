import { Request, Response, NextFunction } from 'express'
import LoginServices from '../services/LoginServices'
import { BaseController } from './BaseController'

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
      const locacao = await this.service.create(req)
      res.status(201).json(locacao)
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
