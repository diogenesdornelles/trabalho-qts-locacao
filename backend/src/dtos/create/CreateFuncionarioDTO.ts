/**
 * DTOs para o modelo Funcionario
 */
export interface CreateFuncionarioDTO {
  cpf: string // Ex: "12345678901"
  nome: string
  telefone: string
  funcao:
    | 'GERENTE'
    | 'CAIXA'
    | 'ALMOXARIFE'
    | 'AGENTE_LOCACAO'
    | 'ANALISTA_CADASTRO'
  senha: string
}
