# Justification for Design Pattern Choices and Refactorings

## Design Patterns

### 1. Factory Method (Creational Pattern)

**Justification:**
The Factory Method allows for the creation of objects of different types of reports (`CidadesHTMLReporter` and `CidadesTXTReporter`) without exposing the creation logic to the client. This pattern is useful here because it encapsulates the logic for creating different types of reports, making it easier to extend the system to support new report formats without modifying existing code.

### 2. Adapter (Structural Pattern)

**Justification:**
The Adapter allows different report classes (`CidadesHTMLReporter` and `CidadesTXTReporter`) to implement a common interface (`IReport`). This facilitates the integration and use of these classes interchangeably, promoting consistency in use and integration with the rest of the system.

### 3. Strategy (Behavioral Pattern)

**Justification:**
The Strategy defines a family of algorithms, allowing the algorithm to be selected at runtime. In our case, this is useful for dynamically selecting the report format (`html` or `txt`) based on user input. This pattern allows new report formats to be added easily, improving the system's extensibility.

## Refactorings Using SOLID Principles

### 1. Single Responsibility Principle (SRP)

**Refactoring:**
The `CidadesHTMLReporter` and `CidadesTXTReporter` classes were refactored to ensure each has a single responsibility: reading, parsing, and generating the report. This simplifies the code and makes it easier to maintain, ensuring each class has a well-defined purpose.

### 2. Open/Closed Principle (OCP)

**Refactoring:**
By using the Factory Method pattern, we open the system for extension, allowing the addition of new report types without modifying existing code. This is achieved by creating new reports that implement the `IReport` interface and registering them in the report factory.

### 3. Dependency Inversion Principle (DIP)

**Refactoring:**
To ensure high-level classes do not depend on low-level classes, both now depend on abstractions. We created a common interface `IReport` implemented by `CidadesHTMLReporter` and `CidadesTXTReporter`, ensuring that `index.js` and other parts of the system depend on the `IReport` abstraction rather than concrete implementations.

## Test Script

**Justification:**
A test script was created to ensure the consistency of expected outputs after the changes. This script tests whether the reports generated in `html` and `txt` formats match the expected outputs, ensuring that the refactorings and the application of design patterns have not introduced errors into the system.

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
    <title>City Names Report</title>
  </head>
  <body>
    <h1>City Names Report</h1>
    <ul>
       <li>Afonso Cláudio</li>
       <li>Água Doce do Norte</li>
       <li>Águia Branca</li>
       <li>Alegre</li>
    </ul>
  </body>
</html>`;

const expectedTXTOutput = `City Names Report
=============================
* Afonso Cláudio
* Água Doce do Norte
* Águia Branca
* Alegre
`;

testReport('html', expectedHTMLOutput);
testReport('txt', expectedTXTOutput);

console.log('All tests passed');
```