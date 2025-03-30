import { JwtPayload } from 'jsonwebtoken'
import { Funcao } from '../../generated/prisma_client'

export interface AuthPayloadInterface extends JwtPayload {
  cpf: string
  nome: string
  funcao: Funcao
}
