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
const express_1 = __importDefault(require("express"));
// Importing morgan for HTTP request logging
// @ts-ignore
const morgan_1 = __importDefault(require("morgan"));
// Importing cors to handle Cross-Origin Resource Sharing (CORS)
// @ts-ignore
const cors_1 = __importDefault(require("cors"));
const dotenv = __importStar(require("dotenv"));
const helmet_1 = __importDefault(require("helmet"));
// Importing Swagger UI for API documentation
// @ts-ignore
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
// @ts-ignore
const swagger_json_1 = __importDefault(require("./swagger.json"));
const https_1 = __importDefault(require("https"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// SSL certificate options for running the application over HTTPS.
// Reads the key and certificate files from the 'cert' directory.
const sslOptions = {
    key: fs_1.default.readFileSync(path_1.default.join(__dirname, 'cert', 'key.pem')),
    cert: fs_1.default.readFileSync(path_1.default.join(__dirname, 'cert', 'cert.pem')),
};
dotenv.config();
// CORS configuration options
const corsOptions = {
    origin: '*', // Allow all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
    credentials: true, // Enable credentials (cookies, authorization headers, etc.)
};
// Set server port and host using environment variables or default values.
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '';
/**
 * App class encapsulates the Express application.
 * It configures middlewares, routes, and provides a method to start the server.
 */
class App {
    /**
     * Creates an instance of App.
     * @param {RouteConfigType[]} routes - Array of route configurations.
     */
    constructor(routes) {
        this.app = (0, express_1.default)();
        this.routesConfig = routes;
        this.initializeMiddlewares();
        this.initializeRoutes();
    }
    /**
     * Initializes all middlewares used by the application.
     */
    initializeMiddlewares() {
        // Middleware to parse incoming JSON requests.
        this.app.use(express_1.default.json());
        // Middleware to parse URL-encoded data.
        this.app.use(express_1.default.urlencoded({ extended: true }));
        // Enable CORS with the defined options.
        this.app.use((0, cors_1.default)(corsOptions));
        // Handle pre-flight CORS requests.
        this.app.options('*', (0, cors_1.default)(corsOptions));
        // Secure the app by setting various HTTP headers using Helmet.
        this.app.use((0, helmet_1.default)({
            crossOriginResourcePolicy: false,
        }));
        // Use Morgan to log HTTP requests in a developer-friendly format.
        this.app.use((0, morgan_1.default)('dev'));
        // Setup API documentation route.
        // Accessible via: https://localhost:3000/api-docs/ or http://localhost:3000/api-docs/
        this.app.use('api/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
    }
    /**
     * Initializes all routes defined in the route configuration.
     */
    initializeRoutes() {
        this.routesConfig.forEach(config => {
            this.app.use(config.basePath, config.baseRouter.router);
        });
    }
    /**
     * Starts the server and listens on the specified port using the given protocol.
     *
     * @param {TServerProtocol} [protocol='http'] - The protocol to use for the server ('http' or 'https').
     *
     * If the protocol is 'https', it creates an HTTPS server with the provided SSL options.
     * Otherwise, it creates an HTTP server.
     *
     * The server listens on the port specified by the `PORT` constant and logs the host and port information.
     */
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
