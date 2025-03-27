'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const general_middleware_1 = __importDefault(
  require('../middlewares/general.middleware'),
)
const base_routes_1 = require('./base.routes')
const login_controller_1 = __importDefault(
  require('../controllers/login.controller'),
)
class LoginRouter extends base_routes_1.BaseRouter {
  constructor() {
    super(new login_controller_1.default())
  }
  initRoutes() {
    this.router.post(
      '/',
      general_middleware_1.default.validateBodyRequest,
      this.controller.create,
      general_middleware_1.default.errorHandler,
    )
  }
}
exports.default = LoginRouter
