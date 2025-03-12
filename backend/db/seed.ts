import { z } from 'zod'
import { Funcao, PrismaClient } from '../generated/prisma_client'
import { FuncionarioSchema } from '../src/schemas/schemas'
import hashPassword from '../src/utils/hashPwd'
import * as dotenv from 'dotenv'

dotenv.config()

const NOME = process.env.SUPER_USER_NOME
const PWD = process.env.SUPER_USER_PWD
const CPF = process.env.SUPER_USER_CPF

const prisma = new PrismaClient()

async function main() {
  try {
    const data = {
      cpf: CPF,
      nome: NOME,
      telefone: '1111111111',
      funcao: Funcao.GERENTE, // Use os valores do enum como string
      senha: PWD,
    }

    const validatedData = FuncionarioSchema.parse(data)

    validatedData.senha = await hashPassword(validatedData.senha)

    await prisma.funcionario.create({
      data: {
        cpf: validatedData.cpf,
        telefone: validatedData.telefone,
        funcao: validatedData.funcao as Funcao,
        nome: validatedData.nome,
        senha: validatedData.senha,
      },
    })
  } catch (error: unknown) {
    // Trata erros de validação do Zod
    if (error instanceof z.ZodError) {
      console.error('Validation error on create employee:', error.errors)
      throw new Error(
        `Validation error: ${error.errors.map(err => err.message).join(', ')}`,
      )
    }
    // Trata erros genéricos (incluindo erros do Prisma)
    if (error instanceof Error) {
      console.error('Database error on create employee:', error.message)
      throw new Error(`Database error: ${error.message}`)
    }
    throw new Error('An unknown error occurred while saving employee.')
  }
}

main()
  .catch(e => {
    console.error(e)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
