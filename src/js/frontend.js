import "./components/pricing";
import "./components/sticky-banner";

(function ($) {
  const app = {
    init: function () {
      //Initialize the fixed header functionality
      app.initFixdHeader();

      //Handle to top button
      $(".to-top").on("click", app.handleToTop);
      

      //Init Fun Fact Counter
      app.initFunFactCounter();

      // Handle mobile menu close
      app.handleMobileMenuClose();

      // handle menu active class
      $("li").on("click", app.handleMenuActiveClass);
    },

    /**
     * Handles the mobile menu active class functionality. Removes the
     * "active" class from all mobile menu items and adds it to the
     * currently clicked item.
     *
     * @since 1.0.0
     */
    handleMenuActiveClass: function () {
      //  $(".search-form").addClass("active");
        $("a").removeClass("active");
        $(this).addClass("active");
    },

    /**
     * Handles the mobile menu close functionality. Caches the necessary
     * DOM elements and defines a toggle menu function. Attaches event
     * listeners to the menu toggle button, close button, overlay and
     * window resize event. Also handles mobile dropdown toggles.
     * @since 1.0.0
     */
    handleMobileMenuClose: function () {
      // Cache DOM elements
      const $menu = $(".mobile-menu");
      const $menuToggle = $("#menu-toggle");
      const $closeBtn = $("#close_btn");
      const $overlay = $('<div class="menu-overlay"></div>').appendTo("body");

      // Toggle menu function
      function toggleMenu(show) {
        $menu.toggleClass("show", show);
        $overlay.toggleClass("show", show);
        $("body").css("overflow", show ? "hidden" : "");
      }

      // Event listeners
      $menuToggle.length &&
        $menuToggle.on("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleMenu(true);
        });

      $closeBtn.length &&
        $closeBtn.on("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleMenu(false);
        });

      $overlay.on("click", () => toggleMenu(false));

      $(document).on("keydown", (e) => e.key === "Escape" && toggleMenu(false));

      $menu.length && $menu.on("click", (e) => e.stopPropagation());

      $(window).on(
        "resize",
        () => $(window).width() > 991 && toggleMenu(false),
      );

      // Mobile dropdown toggles
      $(".menu-item-has-children > a").on("click", function (e) {
        if ($(window).width() <= 991) {
          e.preventDefault();
          $(this).parent().find(".sub-menu").slideToggle(300);
        }
      });
    },

    /**
     * Initializes the fun fact counter.
     *
     * This function initializes the counter-up functionality for the fun facts
     * section on the homepage. It uses the counterUp library to animate the
     * counter values.
     *
     * @since 1.0.0
     */
    initFunFactCounter: function () {
      if (!$(".counter").length) return;

      $(".counter").counterUp({
        delay: 16,
        time: 1500,
      });
    },

    /**
     * Sets up event listeners for the collapse menu, child menu items, lightbox,
     * and tabs.
     *
     * This function sets up event listeners for the collapse menu, child menu
     * items, lightbox, and tabs. It runs when the document is ready.
     *
     * @since 1.0.0
     */
    ready: function () {
      $(".collapse-menu .collapse-icon").on("click", app.handleCollapseMenu);
      $(".menu-item-has-children a").on("click", app.handleChildMenuItem);

      // lightbox
      app.handleLightbox();

      // tab
      app.handleTab();
    },

    /**
     * Handles the collapse menu functionality.
     *
     * This function handles the collapse menu functionality. It toggles the
     * open class on the main menu and the active class on the collapse
     * icon. If the mobile menu does not exist, it creates a new one by
     * cloning the first menu items and adding the necessary classes. It
     * then toggles the open class on the mobile menu.
     *
     * @since 1.0.0
     */
    handleCollapseMenu: function () {
      var $mainMenu = $(this).closest(".main-menu");

      $mainMenu.toggleClass("open");
      $(this).toggleClass("active");

      var $mobileMenu = $mainMenu.next(".mobile-menu");

      if (!$mobileMenu.length) {
        $mobileMenu = $mainMenu
          .children(".menu-items")
          .first()
          .clone(true, true)
          .removeClass("menu-items")
          .addClass("mobile-menu");

        $mobileMenu.find("[id]").removeAttr("id");

        $mainMenu.after($mobileMenu);
      }

      // Toggle mobile menu
      $mobileMenu.toggleClass("open");
    },

    /**
     * Handles the click event of a child menu item.
     *
     * This function toggles the active class on the parent element of the
     * clicked child menu item. This allows the parent element to be styled
     * differently when a child menu item is active.
     *
     * @since 1.0.0
     */
    handleChildMenuItem: function () {
      $(this).parent().toggleClass("active");
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

    /**
     * Handles the click event of the menu toggle button.
     * Toggles the mobile menu on and off by calling the slicknav("toggle") method.
     * @since 1.0.0
     */
    handleMenuToggle: function () {
      $("#mobile-menu").slicknav("toggle");
    },

    /**
     * Handles the click event of the lightbox.
     *
     * This function handles the click event of the lightbox by calling the lity
     * function. It only runs if there are elements with the data-lightbox attribute.
     *
     * @since 1.0.0
     */
    handleLightbox: function () {
      if ($("[data-lightbox]").length > 0) {
        $(document).on("click", "[data-lightbox]", lity);
      }
    },

    /**
     * Handles the click event of the tabs.
     *
     * This function handles the click event of the tabs by adding and removing the
     * "active" class from the buttons and contents. It ensures that only one tab
     * is active at a time.
     *
     * @since 1.0.0
     */
    handleTab: function () {
      const $buttons = $(".connect-drive-features__tab__btn");
      const $contents = $(".connect-drive-features__content__main");

      $buttons.on("click", function () {
        const $this = $(this);
        const targetId = $this.data("target");

        $buttons.removeClass("active");
        $contents.removeClass("active");

        $this.addClass("active");
        $("#feature-" + targetId).addClass("active");
      });
    },
  };

  app.init();
  $(document).ready(app.ready);
})(jQuery);
