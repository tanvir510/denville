(function ($) {
  "use strict";

  /*****************************
   * Menu Scroll Top
   *****************************/
  var fixed_top = $("header");
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 80) {
      fixed_top.addClass("menu-fixed animated fadeInDown");
    } else {
      fixed_top.removeClass("menu-fixed animated fadeInDown");
    }
  });

  /*****************************
   * Banner Swiper
   *****************************/
  const swiper = new Swiper(".banner-container", {
    loop: true,
    speed: 5000,
    autoplay: {
      delay: 5,
      disableOnInteraction: false,
    },
  });

  /*****************************
   * Navbar outside click
   *****************************/
  $(document).click(function (event) {
    /// If *navbar-collapse* is not among targets of event
    if (!$(event.target).is(".navbar-collapse *")) {
      $(".navbar-collapse").collapse("hide");
    }
  });

  $(function () {
    var $window = $(window);
    var windowsize = $window.width();
    if (windowsize > 991) {
      $(".dropdown").hover(
        function () {
          $(".dropdown").addClass("open");
          $(".dropdown-menu").addClass("show");
        },
        function () {
          $(".dropdown").removeClass("open");
          $(".dropdown-menu").removeClass("show");
        }
      );
    }
  });

  /*****************************
   * Scroll Bottom to Top
   *****************************/
  $(".scrollToTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });

  /*****************************
   * Wow Js
   *****************************/
  new WOW().init();
})(jQuery);
