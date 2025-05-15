import * as dotenv from 'dotenv'
import { Funcao } from '../../generated/prisma_client'

dotenv.config()

const NOME_USER_NOME = process.env.SUPER_USER_NOME
const PWD_USER_PWD = process.env.SUPER_USER_PWD
const CPF_USER_CPF = process.env.SUPER_USER_CPF

export const funcionarios = [
  {
    cpf: CPF_USER_CPF as string,
    nome: NOME_USER_NOME as string,
    telefone: '1111111111',
    funcao: Funcao.GERENTE, // Use os valores do enum como string
    senha: PWD_USER_PWD as string,
  },
  {
    cpf: "49525227090",
    nome: "Jose",
    telefone: "6666666666",
    funcao: Funcao.GERENTE,
    senha: "#123ABCabd"
  },
  {
    cpf: "42304018092",
    nome: "Diogenes",
    telefone: "1199111111",
    funcao: Funcao.CAIXA,
    senha: "#123ABCabd"
  },
  {
    cpf: "36929168092",
    nome: "Mario",
    telefone: "7777777777",
    funcao: Funcao.ALMOXARIFE,
    senha: "#123ABCabd"
  },
  {
    cpf: "89824500090",
    nome: "Claudir",
    telefone: "88888888888",
    funcao: Funcao.ANALISTA_CADASTRO,
    senha: "#123ABCabd"
  },
  {
    cpf: "95699820043",
    nome: "Estevao",
    telefone: "99999999999",
    funcao: Funcao.AGENTE_LOCACAO,
    senha: "#123ABCabd"
  },
  {
    cpf: "41040841074",
    nome: "Kauan",
    telefone: "0000000000",
    funcao: Funcao.CAIXA,
    senha: "#123ABCabd"
  }
]

export const clientes = [
    {
        cpf: "15835542038",
        nome: "Marta",
        endereco: "Rua 4, 101",
        data_nascimento: "1993-04-04",
        telefone: "4444444444"
      },
      {
        cpf: "55480231014",
        nome: "João",
        endereco: "Rua 5, 202",
        data_nascimento: "1994-05-05",
        telefone: "5555555555"
      },
      {
        cpf: "68127521000",
        nome: "Maria",
        endereco: "Rua 2, 456",
        data_nascimento: "1991-02-02T00:00:00.000Z",
        telefone: "2222222222"
      }
]

export const tiposBrinquedos = [
  {
    nome: "Ação",
  },
  {
    nome: "Tabuleiro",
  },
  {
    nome: "Inflável",
  },
  {
    nome: "Eletrônico",
  }
]

export const brinquedos = [
  {
    "nome": "Cama elástica",
    "tipo_brinquedo": "uuid-placeholder-1",
    "marca": "Marca A",
    "data_aquisicao": "2022-01-01",
    "valor_locacao": 200.0
  },
  {
    "nome": "Bate-bate",
    "tipo_brinquedo": "uuid-placeholder-2",
    "marca": "Marca B",
    "data_aquisicao": "2022-02-01",
    "valor_locacao": 150.0
  },
  {
    "nome": "Piscina de bolinhas",
    "tipo_brinquedo": "uuid-placeholder-3",
    "marca": "Marca C",
    "data_aquisicao": "2022-03-01",
    "valor_locacao": 125.0
  },
  {
    "nome": "Pula-pula",
    "tipo_brinquedo": "uuid-placeholder-4",
    "marca": "Marca D",
    "data_aquisicao": "2022-04-01",
    "valor_locacao": 150.0
  },
  {
    "nome": "Castelo inflável",
    "tipo_brinquedo": "uuid-placeholder-5",
    "marca": "Marca E",
    "data_aquisicao": "2022-05-01",
    "valor_locacao": 200.0
  },
  {
    "nome": "Fantasia da Moana",
    "tipo_brinquedo": "uuid-placeholder-5",
    "marca": "Marca F",
    "data_aquisicao": "2023-05-01",
    "valor_locacao": 50.0
  },
  {
    "nome": "Fantasia do Hulk",
    "tipo_brinquedo": "uuid-placeholder-5",
    "marca": "Marca G",
    "data_aquisicao": "2023-08-27",
    "valor_locacao": 50.0
  }
] 