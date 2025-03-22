import { Request, Response, NextFunction } from 'express'
import { BaseService } from '../services/BaseService'
import DTOValidator from '../validators/DTOValidator'

export abstract class BaseController<
  T extends BaseService<
    Record<string, any>,
    Record<string, any>,
    Record<string, any>
  >,
> {
  public service: T
  public validator: DTOValidator
  constructor(service: T, validator: DTOValidator) {
    this.service = service
    this.validator = validator
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
