import ClientesController from '../controllers/clientes.controller'
import GeneralMiddleware from '../middlewares/general.middleware'
import { BaseRouter } from './base.routes'

export default class ClientesRouter extends BaseRouter<ClientesController> {
  constructor() {
    super(new ClientesController())
  }

  protected initRoutes(): void {
    this.router.get(
      '/',
      GeneralMiddleware.authentication,
      this.controller.getAll,
      GeneralMiddleware.errorHandler,
    )

    this.router.get(
      '/:cpf',
      GeneralMiddleware.authentication,
      GeneralMiddleware.validateCpf,
      this.controller.getOne,
      GeneralMiddleware.errorHandler,
    )

    this.router.post(
      '/',
      GeneralMiddleware.authentication,
      GeneralMiddleware.authorizationClientes,
      GeneralMiddleware.validateBodyRequest,
      this.controller.create,
      GeneralMiddleware.errorHandler,
    )

    this.router.put(
      '/:cpf',
      GeneralMiddleware.authentication,
      GeneralMiddleware.authorizationClientes,
      GeneralMiddleware.validateCpf,
      this.controller.update,
      GeneralMiddleware.errorHandler,
    )
  }
}
