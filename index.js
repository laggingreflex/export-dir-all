module.exports = typeof __webpack_require__ !== 'undefined' ? webpack() : node();

function webpack() {
  const r = require.context('./', true);
  const files = r.keys();
  console.log(`files:`, files);
  const exports = {};
  for (const file of files) {
    let match
    if (!(match = file.match(/\.\/([\w-_]+)$/))) continue;
    const moduleName = camel(match[1])
    if (moduleName === 'index') continue;
    const module = r(file);
    exports[moduleName] = module;
  }
  console.log(`exports:`, exports);
  return exports;
}

function node() {
  const files = require('fs').readdirSync(__dirname);
  const exports = {};
  for (const file of files) {
    if (file === 'index.js') continue;
    const moduleName = (file.replace(/(\.[\w]+?$)/, ''));
    const module = require('./' + file);
    exports[moduleName] = module;
  }
  console.log(`exports:`, exports);
  return exports;
}

function camel(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
    return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s+/g, '');
}
