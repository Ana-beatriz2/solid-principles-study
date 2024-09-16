# SOLID Principles

Os princípios SOLID são um conjunto de cinco princíos que ajudam a construir um código limpo, flexível e fácil de manter. Embora sejam mais associados à Programação Orientada a Objetos (POO), os conceitos podem ser aplicados a outros paradigmas. Em alguns casos, pode ser mais adequado desenvolver um código sem se preocupar com os princípios inicialmente, mas eles fornecem uma base sólida para criar sistemas escaláveis e bem estruturados.

## 1. Single Responsibility Principle (SRP)
> **Princípio da Responsabilidade Única**

Uma classe deve ter apenas uma responsabilidade, ou seja, ela deve realizar uma única tarefa ou função. Isso facilita a manutenção e a compreensão do código, além de reduzir o acoplamento entre as partes do sistema.

### Exemplo:
Uma classe que manipula arquivos não deve também ser responsável por processar dados. Cada responsabilidade deve ser separada em classes distintas.

## 2. Open/Closed Principle (OCP)
> **Princípio do Aberto/Fechado**

Entidades (classes, módulos, funções) devem estar **abertas para extensão** (novas funcionalidades), mas **fechadas para modificação** (não alterar o código-fonte original). Isso significa que, ao adicionar novas funcionalidades, você deve estender o comportamento existente sem modificar o código já implementado.

### Exemplo:
Em vez de modificar uma classe existente para suportar novos tipos de pagamento, podemos criar subclasses que herdam dessa classe base.

## 3. Liskov Substitution Principle (LSP)
> **Princípio da Substituição de Liskov**

Subtipos devem ser substituíveis por seus tipos base sem alterar o comportamento esperado do programa. Ou seja, se o programa espera uma instância de uma classe base, ele deve ser capaz de usar qualquer classe derivada dela sem problemas.

### Exemplo:
Se o meu programa espera um `Animal`, algo do tipo `Cachorro` (que herda de Animal) deve servir como qualquer outro Animal.


## 4. Interface Segregation Principle (ISP)
> **Princípio da Segregação de Interface**

Os clientes não devem ser forçados a depender de interfaces, tipos ou membros abstratos que não utilizam. É melhor ter várias interfaces específicas do que uma única interface geral com muitos métodos, alguns dos quais podem não ser necessários para todos os clientes.

### Exemplo:
Em vez de uma interface geral `IVeículo` com métodos como `dirigir` e `navegar`, podemos ter interfaces menores, como `ICarro` e `IBarco`, com apenas os métodos necessários para cada um.

## 5. Dependency Inversion Principle (DIP)
> **Princípio da Inversão de Dependência**

Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações. Isso permite que o sistema seja mais flexível e independente dos detalhes de implementação.

## Vantagens do SOLID:
- **Código modular**: Facilita a manutenção e reutilização.
- **Reutilizável**: Segue o princípio DRY (Don't Repeat Yourself).
- **Testável**: Facilita a criação de testes unitários.
- **Baixo acoplamento**: Reduz a dependência entre as partes do sistema.
- **Alta coesão**: Classes e módulos focam em uma única responsabilidade.
- **Expansível**: O código é mais fácil de estender com novas funcionalidades.
- **Fácil manutenção**: Alterações em uma parte do sistema têm menos impacto em outras.

## Desvantagens do SOLID:
- **Complexidade**: Pode aumentar a complexidade do design do sistema.
- **Maior quantidade de código**: Às vezes, mais código é necessário para seguir os princípios.
- **Maior tempo de desenvolvimento**: Implementar seguindo os princípios SOLID pode levar mais tempo.
