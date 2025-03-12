"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLocacaoValidator = void 0;
const CreateLocacaoValidator_1 = require("./CreateLocacaoValidator");
/* ======================================
   Schema de validação para o update do modelo Locacao
   ====================================== */
exports.UpdateLocacaoValidator = CreateLocacaoValidator_1.CreateLocacaoValidator.partial();
