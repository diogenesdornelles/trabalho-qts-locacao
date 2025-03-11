import { z, ZodObject } from 'zod'
import GeneralValidator from './GeneralValidator'
import { dateSchema } from './dateSchema'

/* ======================================
   Schema de valicação para o modelo Pagamento
   ====================================== */
export const CreatePagamentoValidator = z
  .object({
    cpf_cliente: z.string().refine(GeneralValidator.validateCpf, {
      message: 'Invalid CPF format. Please provide a valid CPF.',
    }),
    cod_locacao: z.string().uuid(),
    data_pagamento: dateSchema.optional(), // Default now se não informado
    valor_pagamento: z.number().gte(0).refine(GeneralValidator.validateMoney, {
      message: 'valor_pagamento must be a money float type',
    }),
    valor_locacao: z.number().gte(0).refine(GeneralValidator.validateMoney, {
      message: 'valor_locacao must be a money float type',
    }),
  })
  .strict()
