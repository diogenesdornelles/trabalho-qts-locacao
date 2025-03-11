import { CreateTipoBrinquedoValidator } from './CreateTipoBrinquedoValidator'

/* ======================================
   Schema de validação para o update do modelo PTipoBrinquedo
   ====================================== */

export const UpdateTipoBrinquedoValidator =
  CreateTipoBrinquedoValidator.partial()
