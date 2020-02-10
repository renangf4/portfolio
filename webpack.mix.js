const mix = require('laravel-mix');

mix.js('resources/js/pages/index.js', 'public/js')
   .sass('resources/sass/pages/index.scss', 'public/css')
   .options({
   		processCssUrls: false
   });