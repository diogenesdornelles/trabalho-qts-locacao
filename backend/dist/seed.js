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
const zod_1 = require("zod");
const prisma_client_1 = require("./generated/prisma_client");
const dto_validator_1 = __importDefault(require("./src/validators/dto.validator"));
const dotenv = __importStar(require("dotenv"));
const hash_pwd_util_1 = __importDefault(require("./src/utils/hash-pwd.util"));
// Carrega o .env de um nível acima
dotenv.config();
const NOME = process.env.SUPER_USER_NOME;
const PWD = process.env.SUPER_USER_PWD;
const CPF = process.env.SUPER_USER_CPF;
const prisma = new prisma_client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = {
                cpf: CPF,
                nome: NOME,
                telefone: '1111111111',
                funcao: prisma_client_1.Funcao.GERENTE, // Use os valores do enum como string
                senha: PWD,
            };
            const validator = new dto_validator_1.default();
            const validatedData = validator.createFuncionario(data);
            const papwd = yield (0, hash_pwd_util_1.default)(validatedData.senha);
            validatedData.senha = yield (0, hash_pwd_util_1.default)(validatedData.senha);
            console.log(validatedData);
            const gerente = yield prisma.funcionario.create({
                data: {
                    cpf: validatedData.cpf,
                    telefone: validatedData.telefone,
                    funcao: validatedData.funcao,
                    nome: validatedData.nome,
                    senha: validatedData.senha,
                },
            });
            console.log(`Employee CPF ${gerente.cpf} was created`);
        }
        catch (error) {
            // Trata erros de validação do Zod
            if (error instanceof zod_1.z.ZodError) {
                console.error('Validation error on create employee:', error.errors);
                throw new Error(`Validation error: ${error.errors.map(err => err.message).join(', ')}`);
            }
            // Trata erros genéricos (incluindo erros do Prisma)
            if (error instanceof Error) {
                console.error('Database error on create employee:', error.message);
                throw new Error(`Database error: ${error.message}`);
            }
            throw new Error('An unknown error occurred while saving employee.');
        }
    });
}
main()
    .catch(e => {
    console.error(e);
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
