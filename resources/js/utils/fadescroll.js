require('../../sass/utils/fadescroll.scss');

const effects = {
	top: {
        'animation-name': 'fade-top-active',
        'visibility': 'visible',
    },
    right: {
        'animation-name': 'fade-right-active',
        'visibility': 'visible',
    },
    left: {
        'animation-name': 'fade-left-active',
        'visibility': 'visible',
    },
    bottom: {
        'animation-name': 'fade-bottom-active',
        'visibility': 'visible',
    },
};

$.fn.fadescroll = function() {
	$(this).each(function() {
        let style = null;
        let post = $(this).offset().top;
        let fadet = $(window).scrollTop();
        let effect = $(this).attr('fade-direction');
        if(effects[effect] !== undefined) {
        	style = effects[effect];
        }
        if (post < fadet + 600) {
            $(this).css(style).css({
                'animation-duration': $(this).attr('fade-time') + 's'
            });
        }
	});
};

$(window).scroll(function() {
    $('.fade-effect').fadescroll();
});