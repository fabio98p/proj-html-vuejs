let mix = require('laravel-mix');


mix.sass('src/master.scss', 'assets/css/').options({
    processCssUrls: false
});

mix.js('src/main.js', 'assets/js/');
// require('laravel-mix-js-partial');

// mix.jsPartial([
//     'src/partial_js/_data.js',
//     'src/main.js'
// ], 'assets/js/main.js');