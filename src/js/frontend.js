import "./components/pricing";
import "./components/sticky-banner";

(function ($) {
  const app = {
    init: function () {
      //Initialize the fixed header functionality
      app.initFixdHeader();

      //Handle to top button
      $(".to-top").on("click", app.handleToTop);
    },

    ready: function () {
      $('.collapse-menu .collapse-icon').on('click', app.handleCollapseMenu);
      $('.menu-item-has-children a').on('click', app.handleChildMenuItem);

      // lightbox
      app.handleLightbox();

      // tab
      app.handleTab();
    },

    handleCollapseMenu: function () {
      var $mainMenu = $(this).closest('.main-menu');

      $mainMenu.toggleClass('open');
      $(this).toggleClass('active');

      var $mobileMenu = $mainMenu.next('.mobile-menu');

      if (!$mobileMenu.length) {

        $mobileMenu = $mainMenu
          .children('.menu-items')
          .first()
          .clone(true, true)
          .removeClass('menu-items')
          .addClass('mobile-menu');

        $mobileMenu.find('[id]').removeAttr('id');

        $mainMenu.after($mobileMenu);
      }

      // Toggle mobile menu
      $mobileMenu.toggleClass('open');
    },

    handleChildMenuItem: function () {
      $(this).parent().toggleClass('active');
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

    handleMenuToggle: function () {
      $('#mobile-menu').slicknav('toggle');
    },

    handleLightbox: function () {
      if ($("[data-lightbox]").length > 0) {
        $(document).on("click", "[data-lightbox]", lity);
      }
    },

    handleTab: function () {
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
    }
  };

  app.init();
  $(document).ready(app.ready);
})(jQuery);
