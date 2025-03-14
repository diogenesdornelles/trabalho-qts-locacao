import LocacoesController from '../controllers/LocacoesController'
import GeneralMiddleware from '../middlewares/GeneralMiddleware'
import { BaseRouter } from './BaseRouter'

export default class LocacoesRouter extends BaseRouter<LocacoesController> {
  constructor() {
    super(new LocacoesController())
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
      GeneralMiddleware.authorizationAnalistaLocacao,
      GeneralMiddleware.validateBodyRequest,
      this.controller.create,
      GeneralMiddleware.errorHandler,
    )
  }
}
