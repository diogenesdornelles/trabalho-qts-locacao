import { CreateClienteValidator } from './CreateClienteValidator'

/* ======================================
   Schema de validação para o update do modelo cliente
   ====================================== */

export const UpdateClienteValidator = CreateClienteValidator.omit({
  cpf: true,
}).partial()
