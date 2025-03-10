import { Router, RequestHandler } from 'express'
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
      this.controller.getAll,
      GeneralMiddleware.errorHandler as unknown as RequestHandler,
    )

    this.router.get(
      '/:cpf',
      GeneralMiddleware.validateCpf,
      this.controller.getOne as unknown as RequestHandler,
      GeneralMiddleware.errorHandler as unknown as RequestHandler,
    )

    this.router.post(
      '/',
      GeneralMiddleware.validateBodyRequest as unknown as RequestHandler,
      this.controller.create as unknown as RequestHandler,
      GeneralMiddleware.errorHandler as unknown as RequestHandler,
    )

    this.router.put(
      '/:cpf',
      GeneralMiddleware.validateCpf,
      this.controller.update as unknown as RequestHandler,
      GeneralMiddleware.errorHandler as unknown as RequestHandler,
    )
  }
}
