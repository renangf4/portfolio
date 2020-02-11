$.fn.tel = function () {
    $.each($(this), (index, element) => {
        $(element).attr("href", 'tel:' + $(element).text().replace(/\s/g, ''));
    });
};
$.fn.mailto = function () {
    $.each($(this), (index, element) => {
        $(element).attr("href", 'mailto:' + $(element).text().replace(/\s/g, ''));
    });
};
$.fn.alt = function () {
    $.each($(this), (index, element) => {
        var src = $(element).attr('src');
        var alt = $(element).attr('alt');
        if (src != '' && alt == '') {
            var alt = src.split('/').pop()
                .replace(/\.[^.]*$/, '')
                .replace(/[_-]/g, ' ');

            $(element).attr('alt', alt);
        }
    });
};
$.fn.maxHeight = function () {
    let maxHeight = 0;
    $.each($(this), function (index, element) {
        maxHeight = $(element).height() > maxHeight ?
            $(element).height() : maxHeight;
    });
    $(this).css('height', maxHeight);
};
$.fn.placeholder = function () {
    $.each($(this), (index, element) => {
        var $input = $(element).find(':input');
        var $label = $(element).find('span');
        $input.attr('placeholder', $label.text());
    });
};