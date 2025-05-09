import PagamentoController from '../controllers/pagamento.controller'
import GeneralMiddleware from '../middlewares/generalMiddleware'
import { BaseRouter } from './base.router'

/**
 * Router for managing payments. Each route is defined with a pipeline of functions,
 * including middleware or the corresponding functions in the controller.
 * To perform 'gets' need to be authenticated.
 * To perform mutations need to be authenticated and authorized.
 * @export
 * @class PagamentoRouter
 * @extends {BaseRouter<PagamentoController>}
 */
export default class PagamentoRouter extends BaseRouter<PagamentoController> {
  /**
   * Creates an instance of PagamentoRouter.
   * @memberof PagamentoRouter
   */
  constructor() {
    super(new PagamentoController())
  }
  /**
   * Initializes the routes for managing payments. Each route is defined with a pipeline of functions,
   *
   * @protected
   * @memberof PagamentoRouter
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
