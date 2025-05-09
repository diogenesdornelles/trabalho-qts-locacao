import { CreateLocacaoDTO } from '../create/createLocacao.dto'
import { PgtoStatus } from '../../../generated/prisma_client'

type CreateLocacaoDTOWithStatus = CreateLocacaoDTO & {
  pgto_status?: PgtoStatus
  ativo?: boolean
}

export type UpdateLocacaoDTO = Partial<CreateLocacaoDTOWithStatus>
