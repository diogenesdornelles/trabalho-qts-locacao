import TipoBrinquedoController from '../controllers/tipoBrinquedo.controller'
import GeneralMiddleware from '../middlewares/generalMiddleware'
import { BaseRouter } from './base.router'
/**
 * Router for managing type of toys. Each route is defined with a pipeline of functions,
 * including middleware or the corresponding functions in the controller.
 * To perform 'gets' need to be authenticated.
 * To perform mutations need to be authenticated and authorized.
 * @export
 * @class TipoBrinquedoRouter
 * @extends {BaseRouter<TipoBrinquedoController>}
 */
export default class TipoBrinquedoRouter extends BaseRouter<TipoBrinquedoController> {
  /**
   * Creates an instance of TipoBrinquedoRouter.
   * @memberof TipoBrinquedoRouter
   */
  constructor() {
    super(new TipoBrinquedoController())
  }
  /**
   * Initializes the routes for managing type of toys. Each route is defined with a pipeline of functions,
   *
   * @protected
   * @memberof TipoBrinquedoRouter
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
