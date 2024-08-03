// src/IReport.js
export default class IReport {
    read(path) {
      throw new Error('Método read(arg1) deve ser implementado');
    }
    parse() {
      throw new Error('Método parse() deve ser implementado');
    }
    report() {
      throw new Error('Método report() deve ser implementado');
    }
  }
  