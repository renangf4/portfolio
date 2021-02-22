const mix = require('laravel-mix');

mix.js('resources/js/pages/index.js', 'public/js')
   .sass('resources/sass/pages/index.scss', 'public/css')
   .sass('resources/sass/includes/fonts.scss', 'public/css')
   .options({
   		processCssUrls: false
   });