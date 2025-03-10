"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GeneralValidator_1 = __importDefault(require("../validators/GeneralValidator"));
const prisma_client_1 = require("../../generated/prisma_client");
class GeneralMiddleware {
}
GeneralMiddleware.validateCpf = (req, res, next) => {
    let { cpf } = req.params;
    if (GeneralValidator_1.default.validateCpf(cpf)) {
        next();
        return;
    }
    res.status(400).json({
        error: 'Invalid CPF format. Please provide a valid CPF.',
    });
    return;
};
GeneralMiddleware.validateUUID = (req, res, next) => {
    let { cod } = req.params;
    if (GeneralValidator_1.default.validateUUID(cod)) {
        next();
        return;
    }
    res.status(400).json({
        error: 'Invalid UUID format. Please provide a valid UUID.',
    });
    return;
};
GeneralMiddleware.errorHandler = (error, req, res, next) => {
    console.error('Error:', error);
    // Trata erros conhecidos do Prisma
    if (error instanceof prisma_client_1.Prisma.PrismaClientKnownRequestError) {
        // Exemplo: Violação de restrição de unicidade (código P2002)
        if (error.code === 'P2002') {
            res.status(409).json({
                message: 'Unique violation.',
                details: error.meta,
            });
            return;
        }
        return res.status(500).json({
            message: 'Database error.',
            details: error.message,
        });
    }
    // Erros de validação do Prisma
    if (error instanceof prisma_client_1.Prisma.PrismaClientValidationError) {
        res.status(400).json({
            message: 'Prisma error validation.',
            details: error.message,
        });
        return;
    }
    // Erros desconhecidos do Prisma
    if (error instanceof prisma_client_1.Prisma.PrismaClientUnknownRequestError) {
        res.status(500).json({
            message: 'Unknow database error.',
            details: error.message,
        });
        return;
    }
    // Outros erros genéricos
    return res.status(error.status || 500).json({
        message: error.message || 'Internal Server Error',
    });
};
GeneralMiddleware.validateBodyRequest = (req, res, next) => {
    if (req.method.toLocaleLowerCase() !== 'get') {
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({ message: 'Invalid requisition' });
        }
    }
    return next();
};
exports.default = GeneralMiddleware;
