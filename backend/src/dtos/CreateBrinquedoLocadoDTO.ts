/**
 * DTOs para o modelo BrinquedoLocado
 */
export interface CreateBrinquedoLocadoDTO {
  valor_unitario: number
  nome: string
  cod_locacao: string // UUID da Locação
  data_devolucao: Date
  cod_brinquedo: string // UUID do Brinquedo
}
