"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFuncionarioValidator = void 0;
const CreateFuncionarioValidator_1 = require("./CreateFuncionarioValidator");
/* ======================================
   Schema de validação para o update do modelo Funcionario
   ====================================== */
exports.UpdateFuncionarioValidator = CreateFuncionarioValidator_1.CreateFuncionarioValidator.omit({
    cpf: true,
}).partial();
