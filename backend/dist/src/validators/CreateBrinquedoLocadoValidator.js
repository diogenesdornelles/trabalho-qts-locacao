"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBrinquedoLocadoValidator = void 0;
const zod_1 = require("zod");
const dateSchema_1 = require("./dateSchema");
/* ======================================
   Schema de valicação para o modelo BrinquedoLocado
   ====================================== */
exports.CreateBrinquedoLocadoValidator = zod_1.z
    .object({
    cod_locacao: zod_1.z.string().uuid(),
    // Campo adicionado conforme o Prisma
    cod_brinquedo: zod_1.z.string().uuid(),
    data_devolucao: dateSchema_1.dateSchema,
})
    .strict();
