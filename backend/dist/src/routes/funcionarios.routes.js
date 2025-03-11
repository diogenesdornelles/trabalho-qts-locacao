"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FuncionariosController_1 = __importDefault(require("../controllers/FuncionariosController"));
const GeneralMiddleware_1 = __importDefault(require("../middlewares/GeneralMiddleware"));
const BaseRouter_1 = require("./BaseRouter");
class FuncionariosRouter extends BaseRouter_1.BaseRouter {
    constructor() {
        super(new FuncionariosController_1.default());
    }
    initRoutes() {
        this.router.get('/', GeneralMiddleware_1.default.authentication, this.controller.getAll, GeneralMiddleware_1.default.errorHandler);
        this.router.get('/:cpf', GeneralMiddleware_1.default.authentication, GeneralMiddleware_1.default.validateCpf, this.controller.getOne, GeneralMiddleware_1.default.errorHandler);
        this.router.post('/', GeneralMiddleware_1.default.authentication, GeneralMiddleware_1.default.authorizationGerente, GeneralMiddleware_1.default.validateBodyRequest, this.controller.create, GeneralMiddleware_1.default.errorHandler);
        this.router.put('/:cpf', GeneralMiddleware_1.default.authentication, GeneralMiddleware_1.default.authorizationGerente, GeneralMiddleware_1.default.validateCpf, this.controller.update, GeneralMiddleware_1.default.errorHandler);
        this.router.delete('/:cpf', GeneralMiddleware_1.default.authentication, GeneralMiddleware_1.default.authorizationGerente, GeneralMiddleware_1.default.validateCpf, this.controller.delete, GeneralMiddleware_1.default.errorHandler);
    }
}
exports.default = FuncionariosRouter;
