"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClienteValidator = void 0;
const zod_1 = require("zod");
const GeneralValidator_1 = __importDefault(require("./GeneralValidator"));
const dateSchema_1 = require("./dateSchema");
/* ================================
   Schema para validar criação do modelo Cliente
   ================================ */
exports.CreateClienteValidator = zod_1.z
    .object({
    cpf: zod_1.z.string().refine(GeneralValidator_1.default.validateCpf, {
        message: 'Invalid CPF format. Please provide a valid CPF.',
    }),
    nome: zod_1.z.string().min(3).max(255),
    endereco: zod_1.z.string().min(3).max(255),
    data_nascimento: dateSchema_1.dateSchema,
    telefone: zod_1.z.string().refine(GeneralValidator_1.default.validatePhone, {
        message: 'Please provide a valid Phone.',
    }),
})
    .strict();
