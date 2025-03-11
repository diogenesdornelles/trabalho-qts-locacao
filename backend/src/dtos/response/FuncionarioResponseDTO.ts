import { Funcionario } from '../../../generated/prisma_client'

export interface FuncionarioResponseDTO extends Omit<Funcionario, 'senha'> {}
