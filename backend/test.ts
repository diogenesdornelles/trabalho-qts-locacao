import { Funcao, Funcionario, PrismaClient } from './generated/prisma_client'

const prisma = new PrismaClient()

async function main() {
  const funcionario = await prisma.funcionario.create({
    data: {
      cpf: '12545678984',
      nome: 'João da Silva',
      telefone: '11999999999',
      funcao: Funcao.GERENTE, // Use os valores do enum como string
      senha: 'minhaSenha',
    },
  })

  const funcionarios = await prisma.funcionario.findMany()
  funcionarios.forEach((func: Funcionario) => {
    console.log(func)
  })
}

main()
  .catch(e => {
    console.error(e)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
