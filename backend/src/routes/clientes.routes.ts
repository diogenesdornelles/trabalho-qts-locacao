import ClientesController from '../controllers/ClientesController'
import GeneralMiddleware from '../middlewares/GeneralMiddleware'
import { BaseRouter } from './BaseRouter'

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
      GeneralMiddleware.authorizationAnalistaCadastro,
      GeneralMiddleware.validateBodyRequest,
      this.controller.create,
      GeneralMiddleware.errorHandler,
    )

    this.router.put(
      '/:cpf',
      GeneralMiddleware.authentication,
      GeneralMiddleware.authorizationAnalistaCadastro,
      GeneralMiddleware.validateCpf,
      this.controller.update,
      GeneralMiddleware.errorHandler,
    )
  }
}
