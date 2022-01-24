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
  $(function () {
    $(document).click(function (event) {
      $(".navbar-collapse").collapse("hide");
    });
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
