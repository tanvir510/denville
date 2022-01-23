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
})(jQuery);
