import { CreateBrinquedoDTO } from '../create/createBrinquedo.dto'

export type UpdateBrinquedoDTO = Partial<CreateBrinquedoDTO> & {
  ativo?: boolean
}
