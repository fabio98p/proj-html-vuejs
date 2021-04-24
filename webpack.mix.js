let mix = require('laravel-mix');

mix.js('src/main.js', 'assets/js/');

mix.sass('src/master.scss', 'assets/css/').options({
    processCssUrls: false
});