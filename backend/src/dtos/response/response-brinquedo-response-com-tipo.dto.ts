import { Brinquedo, TipoBrinquedo } from '../../../generated/prisma_client'

export interface ResponseBrinquedoComTipoDTO extends Brinquedo {
  tipoBrinquedo: TipoBrinquedo
}
