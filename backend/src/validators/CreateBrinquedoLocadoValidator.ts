import { z } from 'zod'
import GeneralValidator from './GeneralValidator'
import { dateSchema } from './dateSchema'

/* ======================================
   Schema de valicação para o modelo BrinquedoLocado
   ====================================== */
export const CreateBrinquedoLocadoValidator = z
  .object({
    valor_unitario: z.number().gte(0).refine(GeneralValidator.validateMoney, {
      message: 'valor_unitario must be a money float type',
    }),
    nome: z.string().min(3).max(255),
    cod_locacao: z.string().uuid(),
    // Campo adicionado conforme o Prisma
    cod_brinquedo: z.string().uuid(),
    data_devolucao: dateSchema,
  })
  .strict()
