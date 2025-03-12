'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const GeneralMiddleware_1 = __importDefault(
  require('../middlewares/GeneralMiddleware'),
)
const BaseRouter_1 = require('./BaseRouter')
const LoginController_1 = __importDefault(
  require('../controllers/LoginController'),
)
class LoginRouter extends BaseRouter_1.BaseRouter {
  constructor() {
    super(new LoginController_1.default())
  }
  initRoutes() {
    this.router.post(
      '/',
      GeneralMiddleware_1.default.validateBodyRequest,
      this.controller.create,
      GeneralMiddleware_1.default.errorHandler,
    )
  }
}
exports.default = LoginRouter
