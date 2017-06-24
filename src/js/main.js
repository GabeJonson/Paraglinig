$(document).ready(function() {
  Paragliding.init();
});

var Paragliding = (function() {
  return {
    init: function() {
      this.scroll();
      this.owl();
    },

    scroll: function() {
      var _this = this;
      var showContent = $('.welcome').offset().top - $('.paragliding').outerHeight() / 2;

      $(window).on('scroll', function() {
        var sTop = $(this).scrollTop();

        _this.parallax(sTop);

        if(sTop > showContent) $('.welcome').addClass('active');
        else $('.welcome').removeClass('active');
      })
    },

    parallax: function(scrolling) {
      var parallaxBg = $('.parallax');

      parallaxBg.css('background-position', '50%' + -(scrolling / 4) + 'px');
    },

    owl: function() {
      $('.owl-carousel').owlCarousel({
        loop: !0,
        center: !0,
        margin: 10,
        dots: !0,
        lazyLoad: !0,
        responnsive: {
          0: { items: 1 },

          600: { items: 2 },

          1000: { items: 3 }
        }
      });
    }
  }
})();
