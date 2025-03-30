import { Funcao } from '../../../generated/prisma_client'

/**
 * DTOs para o modelo Funcionario
 */
export interface CreateFuncionarioDTO {
  cpf: string
  nome: string
  telefone: string
  funcao: Funcao
  senha: string
}
