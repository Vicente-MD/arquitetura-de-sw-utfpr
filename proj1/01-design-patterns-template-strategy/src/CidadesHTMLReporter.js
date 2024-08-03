// src/CidadesHTMLReporter.js
import * as fs from 'node:fs';
import IReport from './IReport.js';

export default class CidadesHTMLReporter extends IReport {

  read(path) {
    this.cities = fs.readFileSync(path);
  }

  parse() {
    this.cities = JSON.parse(this.cities);
  }

  report() {
    let result = `
  <!DOCTYPE HTML>
  <html>
    <head>
      <meta http-equiv="content-type" content="text/html; charset=utf-8" />
      <title>Relatório de Nomes de Cidades</title>
    </head>
    <body>
      <h1>Relatório de Nomes de Cidades</h1>
      <ul>
  `;

    for (let i = 0; i < this.cities.length; i++) {
      result += '     <li>' + this.cities[i]['Nome'] + '</li>\n';
    }

    result += `
      </ul>
    </body>
  </html>`;

    return result;
  }
}
