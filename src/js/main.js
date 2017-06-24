$(document).ready(function() {
  Paragliding.init();
});

var Paragliding = (function() {
  return {
    init: function() {
      this.scroll();
    },

    scroll: function() {
      var _this = this;

      $(window).on('scroll', function() {
        var sTop = $(this).scrollTop();

        _this.parallax(sTop)
      })
    },

    parallax: function(scrolling) {
      var parallaxBg = $('.parallax');

      parallaxBg.css('background-position', '50%' + -(scrolling / 2) + 'px');
    }
  }
})();
