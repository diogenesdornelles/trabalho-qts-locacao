import { CreateFuncionarioDTO } from '../create/create-funcionario.dto'

export type UpdateFuncionarioDTO = Partial<Omit<CreateFuncionarioDTO, 'cpf'>>
