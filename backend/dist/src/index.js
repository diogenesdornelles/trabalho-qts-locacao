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
const FuncionariosRoutes_1 = __importDefault(require("./routes/FuncionariosRoutes"));
const BrinquedosRoutes_1 = __importDefault(require("./routes/BrinquedosRoutes"));
const TiposBrinquedosRoutes_1 = __importDefault(require("./routes/TiposBrinquedosRoutes"));
const LocacoesRoutes_1 = __importDefault(require("./routes/LocacoesRoutes"));
const ClientesRoutes_1 = __importDefault(require("./routes/ClientesRoutes"));
const PagamentosRoutes_1 = __importDefault(require("./routes/PagamentosRoutes"));
const BrinquedosLocadosRoutes_1 = __importDefault(require("./routes/BrinquedosLocadosRoutes"));
/**
 * run a app
 *
 */
const allRoutes = [
    {
        baseRouter: new FuncionariosRoutes_1.default(),
        basePath: '/api/funcionarios',
    },
    {
        baseRouter: new BrinquedosRoutes_1.default(),
        basePath: '/api/brinquedos',
    },
    {
        baseRouter: new BrinquedosLocadosRoutes_1.default(),
        basePath: '/api/brinquedosLocados',
    },
    {
        baseRouter: new TiposBrinquedosRoutes_1.default(),
        basePath: '/api/tiposBrinquedos',
    },
    {
        baseRouter: new ClientesRoutes_1.default(),
        basePath: '/api/clientes',
    },
    {
        baseRouter: new LocacoesRoutes_1.default(),
        basePath: '/api/locacoes',
    },
    {
        baseRouter: new PagamentosRoutes_1.default(),
        basePath: '/api/pagamentos',
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
