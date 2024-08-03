# Justificativa das Escolhas de Padrões de Projeto e Refatorações

## Padrões de Projeto

### 1. Factory Method (Padrão Criacional)

**Justificativa:**
O Factory Method permite a criação de objetos de diferentes tipos de relatórios (`CidadesHTMLReporter` e `CidadesTXTReporter`) sem expor a lógica de criação ao cliente. Este padrão é útil aqui porque encapsula a lógica de criação dos diferentes tipos de relatórios, facilitando a extensão do sistema para suportar novos formatos de relatórios sem modificar o código existente.

### 2. Adapter (Padrão Estrutural)

**Justificativa:**
O Adapter permite que diferentes classes de relatórios (`CidadesHTMLReporter` e `CidadesTXTReporter`) implementem uma interface comum (`IReport`). Isso facilita a integração e uso dessas classes de maneira intercambiável, promovendo a consistência no uso e integração com o restante do sistema.

### 3. Strategy (Padrão Comportamental)

**Justificativa:**
O Strategy define uma família de algoritmos, permitindo que o algoritmo a ser usado seja selecionado em tempo de execução. No nosso caso, isso é útil para selecionar o formato do relatório (`html` ou `txt`) dinamicamente com base no input do usuário. Este padrão permite que novos formatos de relatório sejam adicionados facilmente, melhorando a extensibilidade do sistema.

## Refatorações Usando os Princípios SOLID

### 1. Single Responsibility Principle (SRP)

**Refatoração:**
As classes `CidadesHTMLReporter` e `CidadesTXTReporter` foram refatoradas para garantir que cada uma tenha uma única responsabilidade: ler, parsear e gerar o relatório. Isso simplifica o código e facilita a manutenção, garantindo que cada classe tenha um propósito bem definido.

### 2. Open/Closed Principle (OCP)

**Refatoração:**
Com o uso do padrão Factory Method, conseguimos abrir o sistema para extensão, permitindo a adição de novos tipos de relatórios sem modificar o código existente. Isso é alcançado criando novos relatórios que implementam a interface `IReport` e registrando-os na fábrica de relatórios.

### 3. Dependency Inversion Principle (DIP)

**Refatoração:**
Para garantir que as classes de alto nível não dependam de classes de baixo nível, ambas passam a depender de abstrações. Criamos uma interface comum `IReport` que é implementada por `CidadesHTMLReporter` e `CidadesTXTReporter`, garantindo que o `index.js` e outras partes do sistema dependam da abstração `IReport` em vez de implementações concretas.

## Script de Teste

**Justificativa:**
Um script de teste foi criado para garantir a consistência das saídas esperadas após as alterações. Este script testa se os relatórios gerados nos formatos `html` e `txt` correspondem às saídas esperadas, assegurando que as refatorações e a aplicação dos padrões de projeto não introduziram erros no sistema.

```js
// test.js
import ReportFactory from './src/ReportFactory.js';
import assert from 'assert';

function normalizeWhitespace(str) {
    return str.replace(/\s+/g, ' ').trim();
}

function testReport(format, expectedOutput) {
    let reporter = ReportFactory.createReport(format);
    reporter.read('./data/cidades-test.json');
    reporter.parse();
    let output = reporter.report();
    assert.strictEqual(normalizeWhitespace(output), normalizeWhitespace(expectedOutput));
}

const expectedHTMLOutput = `<!DOCTYPE HTML>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <title>Relatório de Nomes de Cidades</title>
  </head>
  <body>
    <h1>Relatório de Nomes de Cidades</h1>
    <ul>
       <li>Afonso Cláudio</li>
       <li>Água Doce do Norte</li>
       <li>Águia Branca</li>
       <li>Alegre</li>
    </ul>
  </body>
</html>`;

const expectedTXTOutput = `Relatório de Nomes de Cidades
=============================
* Afonso Cláudio
* Água Doce do Norte
* Águia Branca
* Alegre
`;

testReport('html', expectedHTMLOutput);
testReport('txt', expectedTXTOutput);

console.log('Todos os testes passaram');
```
## Utilização do projeto

### Estrutura do Projeto

O projeto possui a seguinte estrutura:

```
/meu-projeto
|-- /data
|   |-- cidades-1.json
|   |-- cidades-2.json
|   |-- cidades-test.json
|   |-- cidades.csv
|-- /src
|   |-- CidadesHTMLReporter.js
|   |-- CidadesTXTReporter.js
|   |-- IReport.js
|   |-- ReportFactory.js
|-- index.js
|-- test.js
```

### Executar o script para gerar um relatório HTML

```bash
node index.js ./data/cidades-2.json html
```

### Executar o script para gerar um relatório TXT

```bash
node index.js ./data/cidades-2.json txt
```

### Utilização pelo `test.js`

Para garantir que tudo está funcionando corretamente, pode-se executar o script de teste (`test.js`) criado anteriormente:

```bash
node test.js
```

Se tudo estiver correto, a saída será:

```bash
Todos os testes passaram
```

---