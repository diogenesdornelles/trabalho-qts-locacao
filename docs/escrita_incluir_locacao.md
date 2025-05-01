# Incluir Locações

| **Nome do caso de uso**         | Incluir locações                                                              |
|---------------------------------|:-------------------------------------------------------------------------------:|
| **Escopo**                      | Permite incluir informações de locações                                       |
| **Ator(es)**                    | Agente de locação                                                           |
| **Interessados e interesses**   | Agente de locação e Gerente: controle de dados sobre locações                           |
| **Pré-condição**                | Estar logado                                                                  |
| **Pós-condição**                | Que as informações de locação sejam incluídas e alteradas com sucesso           |

## Fluxo Principal

1. **Agente de locação** clica na opção *Incluir locação*.
2. **Sistema** solicita o preenchimento do campo **CPF**.
3. **Agente de locação** informa o CPF.
4. **Sistema** exibe uma lista de clientes ativos compatíveis.
    - Se **CPF não corresponde a cliente cadastrado ou ativo**:
      1. Exibe mensagem de erro.
      2. Retorna ao **passo 2**.
5. **Agente de locação** seleciona o cliente desejado.
6. **Sistema** solicita o preenchimento do campo **Nome do Brinquedo**.
7. **Agente de locação** informa o nome do brinquedo.
8. **Sistema** exibe uma lista com brinquedos ativos compatíveis.
    - Se **Nome não corresponde a brinquedo cadastrado ou ativo**:
      1. Exibe mensagem de erro.
      2. Retorna ao **passo 6**.
9. **Agente de locação** seleciona o brinquedo desejado.
10. **Sistema** mostra a data de devolução como *Data atual + 1*, o nome do brinquedo e o valor unitário.
     **Agente de locação repete passos 6 a 10 enquanto for solicitada a locação de brinquedos pelo cliente**
11. **Sistema** calcula o valor total da locação.
    - Se nenhum brinquedo for selecionado:
      1. Exibe mensagem de erro *É necessário selecionar pelo menos um brinquedo para concluir a locação*.
      2. Retorna ao **passo 6**.
12. **Sistema** registra a data e hora atual da transação.
13. **Sistema** define o status do pagamento como *pendente* e status do item como `ativo=true`.
14. **Sistema** gera um código único para a locação.
15. **Sistema** salva os dados da locação.
    - Se ocorre erro ao salvar locação:
      1. Exibe mensagem de erro *Erro ao salvar locação*.
      2. Retorna ao **passo 1**.
16. **Sistema** exibe a mensagem: *Locação salva com sucesso*.
17. **Sistema** registra todos os *brinquedos locados*, com o respectivo código de locação.
    - Se ocorre erro ao salvar brinquedos locados:
      1. Exibe mensagem de erro *Erro ao salvar brinquedos locados*.
      2. Retorna ao **passo 1**.
18. **Sistema** exibe a mensagem: *Brinquedos locados salvos com sucesso*.
