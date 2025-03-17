'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.CreateTipoBrinquedoValidator = void 0
const zod_1 = require('zod')
/* ======================================
   Schema validação para o modelo TipoBrinquedo
   ====================================== */
exports.CreateTipoBrinquedoValidator = zod_1.z
  .object({
    nome: zod_1.z.string().min(3).max(255),
  })
  .strict()
