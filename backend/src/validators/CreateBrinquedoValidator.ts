import { z } from 'zod'
import { dateSchema } from './dateSchema'

/* ================================
   Schema para validação de criação do modelo Brinquedo
   ================================ */
export const CreateBrinquedoValidator = z
  .object({
    nome: z.string().min(3, 'Nome precisa ter ao menos 3 caracteres').max(255, 'Nome pode ter no máximo 255 caracteres'),
    // Nome da chave ajustado para corresponder ao Prisma (tipo_brinquedo)
    tipo_brinquedo: z.string().uuid('Deve ser informado UUID válido de tipo brinquedo'),
    marca: z.string().min(3, 'Marca deve ter no mínimo 3 caracteres').max(255, 'Marca deve ter no máximo 255 caracteres'),
    data_aquisicao: dateSchema.refine(date => date <= new Date(), {
      message: 'Data de aquisição deve ser menor ou igual a data atual',
    }),
    valor_locacao: z
      .number()
      .gt(0, 'Valor mínimo de compra deve ser R$ 0,01')
      .transform(num => Math.round(num * 100) / 100),
  })
  .strict()
