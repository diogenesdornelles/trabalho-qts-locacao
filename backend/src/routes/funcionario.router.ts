import FuncionariosController from '../controllers/funcionario.controller'
import GeneralMiddleware from '../middlewares/general.middleware'
import { BaseRouter } from './base.router'
/**
 * Router for managing emps. Each route is defined with a pipeline of functions,
 * including middleware or the corresponding functions in the controller.
 * To perform 'gets' need to be authenticated.
 * To perform mutations need to be authenticated and authorized.
 * @export
 * @class FuncionarioRouter
 * @extends {BaseRouter<FuncionariosController>}
 */
export default class FuncionarioRouter extends BaseRouter<FuncionariosController> {
  /**
   * Creates an instance of FuncionarioRouter.
   * @memberof FuncionarioRouter
   */
  constructor() {
    super(new FuncionariosController())
  }
  /**
   * Initializes the routes for managing emps. Each route is defined with a pipeline of functions,
   *
   * @protected
   * @memberof FuncionarioRouter
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
      GeneralMiddleware.authorizationFuncionarios,
      GeneralMiddleware.validateBodyRequest,
      this.controller.create,
      GeneralMiddleware.errorHandler,
    )

    this.router.put(
      '/:cpf',
      GeneralMiddleware.authentication,
      GeneralMiddleware.authorizationFuncionarios,
      GeneralMiddleware.validateCpf,
      this.controller.update,
      GeneralMiddleware.errorHandler,
    )

    this.router.delete(
      '/:cpf',
      GeneralMiddleware.authentication,
      GeneralMiddleware.authorizationFuncionarios,
      GeneralMiddleware.validateCpf,
      this.controller.delete,
      GeneralMiddleware.errorHandler,
    )
  }
}
