// src/ReportFactory.js
import CidadesHTMLReporter from './CidadesHTMLReporter.js';
import CidadesTXTReporter from './CidadesTXTReporter.js';

export default class ReportFactory {
  static createReport(format) {
    switch (format) {
      case 'html':
        return new CidadesHTMLReporter();
      case 'txt':
        return new CidadesTXTReporter();
      default:
        throw new Error('Formato de relatório não suportado');
    }
  }
}
