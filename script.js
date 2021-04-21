
$(function () {
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
});

