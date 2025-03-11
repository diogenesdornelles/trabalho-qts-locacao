import { CreateFuncionarioValidator } from './CreateFuncionarioValidator'

/* ======================================
   Schema de validação para o update do modelo Funcionario
   ====================================== */

export const UpdateFuncionarioValidator = CreateFuncionarioValidator.omit({
  cpf: true,
}).partial()
