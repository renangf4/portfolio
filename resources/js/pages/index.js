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
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                }
            },
        ]
    });
    let hcarousel = 0;
    $.each($("#slick-twoup .item"), function (index, element) {
        if ($(element).height() > hcarousel) {
            hcarousel = $(element).height()
        }
    });
    $("#slick-twoup .item").css('height', hcarousel);
});