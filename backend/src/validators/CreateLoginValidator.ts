import { z } from 'zod'
import GeneralValidator from './GeneralValidator'

/* ======================================
   Schema para o modelo Login
   ====================================== */
export const CreateLoginValidator = z
  .object({
    cpf: z.string().refine(GeneralValidator.validateCpf, {
      message: 'Invalid CPF format. Please provide a valid CPF.',
    }),
    senha: z.string().refine(GeneralValidator.isValidPwd, {
      message: `
            // - Pelo menos 8 caracteres
            // - Pelo menos uma letra minúscula
            // - Pelo menos uma letra maiúscula
            // - Pelo menos um dígito
            // - Pelo menos um caractere especial
        `,
    }),
  })
  .strict()
