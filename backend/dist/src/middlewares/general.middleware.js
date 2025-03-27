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
const general_validator_1 = __importDefault(require("../validators/general.validator"));
const prisma_client_1 = require("../../generated/prisma_client");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv = __importStar(require("dotenv"));
const prisma_client_2 = require("../../generated/prisma_client");
const zod_1 = require("zod");
const api_error_util_1 = require("../utils/api-error.util");
// Load environment variables from .env file
dotenv.config();
// Set the secret key for JWT; fallback provided if not set in the environment
const SECRET_KEY = process.env.SECRET_KEY || 'r34534erfefgdf7576ghfg4455456';
/**
 * GeneralMiddleware contains various middleware functions for validation,
 * error handling, authentication, and authorization.
 */
class GeneralMiddleware {
}
/**
 * Middleware to validate CPF format in the request parameters.
 *
 * Extracts the 'cpf' parameter and uses GeneralValidator to verify its format.
 * If the CPF is valid, it calls next(); otherwise, it sends a 400 response.
 *
 * @param {Request} req - The Express Request object.
 * @param {Response} res - The Express Response object.
 * @param {NextFunction} next - The next middleware function.
 */
GeneralMiddleware.validateCpf = (req, res, next) => {
    let { cpf } = req.params;
    if (general_validator_1.default.validateCpf(cpf)) {
        next();
        return;
    }
    res.status(400).json({
        error: 'Invalid CPF format. Please provide a valid CPF.',
    });
    return;
};
/**
 * Middleware to validate UUID format in the request parameters.
 *
 * Extracts the 'cod' parameter and uses GeneralValidator to verify its UUID format.
 * If the UUID is valid, it calls next(); otherwise, it sends a 400 response.
 *
 * @param {Request} req - The Express Request object.
 * @param {Response} res - The Express Response object.
 * @param {NextFunction} next - The next middleware function.
 */
GeneralMiddleware.validateUUID = (req, res, next) => {
    let { cod } = req.params;
    if (general_validator_1.default.validateUUID(cod)) {
        next();
        return;
    }
    res.status(400).json({
        error: 'Invalid UUID format. Please provide a valid UUID.',
    });
    return;
};
/**
 * Global error handling middleware.
 *
 * This function logs errors and sends appropriate responses based on error type.
 * It handles Zod validation errors, Prisma errors, custom API errors, and generic errors.
 *
 * @param {any} error - The error thrown.
 * @param {Request} req - The Express Request object.
 * @param {Response} res - The Express Response object.
 * @param {NextFunction} next - The next middleware function.
 */
GeneralMiddleware.errorHandler = (error, req, res, next) => {
    console.error('Error:', error);
    // Handle Zod validation errors
    if (error instanceof zod_1.z.ZodError) {
        console.error(`Validation error on ${req.method} resource:`, error.errors);
        res.status(400).json({
            error: 'Validation error',
            details: error.errors,
        });
        return;
    }
    // Helper function to extract the final error message from a Prisma error
    const extractPrismaErrorMessage = (error) => {
        const errorSplitted = error.message.split('\n');
        return errorSplitted[errorSplitted.length - 1]; // Return the last line of the error message
    };
    // Handle Prisma errors
    if (error instanceof prisma_client_1.Prisma.PrismaClientInitializationError ||
        error instanceof prisma_client_1.Prisma.PrismaClientKnownRequestError ||
        error instanceof prisma_client_1.Prisma.PrismaClientValidationError) {
        const errorMessage = extractPrismaErrorMessage(error);
        console.error(`Database error on ${req.method} resource:`, error.message);
        res.status(500).json({
            error: 'Database error',
            details: errorMessage,
        });
        return;
    }
    // Handle custom API errors
    if (error instanceof api_error_util_1.ApiError) {
        console.error(`Unexpected error on ${req.method} resource:`, error.message);
        res.status(error.statusCode).json({
            error: error.message,
            details: error.message,
        });
        return;
    }
    // Handle generic errors
    if (error instanceof Error) {
        console.error(`Unexpected error on ${req.method} resource:`, error.message);
        res.status(500).json({
            error: 'Internal server error',
            details: error.message,
        });
        return;
    }
    // If none of the above error types match, return a generic error response
    console.error('An unknown error occurred:', error);
    res.status(500).json({
        error: 'Unknown error',
        details: 'An unexpected error occurred while processing the request.',
    });
    return;
};
/**
 * Middleware to validate that the request body is not empty for non-GET requests.
 *
 * If the request method is not GET and the body is empty, it sends a 400 response.
 * Otherwise, it passes control to the next middleware.
 *
 * @param {Request} req - The Express Request object.
 * @param {Response} res - The Express Response object.
 * @param {NextFunction} next - The next middleware function.
 */
GeneralMiddleware.validateBodyRequest = (req, res, next) => {
    if (req.method.toLocaleLowerCase() !== 'get') {
        if (!req.body || Object.keys(req.body).length === 0) {
            res.status(400).json({ message: 'Invalid requisition' });
            return;
        }
    }
    next();
    return;
};
/**
 * Authentication middleware to verify the JWT token in the request header.
 *
 * Extracts the token from the 'Authorization' header, verifies it using the SECRET_KEY,
 * and attaches the decoded token payload to the request. If verification fails, it sends
 * a 401 response.
 *
 * @param {Request} req - The Express Request object.
 * @param {Response} res - The Express Response object.
 * @param {NextFunction} next - The next middleware function.
 */
GeneralMiddleware.authentication = (req, res, next) => {
    var _a;
    try {
        // Extract the token from the Authorization header (removing the 'Bearer ' prefix)
        const token = (_a = req.header('Authorization')) === null || _a === void 0 ? void 0 : _a.replace('Bearer ', '');
        if (!token) {
            throw new Error();
        }
        // Verify the token and cast the payload to AuthPayloadInterface
        const decoded = jsonwebtoken_1.default.verify(token, SECRET_KEY);
        req.token = decoded;
        next();
    }
    catch (err) {
        res.status(401).send('Please authenticate');
        return;
    }
};
/**
 * Authorization middleware to restrict access to users with the 'GERENTE' role.
 *
 * Checks the token attached to the request and ensures the function is 'GERENTE'.
 * If not, it returns a 403 response.
 *
 * @param {Request} req - The Express Request object.
 * @param {Response} res - The Express Response object.
 * @param {NextFunction} next - The next middleware function.
 */
GeneralMiddleware.authorizationFuncionarios = (req, res, next) => {
    const { token } = req;
    // Check if token exists and if the user's role is 'GERENTE'
    if (!token || token.funcao !== prisma_client_2.Funcao.GERENTE) {
        res.status(403).json({ message: 'Access denied: gerente only' });
        return;
    }
    next();
};
/**
 * Authorization middleware to restrict access to users with the 'ALMOXARIFE' or 'GERENTE' role.
 *
 * Checks the token attached to the request and ensures the function is 'ALMOXARIFE' or 'GERENTE'.
 * If not, it returns a 403 response.
 *
 * @param {Request} req - The Express Request object.
 * @param {Response} res - The Express Response object.
 * @param {NextFunction} next - The next middleware function.
 */
GeneralMiddleware.authorizationBrinquedos = (req, res, next) => {
    const { token } = req;
    // Check if token exists and if the user's role is 'ALMOXARIFE' or 'GERENTE'
    if (!token || (token.funcao !== prisma_client_2.Funcao.ALMOXARIFE && token.funcao !== prisma_client_2.Funcao.GERENTE)) {
        res.status(403).json({ message: 'Access denied: almoxarife or gerente only' });
        return;
    }
    next();
};
/**
* Authorization middleware to restrict access to users with the 'ALMOXARIFE' or 'GERENTE' role.
*
* Checks the token attached to the request and ensures the function is 'ALMOXARIFE' or 'GERENTE'.
* If not, it returns a 403 response.
*
* @param {Request} req - The Express Request object.
* @param {Response} res - The Express Response object.
* @param {NextFunction} next - The next middleware function.
*/
GeneralMiddleware.authorizationTiposBrinquedos = (req, res, next) => {
    const { token } = req;
    // Check if token exists and if the user's role is 'ALMOXARIFE' or 'GERENTE'.
    if (!token || (token.funcao !== prisma_client_2.Funcao.ALMOXARIFE && token.funcao !== prisma_client_2.Funcao.GERENTE)) {
        res.status(403).json({ message: 'Access denied: almoxarife or gerente only' });
        return;
    }
    next();
};
/**
 * Authorization middleware to restrict access to users with the 'ANALISTA_CADASTRO' or 'GERENTE' role.
 *
 * Checks the token attached to the request and ensures the function is 'ANALISTA_CADASTRO' or 'GERENTE' .
 * If not, it returns a 403 response.
 *
 * @param {Request} req - The Express Request object.
 * @param {Response} res - The Express Response object.
 * @param {NextFunction} next - The next middleware function.
 */
GeneralMiddleware.authorizationClientes = (req, res, next) => {
    const { token } = req;
    // Check if token exists and if the user's role is 'ANALISTA_CADASTRO' or 'GERENTE' 
    if (!token || (token.funcao !== prisma_client_2.Funcao.ANALISTA_CADASTRO && token.funcao !== prisma_client_2.Funcao.GERENTE)) {
        res.status(403).json({ message: 'Access denied: analista cadastro or gerente only' });
        return;
    }
    next();
};
/**
 * Authorization middleware to restrict access to users with the 'AGENTE_LOCACAO' or 'GERENTE'  role.
 *
 * Checks the token attached to the request and ensures the function is 'AGENTE_LOCACAO' or 'GERENTE' .
 * If not, it returns a 403 response.
 *
 * @param {Request} req - The Express Request object.
 * @param {Response} res - The Express Response object.
 * @param {NextFunction} next - The next middleware function.
 */
GeneralMiddleware.authorizationLocacoes = (req, res, next) => {
    const { token } = req;
    // Check if token exists and if the user's role is 'AGENTE_LOCACAO' or 'GERENTE' 
    if (!token || (token.funcao !== prisma_client_2.Funcao.AGENTE_LOCACAO && token.funcao !== prisma_client_2.Funcao.GERENTE)) {
        res.status(403).json({ message: 'Access denied: agente locacao or gerente only' });
        return;
    }
    next();
};
/**
 * Authorization middleware to restrict access to users with the 'AGENTE_LOCACAO' or 'GERENTE'  role.
 *
 * Checks the token attached to the request and ensures the function is 'AGENTE_LOCACAO' or 'GERENTE' .
 * If not, it returns a 403 response.
 *
 * @param {Request} req - The Express Request object.
 * @param {Response} res - The Express Response object.
 * @param {NextFunction} next - The next middleware function.
 */
GeneralMiddleware.authorizationBrinquedosLocados = (req, res, next) => {
    const { token } = req;
    // Check if token exists and if the user's role is 'AGENTE_LOCACAO' or 'GERENTE' 
    if (!token || (token.funcao !== prisma_client_2.Funcao.AGENTE_LOCACAO && token.funcao !== prisma_client_2.Funcao.GERENTE)) {
        res.status(403).json({ message: 'Access denied: agente locacao or gerente only' });
        return;
    }
    next();
};
/**
 * Authorization middleware to restrict access to users with the 'CAIXA' or 'GERENTE' role.
 *
 * Checks the token attached to the request and ensures the function is 'CAIXA' or 'GERENTE'.
 * If not, it returns a 403 response.
 *
 * @param {Request} req - The Express Request object.
 * @param {Response} res - The Express Response object.
 * @param {NextFunction} next - The next middleware function.
 */
GeneralMiddleware.authorizationPagamentos = (req, res, next) => {
    const { token } = req;
    // Check if token exists and if the user's role is 'CAIXA' or 'GERENTE'
    if (!token || (token.funcao !== prisma_client_2.Funcao.CAIXA && token.funcao !== prisma_client_2.Funcao.GERENTE)) {
        res.status(403).json({ message: 'Access denied: caixa or gerente only' });
        return;
    }
    next();
};
exports.default = GeneralMiddleware;
