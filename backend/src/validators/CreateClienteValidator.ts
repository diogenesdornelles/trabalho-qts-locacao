import { z } from 'zod'
import GeneralValidator from './GeneralValidator'
import { dateSchema } from './dateSchema'

/* ================================
   Schema para validar criação do modelo Cliente
   ================================ */
export const CreateClienteValidator = z
  .object({
    cpf: z
      .string()
      .transform(str => str.replace(/\D/g, ''))
      .refine(GeneralValidator.validateCpf, {
        message: 'Invalid CPF format. Please provide a valid CPF.',
      }),
    nome: z.string().min(3).max(255),
    endereco: z.string().min(3).max(255),
    data_nascimento: dateSchema.refine(date => date <= new Date(), {
      message: 'Date must be less than equal to the current date',
    }),
    telefone: z
      .string()
      .transform(str => str.replace(/\D/g, ''))
      .refine(GeneralValidator.validatePhone, {
        message: 'Please provide a valid Phone. Only 10 or 11 digits',
      }),
  })
  .strict()
