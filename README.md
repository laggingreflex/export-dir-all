# export-dir-all

Export all files/sub-modules from current dir in **Node** ***or*** **Webpack**


## Install

You have to copy [`index.js`](index.js) into your project.

This cannot be installed/required as an external module, because of how webpack processes require statements, this file must directly be responsible for exporting other modules.

## Usage

```
your-project
├───main.js
└───utils
    ├───index.js        // place "index.js" file form this repo here
    ├───module-a.js
    ├───module-b.js
    └───module-c
        └───index.js
```
**`main.js`**

```js
const utils = require('./utils');

console.log(utils);
```
```
{
  moduleA: { ... }
  moduleB: { ... }
  moduleC: { ... }
}
```

* `index.js` ignored
* File-names `camelCased`
* `subdir/index.js` exported as `subdir`
