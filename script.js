const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    slidesPerView: 7,
    speed: 2500,
    freeMode: true,
    autoplay: {
        delay: 1,
        disableOnInteraction: false,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
document.querySelector('.swiper-container').onmouseover = function () {
    console.log('hover');
    (this).swiper.autoplay.stop();
};
document.querySelector('.swiper-container').onmouseout = function () {
    console.log('done');
    (this).swiper.autoplay.start();
};