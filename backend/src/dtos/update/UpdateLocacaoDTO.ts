import { CreateLocacaoDTO } from '../create/CreateLocacaoDTO'

type PgtoStatus = 'PENDENTE' | 'PAGO' | 'ATRASO'

type CreateLocacaoDTOWithStatus = CreateLocacaoDTO & { status?: PgtoStatus }

export type UpdateLocacaoDTO = Partial<CreateLocacaoDTOWithStatus>