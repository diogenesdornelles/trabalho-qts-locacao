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
        message: 'CPF inválido.',
      }),
    cod_locacao: z.string().uuid('Forneça um UUID de locação correto'),
    valor_pagamento: z
      .number()
      .gt(0, 'Valor mínimo de compra deve ser R$ 0,01')
      .transform(num => Math.round(num * 100) / 100),
  })
  .strict()
