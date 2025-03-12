import { z } from 'zod'
import GeneralValidator from './GeneralValidator'

/* ======================================
   Schema de valicação para o modelo Pagamento
   ====================================== */
export const CreatePagamentoValidator = z
  .object({
    cpf_cliente: z
      .string()
      .transform(str => str.replace(/\D/g, ''))
      .refine(GeneralValidator.validateCpf, {
        message: 'Invalid CPF format. Please provide a valid CPF.',
      }),
    cod_locacao: z.string().uuid(),
    valor_pagamento: z.number().gte(0).transform((num) => Math.round(num * 100) / 100),
  })
  .strict()
