import { Router, RequestHandler } from 'express'
import FuncionariosController from '../controllers/FuncionariosController'
import GeneralMiddleware from '../middlewares/GeneralMiddleware'
import { BaseRouter } from './BaseRouter'

export default class FuncionariosRouter extends BaseRouter<FuncionariosController> {
  constructor() {
    super(new FuncionariosController())
  }

  protected initRoutes(): void {
    this.router.get(
      '/',
      GeneralMiddleware.authentication,
      this.controller.getAll,
      GeneralMiddleware.errorHandler as unknown as RequestHandler,
    )

    this.router.get(
      '/:cpf',
      GeneralMiddleware.authentication,
      GeneralMiddleware.validateCpf,
      this.controller.getOne as unknown as RequestHandler,
      GeneralMiddleware.errorHandler as unknown as RequestHandler,
    )

    this.router.post(
      '/',
      GeneralMiddleware.authentication,
      GeneralMiddleware.authorizationGerente,
      GeneralMiddleware.validateBodyRequest as unknown as RequestHandler,
      this.controller.create as unknown as RequestHandler,
      GeneralMiddleware.errorHandler as unknown as RequestHandler,
    )

    this.router.put(
      '/:cpf',
      GeneralMiddleware.authentication,
      GeneralMiddleware.authorizationGerente,
      GeneralMiddleware.validateCpf,
      this.controller.update as unknown as RequestHandler,
      GeneralMiddleware.errorHandler as unknown as RequestHandler,
    )

    this.router.delete(
      '/:cpf',
      GeneralMiddleware.authentication,
      GeneralMiddleware.authorizationGerente,
      GeneralMiddleware.validateCpf,
      this.controller.delete as unknown as RequestHandler,
      GeneralMiddleware.errorHandler as unknown as RequestHandler,
    )
  }
}
