import { CreateFuncionarioDTO } from '../create/createFuncionario.dto'

export type UpdateFuncionarioDTO = Partial<
  Omit<CreateFuncionarioDTO, 'cpf'>
> & {
  ativo?: boolean
}
