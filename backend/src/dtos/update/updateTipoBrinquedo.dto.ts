import { CreateTipoBrinquedoDTO } from '../create/createTipoBrinquedo.dto'

export type UpdateTipoBrinquedoDTO = Partial<CreateTipoBrinquedoDTO> & {
  ativo?: boolean
}
