import { z } from 'zod'
import GeneralValidator from './GeneralValidator'

/* ======================================
   Schema de validação para o modelo criação de Funcionario
   ====================================== */
export const FuncaoEnum = z.enum([
  'GERENTE',
  'ANALISTA_LOCACAO',
  'ANALISTA_CADASTRO',
  'ALMOXARIFE',
  'CAIXA',
])
export const CreateFuncionarioValidator = z
  .object({
    cpf: z.string().refine(GeneralValidator.validateCpf, {
      message: 'Invalid CPF format. Please provide a valid CPF.',
    }),
    nome: z.string().min(3).max(255),
    telefone: z.string().refine(GeneralValidator.validatePhone, {
      message: 'Please provide a valid Phone.',
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
    funcao: FuncaoEnum,
  })
  .strict()
