// index.js
import ReportFactory from './src/ReportFactory.js';

const [node, script, filename, format] = process.argv;

console.log('Filename:', filename);
console.log('Format:', format);

try {
  let reporter = ReportFactory.createReport(format);
  reporter.read(filename); 
  reporter.parse();
  let output = reporter.report(); 
  console.log(output);
} catch (error) {
  console.error('Erro:', error.message);
}
