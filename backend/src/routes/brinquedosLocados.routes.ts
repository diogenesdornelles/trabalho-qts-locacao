import GeneralMiddleware from '../middlewares/general.middleware'
import BrinquedosLocadosController from '../controllers/brinquedos-locados.controller'
import { BaseRouter } from './base.routes'

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
