$(document).ready(function() {
    $('.buttonAdj').on('click', function() {
        var targetId = $(this).data('target');
        var targetElement = $(targetId);

        if (targetElement.length) {
            $('html, body').animate({
                scrollTop: targetElement.offset().top
            }, 800);
        }
    });
});