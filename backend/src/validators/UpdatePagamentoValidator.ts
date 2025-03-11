import { CreatePagamentoValidator } from './CreatePagamentoValidator'

/* ======================================
   Schema de validação para o update do modelo Pagamento
   ====================================== */

export const UpdatePagamentoValidator = CreatePagamentoValidator.partial()
