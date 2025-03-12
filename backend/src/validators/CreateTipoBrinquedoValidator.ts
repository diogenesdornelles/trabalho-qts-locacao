import { z } from 'zod'

/* ======================================
   Schema validação para o modelo TipoBrinquedo
   ====================================== */
export const CreateTipoBrinquedoValidator = z
  .object({
    nome: z.string().min(3).max(255),
  })
  .strict()
