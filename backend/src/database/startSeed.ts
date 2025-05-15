import { z } from 'zod'

import { Funcao, PrismaClient } from '../../generated/prisma_client'
import { CreateFuncionarioDTO } from '../dtos/create/createFuncionario.dto'
import hashPassword from '../utils/hashPwd.util'
import DTOValidator from '../validators/dto.validator'
import { funcionarios, clientes, tiposBrinquedos } from './dataSeed'


const prisma = new PrismaClient()


async function funcionarioSeed(funcionarios: any[]) {
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
}


async function tipoBrinquedoSeed(tiposBrinquedos: any[]) {
    const validator = new DTOValidator()
    for (const data of tiposBrinquedos) {
      try {
        const validatedData = validator.createTipoBrinquedo(data)
        const tipoBrinquedo = await prisma.tipoBrinquedo.create({
          data: {
            nome: validatedData.nome,
            ativo: true
          }
        })
        console.log(`Tipo de brinquedo "${tipoBrinquedo.nome}" foi criado com sucesso.`)
      } catch (err) {
        console.error(`Erro ao criar tipo de brinquedo "${data.nome}":`, err)
      }
    }
  }

async function clienteSeed(clientes: any[]) {
    const validator = new DTOValidator()
    for (const data of clientes) {
        try {
        const validatedData = validator.createCliente(data)
        const cliente = await prisma.cliente.create({
            data: {
            cpf: validatedData.cpf,
            nome: validatedData.nome,
            endereco: validatedData.endereco,
            data_nascimento: validatedData.data_nascimento,
            telefone: validatedData.telefone
            }
        })
        console.log(`Cliente "${cliente.nome}" foi criado com sucesso.`)
        } catch (err) {
        console.error(`Erro ao criar cliente "${data.nome}":`, err)
        }
    }
}

async function startSeed() {
  try {

    console.log("Iniciando seed de funcionários...")
    await funcionarioSeed(funcionarios)

    console.log("\nIniciando seed de tipos de brinquedos...")
    await tipoBrinquedoSeed(tiposBrinquedos)

    console.log("\nIniciando seed de clientes...")
    await clienteSeed(clientes)
    
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

startSeed()
  .catch(e => {
    console.error('Erro fatal durante o processo de seed:', e)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })