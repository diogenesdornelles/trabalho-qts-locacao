import { CreateBrinquedoLocadoValidator } from './CreateBrinquedoLocadoValidator'

/* ======================================
   Schema de validação para o update do modelo BrinquedoLocado
   ====================================== */

export const UpdateBrinquedoLocadoValidator =
  CreateBrinquedoLocadoValidator.partial()
