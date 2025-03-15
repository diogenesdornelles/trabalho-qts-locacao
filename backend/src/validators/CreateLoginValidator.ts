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
            Ao menos 8 caracteres
            Ao menos um caracter minúsculo
            Ao meno um caracterer maiúsculo
            Ao menos um dígito
            Ao menos um caracterer especial 
        `,
    }),
  })
  .strict()
