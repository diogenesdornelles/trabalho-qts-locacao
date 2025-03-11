import { CreateFuncionarioDTO } from '../create/CreateFuncionarioDTO'

export type UpdateFuncionarioDTO = Partial<Omit<CreateFuncionarioDTO, 'cpf'>>
