"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LocacoesController_1 = __importDefault(require("../controllers/LocacoesController"));
const GeneralMiddleware_1 = __importDefault(require("../middlewares/GeneralMiddleware"));
const BaseRouter_1 = require("./BaseRouter");
class LocacoesRouter extends BaseRouter_1.BaseRouter {
    constructor() {
        super(new LocacoesController_1.default());
    }
    initRoutes() {
        this.router.get('/', GeneralMiddleware_1.default.authentication, this.controller.getAll, GeneralMiddleware_1.default.errorHandler);
        this.router.get('/:cod', GeneralMiddleware_1.default.authentication, GeneralMiddleware_1.default.validateUUID, this.controller.getOne, GeneralMiddleware_1.default.errorHandler);
        this.router.post('/', GeneralMiddleware_1.default.authentication, GeneralMiddleware_1.default.authorizationAnalistaLocacao, GeneralMiddleware_1.default.validateBodyRequest, this.controller.create, GeneralMiddleware_1.default.errorHandler);
    }
}
exports.default = LocacoesRouter;
