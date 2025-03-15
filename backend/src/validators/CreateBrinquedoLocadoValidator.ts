import { z } from 'zod'
import { dateSchema } from './dateSchema'

/* ======================================
   Schema de valicação para o modelo BrinquedoLocado
   ====================================== */
export const CreateBrinquedoLocadoValidator = z
  .object({
    cod_locacao: z.string().uuid("Deve informar UUID de locação válido"),
    cod_brinquedo: z.string().uuid("Deve informar UUID de brinquedo válido"),
    data_devolucao: dateSchema.refine(date => date >= new Date(), {
      message: 'Data de devolução do brinquedo deve ser maior ou igual a data atual',
    })
  })
  .strict()
