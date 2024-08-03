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
