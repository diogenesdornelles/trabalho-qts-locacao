/**
 * DTOs para o modelo Brinquedo
 */
export interface CreateBrinquedoDTO {
  nome: string
  tipo_brinquedo: string // UUID do TipoBrinquedo
  marca: string
  data_aquisicao: Date
  valor_locacao: number // Representa o valor da locação
}
