# Estrutura para o Projeto em Qualidade e Teste de Software

## Introdução

Foi proposto à "Equipe Go Horse" a elaboração de um projeto abrangendo a construção do Backend e Frontend de uma aplicação web voltado à *Locação de Brinquedos para Festas*. O desenvolvimento, segundo proposta feita, será desenvolvido de forma incremental, devendo ser submetido a testes de validação e de verificação, no intuito de aferir a qualidade atingida pelo software. O exercício foi proposto nos seguintes termos:

```plaintext
Desenvolvimento de um Sistema Locação de Brinquedos para Festas

Descrição de Negócio

A Casa das Festas Alegria faz locação de brinquedos (por exemplo, cama
elástica, piscina de bolinha e escorregador) para festas. Esta empresa gostaria de um
sistema que auxiliasse no controle das locações e devoluções dos brinquedos.
A empresa tem um Gerente (que será o administrador do site) e vários
funcionários, que utilizarão o sistema. Os funcionários têm funções diferentes na empresa
(por exemplo, tem o Caixa, o Almoxarife, etc). Portanto, sobre funcionários é importante
saber: cpf, nome, telefone e função. O gerente é responsável por incluir, alterar e excluir
dados dos funcionários no sistema.
O sistema deve permitir incluir, alterar e excluir dados de brinquedos. O
responsável por fazer isso é o Almoxarife. Sobre brinquedo é importante armazenar:
código único, nome, tipo de brinquedo, marca, data da aquisição e valor da locação.
Os brinquedos estão organizados por tipos (piscinas de bolinhas, escorregadores,
camas elásticas, jogos de bilhar, etc). Diante disso, o sistema deve permitir incluir e alterar
tipos de brinquedos. O responsável em inserir e alterar é o Almoxarife. Com relação a tipo
de brinquedo é importante saber: código único e nome do tipo.
É importante também que o sistema permita incluir e alterar dados dos clientes. O
responsável é por esses lançamentos é o Analista de Cadastro. Em relação a cliente é
importante saber: cpf, nome, endereço, data de nascimento e telefone.
A locação é feita diretamente na loja. O responsável por incluir dados de locação é
o Agente de Locação. Em uma mesma locação pode ser incluído mais de um brinquedo.
Sobre locação deve-se incluir: código único da locação, data e horário atual, CPF do
cliente, código único do brinquedo, valor unitário do item locado, valor total da locação e
data para devolução.
O pagamento é feito no momento da locação. A empresa aceita pagamentos
apenas em dinheiro. A inclusão dos dados, no sistema, referentes a pagamento de
locações é feito pelo Caixa. A inclusão de pagamento com dinheiro envolve os seguintes
dados: código único da locação, nome e cpf do cliente (o sistema busca e mostra esses
dados), data do pagamento, o valor da locação e o valor do pagamento.
É importante considerar que o sistema deve ser desenvolvido para utilizar na
internet. A Casa de Festas utiliza os navegadores Google Chrome e Mozilla Firefox. Além
disso, ela espera que o sistema seja fácil de utilizar, que tenha segurança quanto a
acessos indesejados e que seja confiável. Como medida de privacidade dos dados
gostaríamos que fosse possível cadastrar diferentes níveis de acessos aos usuários.
A construção do software seguirá as atividades fundamentais de um processo de
desenvolvimento incremental. Nesse sentido, faremos o levantamento, análise e projeto
dos requisitos, codificação e testes de partes do software. Ao mesmo tempo, aplicaremos
os testes de verificação e validação, conforme os conhecimentos adquiridos durante o
decorrer da disciplina.

Como vamos construir o software com o processo incremental. O primeiro
incremento será Incluir Locação de Brinquedos. Diante disso, será feito a análise,
projeto, codificação e testes para este incremento.
Na fase de análise deste incremento, é necessário fazer as seguintes
especificações:
1. Requisitos funcionais
2. Diagrama de Casos de Uso
3. Escrita do caso de uso principal do incremento de forma detalhada
4. Requisitos não funcionais
5. Diagrama ER
6. Diagrama de Classes
```

## Descrição geral do Negócio

O sistema será utilizado pelo gerente e funcionários da empresa, cada um com funções específicas, como almoxarife, analista de cadastro, agente de locação e caixa. De forma resumida, as principais funcionalidades incluem:

- Cadastro, alteração e remoção de funcionários e brinquedos;

- Cadastro e alteração de clientes e tipos de brinquedos;

- Inclusão de locações e pagamentos;

- Controle de acesso com diferentes níveis de permissão.

O desenvolvimento seguirá as etapas do modelo incremental, garantindo entregas frequentes e melhoria contínua com base em feedbacks.

## Atividades a serem executadas

No modelo incremental, o desenvolvimento do software ocorre em etapas chamadas de incrementos. Cada incremento adiciona funcionalidades ao sistema, permitindo que versões utilizáveis sejam entregues progressivamente.

Foi nos proposta a inclusão de uma locação, que é a atividade fim de todo o fluxo de trabalho da empresa. Portanto, deve-se ter no mínimo um funcionário de cada categoria para perfectibilizar a operação, à exceção do caixa, que é responsável pela inclusão de pagamento. Porém, como suas atividades e propriedades vieram definidas no corpo do problema, optou-se por incluí-lo no incremento, desde já. Afinal, uma locação deve ensejar um pagamento para viabilizar financeiramente a empresa. Ainda, é preciso implementar, por óbvio, um tipo de brinquedo, um brinquedo, uma locação, um cliente e um brinquedo locado, para que o processo de incluir uma locação seja realizado com sucesso. Basta ver a dependência de requisitos estabelecidos em cada requisitos e suas dependências, conforme se verá abaixo.

As atividades a serem feitas, de forma resumida, envolvem a execução sucessiva das etapas relacionadas à produção de software seguindo o modelo incremental. Em apertada síntese, serão necessários a realização de reuniões, a análise de requisitos, modelagem e design do software, implementação do software, mediante construção de telas e da lógica de acesso às rotas para o CRUD de dados, bem como testes e entrega.

Portanto, as atividades executadas serão as seguintes:

1. **Reunião**, em que serão definidos os papéis de cada membro da equipe, atividades e cronograma de execução. Essa etapa fica ao encargo do Líder;
2. **Planejamento e Análise de Requisitos**, cujo ator principal será o Analista de projeto, ao qual incumbe:

    - *Verificar os Requisitos funcionais*;
    - *A escrita do caso de uso principal* do incremento de forma detalhada;
    - *O levantamento de Requisitos funcionais* e das *regras de negócio*;
    - *A elaboração do Diagrama de Casos de Uso*;

3. **Design e Arquitetura**, cujo ator principal será o Analista de projeto, ao qual compete:

    - *A elaboração do Diagrama ER* e
    - *A elaboração do Diagrama UML de classes*;
    - *Planejar, em linhas gerais, a UI/UX*;

4. **Implementação e Desenvolvimento**, cujos atores principais são os desenvolvedores de Backend e Frontend da aplicação, notadamente:

    - *Construção das respectivas rotas de acesso aos recursos da aplicação no backend*:
        - Funcionários;
        - Clientes;
        - Brinquedos;
        - Tipo Brinquedos;
        - Locações;
        - Pagamentos;
        - Brinquedos Locados;
        - Login;

    - *Construção das telas junto ao frontend*:
        - Leitura, inclusão, alteração e deleção de Funcionários;
        - Leitura, inclusão e alteração de Clientes;
        - Leitura, inclusão, alteração e deleção Brinquedos;
        - Leitura, inclusão e alteração de Tipo Brinquedos;
        - Leitura e inclusão de Locações;
        - Leitura e inclusão de Pagamento;
        - Leitura, inclusão, alteração e deleção de Brinquedos Locados;
        - De Login e Autenticação;

5. **Testes curtos e Validação** (Responsáveis: Backend e Frontend):

    - Testes funcionais e de integração para garantir a comunicação entre os módulos;
    - Testes de usabilidade na interface do usuário.

6. **Entrega e Reunião Final**:

    - Revisão do software desenvolvido;
    - Documentação final e apresentação dos resultados.

## Cronograma

| #  | Atividade | Tempo de Execução | Prazo | Responsável | Ferramentas |
|----|-----------|----------------|-------|--------------|--------------|
| 01 | Reunião inicial | 1 dia | 07/03/2025 | Líder | Presencial |
| 02 | Análise de requisitos | 2 dias | 09/03/2025 | Analista | Editor de texto |
| 03 | Caso de uso principal | 3 dias | 12/03/2025 | Analista | Editor de texto |
| 04 | Regras de negócio | 2 dias | 14/03/2025 | Analista | Editor de texto |
| 05 | Diagrama de Casos de Uso | 2 dias | 16/03/2025 | Analista | DrawIO |
| 06 | Diagrama ER | 2 dias | 18/03/2025 | Analista | PgAdmin4 |
| 07 | Diagrama UML de Classes | 3 dias | 21/03/2025 | Analista | DrawIO/PlantUML |
| 08 | Planejamento UI/UX | 2 dias | 23/03/2025 | Analista e Dev Frontend | Figma |
| 09 | Reunião intermediária 1 | 1 dia | 24/04/2025 | Líder | Presencial |
| 10 | Desenvolvimento Backend | 20 dias | 14/04/2025 | Dev Backend | NodeJS/Express/Postgres/Prisma |
| 11 | Desenvolvimento Frontend | 20 dias | 24/04/2025 | Dev Frontend | React/TypeScript/Git |
| 12 | Reunião intermediária 2 | 1 dia | 25/04/2025 | Líder | Presencial |
| 13 | Testes funcionais  | 7 dias | 02/05/2025 | Equipe | Ambiente NodeJS |
| 14 | Revisão de código | 4 dias | 06/05/2025 | Equipe | Tecnologias acima |
| 15 | Testes funcionais  | 2 dias | 08/05/2025 | Equipe | Ambiente NodeJS |
| 16 | Reunião final | 1 dia | 09/05/2025 | Líder | Presencial |
| 17 | Entrega final | 1 dia | 15/05/2025 | Líder | Moodle |

## Responsáveis pela Execução

- **Líder do projeto**: Organiza as atividades e acompanha a execução;

- **Analista de Projeto**: Responsável pela documentação e modelagem do sistema;

- **Desenvolvedores Backend**: Implementam a API e banco de dados; e

- **Desenvolvedores Frontend**: Criam a interface do usuário e conectam ao backend.

## Recursos Tecnológicos

- **Backend**: Node.js, Express, PostgreSQL, Prisma, TypeScript, JWT, Docker;

- **Frontend**: React, TypeScript, Styled-components, Bootstrap, Tailwind (ou outra ferramenta framework de estilização);

- **Ferramentas de Modelagem**: Draw.io, PgAdmin4, Figma, PlantUML; e

- **Versionamento**: Git, GitHub.
  
- **Virtualização**: Docker e Compose.

## Parte 1: Backend da aplicação

### Requisitos funcionais (RF)

| **Código** | **Requisito** | **Ator** | **Relacionados** |
|------------|--------------|----------|------------------|
| **RF01** | O sistema deve **gerenciar** informações sobre funcionários: *CPF, nome, senha, telefone e função*. | Gerente (Administrador do site) | - |
| **RF02** | O sistema deve **gerenciar** informações sobre brinquedos: *código único, nome, tipo de brinquedo, marca, data da aquisição e valor da locação*. | Almoxarife | RF03 |
| **RF03** | O sistema deve **manter** informações sobre tipos de brinquedos: *código único e nome do tipo*. | Almoxarife | - |
| **RF04** | O sistema deve **manter** informações sobre clientes: *CPF, nome, endereço, data de nascimento e telefone*. | Analista de cadastro | - |
| **RF05** | O sistema deve **incluir** informações sobre locações: *código único da locação, data e horário atual, CPF do cliente, código único do brinquedo, valor unitário do item locado, valor total da locação e data para devolução*. | Agente de locação | RF02, RF04 |
| **RF06** | O sistema deve **incluir** informações sobre pagamento: *código único da locação, nome e CPF do cliente, data do pagamento, valor da locação e valor do pagamento*. | Caixa | RF02, RF05 |

### Definições

- **Gerenciar:** Incluir, alterar e excluir.
- **Manter:** Incluir e alterar.

### Requisitos Não Funcionais (RNF)

| **Código** | **Requisito** | **Atores** | **Relacionados** |
|------------|--------------|------------|------------------|
| **RNF01** | O sistema deve ser acessível via internet, utilizando uma arquitetura cliente-servidor baseada nos protocolos **HTTP/HTTPS**. Deve-se priorizar **HTTPS** para garantir segurança na transmissão de dados por meio do protocolo **TLS (Transport Layer Security)**. | Usuário final, Administrador | - |
| **RNF02** | O sistema deve ser totalmente compatível e funcional nos navegadores **Google Chrome e Mozilla Firefox**, garantindo suporte para suas versões mais recentes e futuras atualizações. | Usuário final | - |
| **RNF03** | O sistema deve oferecer uma interface intuitiva, seguindo diretrizes reconhecidas de usabilidade, como os princípios de **Jakob Nielsen**. Para melhorar a experiência do usuário, a interface deve:<br> - Utilizar **listas de seleção** para facilitar a inserção de dados.<br> - Exibir **notificações sobre campos inválidos** e fornecer sugestões de preenchimento.<br> - Seguir um **padrão de design visual** baseado em uma paleta de três cores principais, aplicando o conceito de **Color Harmony** para garantir consistência estética. | Usuário final | - |
| **RNF04** | O sistema deve implementar **mecanismos seguros de autenticação** para impedir acessos não autorizados. Os métodos podem incluir:<br> - **OAuth 2.0** ou **JWT (JSON Web Token)** para autenticação baseada em tokens.<br> - **Criptografia de credenciais** para proteção dos dados de login. | Administrador, Usuário final | RNF06 |
| **RNF05** | O sistema deve garantir a **privacidade e segurança dos dados** dos usuários por meio das seguintes medidas:<br> - **Criptografia de armazenamento** usando **AES-256** para dados sensíveis.<br> - **Restrições de acesso** baseadas em regras de permissão.<br> - Implementação de **UUIDs (Identificadores Únicos Universais)** para a identificação de recursos, garantindo rastreabilidade e segurança. | Administrador, Usuário final | RNF04, RNF06 |
| **RNF06** | O sistema deve permitir a **criação e gestão de perfis de usuários** com diferentes níveis de acesso, garantindo que cada perfil tenha permissões apropriadas. Exemplos de níveis incluem:<br> - **Caixa** – Acesso a operações financeiras.<br> - **Gerente** – Controle total e gerenciamento de usuários.<br> - **Analista de Cadastro** – Permissão para modificar registros cadastrais.<br> - **Agente de Locação** – Gerenciamento de locações e contratos.<br> - **Almoxarife** – Controle de estoque e produtos. | Administrador | RNF04, RNF05 |

### Descrição das regras de negócio (RN)

| **Código** | **Regra de Negócio** |
|------------|----------------------|
| **RN01** | O sistema deve permitir a inclusão de mais de um brinquedo na mesma locação. |
| **RN02** | A locação deve ser feita somente presencialmente na loja. |
| **RN03** | O pagamento é feito no momento da locação e em dinheiro. |

### Diagrama de Casos de Uso

![diagrama-caso-uso](/artifacts/diagrama_caso_de_uso_app_locacao_incremento_1.png)

### Escrita do caso de uso principal do incremento de forma detalhada

---

#### 1. Gerenciar Funcionário

| **Nome do caso de uso**         | Gerenciar funcionário                                                             |
|---------------------------------|:---------------------------------------------------------------------------------:|
| **Escopo**                      | Permite incluir, alterar e excluir informações de funcionário                     |
| **Ator(es)**                    | Gerente                                                                           |
| **Interessados e interesses**   | Gerente: controle de dados da equipe                                              |
| **Pré-condição**                | Estar logado                                                                      |
| **Pós-condição**                | Que as informações de funcionário sejam incluídas, alteradas e excluídas com sucesso |

##### Fluxo Principal

1. **Gerente** escolhe a opção **Gerenciar funcionário**.
2. **Sistema** mostra as opções: *incluir*, *alterar* e *excluir*.
3. **Gerente** seleciona uma opção.
4. **Sistema** exibe a mensagem: *Operação realizada com sucesso*.

##### Fluxo Alternativo

###### 3.a. Opção Incluir

1. **Sistema** mostra o campo de preenchimento: **CPF**.
2. **Gerente** preenche o campo.
3. **Sistema** valida o CPF:
   - **CPF já cadastrado:**
     1. Exibe mensagem de erro.
     2. Retorna ao **passo 2** do Fluxo Principal.
   - **CPF em branco ou incorreto:**
     1. Exibe mensagem de erro.
     2. Retorna ao **passo 1** deste fluxo.
4. **Sistema** mostra os campos para preenchimento: **nome, telefone, senha e repete senha**.
5. **Gerente** preenche os campos.
6. **Sistema** valida os campos:
   - Se houver **campos obrigatórios não preenchidos ou incorretos**:
     1. Exibe mensagem de erro.
     2. Retorna ao **passo 4** deste fluxo.
   - Se a **senha não atingir os requisitos mínimos ou as senhas não conferirem**:
     1. Exibe mensagem de erro.
     2. Retorna ao **passo 4** deste fluxo.
7. **Sistema** mostra a seleção de **Função**.
8. **Gerente** escolhe a função:
   - Se houver **campos obrigatórios não preenchidos ou incorretos**:
     1. Exibe mensagem de erro.
     2. Retorna ao **passo 7** deste fluxo.
9. **Sistema** armazena os dados do funcionário.

###### 3.b. Opção Alterar

1. **Sistema** mostra o campo de preenchimento: **CPF**.
2. **Gerente** preenche o campo.
3. **Sistema** valida o CPF:
   - **CPF não cadastrado:**
     1. Exibe mensagem de erro.
     2. Retorna ao **passo 2** do Fluxo Principal.
   - **CPF em branco ou incorreto:**
     1. Exibe mensagem de erro.
     2. Retorna ao **passo 1** deste fluxo.
4. **Sistema** busca e mostra os campos para alteração: **nome, telefone, senha e repete senha**.
5. **Gerente** altera os campos desejados.
6. **Sistema** valida os campos:
   - Se houver **campos obrigatórios não preenchidos ou incorretos**:
     1. Exibe mensagem de erro.
     2. Retorna ao **passo 4** deste fluxo.
7. **Sistema** mostra a seleção de **Função**.
8. **Gerente** escolhe a função:
   - Se houver **campos obrigatórios não preenchidos ou incorretos**:
     1. Exibe mensagem de erro.
     2. Retorna ao **passo 7** deste fluxo.
9. **Sistema** insere (atualiza) os dados do funcionário.

###### 3.c. Operação Excluir

1. **Sistema** mostra o campo de preenchimento: **CPF**.
2. **Gerente** preenche o campo.
3. **Sistema** mostra uma lista com os funcionários compatíveis.
4. **Gerente** seleciona o funcionário desejado.
5. **Sistema** busca e mostra os dados do funcionário: **nome, função, CPF, telefone**.
6. **Sistema** exibe a mensagem: “Deseja excluir?”.
7. **Sistema** apresenta as opções: **excluir** e **cancelar**.
8. Dependendo da escolha:
   - **Opção Cancelar:**  
     - O **Sistema** finaliza a operação.
   - **Opção Excluir:**  
     - O **Sistema** exclui os dados do funcionário.

---

#### 2. Gerenciar Brinquedo

| **Nome do caso de uso**         | Gerenciar brinquedo                                                             |
|---------------------------------|:--------------------------------------------------------------------------------:|
| **Escopo**                      | Permite incluir, alterar e excluir informações de brinquedos                      |
| **Ator(es)**                    | Almoxárife                                                                       |
| **Interessados e interesses**   | Almoxárife: controle de dados sobre brinquedos                                   |
| **Pré-condição**                | Estar logado                                                                     |
| **Pós-condição**                | Que as informações de brinquedo sejam incluídas, alteradas e excluídas com sucesso |

##### Fluxo Principal

1. **Almoxárife** escolhe a opção **Gerenciar brinquedo**.
2. **Sistema** mostra as opções: *incluir*, *alterar* e *excluir*.
3. **Almoxárife** seleciona uma opção.
4. **Sistema** exibe a mensagem: *Operação realizada com sucesso*.

##### Fluxo Alternativo

###### 2.a. Opção Incluir

1. **Sistema** mostra o campo de preenchimento: **NOME**.
2. **Almoxárife** preenche o campo.
3. **Sistema** mostra uma lista com nomes compatíveis.
4. **Sistema** valida o nome:
   - **Brinquedo já cadastrado:**
     1. Exibe mensagem de erro.
     2. Retorna ao **passo 2** do Fluxo Principal.
   - **Nome em branco ou incorreto:**
     1. Exibe mensagem de erro.
     2. Retorna ao **passo 1** deste fluxo.
5. **Sistema** mostra uma lista com os **tipos de brinquedo**.
6. **Almoxárife** seleciona o tipo desejado.
7. **Sistema** solicita o preenchimento dos campos: **marca, data da aquisição e valor para locação**.
8. **Sistema** valida os campos:
   - Se houver **campos obrigatórios não preenchidos ou incorretos**:
     1. Exibe mensagem de erro.
     2. Retorna ao **passo 7** deste fluxo.
9. **Sistema** gera um código único para o brinquedo.
10. **Sistema** armazena os dados do brinquedo.

###### 2.b. Opção Alterar

1. **Sistema** mostra o campo de preenchimento: **NOME**.
2. **Almoxárife** preenche o campo.
3. **Sistema** mostra uma lista com nomes compatíveis.
4. **Almoxárife** seleciona o brinquedo desejado.
5. **Sistema** busca e mostra os campos para alteração: **nome, tipo de brinquedo, marca, data da aquisição e valor da locação**.
6. **Almoxárife** altera os campos desejados.
7. **Sistema** valida os campos:
   - Se houver **campos obrigatórios não preenchidos ou incorretos**:
     1. Exibe mensagem de erro.
     2. Retorna ao **passo 5** deste fluxo.
   - Se o **nome já consta no cadastro**:
     1. Exibe mensagem de erro.
     2. Retorna ao **passo 5** deste fluxo.
8. **Sistema** insere (atualiza) os dados do brinquedo.

###### 2.c. Operação Excluir

1. **Sistema** mostra o campo de preenchimento: **NOME**.
2. **Almoxárife** preenche o campo.
3. **Sistema** mostra uma lista com os brinquedos compatíveis.
4. **Almoxárife** seleciona o brinquedo desejado.
5. **Sistema** busca e mostra os dados do brinquedo: **nome, tipo, marca, código, data da aquisição e valor da locação**.
6. **Sistema** exibe a mensagem: “Deseja excluir?”.
7. **Sistema** apresenta as opções: **excluir** e **cancelar**.
8. Dependendo da escolha:
   - **Opção Cancelar:**  
     - O **Sistema** finaliza a operação.
   - **Opção Excluir:**  
     - O **Sistema** exclui os dados do brinquedo.

---

### 3. Manter Tipo de Brinquedo

| **Nome do caso de uso**         | Manter tipo de brinquedo                                                       |
|---------------------------------|:-------------------------------------------------------------------------------:|
| **Escopo**                      | Permite incluir e alterar informações de tipo de brinquedos                     |
| **Ator(es)**                    | Almoxárife                                                                      |
| **Interessados e interesses**   | Almoxárife: controle de dados sobre tipo de brinquedos                          |
| **Pré-condição**                | Estar logado                                                                    |
| **Pós-condição**                | Que as informações de tipo de brinquedo sejam incluídas e alteradas com sucesso |

##### Fluxo Principal

1. **Almoxárife** escolhe a opção **Manter tipo de brinquedo**.
2. **Sistema** mostra as opções: *incluir* e *alterar*.
3. **Almoxárife** seleciona uma opção.
4. **Sistema** exibe a mensagem: *Operação realizada com sucesso*.

##### Fluxo Alternativo

###### 3.a. Opção Incluir

1. **Sistema** mostra o campo de preenchimento: **NOME**.
2. **Almoxárife** preenche o campo.
3. **Sistema** mostra uma lista com os nomes compatíveis.
4. **Sistema** valida o nome:
   - **Tipo de brinquedo já cadastrado:**
     1. Exibe mensagem de erro.
     2. Retorna ao **passo 2** do Fluxo Principal.
   - **Nome em branco ou incorreto:**
     1. Exibe mensagem de erro.
     2. Retorna ao **passo 1** deste fluxo.
5. **Sistema** gera um código único para o tipo de brinquedo.
6. **Sistema** armazena os dados.

###### 3.b. Opção Alterar

1. **Sistema** mostra o campo de preenchimento: **NOME**.
2. **Almoxárife** preenche o campo.
3. **Sistema** mostra uma lista com os tipos compatíveis.
4. **Almoxárife** seleciona o item desejado.
5. **Sistema** busca e mostra o campo para alteração: **nome**.
6. **Almoxárife** altera o nome.
7. **Sistema** valida o campo:
   - Se houver **campo obrigatório em branco ou incorreto**:
     1. Exibe mensagem de erro.
     2. Retorna ao **passo 5** deste fluxo.
8. **Sistema** insere (atualiza) os dados do tipo de brinquedo.

---

### 4. Manter Cliente

| **Nome do caso de uso**         | Manter cliente                                                                 |
|---------------------------------|:------------------------------------------------------------------------------:|
| **Escopo**                      | Permite incluir e alterar informações de clientes                              |
| **Ator(es)**                    | Analista de cadastro                                                           |
| **Interessados e interesses**   | Analista de cadastro: controle de dados sobre clientes                         |
| **Pré-condição**                | Estar logado                                                                   |
| **Pós-condição**                | Que as informações de cliente sejam incluídas e alteradas com sucesso            |

##### Fluxo Principal

1. **Analista de cadastro** escolhe a opção **Manter cliente**.
2. **Sistema** mostra as opções: *incluir* e *alterar*.
3. **Analista de cadastro** seleciona uma opção.
4. **Sistema** exibe a mensagem: *Operação realizada com sucesso*.

##### Fluxo Alternativo

###### 4.a. Opção Incluir

1. **Sistema** mostra o campo de preenchimento: **CPF**.
2. **Analista de cadastro** preenche o campo.
3. **Sistema** valida o CPF:
   - **CPF já cadastrado:**
     1. Exibe mensagem de erro.
     2. Retorna ao **passo 2** do Fluxo Principal.
   - **CPF em branco ou incorreto:**
     1. Exibe mensagem de erro.
     2. Retorna ao **passo 1** deste fluxo.
4. **Sistema** solicita o preenchimento dos campos: **nome, endereço, data de nascimento e telefone**.
5. **Analista de cadastro** preenche os campos.
6. **Sistema** valida os campos:
   - Se houver **campo obrigatório em branco ou incorreto**:
     1. Exibe mensagem de erro.
     2. Retorna ao **passo 4** deste fluxo.
7. **Sistema** armazena os dados do cliente.

##### 4.b. Opção Alterar

1. **Sistema** mostra o campo de preenchimento: **CPF**.
2. **Analista de cadastro** preenche o campo.
3. **Sistema** valida o CPF:
   - **CPF não cadastrado:**
     1. Exibe mensagem de erro.
     2. Retorna ao **passo 2** do Fluxo Principal.
4. **Sistema** busca e mostra os campos para alteração: **nome, CPF, endereço, data de nascimento e telefone**.
5. **Analista de cadastro** altera os campos desejados.
6. **Sistema** valida os campos:
   - Se houver **campo obrigatório em branco ou incorreto**:
     1. Exibe mensagem de erro.
     2. Retorna ao **passo 4** deste fluxo.
7. **Sistema** insere (atualiza) os dados do cliente.

---

### 5. Incluir Locações

| **Nome do caso de uso**         | Incluir locações                                                              |
|---------------------------------|:-------------------------------------------------------------------------------:|
| **Escopo**                      | Permite incluir informações de locações                                       |
| **Ator(es)**                    | Agente de locação                                                             |
| **Interessados e interesses**   | Agente de locação: controle de dados sobre locações                           |
| **Pré-condição**                | Estar logado                                                                  |
| **Pós-condição**                | Que as informações de locação sejam incluídas e alteradas com sucesso           |

##### Fluxo Principal

1. **Agente de locação** clica na opção *Incluir locação*.
2. **Sistema** solicita o preenchimento do campo **CPF do Cliente**.
3. **Agente de locação** informa o CPF.
4. **Sistema** mostra uma lista de clientes compatíveis.
5. **Agente de locação** seleciona o cliente.
6. **Sistema** solicita o preenchimento do campo **Nome do Brinquedo**.
7. **Agente de locação** informa o nome do brinquedo.
8. **Sistema** mostra uma lista com brinquedos compatíveis.
9. **Agente de locação** seleciona o brinquedo desejado.
10. **Sistema** solicita o preenchimento do campo **Data de Devolução**.
11. **Agente de locação** informa a data.
12. **Sistema** valida a data:
    - Se **em branco ou incorreta**:
      1. Exibe mensagem de erro.
      2. Retorna ao **passo 10**.
13. **Sistema** gera um código único para o brinquedo locado.
14. **Sistema** insere o nome do brinquedo e o valor unitário.
15. **Sistema** exibe a mensagem: *Item incluído com sucesso*.
16. **Sistema** pergunta: *Deseja locar outro brinquedo?*
    - Se **Sim**: Retoma a partir do **passo 6** (mantendo o mesmo cliente).
    - Se **Não**: Prossegue.
17. **Sistema** calcula o valor total da locação.
18. **Sistema** registra a data e hora atual.
19. **Sistema** define o status do pagamento como *pendente*.
20. **Sistema** gera um código único para a locação.
21. **Sistema** salva os dados.
22. **Sistema** exibe a mensagem: *Operação realizada com sucesso*.

---

#### 6. Incluir Pagamentos

| **Nome do caso de uso**         | Incluir pagamentos                                                           |
|---------------------------------|:----------------------------------------------------------------------------:|
| **Escopo**                      | Permite incluir informações de pagamento                                    |
| **Ator(es)**                    | Caixa                                                                       |
| **Interessados e interesses**   | Caixa: controle de dados sobre pagamentos                                  |
| **Pré-condição**                | Estar logado                                                                 |
| **Pós-condição**                | Que as informações de pagamento sejam incluídas e alteradas com sucesso       |

##### Fluxo Principal

1. **Caixa** clica na opção *Incluir pagamento*.
2. **Sistema** solicita o preenchimento do campo **CPF**.
3. **Caixa** informa o CPF.
4. **Sistema** mostra uma lista de clientes compatíveis.
5. **Caixa** seleciona o cliente.
6. **Sistema** exibe o nome e o CPF do cliente.
7. **Sistema** mostra uma lista com as locações em aberto.
8. **Caixa** seleciona a locação a ser paga.
9. **Sistema** exibe os itens da locação: **Código Único, Nomes dos Brinquedos, Valor Unitário e Valor Total**.
10. **Sistema** solicita o preenchimento do campo **Valor do Pagamento**.
11. **Caixa** informa o valor.
12. **Sistema** valida o valor:
    - Se **em branco, incorreto ou insuficiente**:
      1. Exibe mensagem de erro.
      2. Retorna ao **passo 10**.
13. **Sistema** registra a data e hora atual.
14. **Sistema** atualiza o status da locação para *efetuado*.
15. **Sistema** gera um código único para o pagamento.
16. **Sistema** salva os dados.
17. **Sistema** exibe a mensagem: *Operação realizada com sucesso*.

### ERD

#### tabela funcionarios

- **Campos:** cpf(pk), nome, telefone, senha e função (senha para permitir autenticação e autorização) (função é um enum de  CAIXA, GERENTE, ALMOXARIFE, ANALISTA_CADASTRO, AGENTE_LOCACAO)

- **Relações:** Um funcionario (gerente) pode cadastrar muitos funcionários.

#### tabela brinquedos

- **Campos:** código único(pk), nome (único), tipo de brinquedo, marca, data da aquisição, valor da locação

- **Relações:** Um funcionario (almoxárife) pode cadastrar muitos brinquedos.

#### tabela tipo_brinquedo

- **Campos:** código único(pk), nome do tipo (único)

- **Relações:** Um funcionario (almoxárife) pode cadastrar muitos tipos de brinquedos.

#### tabela clientes

- **Campos:** cpf(pk), nome, endereço, data de nascimento, telefone

- **Relações:** Um funcionario (analista de cadastro) pode cadastrar muitos clientes.

#### tabela locacoes

- **Campos:** código único da locação(pk), data e horário atual, status do pagamento, CPF do cliente(fk) (obtidos por query: valor total da locação c/ soma em locacoes_brinquedos)

- **Relações:** Um funcionario (agente de locação) pode incluir muitas locações.
- **Relações:** Um cliente pode possuir várias locações. Por outro lado, uma locação pode pertencer a somente um cliente.

#### tabela brinquedos_locacoes

- **Campos:** código único (pk), nome, valor unitário, código da locação (fk), código do brinquedo (fk) e data de devolução

- **Relações:** Um funcionario (agente de locação) pode incluir muitos brinquedos em uma mesma locação.
- **Relações:** Uma locação pode possuir vários brinquedos. Um brinquedo locado pode estar em apenas uma locação.

#### tabela pagamentos

- **Campos:** código único do pagamento(pk), código único da locação(fk), código único cliente(fk), data do pagamento, o valor do pagamento (obtidos por query: nome e cpf do cliente em clientes e o valor da locação c/ soma de valores em locacoes_brinquedos)

- **Relações:** Um funcionario (caixa) pode incluir muitos pagamentos.
- **Relações:** Um cliente pode efetuar vários pagamentos. Uma locação sofre um pagamento de um cliente específico.
Um pagamento se refere a somente uma locação. Uma locação possui apenas um pagamento.

O Schema da aplicação fica melhor delineado no ERD abaixo:

![ERD](/artifacts/erd_incremento_1.png "Erd para o sistema de locação")

Código SQL para a geração das tabelas:

```sql
-- This script was generated by the ERD tool in pgAdmin 4.
-- Please log an issue at https://github.com/pgadmin-org/pgadmin4/issues/new/choose if you find any bugs, including reproduction steps.
-- CreateEnum
CREATE TYPE "Funcao" AS ENUM ('GERENTE', 'CAIXA', 'AGENTE_LOCACAO', 'ANALISTA_CADASTRO', 'ALMOXARIFE');

-- CreateEnum
CREATE TYPE "PgtoStatus" AS ENUM ('PENDENTE', 'PAGO', 'ATRASO');

-- CreateTable
CREATE TABLE "brinquedos" (
    "cod" UUID NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "tipo_brinquedo" UUID NOT NULL,
    "marca" VARCHAR(255) NOT NULL,
    "data_aquisicao" DATE NOT NULL,
    "valor_locacao" MONEY NOT NULL,

    CONSTRAINT "brinquedos_pkey" PRIMARY KEY ("cod")
);

-- CreateTable
CREATE TABLE "brinquedos_locados" (
    "cod" UUID NOT NULL,
    "valor_unitario" MONEY NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "cod_locacao" UUID NOT NULL,
    "data_devolucao" DATE NOT NULL,
    "cod_brinquedo" UUID NOT NULL,

    CONSTRAINT "brinquedos_locados_pkey" PRIMARY KEY ("cod")
);

-- CreateTable
CREATE TABLE "clientes" (
    "cpf" CHAR(11) NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "endereco" VARCHAR(255) NOT NULL,
    "data_nascimento" DATE NOT NULL,
    "telefone" VARCHAR(11) NOT NULL,

    CONSTRAINT "clientes_pkey" PRIMARY KEY ("cpf")
);

-- CreateTable
CREATE TABLE "funcionarios" (
    "cpf" CHAR(11) NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "telefone" VARCHAR(11) NOT NULL,
    "funcao" "Funcao" NOT NULL,
    "senha" VARCHAR(128) NOT NULL,

    CONSTRAINT "funcionarios_pkey" PRIMARY KEY ("cpf")
);

-- CreateTable
CREATE TABLE "locacoes" (
    "cod" UUID NOT NULL,
    "data_hora" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cpf_cliente" CHAR(11) NOT NULL,
    "pgto_status" "PgtoStatus" NOT NULL DEFAULT 'PENDENTE',

    CONSTRAINT "locacoes_pkey" PRIMARY KEY ("cod")
);

-- CreateTable
CREATE TABLE "pagamentos" (
    "cod" UUID NOT NULL,
    "cpf_cliente" CHAR(11) NOT NULL,
    "cod_locacao" UUID NOT NULL,
    "data_pagamento" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "valor_pagamento" MONEY NOT NULL,
    "valor_locacao" MONEY NOT NULL,

    CONSTRAINT "pagamentos_pkey" PRIMARY KEY ("cod")
);

-- CreateTable
CREATE TABLE "tipos_brinquedos" (
    "cod" UUID NOT NULL,
    "nome" VARCHAR(255) NOT NULL,

    CONSTRAINT "tipos_brinquedos_pkey" PRIMARY KEY ("cod")
);

-- CreateIndex
CREATE UNIQUE INDEX "brinquedos_nome_key" ON "brinquedos"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "pagamentos_cod_locacao_key" ON "pagamentos"("cod_locacao");

-- CreateIndex
CREATE UNIQUE INDEX "tipos_brinquedos_nome_key" ON "tipos_brinquedos"("nome");

-- AddForeignKey
ALTER TABLE "brinquedos" ADD CONSTRAINT "brinquedos_tipo_brinquedo_fkey" FOREIGN KEY ("tipo_brinquedo") REFERENCES "tipos_brinquedos"("cod") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "brinquedos_locados" ADD CONSTRAINT "brinquedos_locados_cod_locacao_fkey" FOREIGN KEY ("cod_locacao") REFERENCES "locacoes"("cod") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "brinquedos_locados" ADD CONSTRAINT "brinquedos_locados_cod_brinquedo_fkey" FOREIGN KEY ("cod_brinquedo") REFERENCES "brinquedos"("cod") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "locacoes" ADD CONSTRAINT "locacoes_cpf_cliente_fkey" FOREIGN KEY ("cpf_cliente") REFERENCES "clientes"("cpf") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pagamentos" ADD CONSTRAINT "pagamentos_cod_locacao_fkey" FOREIGN KEY ("cod_locacao") REFERENCES "locacoes"("cod") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pagamentos" ADD CONSTRAINT "pagamentos_cpf_cliente_fkey" FOREIGN KEY ("cpf_cliente") REFERENCES "clientes"("cpf") ON DELETE RESTRICT ON UPDATE CASCADE;


```

Schema Prisma para a geração da Database PG

```prisma

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
  output = "../generated/prisma_client"
}

model Brinquedo {
  cod              String            @id @default(uuid()) @db.Uuid
  nome             String            @unique @db.VarChar(255)
  tipo_brinquedo   String            @db.Uuid
  marca            String            @db.VarChar(255)
  data_aquisicao   DateTime          @db.Date
  valor_locacao    Decimal           @db.Money
  tipoBrinquedo    TipoBrinquedo     @relation(fields: [tipo_brinquedo], references: [cod])
  brinquedosLocados BrinquedoLocado[]

  @@map("brinquedos")
}

model BrinquedoLocado {
  cod            String     @id @default(uuid()) @db.Uuid
  valor_unitario Decimal    @db.Money
  nome           String     @db.VarChar(255)
  cod_locacao    String     @db.Uuid
  data_devolucao DateTime   @db.Date
  cod_brinquedo  String     @db.Uuid
  locacao        Locacao    @relation(fields: [cod_locacao], references: [cod])
  brinquedo      Brinquedo  @relation(fields: [cod_brinquedo], references: [cod])

  @@map("brinquedos_locados")
}

model Cliente {
  cpf             String      @id @db.Char(11)
  nome            String      @db.VarChar(255)
  endereco        String      @db.VarChar(255)
  data_nascimento DateTime    @db.Date
  telefone        String      @db.VarChar(11)
  locacoes        Locacao[]
  pagamentos      Pagamento[]

  @@map("clientes")
}

enum Funcao {
  GERENTE
  CAIXA
  AGENTE_LOCACAO
  ANALISTA_CADASTRO
  ALMOXARIFE
}

model Funcionario {
  cpf      String @id @db.Char(11)
  nome     String @db.VarChar(255)
  telefone String @db.VarChar(11)
  funcao   Funcao
  senha    String @db.VarChar(128)

  @@map("funcionarios")
}

enum PgtoStatus {
  PENDENTE
  PAGO
  ATRASO
}

model Locacao {
  cod               String            @id @default(uuid()) @db.Uuid
  data_hora         DateTime          @default(now()) @db.Date
  cpf_cliente       String            @db.Char(11)
  pgto_status       PgtoStatus        @default(PENDENTE)
  brinquedosLocados BrinquedoLocado[]
  cliente           Cliente           @relation(fields: [cpf_cliente], references: [cpf])
  pagamento         Pagamento?

  @@map("locacoes")
}

model Pagamento {
  cod             String   @id @default(uuid()) @db.Uuid
  cpf_cliente     String   @db.Char(11)
  cod_locacao     String   @unique @db.Uuid
  data_pagamento  DateTime @default(now()) @db.Date
  valor_pagamento Decimal  @db.Money
  valor_locacao   Decimal  @db.Money
  locacao         Locacao  @relation(fields: [cod_locacao], references: [cod])
  cliente         Cliente  @relation(fields: [cpf_cliente], references: [cpf])

  @@map("pagamentos")
}

model TipoBrinquedo {
  cod        String      @id @default(uuid()) @db.Uuid
  nome       String      @unique @db.VarChar(255)
  brinquedos Brinquedo[]

  @@map("tipos_brinquedos")
}
```

### UML

![UML Diagram](/artifacts/uml_locacao_incremento_1.png "UML para o backend sistema de locação")

#### Imagem no drive para melhor visualização

[Link para o diagrama](https://drive.google.com/file/d/1H4PxNRNaiQ9_31KxHOeHkm2vv-d7FAcE/view?usp=sharing "Acesse no google drive")

### Estruturação de pastas no Backend

Esta estrutura foi pensada para projetos de APIs em Node.js seguindo o padrão MVC (Model-View-Controller) e utilizando TypeScript para garantir tipagem e manutenibilidade. O objetivo é facilitar a escalabilidade, a organização e a separação de responsabilidades. A seguir, veja uma descrição detalhada de cada diretório e suas responsabilidades:

```plaintext
dist/                       
  // Diretório gerado após a compilação/transpilação (ex: TypeScript para JavaScript)
  
src/
├── config/                 
│   // Armazena arquivos de configuração, como variáveis de ambiente, conexões com banco de dados,
│   // integrações externas, e configurações de bibliotecas.
│   └── index.ts            // Exemplo: centraliza e exporta as configurações.
│
├── controllers/            
│   // Contém os controladores, responsáveis por receber e tratar as requisições HTTP.
│   // Cada controlador atua como intermediário entre a camada de rotas e a lógica de negócio.
│   └── UserController.ts   // Exemplo: métodos para criar, ler, atualizar e deletar usuários.
│
├── middlewares/            
│   // Armazena middlewares que interceptam requisições para validação, autenticação,
│   // tratamento de erros, log, etc.
│   └── authMiddleware.ts   // Exemplo: middleware para verificar token de autenticação.
│
├── services/               
│   // Implementa a lógica de negócio e regras específicas da aplicação.
│   // Pode incluir integrações com APIs externas, cálculos ou operações que não
│   // são específicas de um controlador.
│   └── UserService.ts      // Exemplo: lógica para processamento de dados de usuários.
│
├── routes/                 
│   // Define as rotas da API e as associa aos respectivos controladores.
│   // Facilita o gerenciamento e a organização dos endpoints.
│   └── userRoutes.ts       // Exemplo: rotas para operações de usuários.
│
├── uploads/                
│   // Pasta para armazenar arquivos enviados pelo usuário (ex: imagens, documentos).
│   // É importante garantir segurança e organização (ex: subpastas por tipo de arquivo ou usuário).
│
├── schemas/                
│   // Define a estrutura dos documentos do banco de dados.
│   // Exemplo: usando Mongoose, é onde são configuradas as propriedades, tipos, validações e índices.
│   └── userSchema.ts       // Exemplo: schema do modelo de usuário.
│
├── models/                 
│   // Define os modelos que serão usados para interagir com o banco de dados.
│   // Geralmente, estes modelos são criados a partir dos schemas (ex: via mongoose.model).
│   └── User.ts             // Exemplo: model do usuário que encapsula o schema e os métodos de acesso.
│
├── utils/                  
│   // Contém funções utilitárias e helpers que podem ser reutilizados por outras partes da aplicação.
│   └── validators/         
│       // Funções específicas para validação de dados de entrada (ex: sanitização, formato de email).
│       └── userValidator.ts
│
├── types/                  
│   // Define tipos e interfaces TypeScript para melhorar a robustez e a manutenção do código.
│   └── interfaces/         
│       // (Opcional) Interfaces específicas para estruturar dados ou contratos entre camadas.
│       └── IUser.ts
│
├── app.ts                  
│   // Configura e inicializa o servidor Express, conecta middlewares e rotas.
│
└── main.ts                 
    // Ponto de entrada da aplicação. Pode incluir inicializações, conexão com o banco de dados
    // e disparar o servidor.
    
tests/
└── ...                     
  // Testes unitários, de integração e end-to-end. Organização dos testes pode seguir a mesma
  // estrutura da pasta src para facilitar a correlação entre código e testes.

config/                    
└── ...                     
  // Arquivos de configuração para build, deploy, variáveis de ambiente específicas para cada ambiente
  // (desenvolvimento, homologação, produção), entre outros.

locales/
└── ...                     
  // Arquivos de internacionalização (i18n), com traduções e configurações para múltiplos idiomas.


```

## Parte 2: Frontend da aplicação

### Introdução ao Frontend

Nossa aplicação fará uso de ReactJS, o qual consiste em uma biblioteca JavaScript para produzir views, mais precisamente, Single Page Application (SPA), no próprio front-end da aplicação.

Assim, será implementada uma abordagem conhecida como arquitetura cliente-servidor, com frontend desacoplado; ou, mais comumente, chamado de arquitetura headless.

A camada de apresentação (frontend) é responsável por renderizar a interface do usuário, como dito.

O Backend, por sua vez, irá se dedicar à lógica de negócio e à manipulação dos dados por meio de APIs, no caso uma api REST, escrita em nodeJS. Essa separação permite uma maior flexibilidade, escalabilidade e facilita a manutenção, pois cada camada pode evoluir de forma independente.

Atualmente, embora não se tenha algo muito bem definido na literatura, aceita-se como melhor arquitetura em ReactJS a execução de projetos baseados em componentes, organizados de forma modular, permitindo escalabilidade, manutenabilidade e testabilidade.

Para tanto, adota-se aqui a componentização e o atomic designs. Neste cenário, tem-se como escopo garantir que a aplicação seja subdividida em pequenos componentes reutilizáveis, que se agrupam em grau de complexidade, do menor para o maior, até perfazerem o todo.

Aplicações React costumam dividir os componentes em duas categorias básicas maiores, quais sejam: componentes inteligentes ou “containers”, os quais se encarregam da operacionalização lógica de regras de negócio, controlar estados e renderização com base em busca em APIs; e os componentes “dumbs”, que se preocupam apenas com a apresentação da UI, mediante passagem de props.

### Estruturação de pastas no Frontend

A seguir, conforme proposto, a estrutura de pastas organizada e escalável para um projeto React:

```plaintext
public/
└── index.html              // Arquivo HTML principal da aplicação, que serve de "container" para o bundle do React

src/
├── assets/                 // Recursos estáticos da aplicação
│   ├── images/             // Imagens, ícones e outros gráficos
│   ├── fonts/              // Arquivos de fontes
│   └── styles/             // Estilos globais (útil se não houver uma pasta "styles" separada)
│
├── components/             // Componentes reutilizáveis da interface
│   ├── containers/         // Componentes “inteligentes” que contêm lógica e estado
│   └── templates/          // Componentes “presentacionais” (dumb components) focados apenas na UI, como header e footer
│
├── hooks/                  // Custom hooks para lógica reutilizável (ex.: gerenciamento de formulários, chamadas à API)
│
├── context/                // Providers e configurações da Context API para gerenciamento de estado global
│
├── reducers/               // Redutores para gerenciamento de estados mais complexos (ex.: com Redux ou hooks customizados)
│
├── services/               // Serviços para comunicação com o backend (ex.: chamadas API, centralização de requisições HTTP)
│
├── utils/                  // Funções utilitárias e helpers
│   └── validators/         // Funções para validação de dados de entrada, sanitização e formatação
│
├── types/                  // Definições de tipos e interfaces TypeScript
│   └── interfaces/         // (Opcional) Interfaces específicas para definir contratos e estruturas de dados
│
├── App.tsx                 // Componente raiz que define a estrutura global e o roteamento da aplicação
└── main.tsx                // Ponto de entrada da aplicação; responsável por renderizar o App no DOM
│
tests/
└── ...                     // Testes unitários, de integração e E2E; a estrutura dos testes pode espelhar a do src para facilitar a correlação
│
config/
└── ...                     // Arquivos de configuração (ex.: variáveis de ambiente, configurações de build e deploy)
│
styles/                    // (Opcional) Pasta para estilos globais, temas e mixins, caso não estejam centralizados em assets
│
locales/
└── ...                     // Arquivos de internacionalização (i18n) para suportar múltiplos idiomas


```
