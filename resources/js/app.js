require('./bootstrap');
require('./utils/functions');
require('bootstrap/js/dist/button');
require('bootstrap/js/dist/collapse');

$(window).on('load', function () {
    $('#preloader').delay(0).fadeOut('slow');
    $('body').delay(10).css({ 'overflow': 'visible' });
})

$(document).ready(function(){
    $('img').alt();

    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    $(window).scrollTop($(window).scrollTop() + 1);
});