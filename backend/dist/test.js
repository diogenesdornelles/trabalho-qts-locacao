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
const prisma_client_1 = require("./generated/prisma_client");
const prisma = new prisma_client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const funcionario = yield prisma.funcionario.create({
            data: {
                cpf: '12545678984',
                nome: 'João da Silva',
                telefone: '11999999999',
                funcao: prisma_client_1.Funcao.GERENTE, // Use os valores do enum como string
                senha: 'minhaSenha',
            },
        });
        const funcionarios = yield prisma.funcionario.findMany();
        funcionarios.forEach((func) => {
            console.log(func);
        });
    });
}
main()
    .catch(e => {
    console.error(e);
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
