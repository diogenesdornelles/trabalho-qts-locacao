'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.UpdateBrinquedoValidator = void 0
const CreateBrinquedoValidator_1 = require('./CreateBrinquedoValidator')
/* ======================================
   Schema de validação para o update do modelo Brinquedo
   ====================================== */
exports.UpdateBrinquedoValidator =
  CreateBrinquedoValidator_1.CreateBrinquedoValidator.partial()
