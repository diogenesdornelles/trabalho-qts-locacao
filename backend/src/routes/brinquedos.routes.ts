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
      GeneralMiddleware.authorizationAlmoxarife,
      GeneralMiddleware.validateBodyRequest,
      this.controller.create,
      GeneralMiddleware.errorHandler,
    )

    this.router.put(
      '/:cod',
      GeneralMiddleware.authentication,
      GeneralMiddleware.authorizationAlmoxarife,
      GeneralMiddleware.validateUUID,
      this.controller.update,
      GeneralMiddleware.errorHandler,
    )

    this.router.delete(
      '/:cod',
      GeneralMiddleware.authentication,
      GeneralMiddleware.authorizationAlmoxarife,
      GeneralMiddleware.validateUUID,
      this.controller.delete,
      GeneralMiddleware.errorHandler,
    )
  }
}
