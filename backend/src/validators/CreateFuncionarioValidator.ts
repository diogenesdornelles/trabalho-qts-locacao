import { z } from 'zod'
import GeneralValidator from './GeneralValidator'

/* ======================================
   Schema de validação para o modelo criação de Funcionario
   ====================================== */
export const FuncaoEnum = z.enum([
  'GERENTE',
  'AGENTE_LOCACAO',
  'ANALISTA_CADASTRO',
  'ALMOXARIFE',
  'CAIXA',
])
export const CreateFuncionarioValidator = z
  .object({
    cpf: z
      .string()
      .transform(str => str.replace(/\D/g, ''))
      .refine(GeneralValidator.validateCpf, {
        message: 'Invalid CPF format. Please provide a valid CPF.',
      }),
    nome: z.string().min(3).max(255),
    telefone: z
      .string()
      .transform(str => str.replace(/\D/g, ''))
      .refine(GeneralValidator.validatePhone, {
        message: 'Please provide a valid Phone.',
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
    funcao: FuncaoEnum,
  })
  .strict()
