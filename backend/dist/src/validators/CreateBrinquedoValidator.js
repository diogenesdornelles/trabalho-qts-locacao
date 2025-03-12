"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBrinquedoValidator = void 0;
const zod_1 = require("zod");
const dateSchema_1 = require("./dateSchema");
/* ================================
   Schema para validação de criação do modelo Brinquedo
   ================================ */
exports.CreateBrinquedoValidator = zod_1.z
    .object({
    nome: zod_1.z.string().min(3).max(255),
    // Nome da chave ajustado para corresponder ao Prisma (tipo_brinquedo)
    tipo_brinquedo: zod_1.z.string().uuid(),
    marca: zod_1.z.string().min(3).max(255),
    data_aquisicao: dateSchema_1.dateSchema,
    valor_locacao: zod_1.z.number().gte(0).transform((num) => Math.round(num * 100) / 100),
})
    .strict();
