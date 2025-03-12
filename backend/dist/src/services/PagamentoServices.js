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
        this.create = (data) => __awaiter(this, void 0, void 0, function* () {
            try {
                // É preciso atualizar valor total, através da locação e seus respectivos itens locados
                const locacaoService = new LocacaoServices_1.default();
                const totalValue = yield locacaoService.getTotalValue(data.cod_locacao);
                // Salva o novo pagamento utilizando o método create do Prisma
                const createdPagamento = yield this.prisma.pagamento.create({
                    data: Object.assign(Object.assign({}, data), { valor_locacao: totalValue }),
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
        this.update = (pk, data) => __awaiter(this, void 0, void 0, function* () {
            throw new Error('Method not implemented.');
        });
        this.delete = (pk) => __awaiter(this, void 0, void 0, function* () {
            throw new Error('Method not implemented.');
        });
    }
}
exports.default = PagamentoServices;
