/**
 * DTOs para o modelo Pagamento
 */
export interface CreatePagamentoDTO {
  cpf_cliente: string // CPF do Cliente (11 caracteres)
  cod_locacao: string // UUID da Locação (único)
  valor_pagamento: number
}
