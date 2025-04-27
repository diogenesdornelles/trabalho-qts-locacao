import GeneralMiddleware from '../middlewares/general.middleware'
import BrinquedosLocadosController from '../controllers/brinquedos-locados.controller'
import { BaseRouter } from './base.routes'

/**
 * Router for managing rented toys. Each route is defined with a pipeline of functions,
 * including middleware or the corresponding functions in the controller.
 *
 * @export
 * @class BrinquedosLocadosRouter
 * @extends {BaseRouter<BrinquedosLocadosController>}
 */
export default class BrinquedosLocadosRouter extends BaseRouter<BrinquedosLocadosController> {
  /**
   * Creates an instance of BrinquedosLocadosRouter.
   * @memberof BrinquedosLocadosRouter
   */
  constructor() {
    super(new BrinquedosLocadosController())
  }
  /**
   * Initializes the routes for managing rented toys. Each route is defined with a pipeline of functions,
   *
   * @protected
   * @memberof BrinquedosLocadosRouter
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
