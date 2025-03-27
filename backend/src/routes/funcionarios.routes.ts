import FuncionariosController from '../controllers/funcionarios.controller'
import GeneralMiddleware from '../middlewares/general.middleware'
import { BaseRouter } from './base.routes'

export default class FuncionariosRouter extends BaseRouter<FuncionariosController> {
  constructor() {
    super(new FuncionariosController())
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
