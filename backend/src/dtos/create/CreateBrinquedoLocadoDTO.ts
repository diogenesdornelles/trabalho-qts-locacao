/**
 * DTOs para o modelo BrinquedoLocado
 */
export interface CreateBrinquedoLocadoDTO {
  cod_locacao: string // UUID da Locação
  data_devolucao: Date
  cod_brinquedo: string // UUID do Brinquedo
}
