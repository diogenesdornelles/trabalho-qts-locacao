"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clientes_controller_1 = __importDefault(require("../controllers/clientes.controller"));
const general_middleware_1 = __importDefault(require("../middlewares/general.middleware"));
const base_routes_1 = require("./base.routes");
class ClientesRouter extends base_routes_1.BaseRouter {
    constructor() {
        super(new clientes_controller_1.default());
    }
    initRoutes() {
        this.router.get('/', general_middleware_1.default.authentication, this.controller.getAll, general_middleware_1.default.errorHandler);
        this.router.get('/:cpf', general_middleware_1.default.authentication, general_middleware_1.default.validateCpf, this.controller.getOne, general_middleware_1.default.errorHandler);
        this.router.post('/', general_middleware_1.default.authentication, general_middleware_1.default.authorizationAnalistaCadastro, general_middleware_1.default.validateBodyRequest, this.controller.create, general_middleware_1.default.errorHandler);
        this.router.put('/:cpf', general_middleware_1.default.authentication, general_middleware_1.default.authorizationAnalistaCadastro, general_middleware_1.default.validateCpf, this.controller.update, general_middleware_1.default.errorHandler);
    }
}
exports.default = ClientesRouter;
