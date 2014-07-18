
# Ozma Demo

> * [Ozma](https://github.com/dexteryy/ozma.js): Intelligent autobuild tool for [oz.js](http://ozjs.org)

## Installing and Building

```
npm install ozma -g
ozma src/main.js
```

or 

```
npm install
grunt ozma
```

## Configuration files

* [ozconfig.json](https://github.com/dexteryy/ozma-demo/blob/master/src/ozconfig.json) or [Gruntfile.js](https://github.com/dexteryy/ozma-demo/blob/master/Gruntfile.js)

## Source files

* [main.js (build script)](https://github.com/dexteryy/ozma-demo/blob/master/src/main.js)
* [mod/a.js](https://github.com/dexteryy/ozma-demo/blob/master/src/mod/a.js)
* [mod/b.js](https://github.com/dexteryy/ozma-demo/blob/master/src/mod/b.js)
* [mod/c.js](https://github.com/dexteryy/ozma-demo/blob/master/src/mod/c.js)
* [mod/d.js](https://github.com/dexteryy/ozma-demo/blob/master/src/mod/d.js)
* [lazy/a.js](https://github.com/dexteryy/ozma-demo/blob/master/src/lazy/a.js)
* [lazy/b.js](https://github.com/dexteryy/ozma-demo/blob/master/src/lazy/b.js)

## Compiled files

* dist/main.js

```javascript
/* @source lib/oz.min.js */;
// ...

require.config({ enable_ozma: true });

/* @source mod/c.js */;
define("mod/c", [], function(require, exports, module){
    module.exports = {
        name: 'mod/c'
    };
});

/* @source mod/d.js */;
define('d', [
  "mod/c"
], function(c){
    return {
        name: 'd',
        c: c
    };
});

/* @source mod/b.js */;
define("mod/b", [
  "d"
], function(__oz0, require, exports){
    exports.name = 'mod/b';
    exports.d = require("d");
});

/* @source mod/a.js */;
define("mod/a", [
  "mod/c"
], function(__oz0, require, exports, module){
    var c = require("mod/c");
    if (true) {
        require([
          "lazy/a"
        ], function(lazy_a){
            console.info(3, lazy_a);
        });
    }
    exports.name = 'mod/a';
    exports.c = c;
});

/* @source  */;
require.config({
    baseUrl: 'src/',
    distUrl: 'dist/'
});
define('d', 'mod/d.js');
var e = 1;
require(["mod/a", "mod/b"], function(__oz0, __oz1, require, exports, module){
    var a = require('mod/a');
    var b = require('mod/b');
    var d = 2;
    console.info(1, a);
    console.info(2, b);
});
```

* dist/lazy/a.js

```javascript
/* @source lazy/b.js */;
define("lazy/b", [], function(require, exports, module){
    exports.name = 'lazy/b';
});

/* @source lazy/a.js */;
define('lazy/a', [
  "lazy/b"
], function(lazy_b){
    return {
        name: 'lazy/a',
        lazyB: lazy_b
    };
});
```
