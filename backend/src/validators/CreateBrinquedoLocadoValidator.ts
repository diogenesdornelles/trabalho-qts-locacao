import { z } from 'zod'
import { dateSchema } from './dateSchema'

/* ======================================
   Schema de valicação para o modelo BrinquedoLocado
   ====================================== */
export const CreateBrinquedoLocadoValidator = z
  .object({
    cod_locacao: z.string().uuid(),
    cod_brinquedo: z.string().uuid(),
    data_devolucao: dateSchema.refine(date => date >= new Date(), {
      message: 'Date must be greater than equal to the current date',
    })
  })
  .strict()
