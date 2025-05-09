import ClientesController from '../controllers/cliente.controller'
import GeneralMiddleware from '../middlewares/generalMiddleware'
import { BaseRouter } from './base.router'

/**
 * Router for managing customers. Each route is defined with a pipeline of functions,
 * including middleware or the corresponding functions in the controller.
 * To perform 'gets' need to be authenticated.
 * To perform mutations need to be authenticated and authorized.
 * @export
 * @class ClienteRouter
 * @extends {BaseRouter<ClientesController>}
 */
export default class ClienteRouter extends BaseRouter<ClientesController> {
  /**
   * Creates an instance of ClienteRouter.
   * @memberof ClienteRouter
   */
  constructor() {
    super(new ClientesController())
  }
  /**
   * Initializes the routes for managing customers. Each route is defined with a pipeline of functions,
   *
   * @protected
   * @memberof ClienteRouter
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
