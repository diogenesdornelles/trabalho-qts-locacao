'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const BrinquedosController_1 = __importDefault(
  require('../controllers/BrinquedosController'),
)
const GeneralMiddleware_1 = __importDefault(
  require('../middlewares/GeneralMiddleware'),
)
const BaseRouter_1 = require('./BaseRouter')
class BrinquedosRouter extends BaseRouter_1.BaseRouter {
  constructor() {
    super(new BrinquedosController_1.default())
  }
  initRoutes() {
    this.router.get(
      '/',
      GeneralMiddleware_1.default.authentication,
      this.controller.getAll,
      GeneralMiddleware_1.default.errorHandler,
    )
    this.router.get(
      '/:cod',
      GeneralMiddleware_1.default.authentication,
      GeneralMiddleware_1.default.validateUUID,
      this.controller.getOne,
      GeneralMiddleware_1.default.errorHandler,
    )
    this.router.post(
      '/',
      GeneralMiddleware_1.default.authentication,
      GeneralMiddleware_1.default.authorizationAlmoxarife,
      GeneralMiddleware_1.default.validateBodyRequest,
      this.controller.create,
      GeneralMiddleware_1.default.errorHandler,
    )
    this.router.put(
      '/:cod',
      GeneralMiddleware_1.default.authentication,
      GeneralMiddleware_1.default.authorizationAlmoxarife,
      GeneralMiddleware_1.default.validateUUID,
      this.controller.update,
      GeneralMiddleware_1.default.errorHandler,
    )
    this.router.delete(
      '/:cod',
      GeneralMiddleware_1.default.authentication,
      GeneralMiddleware_1.default.authorizationAlmoxarife,
      GeneralMiddleware_1.default.validateUUID,
      this.controller.delete,
      GeneralMiddleware_1.default.errorHandler,
    )
  }
}
exports.default = BrinquedosRouter
