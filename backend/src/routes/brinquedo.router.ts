import BrinquedosController from '../controllers/brinquedo.controller'
import GeneralMiddleware from '../middlewares/generalMiddleware'
import { BaseRouter } from './base.router'

/**
 * Router for managing toys. Each route is defined with a pipeline of functions,
 * including middleware or the corresponding functions in the controller.
 * To perform 'gets' need to be authenticated.
 * To perform mutations need to be authenticated and authorized.
 * @export
 * @class BrinquedoRouter
 * @extends {BaseRouter<BrinquedosController>}
 */
export default class BrinquedoRouter extends BaseRouter<BrinquedosController> {
  /**
   * Creates an instance of BrinquedoRouter.
   * @memberof BrinquedoRouter
   */
  constructor() {
    super(new BrinquedosController())
  }
  /**
   * Initializes the routes for managing toys. Each route is defined with a pipeline of functions,
   *
   * @protected
   * @memberof BrinquedoRouter
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
