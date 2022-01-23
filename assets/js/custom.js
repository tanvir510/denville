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
    autoplay: true,
    loop: true,
    pagination: {
      el: ".banner-pagination",
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
   * Counter number
   *****************************/

  $(".count").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 3000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
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
