'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.UpdatePagamentoValidator = void 0
const CreatePagamentoValidator_1 = require('./CreatePagamentoValidator')
/* ======================================
   Schema de validação para o update do modelo Pagamento
   ====================================== */
exports.UpdatePagamentoValidator =
  CreatePagamentoValidator_1.CreatePagamentoValidator.partial()
