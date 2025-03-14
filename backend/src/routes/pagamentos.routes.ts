import PagamentosController from '../controllers/PagamentosController'
import GeneralMiddleware from '../middlewares/GeneralMiddleware'
import { BaseRouter } from './BaseRouter'

export default class PagamentosRouter extends BaseRouter<PagamentosController> {
  constructor() {
    super(new PagamentosController())
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
      GeneralMiddleware.authorizationCaixa,
      GeneralMiddleware.validateBodyRequest,
      this.controller.create,
      GeneralMiddleware.errorHandler,
    )
  }
}
