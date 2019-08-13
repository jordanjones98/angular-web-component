const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const jsFiles = [
    './dist/element/runtime.js',
    './dist/element/polyfills.js',
    './dist/element/scripts.js',
    './dist/element/main.js'
  ];
  const cssFiles = [
    './dist/ng-element/styles.css'
  ];

  await fs.ensureDir('elements');
  await concat(jsFiles, 'elements/element.js');
  await concat(cssFiles, 'elements/style.css');
})();
