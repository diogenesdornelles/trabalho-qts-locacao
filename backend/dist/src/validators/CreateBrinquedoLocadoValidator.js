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
    cod_brinquedo: zod_1.z.string().uuid(),
    data_devolucao: dateSchema_1.dateSchema.refine(date => date >= new Date(), {
        message: 'Date must be greater than equal to the current date',
    })
})
    .strict();
