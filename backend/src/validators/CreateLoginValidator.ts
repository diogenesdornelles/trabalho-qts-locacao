import { z } from 'zod'
import GeneralValidator from './GeneralValidator'

/* ======================================
   Schema para o modelo Login
   ====================================== */
export const CreateLoginValidator = z
  .object({
    cpf: z
      .string()
      .transform(str => str.replace(/\D/g, ''))
      .refine(GeneralValidator.validateCpf, {
        message: 'Invalid CPF format. Please provide a valid CPF.',
      }),
    senha: z.string().refine(GeneralValidator.isValidPwd, {
      message: `
            // - At least 8 chars
            // - At least one lower char
            // - At least one upper char
            // - At least one digit
            // - At least one special char
        `,
    }),
  })
  .strict()
