export interface User {
  cpf: string;
  nome: string;
  funcao: string;
  token: string;
}

export interface Funcionario {
  cpf: string;
  nome: string;
  telefone: string;
  funcao: string;
  ativo: boolean;
}

export interface TipoBrinquedo {
  cod: string;
  nome: string;
  ativo: boolean;
}

export interface Brinquedo {
  cod: string;
  nome: string;
  tipo_brinquedo: string;
  marca: string;
  data_aquisicao: string;
  valor_locacao: number;
  tipoBrinquedo: TipoBrinquedo;
  ativo: boolean;
}

export interface Cliente {
  cpf: string;
  nome: string;
  endereco: string;
  data_nascimento: string;
  telefone: string;
  ativo: boolean;
}

export interface BrinquedoLocado {
  cod: string;
  valor_unitario: number;
  nome: string;
  cod_locacao: string;
  data_devolucao: string;
  cod_brinquedo: string;
  ativo: boolean;
}

export type SelectedToy = {
  valor_locacao: number;
  cod_brinquedo: string;
  quantidade: number;
  nome: string | undefined;
};

export interface Locacao {
  cod: string;
  data_hora: string;
  cpf_cliente: string;
  ativo: boolean;
  pgto_status: string;
}

export interface RentalInfo {
  cod: string;
  customerName: string;
  cpf: string;
  date: string;
  status: string;
}

export interface Pagamento {
  cpf_cliente: string;
  cod_locacao: string;
  valor_pagamento: number;
}
