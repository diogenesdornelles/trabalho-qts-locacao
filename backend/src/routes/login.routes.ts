import GeneralMiddleware from '../middlewares/GeneralMiddleware'
import { BaseRouter } from './BaseRouter'
import LoginController from '../controllers/LoginController'

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
