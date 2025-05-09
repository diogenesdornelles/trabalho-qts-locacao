import { CreateBrinquedoLocadoDTO } from '../create/createBrinquedoLocado.dto'

export type UpdateBrinquedoLocadoDTO = Partial<CreateBrinquedoLocadoDTO> & {
  ativo?: boolean
}
