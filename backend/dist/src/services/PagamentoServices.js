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
const LocacaoServices_1 = __importDefault(require("./LocacaoServices"));
class PagamentoServices extends BaseService_1.BaseService {
    constructor() {
        super(new prisma_client_1.PrismaClient());
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.pagamento.findMany();
            }
            catch (error) {
                if (error instanceof Error) {
                    console.error('Error fetching all payments:', error.message);
                    throw new Error(`Database error: ${error.message}`);
                }
                throw new Error('An unknown error occurred while fetching payments.');
            }
        });
        this.getOne = (pk) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.pagamento.findUnique({
                    where: { cod: pk },
                    include: {
                        locacao: true, // consulta populada: nome usaso no prisma schema
                    },
                });
            }
            catch (error) {
                if (error instanceof Error) {
                    console.error('Error fetching payment:', error.message);
                    throw new Error(`Database error: ${error.message}`);
                }
                throw new Error('An unknown error occurred while fetching payment.');
            }
        });
        this.create = (req) => __awaiter(this, void 0, void 0, function* () {
            try {
                // Valida os dados recebidos no corpo da requisição
                const validatedData = schemas_1.PagamentoSchema.parse(req.body);
                // É preciso atualizar valor total, através da locação e seus respectivos itens locados
                const locacaoService = new LocacaoServices_1.default();
                validatedData.valor_locacao = yield locacaoService.getTotalValue(validatedData.cod_locacao);
                // Salva o novo pagamento utilizando o método create do Prisma
                const createdPagamento = yield this.prisma.pagamento.create({
                    data: validatedData,
                });
                return createdPagamento;
            }
            catch (error) {
                // Trata erros de validação do Zod
                if (error instanceof zod_1.z.ZodError) {
                    console.error('Validation error on create payment:', error.errors);
                    throw new Error(`Validation error: ${error.errors.map(err => err.message).join(', ')}`);
                }
                // Trata erros genéricos (incluindo erros do Prisma)
                if (error instanceof Error) {
                    console.error('Database error on create payment:', error.message);
                    throw new Error(`Database error: ${error.message}`);
                }
                throw new Error('An unknown error occurred while saving payment.');
            }
        });
        this.update = (pk, req) => __awaiter(this, void 0, void 0, function* () {
            try {
                // Cria uma versão parcial do schema para permitir atualizações parciais
                const partialSchema = schemas_1.PagamentoSchema.partial();
                // Valida os dados enviados (parciais) no corpo da requisição
                const validatedData = partialSchema.parse(req.body);
                // Remove as chaves com valor undefined
                const updateData = Object.fromEntries(Object.entries(validatedData).filter(([_, value]) => value !== undefined));
                // Remove o campo 'cod' caso esteja presente, para evitar atualizar a PK
                delete updateData['cod'];
                delete updateData['valor_locacao'];
                // Se a cheva de cod de locação é objeto de alteração
                if (validatedData.cod_locacao) {
                    const locacaoService = new LocacaoServices_1.default();
                    validatedData.valor_locacao = yield locacaoService.getTotalValue(validatedData.cod_locacao);
                }
                // É preciso atualizar valor total, através da locação e seus respectivos itens locados
                // Atualiza o pagamento utilizando o método update do Prisma
                const updatedPagamento = yield this.prisma.pagamento.update({
                    where: { cod: pk },
                    data: updateData,
                });
                return updatedPagamento;
            }
            catch (error) {
                if (error instanceof zod_1.z.ZodError) {
                    console.error('Validation error on update payment:', error.errors);
                    throw new Error(`Validation error: ${error.errors.map(err => err.message).join(', ')}`);
                }
                if (error instanceof Error) {
                    console.error('Database error on update payment:', error.message);
                    throw new Error(`Database error: ${error.message}`);
                }
                throw new Error('An unknown error occurred while updating payment.');
            }
        });
        this.delete = (pk) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.prisma.pagamento.delete({
                    where: { cod: pk },
                });
                return true;
            }
            catch (error) {
                return false;
            }
        });
    }
}
exports.default = PagamentoServices;
