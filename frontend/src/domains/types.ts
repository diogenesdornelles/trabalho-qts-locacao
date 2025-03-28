export interface Funcionario {
  cpf: string;
  nome: string;
  funcao: string;
  token: string;
}

export interface TipoBrinquedo {
  cod: string;
  nome: string;
}

export interface Brinquedo {
  cod: string;
  nome: string;
  tipo_brinquedo: string;
  marca: string;
  data_aquisicao: string;
  valor_locacao: string;
  tipoBrinquedo: TipoBrinquedo;
}

export interface Cliente {
  cpf: string;
  nome: string;
  endereco: string;
  data_nascimento: string;
  telefone: string;
}

export interface BrinquedoLocado {
  cod_locacao: string;
  data_devolucao: string;
  cod_brinquedo: string;
}

export type SelectedToy = {
  valor_locacao: number;
  cod_brinquedo: string;
  quantidade: number;
  nome: string | undefined;
};

