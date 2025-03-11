import { z } from 'zod'
import GeneralValidator from './GeneralValidator'
import { dateSchema } from './dateSchema'

/* ======================================
   Schema validação para o modelo TipoBrinquedo
   ====================================== */
export const CreateTipoBrinquedoValidator = z
  .object({
    nome: z.string().min(3).max(255),
  })
  .strict()
