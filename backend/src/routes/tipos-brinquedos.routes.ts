import TiposBrinquedosController from '../controllers/tipos-brinquedos.controller'
import GeneralMiddleware from '../middlewares/general.middleware'
import { BaseRouter } from './base.routes'
/**
 * Router for managing type of toys. Each route is defined with a pipeline of functions,
 * including middleware or the corresponding functions in the controller.
 *
 * @export
 * @class TiposBrinquedosRouter
 * @extends {BaseRouter<TiposBrinquedosController>}
 */
export default class TiposBrinquedosRouter extends BaseRouter<TiposBrinquedosController> {
  /**
   * Creates an instance of TiposBrinquedosRouter.
   * @memberof TiposBrinquedosRouter
   */
  constructor() {
    super(new TiposBrinquedosController())
  }
  /**
   * Initializes the routes for managing type of toys. Each route is defined with a pipeline of functions,
   *
   * @protected
   * @memberof TiposBrinquedosRouter
   */
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
      GeneralMiddleware.authorizationTiposBrinquedos,
      GeneralMiddleware.validateBodyRequest,
      this.controller.create,
      GeneralMiddleware.errorHandler,
    )

    this.router.put(
      '/:cod',
      GeneralMiddleware.authentication,
      GeneralMiddleware.authorizationTiposBrinquedos,
      GeneralMiddleware.validateUUID,
      this.controller.update,
      GeneralMiddleware.errorHandler,
    )
  }
}
