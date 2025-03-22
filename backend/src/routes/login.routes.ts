import GeneralMiddleware from '../middlewares/general.middleware'
import { BaseRouter } from './base.routes'
import LoginController from '../controllers/login.controller'

export default class LoginRouter extends BaseRouter<LoginController> {
  constructor() {
    super(new LoginController())
  }

  protected initRoutes(): void {
    this.router.post(
      '/',
      GeneralMiddleware.validateBodyRequest,
      this.controller.create,
      GeneralMiddleware.errorHandler,
    )
  }
}
