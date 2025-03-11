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
const BaseService_1 = require("./BaseService");
class LocacaoServices extends BaseService_1.BaseService {
    constructor() {
        super(new prisma_client_1.PrismaClient());
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.locacao.findMany();
            }
            catch (error) {
                if (error instanceof Error) {
                    console.error('Error fetching all rentals:', error.message);
                    throw new Error(`Database error: ${error.message}`);
                }
                throw new Error('An unknown error occurred while fetching rentals.');
            }
        });
        this.getTotalValue = (pk) => __awaiter(this, void 0, void 0, function* () {
            let totalValorUnitario = 0.0;
            const locacao = yield this.getOne(pk);
            if (locacao && locacao.brinquedosLocados.length > 0) {
                totalValorUnitario = locacao.brinquedosLocados.reduce((total, brinquedo) => {
                    // Converte o valor_unitario para número, se necessário
                    return total + Number(brinquedo.valor_unitario);
                }, 0);
            }
            return totalValorUnitario;
        });
        this.getOne = (pk) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.locacao.findUnique({
                    where: { cod: pk },
                    include: {
                        brinquedosLocados: true, // consulta populada: nome usaso no prisma schema
                    },
                });
            }
            catch (error) {
                if (error instanceof Error) {
                    console.error('Error fetching rental:', error.message);
                    throw new Error(`Database error: ${error.message}`);
                }
                throw new Error('An unknown error occurred while fetching rental.');
            }
        });
        this.create = (data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const createdLocacao = yield this.prisma.locacao.create({ data });
                return createdLocacao;
            }
            catch (error) {
                // Trata erros de validação do Zod
                if (error instanceof zod_1.z.ZodError) {
                    console.error('Validation error on create rental:', error.errors);
                    throw new Error(`Validation error: ${error.errors.map(err => err.message).join(', ')}`);
                }
                // Trata erros genéricos (incluindo erros do Prisma)
                if (error instanceof Error) {
                    console.error('Database error on create rental:', error.message);
                    throw new Error(`Database error: ${error.message}`);
                }
                throw new Error('An unknown error occurred while saving rental.');
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
exports.default = LocacaoServices;
