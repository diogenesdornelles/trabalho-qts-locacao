import { z } from 'zod'

/* ======================================
   Schema validação para o modelo TipoBrinquedo
   ====================================== */
export const CreateTipoBrinquedoValidator = z
  .object({
    nome: z
      .string()
      .min(3, 'Nome deve ter no mínimo 3 caracteres')
      .max(255, 'Nome deve ter no máximo 255 caracteres'),
  })
  .strict()
