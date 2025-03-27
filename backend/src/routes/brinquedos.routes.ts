import BrinquedosController from '../controllers/brinquedos.controller'
import GeneralMiddleware from '../middlewares/general.middleware'
import { BaseRouter } from './base.routes'

export default class BrinquedosRouter extends BaseRouter<BrinquedosController> {
  constructor() {
    super(new BrinquedosController())
  }

  protected initRoutes(): void {
    this.router.get(
      '/',
      GeneralMiddleware.authentication,
      this.controller.getAll,
      GeneralMiddleware.errorHandler,
    )

    this.router.get(
      '/:cod',
      GeneralMiddleware.authentication,
      GeneralMiddleware.validateUUID,
      this.controller.getOne,
      GeneralMiddleware.errorHandler,
    )

    this.router.post(
      '/',
      GeneralMiddleware.authentication,
      GeneralMiddleware.authorizationBrinquedos,
      GeneralMiddleware.validateBodyRequest,
      this.controller.create,
      GeneralMiddleware.errorHandler,
    )

    this.router.put(
      '/:cod',
      GeneralMiddleware.authentication,
      GeneralMiddleware.authorizationBrinquedos,
      GeneralMiddleware.validateUUID,
      this.controller.update,
      GeneralMiddleware.errorHandler,
    )

    this.router.delete(
      '/:cod',
      GeneralMiddleware.authentication,
      GeneralMiddleware.authorizationBrinquedos,
      GeneralMiddleware.validateUUID,
      this.controller.delete,
      GeneralMiddleware.errorHandler,
    )
  }
}
