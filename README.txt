# MINI ERP - FÁBRICA DE CORTINAS

## Projeto Final - Raciocínio Lógico Algorítmico

### Universidade de Fortaleza - UNIFOR

**Disciplina:** Raciocínio Lógico Algorítmico

**Aluno:** Bruno Azevedo Moraes

---

# Sobre o Projeto

O projeto consiste no desenvolvimento de um Mini ERP para uma fábrica de cortinas, criado utilizando JavaScript puro.

O sistema simula o fluxo de produção de uma empresa, desde o cadastro do pedido até a conclusão do produto, passando pelos setores de Almoxarifado, Produção e Expedição.

O objetivo é aplicar os conceitos estudados na disciplina de Raciocínio Lógico Algorítmico através da implementação de estruturas de decisão, repetição, vetores, funções e manipulação de dados.

---

# Fluxo do Sistema

O processo implementado segue o seguinte fluxo:

1. Cadastro do Pedido
2. Envio de materiais pelo Almoxarifado
3. Recebimento dos materiais pela Produção
4. Consumo dos materiais na fabricação
5. Finalização do Pedido
6. Consulta de pedidos concluídos

---

# Funcionalidades

## 1. Criar Pedido

Permite cadastrar:

* Nome do cliente
* Modelo da cortina

  * Cortina Tradicional
  * Cortina Motorizada
* Quantidade solicitada

Cada pedido recebe um identificador único (ID) e inicia com o status:

```text
Pedido Criado
```

---

## 2. Listar Pedidos

Exibe todos os pedidos cadastrados contendo:

* ID
* Cliente
* Modelo
* Quantidade
* Status

---

## 3. Almoxarifado

Responsável pelo envio de materiais para a produção.

### Cortina Tradicional

Materiais:

* Trilho
* Tecido
* Argolas

### Cortina Motorizada

Materiais:

* Trilho
* Tecido
* Argolas
* Motor
* Controle

---

## 4. Produção

Recebe os materiais enviados pelo almoxarifado.

O sistema realiza validações para verificar se existe quantidade suficiente de componentes antes da transferência.

---

## 5. Consulta de Estoque

Permite visualizar:

### Almoxarifado

* Estoque Tradicional
* Estoque Motorizado

### Produção

* Materiais recebidos para fabricação
* Quantidades disponíveis

---

## 6. Finalização da Produção

Permite concluir um pedido através do seu ID.

Durante o processo:

* Os materiais são consumidos da produção;
* O status do pedido é atualizado;
* O pedido é marcado como concluído.

Status final:

```text
Pedido Concluído
```

---

## 7. Pedidos Concluídos

Exibe todos os pedidos finalizados contendo:

* ID
* Cliente
* Modelo
* Quantidade
* Status

---

# Estruturas Utilizadas

Durante o desenvolvimento foram utilizados:

* Variáveis
* Arrays
* Estruturas Condicionais (if / else)
* Estruturas de Repetição (while e for)
* Funções
* Switch Case
* Entrada de dados com prompt()
* Saída de dados com console.log()

---

# Estrutura dos Dados

Cada pedido é armazenado em um vetor no seguinte formato:

```javascript
pedido[0] = ID;
pedido[1] = Cliente;
pedido[2] = Modelo;
pedido[3] = Quantidade;
pedido[4] = Status;
```

---

## Como Executar

O sistema foi desenvolvido utilizando JavaScript puro e pode ser executado diretamente no navegador através do Programiz.

## Execução do Projeto

1. Acesse o ambiente online do Programiz:

   https://www.programiz.com/javascript/online-compiler/

2. Apague o código de exemplo exibido pelo editor.

3. Cole todo o código do projeto na área de programação.

4. Clique no botão **Run** para executar o sistema.

5. O menu principal será exibido através de caixas de diálogo (`prompt`).

6. Utilize as opções disponíveis para navegar entre os módulos do sistema.

---

## Fluxo de Teste Recomendado

Para demonstrar todas as funcionalidades do sistema, siga a sequência abaixo:

```text
1 - Criar Pedido
3 - Almoxarifado
1 ou 2 - Inserir Materiais
4 - Produção
1 ou 2 - Receber Materiais
5 - Consultar Estoque
6 - Finalizar Produção
7 - Pedidos Concluídos
```

---

## Observações

* O sistema utiliza armazenamento temporário em memória.
* Os dados permanecem disponíveis apenas durante a execução.
* Ao atualizar a página ou reiniciar o programa, todas as informações cadastradas serão perdidas.
* Não é necessária a instalação de bibliotecas ou dependências externas.
* O projeto foi desenvolvido exclusivamente com JavaScript puro.


---

# Considerações Finais

Este projeto foi desenvolvido com o objetivo de aplicar os conceitos fundamentais de lógica de programação em um cenário empresarial simplificado.

O sistema demonstra o controle completo do fluxo de um pedido, desde sua criação até sua conclusão, simulando a integração entre os setores de Almoxarifado, Produção e Expedição dentro de uma fábrica de cortinas.
