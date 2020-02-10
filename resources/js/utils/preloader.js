require('../../sass/utils/preloader.scss');
$(window).on('load', function () {
    $('#preloader').delay(0).fadeOut('slow');
    $('body').delay(10).css({ 'overflow': 'visible' });
})