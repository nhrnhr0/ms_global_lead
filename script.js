

$(function(){
    var $slider = $('.slider');
    var sizeImage = 200;
    var items = $slider.children().length;
    var itemswidth = (items * sizeImage); // 140px width for each client item 
    $slider.css('width',itemswidth);
    
    var rotating = true;
    var sliderspeed = 0;
    var seeitems = setInterval(rotateSlider, sliderspeed);
    
    $(document).on({
      mouseenter: function(){
        rotating = false; // turn off rotation when hovering
      },
      mouseleave: function(){
        rotating = true;
      }
    }, '.showcase');
    
    function rotateSlider() {
      if(rotating != false) {
        var $first = $('.slider .item:first');
        $first.animate({ 'margin-left': '-'+sizeImage+'px' }, 3000, "linear", function() {
          $first.remove().css({ 'margin-left': '0px' });
          $('.slider .item:last').after($first);
        });
      }else{
        $first.stop();
      }
    }
  });
  
/*
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
*/