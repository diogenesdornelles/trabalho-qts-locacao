import { z } from 'zod'
import GeneralValidator from './GeneralValidator'

/* ======================================
   Schema de validação para o update do modelo Locacao
   ====================================== */

export const PgtoStatusEnum = z.enum(['PAGO', 'PENDENTE', 'ATRASO'])

export const UpdateLocacaoValidator = z
  .object({
    cpf_cliente: z
      .string()
      .transform(str => str.replace(/\D/g, ''))
      .refine(GeneralValidator.validateCpf, {
        message: 'CPF inválido',
      }),
    pgto_status: PgtoStatusEnum,
  })
  .strict()
