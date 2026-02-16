import "./components/pricing";
import "./components/sticky-banner";

(function ($) {
  const app = {
    init: function () {
      //Initialize the fixed header functionality
      app.initFixdHeader();

      //Handle to top button
      $(".to-top").on("click", app.handleToTop);

      app.mobileMenu();
    },

    mobileMenu: function () {
      $("#menu").slicknav({
        prependTo: "#demo1",
      });
    },

    /**
     * Initializes the fixed header functionality.
     * The header is fixed when the user scrolls down and unfixed when they scroll up.
     */
    initFixdHeader: function () {
      let lastScrollTop = 0;
      const fixedheader = $(".site-header");

      $(window).scroll(function () {
        let currentScroll = $(this).scrollTop();

        if (currentScroll > lastScrollTop || currentScroll < 5) {
          // Scroll down
          fixedheader.removeClass("fixed-header");
        } else {
          // Scroll up
          fixedheader.addClass("fixed-header");
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
      });
    },

    /**
     * Handles the click event of the "to top" button.
     * Scrolls the page to the top with a slow animation.
     */
    handleToTop: function () {
      $("html, body").animate({ scrollTop: 0 }, "slow");
    },
  };

  app.init();
  $(document).ready(app.ready);

  if ($("[data-lightbox]").length > 0) {
    $(document).on("click", "[data-lightbox]", lity);
  }

  $(document).ready(function () {
    // Cache selectors for better performance
    const $buttons = $(".feature-tab-btn");
    const $contents = $(".feature-tab-content");

    $buttons.on("click", function () {
      const $this = $(this);
      const targetId = $this.data("target");

      $buttons.removeClass("active");
      $contents.removeClass("active");

      $this.addClass("active");
      $("#feature-" + targetId).addClass("active");
    });
  });
})(jQuery);
