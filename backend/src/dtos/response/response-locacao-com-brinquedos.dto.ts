import { BrinquedoLocado, Locacao } from '../../../generated/prisma_client'

export interface ResponseLocacaoComBrinquedosDTO extends Locacao {
  brinquedosLocados: BrinquedoLocado[]
}
