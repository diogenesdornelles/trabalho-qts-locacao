import { Router, RequestHandler } from 'express'
import LocacoesController from '../controllers/LocacoesController'
import GeneralMiddleware from '../middlewares/GeneralMiddleware'
import { BaseRouter } from './BaseRouter'

export default class LocacoesRouter extends BaseRouter<LocacoesController> {
  constructor() {
    super(new LocacoesController())
  }

  protected initRoutes(): void {
    this.router.get(
      '/',
      this.controller.getAll,
      GeneralMiddleware.errorHandler as unknown as RequestHandler,
    )

    this.router.get(
      '/:cod',
      GeneralMiddleware.validateUUID,
      this.controller.getOne as unknown as RequestHandler,
      GeneralMiddleware.errorHandler as unknown as RequestHandler,
    )

    this.router.post(
      '/',
      GeneralMiddleware.validateBodyRequest as unknown as RequestHandler,
      this.controller.create as unknown as RequestHandler,
      GeneralMiddleware.errorHandler as unknown as RequestHandler,
    )
  }
}
