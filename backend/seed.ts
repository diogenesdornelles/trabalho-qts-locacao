import { z } from 'zod'
import { Funcao, PrismaClient } from './generated/prisma_client'
import DTOValidator from './src/validators/dto.validator'

import * as dotenv from 'dotenv'
import hashPassword from './src/utils/hashPwd.util'
import { CreateFuncionarioDTO } from './src/dtos/create/createFuncionario.dto'

dotenv.config()

const NOME = process.env.SUPER_USER_NOME
const PWD = process.env.SUPER_USER_PWD
const CPF = process.env.SUPER_USER_CPF

const prisma = new PrismaClient()

const funcionarios = [
  {
    cpf: CPF as string,
    nome: NOME as string,
    telefone: '1111111111',
    funcao: Funcao.GERENTE, // Use os valores do enum como string
    senha: PWD as string,
  }
]

const tiposBrinquedos = [
  {
    nome: "Ação",
  },
  {
    nome: "Tabuleiro",
  },
  {
    nome: "Inflável",
  },
  {
    nome: "Eletrônico",
  }
]

async function main() {
  try {
    // Criar funcionários
    console.log("Iniciando seed de funcionários...")
    const validator = new DTOValidator()

    for (const data of funcionarios) {
      try {
        const validatedData = validator.createFuncionario<CreateFuncionarioDTO>(data)
        validatedData.senha = await hashPassword(validatedData.senha)

        const gerente = await prisma.funcionario.create({
          data: {
            cpf: validatedData.cpf,
            telefone: validatedData.telefone,
            funcao: validatedData.funcao as Funcao,
            nome: validatedData.nome,
            senha: validatedData.senha,
          },
        })
        console.log(`Funcionário CPF ${gerente.cpf} foi criado com sucesso.`)
      } catch (err) {
        console.error(`Erro ao criar funcionário ${data.nome}:`, err)
      }
    }

    // Criar tipos de brinquedos
    console.log("\nIniciando seed de tipos de brinquedos...")
    for (const tipo of tiposBrinquedos) {
      try {
        const tipoCriado = await prisma.tipoBrinquedo.create({
          data: {
            nome: tipo.nome,
            ativo: true
          }
        })
        console.log(`Tipo de brinquedo "${tipoCriado.nome}" foi criado com sucesso.`)
      } catch (err) {
        console.error(`Erro ao criar tipo de brinquedo "${tipo.nome}":`, err)
      }
    }

    console.log("\nProcesso de seed concluído com sucesso!")
  } catch (error: unknown) {
    // Trata erros de validação do Zod
    if (error instanceof z.ZodError) {
      console.error('Erro de validação na criação:', error.errors)
      throw new Error(
        `Erro de validação: ${error.errors.map(err => err.message).join(', ')}`,
      )
    }
    if (error instanceof Error) {
      console.error('Erro de banco de dados:', error.message)
      throw new Error(`Erro de banco de dados: ${error.message}`)
    }
    throw new Error('Um erro desconhecido ocorreu durante o processo de seed.')
  }
}

main()
  .catch(e => {
    console.error('Erro fatal durante o processo de seed:', e)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })