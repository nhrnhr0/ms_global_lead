
/*$(function () {
  var $slider = $('.slider');
  var sizeImage = 200;
  var items = $slider.children().length;
  var itemswidth = (items * sizeImage); // 140px width for each client item 
  $slider.css('width', itemswidth);

  var rotating = true;
  var sliderspeed = 0;
  var seeitems = setInterval(rotateSlider, sliderspeed);

  $(document).on({
    mouseenter: function () {
      rotating = false; // turn off rotation when hovering
    },
    mouseleave: function () {
      rotating = true;
    }
  }, '.showcase');

  function rotateSlider() {
    if (rotating != false) {
      var $first = $('.slider .item:first');
      $first.animate({
        'margin-left': '-' + sizeImage + 'px'
      }, 3000, "linear", function () {
        $first.remove().css({
          'margin-left': '0px'
        });
        $('.slider .item:last').after($first);
      });
    } else {
      $first.stop();
    }
  }
});*/



$(document).ready(function() {
  $("#light-slider").lightSlider({
    responsive : [
      {
        breakpoint:1200,
        settings: {
            item:4,
            slideMove:1,
            slideMargin:6,
          }
    },
      {
          breakpoint:800,
          settings: {
              item:2,
              slideMove:1,
              slideMargin:6,
            }
      },
      {
          breakpoint:480,
          settings: {
              item:1,
              slideMove:1
            }
      }
  ],
            item:6,
            autoWidth: false,
            slideMove: 1, // slidemove will be 1 if loop is true
            slideMargin: 10,

            addClass: '',
            mode: "slide",
            useCSS: true,
            cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
            easing: 'linear', //'for jquery animation',////

            speed: 500, //ms'
            auto: true,
            pauseOnHover: true,
            loop: true,
            slideEndAnimation: true,
            pause: 1000,

            keyPress: false,
            controls: true,
            prevHtml: '',
            nextHtml: '',

            rtl:false,
            adaptiveHeight:false,

            vertical:false,
            verticalHeight:500,
            vThumbWidth:100,

            thumbItem:10,
            pager: false,
            gallery: false,
            galleryMargin: 5,
            thumbMargin: 5,
            currentPagerPosition: 'middle',

            enableTouch:true,
            enableDrag:true,
            freeMove:true,
            swipeThreshold: 40,


            onBeforeStart: function (el) {},
            onSliderLoad: function (el) {},
            onBeforeSlide: function (el) {},
            onAfterSlide: function (el) {},
            onBeforeNextSlide: function (el) {},
            onBeforePrevSlide: function (el) {}
  });
});