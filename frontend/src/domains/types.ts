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
