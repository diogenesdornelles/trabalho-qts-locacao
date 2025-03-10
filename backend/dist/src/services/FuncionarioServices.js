"use strict";
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
const prisma_client_1 = require("../../generated/prisma_client");
const zod_1 = require("zod");
const schemas_1 = require("../schemas/schemas");
const BaseService_1 = require("./BaseService");
const hashPwd_1 = __importDefault(require("../utils/hashPwd"));
class FuncionarioServices extends BaseService_1.BaseService {
    constructor() {
        super(new prisma_client_1.PrismaClient());
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.funcionario.findMany();
            }
            catch (error) {
                if (error instanceof Error) {
                    console.error('Error fetching all employees:', error.message);
                    throw new Error(`Database error: ${error.message}`);
                }
                throw new Error('An unknown error occurred while fetching employees.');
            }
        });
        this.getOne = (pk) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.funcionario.findUnique({
                    where: { cpf: pk },
                });
            }
            catch (error) {
                if (error instanceof Error) {
                    console.error('Error fetching employee:', error.message);
                    throw new Error(`Database error: ${error.message}`);
                }
                throw new Error('An unknown error occurred while fetching employee.');
            }
        });
        this.create = (req) => __awaiter(this, void 0, void 0, function* () {
            try {
                // Valida os dados recebidos no corpo da requisição
                const validatedData = schemas_1.FuncionarioSchema.parse(req.body);
                validatedData.senha = yield (0, hashPwd_1.default)(validatedData.senha);
                // Salva o novo funcionário utilizando o método create do Prisma
                const createdFuncionario = yield this.prisma.funcionario.create({
                    data: validatedData,
                });
                return createdFuncionario;
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
        this.update = (pk, req) => __awaiter(this, void 0, void 0, function* () {
            try {
                // Cria uma versão parcial do schema para permitir atualizações parciais
                const partialSchema = schemas_1.FuncionarioSchema.partial();
                // Valida os dados enviados (parciais) no corpo da requisição
                const validatedData = partialSchema.parse(req.body);
                // Remove as chaves com valor undefined
                const updateData = Object.fromEntries(Object.entries(validatedData).filter(([_, value]) => value !== undefined));
                // Remove o campo 'cpf' caso esteja presente, para evitar atualizar a PK
                delete updateData['cpf'];
                if (validatedData.senha) {
                    validatedData.senha = yield (0, hashPwd_1.default)(validatedData.senha);
                }
                // Atualiza o funcionário utilizando o método update do Prisma
                const updatedFuncionario = yield this.prisma.funcionario.update({
                    where: { cpf: pk },
                    data: updateData,
                });
                return updatedFuncionario;
            }
            catch (error) {
                if (error instanceof zod_1.z.ZodError) {
                    console.error('Validation error on update employee:', error.errors);
                    throw new Error(`Validation error: ${error.errors.map(err => err.message).join(', ')}`);
                }
                if (error instanceof Error) {
                    console.error('Database error on update employee:', error.message);
                    throw new Error(`Database error: ${error.message}`);
                }
                throw new Error('An unknown error occurred while updating employee.');
            }
        });
        this.delete = (pk) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.prisma.funcionario.delete({
                    where: { cpf: pk },
                });
                return true;
            }
            catch (error) {
                return false;
            }
        });
    }
}
exports.default = FuncionarioServices;
