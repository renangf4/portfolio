require('../app');
// require('../utils/fadescroll');
// require('bootstrap/js/dist/carousel');
require('slick-carousel');
require('slick-carousel/slick/slick.scss');
$(document).ready(function () {
    $('.slick-twoup').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
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
                    slidesToShow: 2,
                }
            }
        ]
    });
});