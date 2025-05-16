# Casos de testes do Caso de Uso Incluir Locação de Brinquedos

## Caso de uso: Incluir Locação de Brinquedos

![Caso de uso](img_caso_uso.png "Diagrama de Caso de Uso")

A tabela a seguir contém o fluxo básico e alguns fluxos alternativos para o caso de uso Incluir Locação do diagrama acima:

Pré-condição: Agente de locação estar autenticado no sistema.

## Cenários de Teste

| **Cenário** | **Descrição**                                         | **Fluxo 1**                | **Fluxo 2**                |
|-------------|-------------------------------------------------------|----------------------------|----------------------------|
| **1**       | Inclusão de uma locação com sucesso                   | Fluxo principal            | -                          |
| **2**       | Cliente não encontrado                                | Fluxo alternativo (passo 2) | Retorna ao passo 1         |
| **3**       | Brinquedo não encontrado                              | Fluxo alternativo (passo 6) | Retorna ao passo 5         |
| **4**       | Nenhum brinquedo selecionado                          | Fluxo alternativo (passo 10) | Retorna ao passo 5         |
| **5**       | Erro ao salvar a locação                              | Fluxo alternativo (passo 12) | Retorna ao passo 1         |
| **6**       | Erro ao salvar os brinquedos locados                  | Fluxo alternativo (passo 14) | Exibe mensagem e registra log |
| **7**       | Locação com múltiplos brinquedos                      | Fluxo principal            | Repete passos 5 a 9        |
| **8**       | Mensagem com data de devolução, nome e valor unitário | Fluxo principal            | -                          |
| **9**       | Cálculo correto do valor total da locação             | Fluxo principal            | -                          |
| **10**      | Valor do brinquedo inválido                           | Fluxo alternativo (passo 6) | Retorna ao passo 5         |
| **11**      | Cancelamento antes da confirmação final               | Fluxo alternativo (passo 11) | Retorna ao menu inicial    |

---

## Tabela de Decisão de Casos de Teste

| **ID CT** | **Cenário/Condição**                       | **CPF**             | **Nome do Brinquedo**     | **Resultado Esperado**                                                           |
|-----------|--------------------------------------------|---------------------|----------------------------|----------------------------------------------------------------------------------|
| **CT01**  | Inclusão de uma locação com sucesso        | Válido e ativo      | Válido e ativo             | Locação salva com sucesso, brinquedos registrados.                              |
| **CT02**  | Cliente não encontrado                     | Inválido ou inativo | -                          | Mensagem de erro: *Cliente não encontrado ou inativo*.                          |
| **CT03**  | Brinquedo não encontrado                   | Válido e ativo      | Inválido ou inativo        | Mensagem de erro: *Brinquedo não encontrado ou inativo*.                        |
| **CT04**  | Nenhum brinquedo selecionado               | Válido e ativo      | Não informado              | Mensagem de erro: *É necessário selecionar pelo menos um brinquedo*.            |
| **CT05**  | Erro ao salvar a locação                   | Válido e ativo      | Válido e ativo             | Mensagem de erro: *Erro ao salvar a locação. Tente novamente mais tarde.*       |
| **CT06**  | Erro ao salvar os brinquedos locados       | Válido e ativo      | Válido e ativo             | Mensagem de erro: *Erro ao salvar os brinquedos locados. Tente novamente.*      |
| **CT07**  | Locação com múltiplos brinquedos           | Válido e ativo      | Vários válidos e ativos    | Locação salva com sucesso, todos os brinquedos registrados.                     |
| **CT08**  | Data de devolução exibida corretamente      | Válido e ativo      | Válido e ativo             | Mensagem com data de devolução, nome e valor unitário exibida corretamente.     |
| **CT09**  | Valor total calculado corretamente         | Válido e ativo      | Vários válidos e ativos    | Valor total correto exibido, locação salva.                                     |
| **CT10**  | Valor do brinquedo inválido                | Válido e ativo      | Valor 0 ou negativo        | Mensagem de erro: *Valor do brinquedo inválido. Selecione outro item*.          |
| **CT11**  | Cancelamento antes da confirmação final    | Válido e ativo      | Qualquer                   | Operação cancelada, sistema retorna ao menu inicial, nenhum dado salvo.         |

---

## Matriz de Implementação do Caso de Teste

| **ID CT** | **Cenário/Condição**                     | **CPF**             | **Nome do Brinquedo**              | **Resultado Esperado**                                                              |
|-----------|------------------------------------------|---------------------|-----------------------------------|-------------------------------------------------------------------------------------|
| **CT01**  | Inclusão de uma locação com sucesso      | 432.137.300-09      | Cama Elástica                     | Locação salva com sucesso, brinquedos registrados.                                 |
| **CT02**  | Cliente não encontrado / CPF inválido    | 888.888.888-88      | -                                 | Mensagem: *Cliente não encontrado ou inativo* e retorno ao passo 1                 |
| **CT02**  | Cliente não encontrado / Cliente inativo | 949.166.830-72      | -                                 | Mensagem: *Cliente não encontrado ou inativo* e retorno ao passo 1                 |
| **CT02**  | Cliente não encontrado / Inexistente     | 558.805.460-12      | -                                 | Mensagem: *Cliente não encontrado ou inativo* e retorno ao passo 1                 |
| **CT03**  | Brinquedo não encontrado / Inexistente   | 432.137.300-09      | Brinquedo Desconhecido            | Mensagem: *Brinquedo não encontrado ou inativo* e retorno ao passo 5              |
| **CT03**  | Brinquedo não encontrado / Inativo       | 432.137.300-09      | Brinquedo Inativado               | Mensagem: *Brinquedo não encontrado ou inativo* e retorno ao passo 5              |
| **CT04**  | Nenhum brinquedo selecionado             | 432.137.300-09      | Nenhum informado                  | Mensagem: *É necessário selecionar pelo menos um brinquedo* e retorno ao passo 5  |
| **CT05**  | Erro ao salvar a locação                 | 432.137.300-09      | Cama Elástica                     | Mensagem: *Erro ao salvar a locação. Tente novamente mais tarde* e volta ao início |
| **CT06**  | Erro ao salvar brinquedos locados        | 432.137.300-09      | Cama Elástica                     | Mensagem: *Erro ao salvar os brinquedos locados. Tente novamente*                 |
| **CT07**  | Locação com múltiplos brinquedos         | 432.137.300-09      | Cama Elástica e Pula-pula         | Locação salva com sucesso, todos os brinquedos registrados                         |
| **CT08**  | Exibição correta da devolução e valores  | 432.137.300-09      | Cama Elástica                     | Mensagem com data de devolução, nome e valor exibida corretamente                 |
| **CT09**  | Cálculo correto do valor total           | 432.137.300-09      | Cama Elástica e Pula-pula         | Valor total exibido corretamente, locação salva                                    |
| **CT10**  | Valor do brinquedo inválido              | 432.137.300-09      | Brinquedo com valor 0 ou negativo | Mensagem: *Valor do brinquedo inválido. Selecione outro item*                     |
| **CT11**  | Cancelamento antes da confirmação final  | 432.137.300-09      | Cama Elástica                     | Operação cancelada, sistema retorna ao menu inicial, nenhum dado salvo            |
