import { RequestHandler } from 'express'
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
      GeneralMiddleware.authentication,
      this.controller.getAll,
      GeneralMiddleware.errorHandler as unknown as RequestHandler,
    )

    this.router.get(
      '/:cod',
      GeneralMiddleware.authentication,
      GeneralMiddleware.validateUUID,
      this.controller.getOne as unknown as RequestHandler,
      GeneralMiddleware.errorHandler as unknown as RequestHandler,
    )

    this.router.post(
      '/',
      GeneralMiddleware.authentication,
      GeneralMiddleware.authorizationAlmoxarife,
      GeneralMiddleware.validateBodyRequest as unknown as RequestHandler,
      this.controller.create as unknown as RequestHandler,
      GeneralMiddleware.errorHandler as unknown as RequestHandler,
    )

    this.router.put(
      '/:cod',
      GeneralMiddleware.authentication,
      GeneralMiddleware.authorizationAlmoxarife,
      GeneralMiddleware.validateUUID,
      this.controller.update as unknown as RequestHandler,
      GeneralMiddleware.errorHandler as unknown as RequestHandler,
    )

    this.router.delete(
      '/:cod',
      GeneralMiddleware.authentication,
      GeneralMiddleware.authorizationAlmoxarife,
      GeneralMiddleware.validateUUID,
      this.controller.delete as unknown as RequestHandler,
      GeneralMiddleware.errorHandler as unknown as RequestHandler,
    )
  }
}
