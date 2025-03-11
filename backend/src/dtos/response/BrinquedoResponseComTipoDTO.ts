import { Brinquedo, TipoBrinquedo } from '../../../generated/prisma_client'

export interface BrinquedoResponseComTipoDTO extends Brinquedo {
  tipoBrinquedo: TipoBrinquedo
}
