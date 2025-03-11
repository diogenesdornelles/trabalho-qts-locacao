import { z } from 'zod'
import GeneralValidator from './GeneralValidator'

/* ======================================
   Schema de validação para criação do modelo Locacao
   ====================================== */
export const CreateLocacaoValidator = z
  .object({
    cpf_cliente: z.string().refine(GeneralValidator.validateCpf, {
      message: 'Invalid CPF format. Please provide a valid CPF.',
    }),
  })
  .strict()
