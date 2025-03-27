import { CreateBrinquedoDTO } from '../create/create-brinquedo.dto'

export type UpdateBrinquedoDTO = Partial<CreateBrinquedoDTO> & {
  ativo?: boolean
}
