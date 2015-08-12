var path = require('path');

var appRoot = 'src/';
var outputRoot = 'dist/';
var packageRoot = 'jspm_packages/';

module.exports = {
  root: appRoot,
  tsSource: appRoot + '**/*.ts',
  jspmDefinitions: packageRoot + '**/*.d.ts',
  source: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  style: 'styles/**/*.css',
  output: outputRoot,
  doc:'./doc',
  e2eSpecsSrc: 'test/e2e/src/*.js',
  e2eSpecsDist: 'test/e2e/dist/'
};
