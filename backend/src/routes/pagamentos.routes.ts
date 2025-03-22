import PagamentosController from '../controllers/pagamentos.controller'
import GeneralMiddleware from '../middlewares/general.middleware'
import { BaseRouter } from './base.routes'

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
