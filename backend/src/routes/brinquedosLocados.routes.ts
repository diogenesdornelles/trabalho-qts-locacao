import GeneralMiddleware from '../middlewares/GeneralMiddleware'
import BrinquedosLocadosController from '../controllers/BrinquedosLocadosController'
import { BaseRouter } from './BaseRouter'

export default class BrinquedosLocadosRouter extends BaseRouter<BrinquedosLocadosController> {
  constructor() {
    super(new BrinquedosLocadosController())
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

    this.router.put(
      '/:cod',
      GeneralMiddleware.authentication,
      GeneralMiddleware.authorizationAnalistaLocacao,
      GeneralMiddleware.validateUUID,
      this.controller.update,
      GeneralMiddleware.errorHandler,
    )

    this.router.delete(
      '/:cod',
      GeneralMiddleware.authentication,
      GeneralMiddleware.authorizationAnalistaLocacao,
      GeneralMiddleware.validateUUID,
      this.controller.delete,
      GeneralMiddleware.errorHandler,
    )
  }
}
