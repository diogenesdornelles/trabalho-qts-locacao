import { Funcao } from '../../../generated/prisma_client'

export interface ResponseTokenDTO {
  funcionario: {
    cpf: string
    nome: string
    funcao: Funcao
  }
  token: string
}
