# Cenários: Incluir Locação de Brinquedos

---

## Cenário 1: Simular a inclusão de uma locação com sucesso

- **Descrição**: O agente de locação realiza todos os passos corretamente e o sistema registra a locação e o brinquedo selecionado com sucesso.
- **Fluxo**: Segue o fluxo principal do caso de uso.
- **Resultado esperado**: A locação é salva com sucesso e o brinquedo locado é registrado.

---

## Cenário 2: Simular cliente não encontrado

- **Descrição**: O agente de locação informa um CPF que não corresponde a nenhum cliente ativo.
- **Fluxo alternativo**: O sistema exibe uma mensagem de erro: *Cliente não encontrado ou inativo*.
- **Resultado esperado**: O sistema impede a continuação do processo até que um CPF válido seja informado.

---

## Cenário 3: Simular brinquedo não encontrado

- **Descrição**: O agente de locação informa o nome de um brinquedo que não está ativo ou não existe.
- **Fluxo alternativo**: O sistema exibe uma mensagem de erro: *Brinquedo não encontrado ou inativo*.
- **Resultado esperado**: O sistema impede a continuação do processo até que um brinquedo válido seja selecionado.

---

## Cenário 4: Simular nenhum brinquedo selecionado

- **Descrição**: O agente de locação não seleciona nenhum brinquedo para a locação.
- **Fluxo alternativo**: O sistema exibe uma mensagem de erro: *É necessário selecionar pelo menos um brinquedo para concluir a locação*.
- **Resultado esperado**: O sistema impede a conclusão da locação até que pelo menos um brinquedo seja selecionado.

---

## Cenário 5: Simular erro ao salvar a locação

- **Descrição**: O sistema encontra um erro ao tentar salvar os dados da locação.
- **Fluxo alternativo**: O sistema exibe uma mensagem de erro: *Erro ao salvar a locação. Tente novamente mais tarde*.
- **Resultado esperado**: A locação não é salva, e o sistema mantém os dados consistentes.

---

## Cenário 6: Simular erro ao salvar os brinquedos locados

- **Descrição**: O sistema encontra um erro ao tentar salvar os brinquedos locados após salvar a locação.
- **Fluxo alternativo**: O sistema exibe uma mensagem de erro: *Erro ao salvar os brinquedos locados. Tente novamente mais tarde*.
- **Resultado esperado**: Nenhum dado é salvo, e o sistema mantém os dados consistentes.

---

## Cenário 7: Simular locação com múltiplos brinquedos

- **Descrição**: O agente de locação seleciona mais de um brinquedo para a mesma locação.
- **Fluxo**: O agente de locação repete os passos necessários para inclusão de cada brinquedo.
- **Resultado esperado**: A locação é salva com todos os brinquedos selecionados, e o sistema calcula corretamente o valor total.

---

## Cenário 8: Avaliar se mensagem data de devolução, nome do brinquedo e valor unitário é corretamente exibida

- **Descrição**: O sistema exibe uma mensagem com a data de devolução, nome do brinquedo e valor unitário.
- **Fluxo**: O agente de locação seleciona um brinquedo e o sistema exibe a mensagem com as informações corretas.
- **Resultado esperado**: A mensagem é exibida corretamente com as informações do brinquedo selecionado.

---

## Cenário 9: Avaliar se sistema calcula corretamente o valor total da locação

- **Descrição**: O sistema calcula o valor total da locação com base no valor unitário do brinquedo.
- **Fluxo**: O agente de locação informa brinquedos e o sistema calcula o valor total.
- **Resultado esperado**: O valor total é calculado corretamente e exibido para o agente de locação.

---
