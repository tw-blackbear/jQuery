$(document).ready(function () {
    $('.menu > li > a').click(function (event) {
        event.preventDefault();
        $(this).parent().siblings().find('ul').slideUp();
        $(this).parent().find('ul').slideToggle();
    });
    //top
    $('.top a').click(function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });

    //lightbox
    lightbox.option({
        'resizeDuration': 1000,
        'wrapAround': true,
    });


});

var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    //direction是方向
    direction: 'horizontal',
    speed: 2000,
    //依序輪播
    loop: true,
    autoplay: {
        delay: 3500,
    },
    effect: 'fade',


    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },





});



