import { CreateLocacaoDTO } from '../create/CreateLocacaoDTO'

type PgtoStatus = 'PENDENTE' | 'PAGO' | 'ATRASO'

type CreateLocacaoDTOWithStatus = CreateLocacaoDTO & {
  pgto_status?: PgtoStatus
}

export type UpdateLocacaoDTO = Partial<CreateLocacaoDTOWithStatus>
