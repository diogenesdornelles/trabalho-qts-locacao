"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const app_1 = __importDefault(require("./app"));
const funcionarios_routes_1 = __importDefault(require("./routes/funcionarios.routes"));
const brinquedos_routes_1 = __importDefault(require("./routes/brinquedos.routes"));
const tiposBrinquedos_routes_1 = __importDefault(require("./routes/tiposBrinquedos.routes"));
const locacoes_routes_1 = __importDefault(require("./routes/locacoes.routes"));
const clientes_routes_1 = __importDefault(require("./routes/clientes.routes"));
const pagamentos_routes_1 = __importDefault(require("./routes/pagamentos.routes"));
const login_routes_1 = __importDefault(require("./routes/login.routes"));
const brinquedosLocados_routes_1 = __importDefault(require("./routes/brinquedosLocados.routes"));
/**
 * run a app
 *
 */
const allRoutes = [
    {
        baseRouter: new funcionarios_routes_1.default(),
        basePath: '/api/funcionarios',
    },
    {
        baseRouter: new brinquedos_routes_1.default(),
        basePath: '/api/brinquedos',
    },
    {
        baseRouter: new brinquedosLocados_routes_1.default(),
        basePath: '/api/brinquedosLocados',
    },
    {
        baseRouter: new tiposBrinquedos_routes_1.default(),
        basePath: '/api/tiposBrinquedos',
    },
    {
        baseRouter: new clientes_routes_1.default(),
        basePath: '/api/clientes',
    },
    {
        baseRouter: new locacoes_routes_1.default(),
        basePath: '/api/locacoes',
    },
    {
        baseRouter: new pagamentos_routes_1.default(),
        basePath: '/api/pagamentos',
    },
    {
        baseRouter: new login_routes_1.default(),
        basePath: '/api/login',
    },
];
class Start {
    constructor() {
        this.app = new app_1.default(allRoutes);
        this.app = new app_1.default(allRoutes);
        this.app.listen('https');
    }
}
exports.default = Start;
new Start();
