import { z } from 'zod'
import GeneralValidator from './GeneralValidator'
import { dateSchema } from './dateSchema'

/* ================================
   Schema para validação de criação do modelo Brinquedo
   ================================ */
export const CreateBrinquedoValidator = z
  .object({
    nome: z.string().min(3).max(255),
    // Nome da chave ajustado para corresponder ao Prisma (tipo_brinquedo)
    tipo_brinquedo: z.string().uuid(),
    marca: z.string().min(3).max(255),
    data_aquisicao: dateSchema,
    valor_locacao: z.number().gte(0).refine(GeneralValidator.validateMoney, {
      message: 'valor_locacao must be a money float type',
    }),
  })
  .strict()
