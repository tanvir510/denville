(function ($) {
  "use strict";

  /*****************************
   * Banner Swiper
   *****************************/
  const swiper = new Swiper(".testimonial-container", {
    // Optional parameters
    loop: true,
    speed: 5000,
    slidesPerView: 1,
    spaceBetween: 50,
    autoplay: {
      delay: 5,
      disableOnInteraction: false,
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      enabled: false,
    },
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
