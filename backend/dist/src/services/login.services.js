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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv = __importStar(require("dotenv"));
const base_service_1 = require("./base.service");
const prisma_client_1 = require("../../generated/prisma_client");
const api_error_util_1 = require("../utils/api-error.util");
dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY || 'r34534erfefgdf7576ghfg4455456';
const EXPIRES_IN = process.env.EXPIRES_IN || '2d';
class LoginServices extends base_service_1.BaseService {
    constructor() {
        super(new prisma_client_1.PrismaClient());
        this.create = (data) => __awaiter(this, void 0, void 0, function* () {
            // Find employee
            const dbFuncionario = yield this.prisma.funcionario.findUnique({
                where: { cpf: data.cpf },
            });
            if (!dbFuncionario) {
                throw new api_error_util_1.ApiError(400, 'CPF not found or is not correct');
            }
            // Compare encripted pwds
            const isMatch = bcrypt_1.default.compareSync(data.senha, dbFuncionario.senha);
            // If match, configure token
            if (isMatch) {
                const token = jsonwebtoken_1.default.sign({
                    cpf: dbFuncionario.cpf,
                    nome: dbFuncionario.nome,
                    funcao: dbFuncionario.funcao,
                }, SECRET_KEY, {
                    expiresIn: EXPIRES_IN,
                });
                return {
                    funcionario: {
                        cpf: dbFuncionario.cpf,
                        nome: dbFuncionario.nome,
                        funcao: dbFuncionario.funcao,
                    },
                    token: token,
                };
            }
            else {
                throw new Error('Password is not correct');
            }
        });
    }
    getAll() {
        throw new Error('Method not implemented.');
    }
    getOne(pk) {
        throw new Error('Method not implemented.');
    }
    update(pk, data) {
        throw new Error('Method not implemented.');
    }
    delete(pk) {
        throw new Error('Method not implemented.');
    }
}
exports.default = LoginServices;
