require('../app');
// require('../utils/fadescroll');
// require('bootstrap/js/dist/carousel');
require('slick-carousel');
require('slick-carousel/slick/slick.scss');
$(document).ready(function () {
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
    $('#contact label').placeholder();
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