import { z } from 'zod'
import { dateSchema } from './dateSchema'

/* ======================================
   Schema de valicação para o modelo BrinquedoLocado
   ====================================== */
export const CreateBrinquedoLocadoValidator = z
  .object({
    cod_locacao: z.string().uuid(),
    // Campo adicionado conforme o Prisma
    cod_brinquedo: z.string().uuid(),
    data_devolucao: dateSchema,
  })
  .strict()
