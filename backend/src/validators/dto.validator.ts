import { z } from 'zod'
import GeneralValidator from './general.validator'

export default class DTOValidator {
  /* 
      Definindo os esquemas (schemas) como propriedades privadas
      para cada tipo de validação.
  
      Para usar no frontend, basta fazer as importações e usar como na camada controller
    */

  private readonly dateSchema = z.preprocess(arg => {
    if (typeof arg === 'string' || arg instanceof Date) {
      const d = new Date(arg)
      if (!isNaN(d.getTime())) return d
    }
    return undefined
  }, z.date())

  private readonly createBrinquedoSchema = z
    .object({
      nome: z
        .string()
        .min(3, 'Nome precisa ter ao menos 3 caracteres')
        .max(255, 'Nome pode ter no máximo 255 caracteres'),
      // Chave ajustada para corresponder ao Prisma (tipo_brinquedo)
      tipo_brinquedo: z
        .string()
        .uuid('Deve ser informado UUID válido de tipo brinquedo'),
      marca: z
        .string()
        .min(3, 'Marca deve ter no mínimo 3 caracteres')
        .max(255, 'Marca deve ter no máximo 255 caracteres'),
      data_aquisicao: this.dateSchema.refine(date => date <= new Date(), {
        message: 'Data de aquisição deve ser menor ou igual a data atual',
      }),
      valor_locacao: z
        .number({ coerce: true })
        .gt(0, 'Valor mínimo de compra deve ser R$ 0,01')
        .transform(num => Math.round(num * 100) / 100),
    })
    .strict()

  private readonly createBrinquedoLocadoSchema = z
    .object({
      cod_locacao: z.string().uuid('Deve informar UUID de locação válido'),
      cod_brinquedo: z.string().uuid('Deve informar UUID de brinquedo válido'),
    })
    .strict()

  private readonly createClienteSchema = z
    .object({
      cpf: z
        .string()
        .transform(str => str.replace(/\D/g, ''))
        .refine(GeneralValidator.validateCpf, {
          message: 'CPF inválido',
        }),
      nome: z
        .string()
        .min(3, 'Nome deve ter no mínimo 3 caracteres')
        .max(255, 'Nome pode ter no máximo 255 caracteres'),
      endereco: z
        .string()
        .min(3, 'Endereço deve ter no mínimo 3 caracteres')
        .max(255, 'Endereço deve ter no máximo 255 caracteres'),
      data_nascimento: this.dateSchema.refine(date => date <= new Date(), {
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

  private readonly FuncaoEnum = z.enum([
    'GERENTE',
    'AGENTE_LOCACAO',
    'ANALISTA_CADASTRO',
    'ALMOXARIFE',
    'CAIXA',
  ])

  private readonly createFuncionarioSchema = z
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
        .max(255, 'Nome deve ter no máximo 255 caracteres'),
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
            Ao menos um caracter maiúsculo
            Ao menos um dígito
            Ao menos um caracter especial 
        `,
      }),
      funcao: this.FuncaoEnum,
    })
    .strict()

  private readonly createLocacaoSchema = z
    .object({
      cpf_cliente: z
        .string()
        .transform(str => str.replace(/\D/g, ''))
        .refine(GeneralValidator.validateCpf, {
          message: 'CPF inválido.',
        }),
    })
    .strict()

  private readonly createLoginSchema = z
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
            Ao menos um caracter maiúsculo
            Ao menos um dígito
            Ao menos um caracter especial 
        `,
      }),
    })
    .strict()

  private readonly createTipoBrinquedoSchema = z
    .object({
      nome: z
        .string()
        .min(3, 'Nome deve ter no mínimo 3 caracteres')
        .max(255, 'Nome deve ter no máximo 255 caracteres'),
    })
    .strict()

  // Esquemas de atualização
  private readonly updateBrinquedoLocadoSchema =
    this.createBrinquedoLocadoSchema.partial().extend({
      ativo: z.boolean().optional(),
    })
  private readonly updateBrinquedoSchema = this.createBrinquedoSchema
    .partial()
    .extend({
      ativo: z.boolean().optional(),
    })
  private readonly updateClienteSchema = this.createClienteSchema
    .omit({ cpf: true })
    .partial()
    .extend({
      ativo: z.boolean().optional(),
    })
  private readonly updateFuncionarioSchema = this.createFuncionarioSchema
    .omit({ cpf: true })
    .partial()
    .extend({
      ativo: z.boolean().optional(),
    })
  private readonly PgtoStatusEnum = z.enum(['PAGO', 'PENDENTE', 'ATRASO'])
  private readonly updateLocacaoSchema = z
    .object({
      cpf_cliente: z
        .string()
        .transform(str => str.replace(/\D/g, ''))
        .refine(GeneralValidator.validateCpf, {
          message: 'CPF inválido',
        }),
      pgto_status: this.PgtoStatusEnum,
      ativo: z.boolean().optional(),
    })
    .strict()

  private readonly updateTipoBrinquedoSchema = this.createTipoBrinquedoSchema
    .partial()
    .extend({
      ativo: z.boolean().optional(),
    })

  /*
      Métodos estáticos para validação, que recebem o objeto de entrada,
      executam o parse e retornam o objeto validado ou lançam erros caso haja divergências.
    */
  public createBrinquedo<T>(obj: T) {
    return this.createBrinquedoSchema.parse(obj)
  }

  public createBrinquedoLocado<T>(obj: T) {
    return this.createBrinquedoLocadoSchema.parse(obj)
  }

  public createCliente<T>(obj: T) {
    return this.createClienteSchema.parse(obj)
  }

  public createFuncionario<T>(obj: T) {
    return this.createFuncionarioSchema.parse(obj)
  }

  public createLocacao<T>(obj: T) {
    return this.createLocacaoSchema.parse(obj)
  }

  public createLogin<T>(obj: T) {
    return this.createLoginSchema.parse(obj)
  }

  public createTipoBrinquedo<T>(obj: T) {
    return this.createTipoBrinquedoSchema.parse(obj)
  }

  public updateBrinquedoLocado<T>(obj: T) {
    return this.updateBrinquedoLocadoSchema.parse(obj)
  }

  public updateBrinquedo<T>(obj: T) {
    return this.updateBrinquedoSchema.parse(obj)
  }

  public updateCliente<T>(obj: T) {
    return this.updateClienteSchema.parse(obj)
  }

  public updateFuncionario<T>(obj: T) {
    return this.updateFuncionarioSchema.parse(obj)
  }

  public updateLocacao<T>(obj: T) {
    return this.updateLocacaoSchema.parse(obj)
  }

  public updateTipoBrinquedo<T>(obj: T) {
    return this.updateTipoBrinquedoSchema.parse(obj)
  }
}
