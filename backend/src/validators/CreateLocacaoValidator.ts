import { z } from 'zod'
import GeneralValidator from './GeneralValidator'

/* ======================================
   Schema de validação para criação do modelo Locacao
   ====================================== */
export const CreateLocacaoValidator = z
  .object({
    cpf_cliente: z
      .string()
      .transform(str => str.replace(/\D/g, ''))
      .refine(GeneralValidator.validateCpf, {
        message: 'CPF inválido.',
      }),
  })
  .strict()
