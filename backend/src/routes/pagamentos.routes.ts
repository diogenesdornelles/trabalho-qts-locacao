import PagamentosController from '../controllers/pagamentos.controller'
import GeneralMiddleware from '../middlewares/general.middleware'
import { BaseRouter } from './base.routes'

/**
 * Router for managing payments. Each route is defined with a pipeline of functions,
 * including middleware or the corresponding functions in the controller.
 *
 * @export
 * @class PagamentosRouter
 * @extends {BaseRouter<PagamentosController>}
 */
export default class PagamentosRouter extends BaseRouter<PagamentosController> {
  /**
   * Creates an instance of PagamentosRouter.
   * @memberof PagamentosRouter
   */
  constructor() {
    super(new PagamentosController())
  }
  /**
   * Initializes the routes for managing payments. Each route is defined with a pipeline of functions,
   *
   * @protected
   * @memberof PagamentosRouter
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
      GeneralMiddleware.authorizationPagamentos,
      GeneralMiddleware.validateBodyRequest,
      this.controller.create,
      GeneralMiddleware.errorHandler,
    )
  }
}
