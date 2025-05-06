import LocacoesController from '../controllers/locacao.controller'
import GeneralMiddleware from '../middlewares/general.middleware'
import { BaseRouter } from './base.router'
/**
 * Router for managing rentals. Each route is defined with a pipeline of functions,
 * including middleware or the corresponding functions in the controller.
 *
 * @export
 * @class LocacaoRouter
 * @extends {BaseRouter<LocacoesController>}
 */
export default class LocacaoRouter extends BaseRouter<LocacoesController> {
  /**
   * Creates an instance of LocacaoRouter.
   * @memberof LocacaoRouter
   */
  constructor() {
    super(new LocacoesController())
  }

  /**
   * Initializes the routes for managing rentals. Each route is defined with a pipeline of functions,
   * To perform 'gets' need to be authenticated.
   * To perform mutations need to be authenticated and authorized.
   * @protected
   * @memberof LocacaoRouter
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
      GeneralMiddleware.authorizationLocacoes,
      GeneralMiddleware.validateBodyRequest,
      this.controller.create,
      GeneralMiddleware.errorHandler,
    )
  }
}
