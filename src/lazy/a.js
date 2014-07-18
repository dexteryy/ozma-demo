define('lazy/a', ['./b'], function(lazy_b){
    return {
        name: 'lazy/a',
        lazyB: lazy_b
    };
});
