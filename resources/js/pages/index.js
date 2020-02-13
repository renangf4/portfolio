require('../app');
require('../utils/fadescroll');
require('slick-carousel');
require('slick-carousel/slick/slick.scss');
$(document).ready(function () {
    $(window).scrollTop($(window).scrollTop() + 1);
    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
    $('a.anchor').click(function (event) {
        var id = $(this).attr('href'),
            targetOffset = $(id).offset().top - 58;
        $('html, body').animate({
            scrollTop: targetOffset
        }, 2000);
    });
    $('#slick-twoup').slick({
        centerMode: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        arrows: false,
        lazyLoad: 'ondemand',
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    centerMode: false,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 425,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                }
            },
        ]
    });
    $('#contato label').placeholder();
    $('img').alt();
    $('.mail').mailto();
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
            swal({
                icon: 'success',
                text: 'Enviado com sucesso!'
            }).then(function() {
                $form.trigger('reset');
                grecaptcha.reset();
            })
        }
    }).fail(function(data) {
        let message = 'Tente mais tarde';
        if (data.responseJSON.error == 'reCAPTCHA failed') {
            message = 'Prove que não é um robô';
        }
        swal({
            icon: 'error',
            text: message
        });
    }).always(function() {
        $button.prop('disabled', false);
    });
});