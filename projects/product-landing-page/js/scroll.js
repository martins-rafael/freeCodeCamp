$(function () {
    $('nav a').click(function () {
        let href = $(this).attr('href');
        let offSetTop = $(href).offset().top;

        $('html, body').animate({ scrollTop: offSetTop });
        return false;
    })
})