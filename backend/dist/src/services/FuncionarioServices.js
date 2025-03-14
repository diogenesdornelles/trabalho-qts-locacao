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
const BaseService_1 = require("./BaseService");
const hashPwd_1 = __importDefault(require("../utils/hashPwd"));
class FuncionarioServices extends BaseService_1.BaseService {
    constructor() {
        super(new prisma_client_1.PrismaClient());
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            return yield this.prisma.funcionario.findMany({
                select: {
                    cpf: true,
                    nome: true,
                    telefone: true,
                    funcao: true,
                    senha: false,
                },
            });
        });
        this.getOne = (pk) => __awaiter(this, void 0, void 0, function* () {
            return yield this.prisma.funcionario.findUnique({
                where: { cpf: pk },
                select: {
                    cpf: true,
                    nome: true,
                    telefone: true,
                    funcao: true,
                    senha: false,
                },
            });
        });
        this.create = (data) => __awaiter(this, void 0, void 0, function* () {
            // tornar oculto o pwd no bd
            data.senha = yield (0, hashPwd_1.default)(data.senha);
            // Salva o novo funcionário utilizando o método create do Prisma
            const createdFuncionario = yield this.prisma.funcionario.create({
                data: Object.assign(Object.assign({}, data), { funcao: data.funcao }),
            });
            createdFuncionario.senha = "";
            return {
                cpf: createdFuncionario.cpf,
                nome: createdFuncionario.nome,
                telefone: createdFuncionario.telefone,
                funcao: createdFuncionario.funcao,
            };
        });
        this.update = (pk, data) => __awaiter(this, void 0, void 0, function* () {
            if (data.senha) {
                data.senha = yield (0, hashPwd_1.default)(data.senha);
            }
            // Atualiza o funcionário utilizando o método update do Prisma
            const updatedFuncionario = yield this.prisma.funcionario.update({
                where: { cpf: pk },
                data: Object.assign(Object.assign({}, data), { funcao: data.funcao }),
            });
            return {
                cpf: updatedFuncionario.cpf,
                nome: updatedFuncionario.nome,
                telefone: updatedFuncionario.telefone,
                funcao: updatedFuncionario.funcao,
            };
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
