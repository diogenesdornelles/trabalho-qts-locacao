import { CreateLocacaoDTO } from '../create/create-locacao.dto'
import { PgtoStatus } from '../../../generated/prisma_client'

type CreateLocacaoDTOWithStatus = CreateLocacaoDTO & {
  pgto_status?: PgtoStatus
  ativo?: boolean
}

export type UpdateLocacaoDTO = Partial<CreateLocacaoDTOWithStatus>
