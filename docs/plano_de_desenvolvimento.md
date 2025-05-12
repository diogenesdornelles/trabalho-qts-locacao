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

Foi nos proposta a inclusão de uma locação, que é a atividade fim de todo o fluxo de trabalho da empresa. Portanto, deve-se ter no mínimo um funcionário de cada categoria para perfectibilizar cada operação ligada à inclusão, à exceção do caixa, que é responsável pela inclusão de pagamento.

Ainda, é preciso implementar, por óbvio, um tipo de brinquedo, um brinquedo, uma locação, um cliente e um brinquedo locado, para que o processo de incluir uma locação seja realizado com sucesso. Basta ver a dependência de requisitos estabelecidos em cada requisitos e suas dependências, conforme se verá abaixo. Optou-se, ainda, por não incluir quantidades de brinquedos e de brinquedos locados para: 1. não ampliar demasiadamente a lógica de validação da locação e de inclusão das referidas entidades, simplificando a proposta que nos foi passada e 2. não foi enunciado expressamente nos requisitos do sistema.

A garantia de que uma determinada locação somente pode ser concluída pelo pagamento (ou seja, a entrega de brinquedos ao cliente é condicionada ao pagamento) vem pela definição do campo *status de pagamento*, que deve ser altrado de *pendente* para *pago*.

Não haverá o *hard delete* dos dados armazenados em banco, o que se justifica para fins de controle de estatísticas e de integridade referencial dos registros salvos. Portanto, as entidades terão uma campo *ativo* como estratégia da implementação de soft delete. A inativação do item é possível através de *update* e *delete*.

Por fim, no intuito de implementar o sistema de login, deve ser gerado um token de autenticação e de autorização. Optou-se pela autenticação com *JWT* (JSON Web Token) que é stateless, significando que o servidor não precisa manter informações de sessão, o que facilita a escalabilidade e a segurança.

As atividades a serem feitas, de forma resumida, envolvem a execução sucessiva das etapas relacionadas à produção de software seguindo o modelo incremental. Em apertada síntese, serão necessários a realização de reuniões, a análise de requisitos, modelagem e design do software, implementação do software, mediante construção de telas e da lógica de acesso às rotas para o CRUD de dados disponíveis através de uma API Rest, bem como testes e entrega.

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

    - *NodeJS API Rest: Construção das respectivas rotas de acesso aos recursos da aplicação no backend*:
        - Funcionários;
        - Clientes;
        - Brinquedos;
        - Tipo Brinquedos;
        - Locações;
        - Pagamentos;
        - Brinquedos Locados;
        - Login;

    - *React/Next: Construção das telas junto ao frontend*:
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
| **01** | Reunião inicial | 1 dia | 07/03/2025 | Líder | Presencial |
| **02** | Análise de requisitos | 2 dias | 09/03/2025 | Analista | Editor de texto |
| **03** | Caso de uso principal | 3 dias | 12/03/2025 | Analista | Editor de texto |
| **04** | Regras de negócio | 2 dias | 14/03/2025 | Analista | Editor de texto |
| **05** | Diagrama de Casos de Uso | 2 dias | 16/03/2025 | Analista | DrawIO |
| **06** | Diagrama ER | 2 dias | 18/03/2025 | Analista | PgAdmin4 |
| **07** | Diagrama UML de Classes | 3 dias | 21/03/2025 | Analista | DrawIO/PlantUML |
| **08** | Planejamento UI/UX | 2 dias | 23/03/2025 | Analista e Dev Frontend | Figma |
| **09** | Reunião intermediária 1 | 1 dia | 24/04/2025 | Líder | Presencial |
| **10** | Desenvolvimento Backend | 20 dias | 14/04/2025 | Dev Backend | NodeJS/Express/Postgres/Prisma |
| **11** | Desenvolvimento Frontend | 20 dias | 24/04/2025 | Dev Frontend | React/TypeScript/Git |
| **12** | Reunião intermediária 2 | 1 dia | 25/04/2025 | Líder | Presencial |
| **13** | Testes funcionais  | 7 dias | 02/05/2025 | Equipe | Ambiente NodeJS |
| **14** | Revisão de código | 4 dias | 06/05/2025 | Equipe | Tecnologias acima |
| **15** | Testes funcionais  | 2 dias | 08/05/2025 | Equipe | Ambiente NodeJS |
| **16** | Reunião final | 1 dia | 09/05/2025 | Líder | Presencial |
| **17** | Entrega final | 1 dia | 15/05/2025 | Líder | Moodle |

## Responsáveis pela Execução

- **Líder do projeto**: Organiza as atividades e acompanha a execução;

- **Analista de Projeto**: Responsável pela documentação e modelagem do sistema;

- **Desenvolvedores Backend**: Implementam a API e banco de dados; e

- **Desenvolvedores Frontend**: Criam a interface do usuário e conectam ao backend.

## Recursos Tecnológicos

- **Backend**: [Node.js](https://nodejs.org/en), [Express](https://expressjs.com/pt-br/), [PostgreSQL](https://www.postgresql.org/), [Prisma ORM](https://www.prisma.io/), [TypeScript](https://www.typescriptlang.org/), [JWT (Json Web Token)](https://www.npmjs.com/package/jsonwebtoken), [Docker](https://www.docker.com/);

- **Frontend**: [React](https://react.dev/), [NextJS](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), [Styled-components](https://styled-components.com/), [Bootstrap](https://getbootstrap.com/), [Tailwind](https://tailwindcss.com/) (ou outra ferramenta framework de estilização);

- **Ferramentas de Modelagem**: [Draw.io](https://app.diagrams.net/), [PgAdmin4](https://www.pgadmin.org/), [Figma](https://www.figma.com/), [PlantUML](https://plantuml.com/); e

- **Versionamento**: [Git](https://git-scm.com/downloads), [GitHub](https://github.com/).
  
- **Virtualização**: [Docker](https://www.docker.com/) e [Compose](https://docs.docker.com/compose/).
