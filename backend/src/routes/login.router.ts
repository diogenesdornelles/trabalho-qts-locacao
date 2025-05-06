import GeneralMiddleware from '../middlewares/general.middleware'
import { BaseRouter } from './base.router'
import LoginController from '../controllers/login.controller'
/**
 * Router for managing logins. Each route is defined with a pipeline of functions,
 * including middleware or the corresponding functions in the controller.
 *
 * @export
 * @class LoginRouter
 * @extends {BaseRouter<LoginController>}
 */
export default class LoginRouter extends BaseRouter<LoginController> {
  /**
   * Creates an instance of LoginRouter.
   * @memberof LoginRouter
   */
  constructor() {
    super(new LoginController())
  }
  /**
   * Initializes the routes for managing logins. Each route is defined with a pipeline of functions,
   *
   * @protected
   * @memberof LoginRouter
   */
  protected initRoutes(): void {
    this.router.post(
      '/',
      GeneralMiddleware.validateBodyRequest,
      this.controller.create,
      GeneralMiddleware.errorHandler,
    )
  }
}
