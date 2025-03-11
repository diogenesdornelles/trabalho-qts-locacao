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
const express_1 = __importDefault(require("express"));
// @ts-ignore
const morgan_1 = __importDefault(require("morgan"));
// @ts-ignore
const cors_1 = __importDefault(require("cors"));
const dotenv = __importStar(require("dotenv"));
const helmet_1 = __importDefault(require("helmet"));
// @ts-ignore
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
// @ts-ignore
const swagger_json_1 = __importDefault(require("./swagger.json"));
const https_1 = __importDefault(require("https"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// Caminho para os arquivos de certificado
const sslOptions = {
    key: fs_1.default.readFileSync(path_1.default.join(__dirname, 'cert', 'key.pem')),
    cert: fs_1.default.readFileSync(path_1.default.join(__dirname, 'cert', 'cert.pem')),
};
dotenv.config();
const corsOptions = {
    origin: '*', // All origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // allowed
    allowedHeaders: ['Content-Type', 'Authorization'], // headers
    credentials: true, // cretentials true
};
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '';
class App {
    constructor(routes) {
        this.app = (0, express_1.default)();
        this.routesConfig = routes;
        this.initializeMiddlewares();
        this.initializeRoutes();
    }
    // initialize middlewares
    initializeMiddlewares() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, cors_1.default)(corsOptions));
        this.app.options('*', (0, cors_1.default)(corsOptions));
        this.app.use((0, helmet_1.default)({
            crossOriginResourcePolicy: false,
        }));
        this.app.use((0, morgan_1.default)('dev'));
        // para acessar docs: https://localhost:3000/api-docs/ ou http://localhost:3000/api-docs/
        this.app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
    }
    // initialize routes
    initializeRoutes() {
        this.routesConfig.forEach(config => {
            this.app.use(config.basePath, config.baseRouter.router);
        });
    }
    listen(protocol = 'http') {
        if (protocol === 'https') {
            https_1.default.createServer(sslOptions, this.app).listen(PORT, () => {
                console.log(`Host: ${HOST}. Listening on port ${PORT}`);
            });
        }
        else {
            this.app.listen(PORT, () => {
                console.log(`Host: ${HOST}. Listening on port ${PORT}`);
            });
        }
    }
}
exports.default = App;
