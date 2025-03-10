import { Router, RequestHandler } from 'express'
import BrinquedosController from '../controllers/BrinquedosController'
import GeneralMiddleware from '../middlewares/GeneralMiddleware'
import { BaseRouter } from './BaseRouter'

export default class BrinquedosRouter extends BaseRouter<BrinquedosController> {
  constructor() {
    super(new BrinquedosController())
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

    this.router.put(
      '/:cod',
      GeneralMiddleware.validateUUID,
      this.controller.update as unknown as RequestHandler,
      GeneralMiddleware.errorHandler as unknown as RequestHandler,
    )

    this.router.delete(
      '/:cod',
      GeneralMiddleware.validateUUID,
      this.controller.delete as unknown as RequestHandler,
      GeneralMiddleware.errorHandler as unknown as RequestHandler,
    )
  }
}
