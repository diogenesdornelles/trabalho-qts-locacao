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
class BrinquedoLocadoServices extends BaseService_1.BaseService {
    constructor() {
        super(new prisma_client_1.PrismaClient());
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.brinquedoLocado.findMany();
            }
            catch (error) {
                if (error instanceof Error) {
                    console.error('Error fetching all rented toys:', error.message);
                    throw new Error(`Database error: ${error.message}`);
                }
                throw new Error('An unknown error occurred while fetching toys.');
            }
        });
        this.getOne = (pk) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.brinquedoLocado.findUnique({
                    where: { cod: pk },
                });
            }
            catch (error) {
                if (error instanceof Error) {
                    console.error('Error fetching rented toy:', error.message);
                    throw new Error(`Database error: ${error.message}`);
                }
                throw new Error('An unknown error occurred while fetching rented toy.');
            }
        });
        this.create = (data) => __awaiter(this, void 0, void 0, function* () {
            try {
                // obtém o brinquedo no DB para preencher campos valor_unitario e nome
                const brinquedoDB = yield this.prisma.brinquedo.findUnique({
                    where: { cod: data.cod_brinquedo },
                });
                if (brinquedoDB) {
                    // Salva o novo brinquedo locado utilizando o método create do Prisma
                    const createdBrinquedoLocado = yield this.prisma.brinquedoLocado.create({
                        data: Object.assign(Object.assign({}, data), { valor_unitario: brinquedoDB.valor_locacao, nome: brinquedoDB.nome }),
                    });
                    return createdBrinquedoLocado;
                }
                throw new Error(`Validation error: toy code ${data.cod_brinquedo} not found`);
            }
            catch (error) {
                // Trata erros de validação do Zod
                if (error instanceof zod_1.z.ZodError) {
                    console.error('Validation error on create rented toy:', error.errors);
                    throw new Error(`Validation error: ${error.errors.map(err => err.message).join(', ')}`);
                }
                // Trata erros genéricos (incluindo erros do Prisma)
                if (error instanceof Error) {
                    console.error('Database error on create rented toy:', error.message);
                    throw new Error(`Database error: ${error.message}`);
                }
                throw new Error('An unknown error occurred while saving rented toy.');
            }
        });
        this.update = (pk, data) => __awaiter(this, void 0, void 0, function* () {
            try {
                let updatedData = null;
                // Se há uma chave cod de brinquedo, atualizar valor unitario e nome
                if (data.cod_brinquedo) {
                    // obtém o brinquedo no DB para preencher campos valor_unitario e nome
                    const brinquedoDB = yield this.prisma.brinquedo.findUnique({
                        where: { cod: data.cod_brinquedo },
                    });
                    if (brinquedoDB) {
                        updatedData = Object.assign(Object.assign({}, data), { valor_unitario: brinquedoDB.valor_locacao, nome: brinquedoDB.nome });
                    }
                    else {
                        throw new Error(`Validation error: toy code ${data.cod_brinquedo} not found`);
                    }
                }
                // Atualiza o brinquedo locado utilizando o método update do Prisma
                const updatedBrinquedoLocado = yield this.prisma.brinquedoLocado.update({
                    where: { cod: pk },
                    data: updatedData ? updatedData : data,
                });
                return updatedBrinquedoLocado;
            }
            catch (error) {
                if (error instanceof zod_1.z.ZodError) {
                    console.error('Validation error on update rented toy:', error.errors);
                    throw new Error(`Validation error: ${error.errors.map(err => err.message).join(', ')}`);
                }
                if (error instanceof Error) {
                    console.error('Database error on update rented toy:', error.message);
                    throw new Error(`Database error: ${error.message}`);
                }
                throw new Error('An unknown error occurred while updating rented toy.');
            }
        });
        this.delete = (pk) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.prisma.brinquedoLocado.delete({
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
exports.default = BrinquedoLocadoServices;
