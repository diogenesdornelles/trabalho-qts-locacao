import { BrinquedoLocado, Locacao } from '../../generated/prisma_client'

export interface LocacaoResponseComBrinquedosDTO extends Locacao {
  brinquedosLocados: BrinquedoLocado[]
}
