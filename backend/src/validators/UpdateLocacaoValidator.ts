import { CreateLocacaoValidator } from './CreateLocacaoValidator'

/* ======================================
   Schema de validação para o update do modelo Locacao
   ====================================== */

export const UpdateLocacaoValidator = CreateLocacaoValidator.partial()
