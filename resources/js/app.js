require('./bootstrap');
require('./utils/functions');
// require('./utils/preloader');
require('bootstrap/js/dist/button');
require('bootstrap/js/dist/collapse');

$(document).ready(function(){
    $('img').alt();
    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
    $(window).scrollTop($(window).scrollTop() + 1);
});