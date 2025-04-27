import ClientesController from '../controllers/clientes.controller'
import GeneralMiddleware from '../middlewares/general.middleware'
import { BaseRouter } from './base.routes'

/**
 * Router for managing customers. Each route is defined with a pipeline of functions,
 * including middleware or the corresponding functions in the controller.
 *
 * @export
 * @class ClientesRouter
 * @extends {BaseRouter<ClientesController>}
 */
export default class ClientesRouter extends BaseRouter<ClientesController> {
  /**
   * Creates an instance of ClientesRouter.
   * @memberof ClientesRouter
   */
  constructor() {
    super(new ClientesController())
  }
  /**
   * Initializes the routes for managing customers. Each route is defined with a pipeline of functions,
   *
   * @protected
   * @memberof ClientesRouter
   */
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
