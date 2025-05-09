import GeneralMiddleware from '../middlewares/generalMiddleware'
import BrinquedoLocadoController from '../controllers/brinquedoLocado.controller'
import { BaseRouter } from './base.router'

/**
 * Router for managing rented toys. Each route is defined with a pipeline of functions,
 * including middleware or the corresponding functions in the controller.
 * To perform 'gets' need to be authenticated.
 * To perform mutations need to be authenticated and authorized.
 * @export
 * @class BrinquedoLocadoRouter
 * @extends {BaseRouter<BrinquedoLocadoController>}
 */
export default class BrinquedoLocadoRouter extends BaseRouter<BrinquedoLocadoController> {
  /**
   * Creates an instance of BrinquedoLocadoRouter.
   * @memberof BrinquedoLocadoRouter
   */
  constructor() {
    super(new BrinquedoLocadoController())
  }
  /**
   * Initializes the routes for managing rented toys. Each route is defined with a pipeline of functions.
   * @protected
   * @memberof BrinquedoLocadoRouter
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
      GeneralMiddleware.authorizationBrinquedosLocados,
      GeneralMiddleware.validateBodyRequest,
      this.controller.create,
      GeneralMiddleware.errorHandler,
    )

    this.router.put(
      '/:cod',
      GeneralMiddleware.authentication,
      GeneralMiddleware.authorizationBrinquedosLocados,
      GeneralMiddleware.validateUUID,
      this.controller.update,
      GeneralMiddleware.errorHandler,
    )

    this.router.delete(
      '/:cod',
      GeneralMiddleware.authentication,
      GeneralMiddleware.authorizationBrinquedosLocados,
      GeneralMiddleware.validateUUID,
      this.controller.delete,
      GeneralMiddleware.errorHandler,
    )
  }
}
