import { CreateClienteDTO } from '../create/create-cliente.dto'

export type UpdateClienteDTO = Partial<Omit<CreateClienteDTO, 'cpf'>>
