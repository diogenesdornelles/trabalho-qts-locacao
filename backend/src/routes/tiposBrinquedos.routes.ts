import TiposBrinquedosController from '../controllers/TiposBrinquedosController'
import GeneralMiddleware from '../middlewares/GeneralMiddleware'
import { BaseRouter } from './BaseRouter'

export default class TiposBrinquedosRouter extends BaseRouter<TiposBrinquedosController> {
  constructor() {
    super(new TiposBrinquedosController())
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
  }
}
