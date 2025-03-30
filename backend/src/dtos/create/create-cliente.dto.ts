/**
 * DTOs para o modelo Cliente
 */
export interface CreateClienteDTO {
  cpf: string // Ex: "12345678901"
  nome: string
  endereco: string
  data_nascimento: Date
  telefone: string
}
