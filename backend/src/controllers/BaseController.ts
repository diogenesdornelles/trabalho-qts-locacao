import { Request, Response, NextFunction } from 'express'
import { BaseService } from '../services/BaseService'

export abstract class BaseController<
  T extends BaseService<Record<string, any>>,
> {
  public service: T
  constructor(service: T) {
    this.service = service
  }

  public abstract getAll(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void>
  public abstract getOne(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void>
  public abstract create(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void>
  public abstract update(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void>
  public abstract delete(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void>
}
