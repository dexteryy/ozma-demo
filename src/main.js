require.config({
    baseUrl: 'src/',
    distUrl: 'dist/'
});
define('d', 'mod/d.js');
var e = 1;
var a = require('mod/a');
var b = require('mod/b');
var d = 2;
console.info(1, a);
console.info(2, b);
