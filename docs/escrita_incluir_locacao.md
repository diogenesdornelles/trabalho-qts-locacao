# Incluir Locações

| **Nome do caso de uso**       |                           Incluir locações                            |
| ----------------------------- | :-------------------------------------------------------------------: |
| **Escopo**                    |                Permite incluir informações de locações                |
| **Ator(es)**                  |                           Agente de locação                           |
| **Interessados e interesses** |     Agente de locação e Gerente: controle de dados sobre locações     |
| **Pré-condição**              |                             Estar logado                              |
| **Pós-condição**              | Que as informações de locação sejam incluídas e alteradas com sucesso |

## Fluxo Principal

1. **Agente de locação** clica na opção *Incluir locação*.
2. **Sistema** mostra a data de locação como *Data atual*, e a data de devolução como *Data atual + 1*.
3. **Sistema** solicita o preenchimento do campo **CPF**.
4. **Agente de locação** informa o CPF.
5. **Sistema** valida campo.
   - Se **CPF não corresponde a cliente cadastrado ou ativo**:
     1. Exibe mensagem de erro.
     2. Retorna ao **passo 2**.
6. **Agente de locação** clica na opção *Adicionar* para selecionar brinquedos a serem locados.
7. **Sistema** abre janela de seleção de brinquedos.
8. **Agente de locação** seleciona o tipo de brinquedo desejado.
9. **Sistema** busca e mostra brinquedos do tipo escolhido.
10. **Agente de locação** escolhe o brinquedo.
11. **Sistema** mostra valor de locação do brinquedo.
12. **Sistema** valida o valor unitário.
    - Se **valor do brinquedo for zero, negativo ou inválido**:
     1. Exibe mensagem de erro: *Valor do brinquedo inválido. Selecione outro item*.
     2. Retorna ao **passo 6**.
13. **Agente de locação** confirma ou cancela a operação.
    - Se **cancela operação**:
      1. **Sistema** fecha janela de seleção de brinquedos.
    - Se **confirma operação**:
      1. **Sistema** fecha janela de seleção e adiciona o brinquedo à tabela de brinquedos locados.
14. **Agente de locação** repete os passos 6 a 13 enquanto o cliente solicitar a locação de brinquedos.
15. **Sistema** calcula e mostra o valor total da locação.
16. Se **nenhum brinquedo for selecionado**:
    1. Exibe mensagem de erro: *É necessário selecionar pelo menos um brinquedo para concluir a locação*.
    2. Retorna ao **passo 6**.
17. **Sistema** define o status do pagamento como *pendente*.
18. **Sistema** gera um código único para a locação.
19. **Sistema** salva os dados da locação.
    - Se **ocorre erro ao salvar locação**:
      1. Exibe mensagem de erro: *Erro ao salvar locação. Verifique sua conexão e tente novamente*.
      2. Retorna ao **passo 1**.
20. **Sistema** exibe a mensagem: *Locação salva com sucesso*.
21. **Sistema** registra todos os *brinquedos locados*, com o respectivo código de locação.
    - Se **ocorre erro ao salvar brinquedos locados**:
      1. Exibe mensagem de erro: *Erro ao salvar brinquedos locados. A locação foi registrada, mas os itens precisam ser vinculados manualmente*.
      2. Notifica o agente e recomenda contato com o suporte técnico.
22. **Sistema** exibe a mensagem: *Brinquedos locados salvos com sucesso*.
