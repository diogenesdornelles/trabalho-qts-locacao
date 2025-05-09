import { CreatePagamentoDTO } from '../create/createPagamento.dto'

export type UpdatePagamentoDTO = Partial<CreatePagamentoDTO> & {
  ativo?: true
}
