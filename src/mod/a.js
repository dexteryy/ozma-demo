var c = require('./c');
if (true) {
    require(['../lazy/a'], function(lazy_a){
        console.info(3, lazy_a);
    });
}
exports.name = 'mod/a';
exports.c = c;
