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
        message: 'Forneça um CPF válido.',
      }),
    nome: z
      .string()
      .min(3, 'Nome deve ter no mínimo 3 caracteres')
      .max(255, 'Nome deve ter no máximo 3 caracteres'),
    telefone: z
      .string()
      .transform(str => str.replace(/\D/g, ''))
      .refine(GeneralValidator.validatePhone, {
        message: 'Telefone deve ter entre 10 e 11 dígitos',
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
    funcao: FuncaoEnum,
  })
  .strict()
