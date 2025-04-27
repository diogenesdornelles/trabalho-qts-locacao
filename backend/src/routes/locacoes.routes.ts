import LocacoesController from '../controllers/locacoes.controller'
import GeneralMiddleware from '../middlewares/general.middleware'
import { BaseRouter } from './base.routes'
/**
 * Router for managing rentals. Each route is defined with a pipeline of functions,
 * including middleware or the corresponding functions in the controller.
 *
 * @export
 * @class LocacoesRouter
 * @extends {BaseRouter<LocacoesController>}
 */
export default class LocacoesRouter extends BaseRouter<LocacoesController> {
  /**
   * Creates an instance of LocacoesRouter.
   * @memberof LocacoesRouter
   */
  constructor() {
    super(new LocacoesController())
  }

  /**
   * Initializes the routes for managing rentals. Each route is defined with a pipeline of functions,
   *
   * @protected
   * @memberof LocacoesRouter
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
