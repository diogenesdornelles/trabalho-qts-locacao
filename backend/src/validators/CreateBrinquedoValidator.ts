import { z } from 'zod'
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
    data_aquisicao: dateSchema.refine(date => date <= new Date(), {
      message: 'Date must be less than equal to the current date',
    }),
    valor_locacao: z
      .number()
      .gte(0)
      .transform(num => Math.round(num * 100) / 100),
  })
  .strict()
