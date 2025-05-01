# Parte 1: Backend da aplicação

## Requisitos funcionais (RF)

| **Código** | **Requisito** | **Ator** | **Relacionados** |
|------------|--------------|----------|------------------|
| **RF01** | O sistema deve **gerenciar** informações sobre funcionários: *CPF, nome, senha, ativo, telefone e função*. | Gerente (Administrador do site) | - |
| **RF02** | O sistema deve **gerenciar** informações sobre brinquedos: *código único, nome, tipo de brinquedo, ativo, marca, data da aquisição e valor da locação*. | Almoxarife | RF03 |
| **RF03** | O sistema deve **manter** informações sobre tipos de brinquedos: *código único, ativo e nome do tipo*. | Almoxarife | - |
| **RF04** | O sistema deve **manter** informações sobre clientes: *CPF, nome, endereço, ativo, data de nascimento e telefone*. | Analista de cadastro | - |
| **RF05** | O sistema deve **incluir** informações sobre locações: *código único da locação,  ativo, data e horário atual, CPF do cliente, código único do brinquedo, valor unitário do item locado,  ativo, valor total da locação e data para devolução*. | Agente de locação | RF02, RF04, RN02 |
| **RF06** | O sistema deve **incluir** informações sobre pagamento: *código único da locação, ativo, nome e CPF do cliente, data do pagamento, valor da locação e valor do pagamento*. | Caixa | RF02, RF05, RN01 |
| **RF07** | O sistema deve **permitir** acesso aos recursos mediante login com *senha* e *CPF*. | Sistema | RF01, RNF06 |
| **RF08** | O sistema deve **permitir** o encerramento de sessão. | Sistema | RF01, RNF06 |

### Definições

- **Gerenciar:** Incluir, alterar e excluir.
- **Manter:** Incluir e alterar.

## Requisitos Não Funcionais (RNF)

| **Código** | **Requisito** | **Atores** | **Relacionados** |
|------------|--------------|------------|------------------|
| **RNF01** | O sistema deve ser acessível via internet, utilizando uma arquitetura cliente-servidor baseada nos protocolos **HTTP/HTTPS**. Deve-se priorizar **HTTPS** para garantir segurança na transmissão de dados por meio do protocolo **TLS (Transport Layer Security)**. | Usuário final, Administrador | - |
| **RNF02** | O sistema deve ser totalmente compatível e funcional nos navegadores **Google Chrome e Mozilla Firefox** versões Desktop, garantindo suporte para suas versões mais recentes e futuras atualizações. | Usuário final | - |
| **RNF03** | O sistema deve oferecer uma interface intuitiva, seguindo diretrizes reconhecidas de usabilidade, como os princípios de **Jakob Nielsen**. Para melhorar a experiência do usuário, a interface deve:<br> - Utilizar **listas de seleção** para facilitar a inserção de dados.<br> - Exibir **notificações sobre campos inválidos** e fornecer sugestões de preenchimento.<br> - Seguir um **padrão de design visual** baseado em uma paleta de três cores principais, aplicando o conceito de **Color Harmony** para garantir consistência estética. | Usuário final | - |
| **RNF04** | O sistema deve implementar **mecanismos seguros de autenticação** para impedir acessos não autorizados. Os métodos podem incluir:<br> - **OAuth 2.0** ou **JWT (JSON Web Token)** para autenticação baseada em tokens.<br> - **Criptografia de credenciais** para proteção dos dados de login. | Administrador, Usuário final | RNF06 |
| **RNF05** | O sistema deve garantir a **privacidade e segurança dos dados** dos usuários por meio das seguintes medidas:<br> - **Criptografia de armazenamento** usando, por exemplo, **criptografia Bcrypt** para dados sensíveis como senhas.<br> - **Restrições de acesso** baseadas em regras de permissão.<br> - Implementação de **UUIDs (Identificadores Únicos Universais)** para a identificação de recursos, garantindo rastreabilidade e segurança. | Administrador, Usuário final | RNF04, RNF06 |
| **RNF06** | O sistema deve permitir a **criação e gestão de perfis de usuários** com diferentes níveis de acesso, garantindo que cada perfil tenha permissões apropriadas. Exemplos de níveis incluem:<br> - **Caixa** – Acesso a operações financeiras.<br> - **Gerente** – Controle total e gerenciamento de usuários.<br> - **Analista de Cadastro** – Permissão para modificar registros cadastrais.<br> - **Agente de Locação** – Gerenciamento de locações e contratos.<br> - **Almoxarife** – Controle de estoque e produtos. | Administrador | RNF04, RNF05 |

## Descrição das regras de negócio (RN)

| **Código** | **Regra de Negócio** |
|------------|----------------------|
| **RN01** | O pagamento é feito no momento da locação e em dinheiro. |
| **RN02** | O prazo máximo para devolução dos brinquedos é de 01 dia (ou seja, 1 dia após a entrega do brinquedo locado). |
