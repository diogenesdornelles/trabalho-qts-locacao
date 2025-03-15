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
        message: 'CPF inválido',
      }),
    nome: z.string().min(3).max(255),
    endereco: z.string().min(3).max(255),
    data_nascimento: dateSchema.refine(date => date <= new Date(), {
      message: 'Data de nascimento deve ser menor ou igual a atual',
    }),
    telefone: z
      .string()
      .transform(str => str.replace(/\D/g, ''))
      .refine(GeneralValidator.validatePhone, {
        message: 'Forneça um telefone entre 10 e 11 dígitos',
      }),
  })
  .strict()
