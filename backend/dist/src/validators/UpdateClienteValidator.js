'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.UpdateClienteValidator = void 0
const CreateClienteValidator_1 = require('./CreateClienteValidator')
/* ======================================
   Schema de validação para o update do modelo cliente
   ====================================== */
exports.UpdateClienteValidator =
  CreateClienteValidator_1.CreateClienteValidator.omit({
    cpf: true,
  }).partial()
