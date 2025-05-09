import { CreateClienteDTO } from '../create/createCliente.dto'

export type UpdateClienteDTO = Partial<Omit<CreateClienteDTO, 'cpf'>> & {
  ativo?: boolean
}
