import { CreateBrinquedoValidator } from './CreateBrinquedoValidator'

/* ======================================
   Schema de validação para o update do modelo Brinquedo
   ====================================== */

export const UpdateBrinquedoValidator = CreateBrinquedoValidator.partial()
