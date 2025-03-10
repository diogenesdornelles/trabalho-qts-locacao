import { RequestHandler } from 'express'

import GeneralMiddleware from '../middlewares/GeneralMiddleware'
import BrinquedosLocadosController from '../controllers/BrinquedosLocadosController'
import { BaseRouter } from './BaseRouter'

export default class BrinquedosLocadosRouter extends BaseRouter<BrinquedosLocadosController> {
  constructor() {
    super(new BrinquedosLocadosController())
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
      GeneralMiddleware.authentication,
      GeneralMiddleware.authorizationAnalistaLocacao,
      GeneralMiddleware.validateBodyRequest as unknown as RequestHandler,
      this.controller.create as unknown as RequestHandler,
      GeneralMiddleware.errorHandler as unknown as RequestHandler,
    )

    this.router.put(
      '/:cod',
      GeneralMiddleware.authentication,
      GeneralMiddleware.authorizationAnalistaLocacao,
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
