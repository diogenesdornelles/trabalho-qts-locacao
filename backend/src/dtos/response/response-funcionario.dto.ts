import { Funcionario } from '../../../generated/prisma_client'

export interface ResponseFuncionarioDTO extends Omit<Funcionario, 'senha'> {}
