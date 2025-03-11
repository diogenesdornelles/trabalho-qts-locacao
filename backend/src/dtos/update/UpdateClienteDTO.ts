import { CreateClienteDTO } from '../create/CreateClienteDTO'

export type UpdateClienteDTO = Partial<Omit<CreateClienteDTO, 'cpf'>>
