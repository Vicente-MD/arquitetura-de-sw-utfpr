// src/CidadesTXTReporter.js
import * as fs from 'node:fs';
import IReport from './IReport.js';

export default class CidadesTXTReporter extends IReport {

  read(path) {
    this.cities = fs.readFileSync(path);
  }

  parse() {
    this.cities = JSON.parse(this.cities);
  }

  report() {
    let result = `Relatório de Nomes de Cidades\n=============================\n`;

    for (let i = 0; i < this.cities.length; i++) {
      result += '* ' + this.cities[i]['Nome'] + '\n';
    }

    return result;
  }
}
