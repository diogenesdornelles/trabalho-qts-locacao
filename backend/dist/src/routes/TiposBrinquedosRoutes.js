"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TiposBrinquedosController_1 = __importDefault(require("../controllers/TiposBrinquedosController"));
const GeneralMiddleware_1 = __importDefault(require("../middlewares/GeneralMiddleware"));
const BaseRouter_1 = require("./BaseRouter");
class TiposBrinquedosRouter extends BaseRouter_1.BaseRouter {
    constructor() {
        super(new TiposBrinquedosController_1.default());
    }
    initRoutes() {
        this.router.get('/', this.controller.getAll, GeneralMiddleware_1.default.errorHandler);
        this.router.get('/:cod', GeneralMiddleware_1.default.validateUUID, this.controller.getOne, GeneralMiddleware_1.default.errorHandler);
        this.router.post('/', GeneralMiddleware_1.default.validateBodyRequest, this.controller.create, GeneralMiddleware_1.default.errorHandler);
        this.router.put('/:cod', GeneralMiddleware_1.default.validateUUID, this.controller.update, GeneralMiddleware_1.default.errorHandler);
    }
}
exports.default = TiposBrinquedosRouter;
