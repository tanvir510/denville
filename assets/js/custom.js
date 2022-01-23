(function ($) {
  "use strict";

  /*****************************
   * Banner Swiper
   *****************************/
  const swiper = new Swiper(".banner-container", {
    // autoplay: true,
    // loop: true,
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
})(jQuery);
