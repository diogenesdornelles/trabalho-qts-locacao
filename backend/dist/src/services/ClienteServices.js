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
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_client_1 = require("../../generated/prisma_client");
const zod_1 = require("zod");
const schemas_1 = require("../schemas/schemas");
const BaseService_1 = require("./BaseService");
class ClienteServices extends BaseService_1.BaseService {
    constructor() {
        super(new prisma_client_1.PrismaClient());
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            try {
                // Encontra todos os clientes
                return yield this.prisma.cliente.findMany();
            }
            catch (error) {
                if (error instanceof Error) {
                    console.error('Error fetching all customers:', error.message);
                    throw new Error(`Database error: ${error.message}`);
                }
                throw new Error('An unknown error occurred while fetching customers.');
            }
        });
        this.getOne = (pk) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.cliente.findUnique({
                    where: { cpf: pk },
                    include: {
                        locacoes: true, // consulta populada: nome usaso no prisma schema
                    },
                });
            }
            catch (error) {
                if (error instanceof Error) {
                    console.error('Error fetching customer:', error.message);
                    throw new Error(`Database error: ${error.message}`);
                }
                throw new Error('An unknown error occurred while fetching customer.');
            }
        });
        this.create = (req) => __awaiter(this, void 0, void 0, function* () {
            try {
                // Valida os dados recebidos no corpo da requisição
                const validatedData = schemas_1.ClienteSchema.parse(req.body);
                // pk = cpf não é opcional
                // Salva o novo cliente utilizando o método create do Prisma
                const createdCliente = yield this.prisma.cliente.create({
                    data: {
                        cpf: validatedData.cpf,
                        nome: validatedData.nome,
                        telefone: validatedData.telefone,
                        endereco: validatedData.endereco,
                        data_nascimento: validatedData.data_nascimento,
                    },
                });
                return createdCliente;
            }
            catch (error) {
                // Trata erros de validação do Zod
                if (error instanceof zod_1.z.ZodError) {
                    console.error('Validation error on create customer:', error.errors);
                    throw new Error(`Validation error: ${error.errors.map(err => err.message).join(', ')}`);
                }
                // Trata erros genéricos (incluindo erros do Prisma)
                if (error instanceof Error) {
                    console.error('Database error on create customer:', error.message);
                    throw new Error(`Database error: ${error.message}`);
                }
                throw new Error('An unknown error occurred while saving customer.');
            }
        });
        this.update = (pk, req) => __awaiter(this, void 0, void 0, function* () {
            try {
                // Cria uma versão parcial do schema para permitir atualizações parciais
                const partialSchema = schemas_1.ClienteSchema.partial();
                // Valida os dados enviados (parciais) no corpo da requisição
                const validatedData = partialSchema.parse(req.body);
                // Remove as chaves com valor undefined
                const updateData = Object.fromEntries(Object.entries(validatedData).filter(([_, value]) => value !== undefined));
                // Remove o campo 'cpf' caso esteja presente, para evitar atualizar a PK
                delete updateData['cpf'];
                // Atualiza o cliente utilizando o método update do Prisma
                const updatedCliente = yield this.prisma.cliente.update({
                    where: { cpf: pk },
                    data: updateData,
                });
                return updatedCliente;
            }
            catch (error) {
                if (error instanceof zod_1.z.ZodError) {
                    console.error('Validation error on update customer:', error.errors);
                    throw new Error(`Validation error: ${error.errors.map(err => err.message).join(', ')}`);
                }
                if (error instanceof Error) {
                    console.error('Database error on update customer:', error.message);
                    throw new Error(`Database error: ${error.message}`);
                }
                throw new Error('An unknown error occurred while updating customer.');
            }
        });
        this.delete = (pk) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.prisma.cliente.delete({
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
exports.default = ClienteServices;
