require('../app');
require('../utils/fadescroll');
require('slick-carousel');
require('slick-carousel/slick/slick.scss');
$(document).ready(function () {
    $(window).scrollTop($(window).scrollTop() + 1);
    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
    let headerHeight = $('header').outerHeight();
    $('#header').height(headerHeight);
    $('a.anchor').click(function (event) {
        var id = $(this).attr('href'),
            targetOffset = ($(id).offset().top - headerHeight);
        $('html, body').animate({
            scrollTop: targetOffset
        }, 2000);
    });
    $('#slick-twoup').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        arrows: false,
        lazyLoad: 'ondemand',
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    });
    $('#slick-twoup .item').maxHeight();
    $('#contato label').placeholder();
    $('img').alt();
});

$('#xknrpdle').submit(function($event) {
    $event.preventDefault();
    let $button = $(this).find('[type=submit]'),
        $form   = $(this);
    $button.prop('disabled', true);
    $.ajax({
        crossDomain: true,
        url: $(this).attr('action'),
        type: $(this).attr('method'),
        data: $(this).serializeArray(),
        headers: {
            Accept: "application/json; charset=utf-8",
        },
    }).done(function(data) {
        if (data['ok'] != undefined && data['ok']) {
            $form.trigger('reset');
            alert('Enviado com sucesso!');
        }
    }).fail(function(data) {
        console.log(data);
        alert('Ops...Tente novamente, mais tarde!');
    }).always(function() {
        $button.prop('disabled', false);
    });
});