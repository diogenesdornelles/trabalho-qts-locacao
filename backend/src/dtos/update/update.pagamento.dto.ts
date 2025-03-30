import { CreatePagamentoDTO } from '../create/create-pagamento.dto'

export type UpdatePagamentoDTO = Partial<CreatePagamentoDTO> & {
  ativo?: true
}
