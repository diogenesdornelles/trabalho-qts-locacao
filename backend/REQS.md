# Modelos JSON para requisições

```json
{
  "brinquedos": [
    {
      "nome": "Brinquedo A",
      "tipo_brinquedo": "uuid-placeholder-1",
      "marca": "Marca A",
      "data_aquisicao": "2022-01-01",
      "valor_locacao": 10.50
    },
    {
      "nome": "Brinquedo B",
      "tipo_brinquedo": "uuid-placeholder-2",
      "marca": "Marca B",
      "data_aquisicao": "2022-02-01",
      "valor_locacao": 15.75
    },
    {
      "nome": "Brinquedo C",
      "tipo_brinquedo": "uuid-placeholder-3",
      "marca": "Marca C",
      "data_aquisicao": "2022-03-01",
      "valor_locacao": 12.00
    },
    {
      "nome": "Brinquedo D",
      "tipo_brinquedo": "uuid-placeholder-4",
      "marca": "Marca D",
      "data_aquisicao": "2022-04-01",
      "valor_locacao": 20.00
    },
    {
      "nome": "Brinquedo E",
      "tipo_brinquedo": "uuid-placeholder-5",
      "marca": "Marca E",
      "data_aquisicao": "2022-05-01",
      "valor_locacao": 18.50
    }
  ],
  "clientes": [
    {
      "cpf": "11111111111",
      "nome": "Cliente 1",
      "endereco": "Rua 1, 123",
      "data_nascimento": "1990-01-01",
      "telefone": "1111111111"
    },
    {
      "cpf": "22222222222",
      "nome": "Cliente 2",
      "endereco": "Rua 2, 456",
      "data_nascimento": "1991-02-02",
      "telefone": "2222222222"
    },
    {
      "cpf": "33333333333",
      "nome": "Cliente 3",
      "endereco": "Rua 3, 789",
      "data_nascimento": "1992-03-03",
      "telefone": "3333333333"
    },
    {
      "cpf": "44444444444",
      "nome": "Cliente 4",
      "endereco": "Rua 4, 101",
      "data_nascimento": "1993-04-04",
      "telefone": "4444444444"
    },
    {
      "cpf": "55555555555",
      "nome": "Cliente 5",
      "endereco": "Rua 5, 202",
      "data_nascimento": "1994-05-05",
      "telefone": "5555555555"
    }
  ],
  "funcionarios": [
    {
      "cpf": "66666666666",
      "nome": "Funcionario 1",
      "telefone": "6666666666",
      "funcao": "GERENTE",
      "senha": "senha123"
    },
    {
      "cpf": "77777777777",
      "nome": "Funcionario 2",
      "telefone": "7777777777",
      "funcao": "ALMOXARIFE",
      "senha": "senha456"
    },
    {
      "cpf": "88888888888",
      "nome": "Funcionario 3",
      "telefone": "8888888888",
      "funcao": "ANALISTA_CADASTRO",
      "senha": "senha789"
    },
    {
      "cpf": "99999999999",
      "nome": "Funcionario 4",
      "telefone": "9999999999",
      "funcao": "ANALISTA_LOCACAO",
      "senha": "senha321"
    },
    {
      "cpf": "00000000000",
      "nome": "Funcionario 5",
      "telefone": "0000000000",
      "funcao": "GERENTE",
      "senha": "senha654"
    }
  ],
  "locacoes": [
    { "cpf_cliente": "11111111111" },
    { "cpf_cliente": "22222222222" },
    { "cpf_cliente": "33333333333" },
    { "cpf_cliente": "44444444444" },
    { "cpf_cliente": "55555555555" }
  ],
  "pagamentos": [
    {
      "cpf_cliente": "11111111111",
      "cod_locacao": "locacao-placeholder-1",
      "valor_pagamento": 10.50,
      "valor_locacao": 10.50
    },
    {
      "cpf_cliente": "22222222222",
      "cod_locacao": "locacao-placeholder-2",
      "valor_pagamento": 15.75,
      "valor_locacao": 15.75
    },
    {
      "cpf_cliente": "33333333333",
      "cod_locacao": "locacao-placeholder-3",
      "valor_pagamento": 12.00,
      "valor_locacao": 12.00
    },
    {
      "cpf_cliente": "44444444444",
      "cod_locacao": "locacao-placeholder-4",
      "valor_pagamento": 20.00,
      "valor_locacao": 20.00
    },
    {
      "cpf_cliente": "55555555555",
      "cod_locacao": "locacao-placeholder-5",
      "valor_pagamento": 18.50,
      "valor_locacao": 18.50
    }
  ],
  "tiposBrinquedos": [
    { "nome": "Ação" },
    { "nome": "Puzzle" },
    { "nome": "Educativo" },
    { "nome": "Esporte" },
    { "nome": "Fantasia" }
  ],
  "brinquedosLocados": [
    {
      "valor_unitario": 10.50,
      "nome": "Brinquedo A",
      "cod_locacao": "locacao-placeholder-1",
      "cod_brinquedo": "brinquedo-placeholder-1",
      "data_devolucao": "2022-07-01"
    },
    {
      "valor_unitario": 15.75,
      "nome": "Brinquedo B",
      "cod_locacao": "locacao-placeholder-2",
      "cod_brinquedo": "brinquedo-placeholder-2",
      "data_devolucao": "2022-07-02"
    },
    {
      "valor_unitario": 12.00,
      "cod_locacao": "locacao-placeholder-3",
      "nome": "Brinquedo C",
      "cod_brinquedo": "brinquedo-placeholder-3",
      "data_devolucao": "2022-07-03"
    },
    {
      "valor_unitario": 20.00,
      "cod_locacao": "locacao-placeholder-4",
      "nome": "Brinquedo D",
      "cod_brinquedo": "brinquedo-placeholder-4",
      "data_devolucao": "2022-07-04"
    },
    {
      "valor_unitario": 18.50,
      "nome": "Brinquedo E",
      "cod_locacao": "locacao-placeholder-5",
      "cod_brinquedo": "brinquedo-placeholder-5",
      "data_devolucao": "2022-07-05"
    }
  ]
}
```
