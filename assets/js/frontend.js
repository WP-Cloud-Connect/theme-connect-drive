/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/pricing.js"
/*!**************************************!*\
  !*** ./src/js/components/pricing.js ***!
  \**************************************/
() {

(function ($) {
  var app = {
    init: function init() {
      //Handle pricing switcher
      $(".pricing-switcher").on("click", app.handleSwitcher);
      //Handle pricing switcher update
      $(".license-menu .list-item").on("click", app.handleSwitcherUpdate);

      // Handle license switcher
      $(".license-dropdown .dropdown-item").on("click", app.handleLicenseSwitcher);
    },
    handleSwitcher: function handleSwitcher(e) {
      $(".price-text").removeClass("annual lifetime").addClass($(this).hasClass("active") ? "annual" : "lifetime");
      $(this).toggleClass("active");
    },
    handleLicenseSwitcher: function handleLicenseSwitcher(e) {
      e.preventDefault();
      $(".license-dropdown .dropdown-toggle").text($(this).text());
      $(".license-dropdown .dropdown-item").removeClass("active");
      $(this).addClass("active");
      var license = $(this).data("license");
      $(".price-text").removeClass("license-1 license-2 license-5 license-100 license-unlimited ").addClass("license-".concat(license));
    },
    handleSwitcherUpdate: function handleSwitcherUpdate(e) {
      e.preventDefault();

      // Active tab
      $(".license-menu .list-item").removeClass("active");
      $(this).addClass("active");
      var licenseType = $(this).data("license");

      // Reset
      $(".price-text").removeClass("license-1 license-2 license-5 license-100 license-unlimited");

      // ADD CORRECT CLASS
      $(".price-text").addClass("license-" + licenseType);
    }
  };

  // $(".license-menu .list-item").on("click", function (e) {
  //   e.preventDefault();

  //   // Active tab
  //   $(".license-menu .list-item").removeClass("active");
  //   $(this).addClass("active");

  //   var licenseType = $(this).data("license");

  //   // Reset
  //   $(".price-text").removeClass(
  //     "license-1 license-2 license-5 license-100 license-unlimited",
  //   );

  //   // ADD CORRECT CLASS
  //   $(".price-text").addClass("license-" + licenseType);
  // });

  $(document).ready(app.init);
})(jQuery);

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!****************************!*\
  !*** ./src/js/frontend.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_pricing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/pricing */ "./src/js/components/pricing.js");
/* harmony import */ var _components_pricing__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_pricing__WEBPACK_IMPORTED_MODULE_0__);

// import "./components/sticky-banner";

(function ($) {
  var app = {
    init: function init() {
      //Initialize the fixed header functionality
      app.initFixdHeader();

      //Handle to top button
      $(".to-top").on("click", app.handleToTop);

      //Init Fun Fact Counter
      app.initFunFactCounter();

      // Handle mobile menu close
      app.handleMobileMenuPanel();
    },
    /**
     * Handles the mobile menu close functionality. Caches the necessary
     * DOM elements and defines a toggle menu function. Attaches event
     * listeners to the menu toggle button, close button, overlay and
     * window resize event. Also handles mobile dropdown toggles.
     * @since 1.0.0
     */
    handleMobileMenuPanel: function handleMobileMenuPanel() {
      // Cache DOM elements
      var $menu = $(".mobile-menu");
      var $menuToggle = $("#menu-toggle");
      var $closeBtn = $("#close_btn");
      var $overlay = $('<div class="menu-overlay"></div>').appendTo("body");

      // Toggle menu function
      function toggleMenu(show) {
        $menu.toggleClass("show", show);
        $overlay.toggleClass("show", show);
        $("body").css("overflow", show ? "hidden" : "");
      }

      // Event listeners
      $menuToggle.length && $menuToggle.on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu(true);
      });
      $closeBtn.length && $closeBtn.on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu(false);
      });
      $overlay.on("click", function () {
        return toggleMenu(false);
      });
      $(document).on("keydown", function (e) {
        if (e.keyCode === 27) toggleMenu(false);
      });
      $menu.length && $menu.on("click", function (e) {
        return e.stopPropagation();
      });
      $(window).on("resize", function () {
        return $(window).width() > 991 && toggleMenu(false);
      });

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
    initFunFactCounter: function initFunFactCounter() {
      if (!$(".counter").length) return;
      $(".counter").counterUp({
        delay: 16,
        time: 1500
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
    ready: function ready() {
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
    handleCollapseMenu: function handleCollapseMenu() {
      var $mainMenu = $(this).closest(".main-menu");
      $mainMenu.toggleClass("open");
      $(this).toggleClass("active");
      var $mobileMenu = $mainMenu.next(".mobile-menu");
      if (!$mobileMenu.length) {
        $mobileMenu = $mainMenu.children(".menu-items").first().clone(true, true).removeClass("menu-items").addClass("mobile-menu");
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
    handleChildMenuItem: function handleChildMenuItem() {
      $(this).parent().toggleClass("active");
    },
    /**
     * Initializes the fixed header functionality.
     * The header is fixed when the user scrolls down and unfixed when they scroll up.
     */
    initFixdHeader: function initFixdHeader() {
      var lastScrollTop = 0;
      var fixedheader = $(".site-header");
      $(window).scroll(function () {
        var currentScroll = $(this).scrollTop();
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
    handleToTop: function handleToTop() {
      $("html, body").animate({
        scrollTop: 0
      }, "slow");
    },
    /**
     * Handles the click event of the menu toggle button.
     * Toggles the mobile menu on and off by calling the slicknav("toggle") method.
     * @since 1.0.0
     */
    handleMenuToggle: function handleMenuToggle() {
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
    handleLightbox: function handleLightbox() {
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
    handleTab: function handleTab() {
      var $buttons = $(".connect-drive-features__tab__btn");
      var $contents = $(".connect-drive-features__content__main");
      $buttons.on("click", function () {
        var $this = $(this);
        var targetId = $this.data("target");
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsQ0FBQyxVQUFVQSxDQUFDLEVBQUU7RUFDWixJQUFNQyxHQUFHLEdBQUc7SUFDVkMsSUFBSSxFQUFFLFNBQU5BLElBQUlBLENBQUEsRUFBYztNQUNoQjtNQUNBRixDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQ0csRUFBRSxDQUFDLE9BQU8sRUFBRUYsR0FBRyxDQUFDRyxjQUFjLENBQUM7TUFDdEQ7TUFDQUosQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUNHLEVBQUUsQ0FBQyxPQUFPLEVBQUVGLEdBQUcsQ0FBQ0ksb0JBQW9CLENBQUM7O01BRW5FO01BQ0FMLENBQUMsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDRyxFQUFFLENBQ3RDLE9BQU8sRUFDUEYsR0FBRyxDQUFDSyxxQkFDTixDQUFDO0lBQ0gsQ0FBQztJQUVERixjQUFjLEVBQUUsU0FBaEJBLGNBQWNBLENBQVlHLENBQUMsRUFBRTtNQUMzQlAsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUNiUSxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FDOUJDLFFBQVEsQ0FBQ1QsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDVSxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsUUFBUSxHQUFHLFVBQVUsQ0FBQztNQUMvRFYsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDVyxXQUFXLENBQUMsUUFBUSxDQUFDO0lBQy9CLENBQUM7SUFFREwscUJBQXFCLEVBQUUsU0FBdkJBLHFCQUFxQkEsQ0FBWUMsQ0FBQyxFQUFFO01BQ2xDQSxDQUFDLENBQUNLLGNBQWMsQ0FBQyxDQUFDO01BRWxCWixDQUFDLENBQUMsb0NBQW9DLENBQUMsQ0FBQ2EsSUFBSSxDQUFDYixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNhLElBQUksQ0FBQyxDQUFDLENBQUM7TUFFNURiLENBQUMsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDUSxXQUFXLENBQUMsUUFBUSxDQUFDO01BQzNEUixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNTLFFBQVEsQ0FBQyxRQUFRLENBQUM7TUFFMUIsSUFBTUssT0FBTyxHQUFHZCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNlLElBQUksQ0FBQyxTQUFTLENBQUM7TUFDdkNmLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FDYlEsV0FBVyxDQUNWLDhEQUNGLENBQUMsQ0FDQUMsUUFBUSxZQUFBTyxNQUFBLENBQVlGLE9BQU8sQ0FBRSxDQUFDO0lBQ25DLENBQUM7SUFFRFQsb0JBQW9CLEVBQUUsU0FBdEJBLG9CQUFvQkEsQ0FBWUUsQ0FBQyxFQUFFO01BQ2pDQSxDQUFDLENBQUNLLGNBQWMsQ0FBQyxDQUFDOztNQUVsQjtNQUNBWixDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQ1EsV0FBVyxDQUFDLFFBQVEsQ0FBQztNQUNuRFIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDUyxRQUFRLENBQUMsUUFBUSxDQUFDO01BRTFCLElBQUlRLFdBQVcsR0FBR2pCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ2UsSUFBSSxDQUFDLFNBQVMsQ0FBQzs7TUFFekM7TUFDQWYsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDUSxXQUFXLENBQzFCLDZEQUNGLENBQUM7O01BRUQ7TUFDQVIsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDUyxRQUFRLENBQUMsVUFBVSxHQUFHUSxXQUFXLENBQUM7SUFDckQ7RUFDRixDQUFDOztFQUVEO0VBQ0E7O0VBRUE7RUFDQTtFQUNBOztFQUVBOztFQUVBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTs7RUFFQWpCLENBQUMsQ0FBQ2tCLFFBQVEsQ0FBQyxDQUFDQyxLQUFLLENBQUNsQixHQUFHLENBQUNDLElBQUksQ0FBQztBQUM3QixDQUFDLEVBQUVrQixNQUFNLENBQUMsQzs7Ozs7O1VDNUVWO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDNUJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7Ozs7Ozs7Ozs7OztBQ044QjtBQUM5Qjs7QUFFQSxDQUFDLFVBQVVwQixDQUFDLEVBQUU7RUFDWixJQUFNQyxHQUFHLEdBQUc7SUFDVkMsSUFBSSxFQUFFLFNBQU5BLElBQUlBLENBQUEsRUFBYztNQUNoQjtNQUNBRCxHQUFHLENBQUNvQixjQUFjLENBQUMsQ0FBQzs7TUFFcEI7TUFDQXJCLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQ0csRUFBRSxDQUFDLE9BQU8sRUFBRUYsR0FBRyxDQUFDcUIsV0FBVyxDQUFDOztNQUV6QztNQUNBckIsR0FBRyxDQUFDc0Isa0JBQWtCLENBQUMsQ0FBQzs7TUFFeEI7TUFDQXRCLEdBQUcsQ0FBQ3VCLHFCQUFxQixDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBQ0lBLHFCQUFxQixFQUFFLFNBQXZCQSxxQkFBcUJBLENBQUEsRUFBYztNQUNqQztNQUNBLElBQU1DLEtBQUssR0FBR3pCLENBQUMsQ0FBQyxjQUFjLENBQUM7TUFDL0IsSUFBTTBCLFdBQVcsR0FBRzFCLENBQUMsQ0FBQyxjQUFjLENBQUM7TUFDckMsSUFBTTJCLFNBQVMsR0FBRzNCLENBQUMsQ0FBQyxZQUFZLENBQUM7TUFDakMsSUFBTTRCLFFBQVEsR0FBRzVCLENBQUMsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDNkIsUUFBUSxDQUFDLE1BQU0sQ0FBQzs7TUFFdkU7TUFDQSxTQUFTQyxVQUFVQSxDQUFDQyxJQUFJLEVBQUU7UUFDeEJOLEtBQUssQ0FBQ2QsV0FBVyxDQUFDLE1BQU0sRUFBRW9CLElBQUksQ0FBQztRQUMvQkgsUUFBUSxDQUFDakIsV0FBVyxDQUFDLE1BQU0sRUFBRW9CLElBQUksQ0FBQztRQUNsQy9CLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ2dDLEdBQUcsQ0FBQyxVQUFVLEVBQUVELElBQUksR0FBRyxRQUFRLEdBQUcsRUFBRSxDQUFDO01BQ2pEOztNQUVBO01BQ0FMLFdBQVcsQ0FBQ08sTUFBTSxJQUNoQlAsV0FBVyxDQUFDdkIsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDSSxDQUFDLEVBQUs7UUFDN0JBLENBQUMsQ0FBQ0ssY0FBYyxDQUFDLENBQUM7UUFDbEJMLENBQUMsQ0FBQzJCLGVBQWUsQ0FBQyxDQUFDO1FBQ25CSixVQUFVLENBQUMsSUFBSSxDQUFDO01BQ2xCLENBQUMsQ0FBQztNQUVKSCxTQUFTLENBQUNNLE1BQU0sSUFDZE4sU0FBUyxDQUFDeEIsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDSSxDQUFDLEVBQUs7UUFDM0JBLENBQUMsQ0FBQ0ssY0FBYyxDQUFDLENBQUM7UUFDbEJMLENBQUMsQ0FBQzJCLGVBQWUsQ0FBQyxDQUFDO1FBQ25CSixVQUFVLENBQUMsS0FBSyxDQUFDO01BQ25CLENBQUMsQ0FBQztNQUVKRixRQUFRLENBQUN6QixFQUFFLENBQUMsT0FBTyxFQUFFO1FBQUEsT0FBTTJCLFVBQVUsQ0FBQyxLQUFLLENBQUM7TUFBQSxFQUFDO01BRTdDOUIsQ0FBQyxDQUFDa0IsUUFBUSxDQUFDLENBQUNmLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBQ0ksQ0FBQyxFQUFLO1FBQy9CLElBQUlBLENBQUMsQ0FBQzRCLE9BQU8sS0FBSyxFQUFFLEVBQUVMLFVBQVUsQ0FBQyxLQUFLLENBQUM7TUFDekMsQ0FBQyxDQUFDO01BRUZMLEtBQUssQ0FBQ1EsTUFBTSxJQUFJUixLQUFLLENBQUN0QixFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUNJLENBQUM7UUFBQSxPQUFLQSxDQUFDLENBQUMyQixlQUFlLENBQUMsQ0FBQztNQUFBLEVBQUM7TUFFN0RsQyxDQUFDLENBQUNvQyxNQUFNLENBQUMsQ0FBQ2pDLEVBQUUsQ0FDVixRQUFRLEVBQ1I7UUFBQSxPQUFNSCxDQUFDLENBQUNvQyxNQUFNLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUlQLFVBQVUsQ0FBQyxLQUFLLENBQUM7TUFBQSxDQUNwRCxDQUFDOztNQUVEO01BQ0E5QixDQUFDLENBQUMsNkJBQTZCLENBQUMsQ0FBQ0csRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFVSSxDQUFDLEVBQUU7UUFDeEQsSUFBSVAsQ0FBQyxDQUFDb0MsTUFBTSxDQUFDLENBQUNDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFO1VBQzVCOUIsQ0FBQyxDQUFDSyxjQUFjLENBQUMsQ0FBQztVQUNsQlosQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDc0MsTUFBTSxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDQyxXQUFXLENBQUMsR0FBRyxDQUFDO1FBQ3JEO01BQ0YsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUNJakIsa0JBQWtCLEVBQUUsU0FBcEJBLGtCQUFrQkEsQ0FBQSxFQUFjO01BQzlCLElBQUksQ0FBQ3ZCLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQ2lDLE1BQU0sRUFBRTtNQUUzQmpDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQ3lDLFNBQVMsQ0FBQztRQUN0QkMsS0FBSyxFQUFFLEVBQUU7UUFDVEMsSUFBSSxFQUFFO01BQ1IsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUNJeEIsS0FBSyxFQUFFLFNBQVBBLEtBQUtBLENBQUEsRUFBYztNQUNqQm5CLENBQUMsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDRyxFQUFFLENBQUMsT0FBTyxFQUFFRixHQUFHLENBQUMyQyxrQkFBa0IsQ0FBQztNQUN0RTVDLENBQUMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDRyxFQUFFLENBQUMsT0FBTyxFQUFFRixHQUFHLENBQUM0QyxtQkFBbUIsQ0FBQzs7TUFFbkU7TUFDQTVDLEdBQUcsQ0FBQzZDLGNBQWMsQ0FBQyxDQUFDOztNQUVwQjtNQUNBN0MsR0FBRyxDQUFDOEMsU0FBUyxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDSUgsa0JBQWtCLEVBQUUsU0FBcEJBLGtCQUFrQkEsQ0FBQSxFQUFjO01BQzlCLElBQUlJLFNBQVMsR0FBR2hELENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ2lELE9BQU8sQ0FBQyxZQUFZLENBQUM7TUFFN0NELFNBQVMsQ0FBQ3JDLFdBQVcsQ0FBQyxNQUFNLENBQUM7TUFDN0JYLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ1csV0FBVyxDQUFDLFFBQVEsQ0FBQztNQUU3QixJQUFJdUMsV0FBVyxHQUFHRixTQUFTLENBQUNHLElBQUksQ0FBQyxjQUFjLENBQUM7TUFFaEQsSUFBSSxDQUFDRCxXQUFXLENBQUNqQixNQUFNLEVBQUU7UUFDdkJpQixXQUFXLEdBQUdGLFNBQVMsQ0FDcEJJLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FDdkJDLEtBQUssQ0FBQyxDQUFDLENBQ1BDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQ2pCOUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUN6QkMsUUFBUSxDQUFDLGFBQWEsQ0FBQztRQUUxQnlDLFdBQVcsQ0FBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDZ0IsVUFBVSxDQUFDLElBQUksQ0FBQztRQUV6Q1AsU0FBUyxDQUFDUSxLQUFLLENBQUNOLFdBQVcsQ0FBQztNQUM5Qjs7TUFFQTtNQUNBQSxXQUFXLENBQUN2QyxXQUFXLENBQUMsTUFBTSxDQUFDO0lBQ2pDLENBQUM7SUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDSWtDLG1CQUFtQixFQUFFLFNBQXJCQSxtQkFBbUJBLENBQUEsRUFBYztNQUMvQjdDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3NDLE1BQU0sQ0FBQyxDQUFDLENBQUMzQixXQUFXLENBQUMsUUFBUSxDQUFDO0lBQ3hDLENBQUM7SUFFRDtBQUNKO0FBQ0E7QUFDQTtJQUNJVSxjQUFjLEVBQUUsU0FBaEJBLGNBQWNBLENBQUEsRUFBYztNQUMxQixJQUFJb0MsYUFBYSxHQUFHLENBQUM7TUFDckIsSUFBTUMsV0FBVyxHQUFHMUQsQ0FBQyxDQUFDLGNBQWMsQ0FBQztNQUVyQ0EsQ0FBQyxDQUFDb0MsTUFBTSxDQUFDLENBQUN1QixNQUFNLENBQUMsWUFBWTtRQUMzQixJQUFJQyxhQUFhLEdBQUc1RCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM2RCxTQUFTLENBQUMsQ0FBQztRQUV2QyxJQUFJRCxhQUFhLEdBQUdILGFBQWEsSUFBSUcsYUFBYSxHQUFHLENBQUMsRUFBRTtVQUN0RDtVQUNBRixXQUFXLENBQUNsRCxXQUFXLENBQUMsY0FBYyxDQUFDO1FBQ3pDLENBQUMsTUFBTTtVQUNMO1VBQ0FrRCxXQUFXLENBQUNqRCxRQUFRLENBQUMsY0FBYyxDQUFDO1FBQ3RDO1FBRUFnRCxhQUFhLEdBQUdHLGFBQWEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHQSxhQUFhO01BQ3hELENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRDtBQUNKO0FBQ0E7QUFDQTtJQUNJdEMsV0FBVyxFQUFFLFNBQWJBLFdBQVdBLENBQUEsRUFBYztNQUN2QnRCLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQzhELE9BQU8sQ0FBQztRQUFFRCxTQUFTLEVBQUU7TUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDO0lBQ25ELENBQUM7SUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0lBQ0lFLGdCQUFnQixFQUFFLFNBQWxCQSxnQkFBZ0JBLENBQUEsRUFBYztNQUM1Qi9ELENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQ2dFLFFBQVEsQ0FBQyxRQUFRLENBQUM7SUFDdEMsQ0FBQztJQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDSWxCLGNBQWMsRUFBRSxTQUFoQkEsY0FBY0EsQ0FBQSxFQUFjO01BQzFCLElBQUk5QyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQ2lDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDbkNqQyxDQUFDLENBQUNrQixRQUFRLENBQUMsQ0FBQ2YsRUFBRSxDQUFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRThELElBQUksQ0FBQztNQUNsRDtJQUNGLENBQUM7SUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDSWxCLFNBQVMsRUFBRSxTQUFYQSxTQUFTQSxDQUFBLEVBQWM7TUFDckIsSUFBTW1CLFFBQVEsR0FBR2xFLENBQUMsQ0FBQyxtQ0FBbUMsQ0FBQztNQUN2RCxJQUFNbUUsU0FBUyxHQUFHbkUsQ0FBQyxDQUFDLHdDQUF3QyxDQUFDO01BRTdEa0UsUUFBUSxDQUFDL0QsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFZO1FBQy9CLElBQU1pRSxLQUFLLEdBQUdwRSxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3JCLElBQU1xRSxRQUFRLEdBQUdELEtBQUssQ0FBQ3JELElBQUksQ0FBQyxRQUFRLENBQUM7UUFFckNtRCxRQUFRLENBQUMxRCxXQUFXLENBQUMsUUFBUSxDQUFDO1FBQzlCMkQsU0FBUyxDQUFDM0QsV0FBVyxDQUFDLFFBQVEsQ0FBQztRQUUvQjRELEtBQUssQ0FBQzNELFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDeEJULENBQUMsQ0FBQyxXQUFXLEdBQUdxRSxRQUFRLENBQUMsQ0FBQzVELFFBQVEsQ0FBQyxRQUFRLENBQUM7TUFDOUMsQ0FBQyxDQUFDO0lBQ0o7RUFDRixDQUFDO0VBRURSLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7RUFDVkYsQ0FBQyxDQUFDa0IsUUFBUSxDQUFDLENBQUNDLEtBQUssQ0FBQ2xCLEdBQUcsQ0FBQ2tCLEtBQUssQ0FBQztBQUM5QixDQUFDLEVBQUVDLE1BQU0sQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29ubmVjdC1kcml2ZS8uL3NyYy9qcy9jb21wb25lbnRzL3ByaWNpbmcuanMiLCJ3ZWJwYWNrOi8vY29ubmVjdC1kcml2ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jb25uZWN0LWRyaXZlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Nvbm5lY3QtZHJpdmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Nvbm5lY3QtZHJpdmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jb25uZWN0LWRyaXZlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY29ubmVjdC1kcml2ZS8uL3NyYy9qcy9mcm9udGVuZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCQpIHtcclxuICBjb25zdCBhcHAgPSB7XHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIC8vSGFuZGxlIHByaWNpbmcgc3dpdGNoZXJcclxuICAgICAgJChcIi5wcmljaW5nLXN3aXRjaGVyXCIpLm9uKFwiY2xpY2tcIiwgYXBwLmhhbmRsZVN3aXRjaGVyKTtcclxuICAgICAgLy9IYW5kbGUgcHJpY2luZyBzd2l0Y2hlciB1cGRhdGVcclxuICAgICAgJChcIi5saWNlbnNlLW1lbnUgLmxpc3QtaXRlbVwiKS5vbihcImNsaWNrXCIsIGFwcC5oYW5kbGVTd2l0Y2hlclVwZGF0ZSk7XHJcblxyXG4gICAgICAvLyBIYW5kbGUgbGljZW5zZSBzd2l0Y2hlclxyXG4gICAgICAkKFwiLmxpY2Vuc2UtZHJvcGRvd24gLmRyb3Bkb3duLWl0ZW1cIikub24oXHJcbiAgICAgICAgXCJjbGlja1wiLFxyXG4gICAgICAgIGFwcC5oYW5kbGVMaWNlbnNlU3dpdGNoZXIsXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIGhhbmRsZVN3aXRjaGVyOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAkKFwiLnByaWNlLXRleHRcIilcclxuICAgICAgICAucmVtb3ZlQ2xhc3MoXCJhbm51YWwgbGlmZXRpbWVcIilcclxuICAgICAgICAuYWRkQ2xhc3MoJCh0aGlzKS5oYXNDbGFzcyhcImFjdGl2ZVwiKSA/IFwiYW5udWFsXCIgOiBcImxpZmV0aW1lXCIpO1xyXG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICBoYW5kbGVMaWNlbnNlU3dpdGNoZXI6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICQoXCIubGljZW5zZS1kcm9wZG93biAuZHJvcGRvd24tdG9nZ2xlXCIpLnRleHQoJCh0aGlzKS50ZXh0KCkpO1xyXG5cclxuICAgICAgJChcIi5saWNlbnNlLWRyb3Bkb3duIC5kcm9wZG93bi1pdGVtXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgICAgY29uc3QgbGljZW5zZSA9ICQodGhpcykuZGF0YShcImxpY2Vuc2VcIik7XHJcbiAgICAgICQoXCIucHJpY2UtdGV4dFwiKVxyXG4gICAgICAgIC5yZW1vdmVDbGFzcyhcclxuICAgICAgICAgIFwibGljZW5zZS0xIGxpY2Vuc2UtMiBsaWNlbnNlLTUgbGljZW5zZS0xMDAgbGljZW5zZS11bmxpbWl0ZWQgXCIsXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5hZGRDbGFzcyhgbGljZW5zZS0ke2xpY2Vuc2V9YCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGhhbmRsZVN3aXRjaGVyVXBkYXRlOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAvLyBBY3RpdmUgdGFiXHJcbiAgICAgICQoXCIubGljZW5zZS1tZW51IC5saXN0LWl0ZW1cIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgICB2YXIgbGljZW5zZVR5cGUgPSAkKHRoaXMpLmRhdGEoXCJsaWNlbnNlXCIpO1xyXG5cclxuICAgICAgLy8gUmVzZXRcclxuICAgICAgJChcIi5wcmljZS10ZXh0XCIpLnJlbW92ZUNsYXNzKFxyXG4gICAgICAgIFwibGljZW5zZS0xIGxpY2Vuc2UtMiBsaWNlbnNlLTUgbGljZW5zZS0xMDAgbGljZW5zZS11bmxpbWl0ZWRcIixcclxuICAgICAgKTtcclxuXHJcbiAgICAgIC8vIEFERCBDT1JSRUNUIENMQVNTXHJcbiAgICAgICQoXCIucHJpY2UtdGV4dFwiKS5hZGRDbGFzcyhcImxpY2Vuc2UtXCIgKyBsaWNlbnNlVHlwZSk7XHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIC8vICQoXCIubGljZW5zZS1tZW51IC5saXN0LWl0ZW1cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gIC8vICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAvLyAgIC8vIEFjdGl2ZSB0YWJcclxuICAvLyAgICQoXCIubGljZW5zZS1tZW51IC5saXN0LWl0ZW1cIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgLy8gICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG5cclxuICAvLyAgIHZhciBsaWNlbnNlVHlwZSA9ICQodGhpcykuZGF0YShcImxpY2Vuc2VcIik7XHJcblxyXG4gIC8vICAgLy8gUmVzZXRcclxuICAvLyAgICQoXCIucHJpY2UtdGV4dFwiKS5yZW1vdmVDbGFzcyhcclxuICAvLyAgICAgXCJsaWNlbnNlLTEgbGljZW5zZS0yIGxpY2Vuc2UtNSBsaWNlbnNlLTEwMCBsaWNlbnNlLXVubGltaXRlZFwiLFxyXG4gIC8vICAgKTtcclxuXHJcbiAgLy8gICAvLyBBREQgQ09SUkVDVCBDTEFTU1xyXG4gIC8vICAgJChcIi5wcmljZS10ZXh0XCIpLmFkZENsYXNzKFwibGljZW5zZS1cIiArIGxpY2Vuc2VUeXBlKTtcclxuICAvLyB9KTtcclxuXHJcbiAgJChkb2N1bWVudCkucmVhZHkoYXBwLmluaXQpO1xyXG59KShqUXVlcnkpO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBleGlzdHMgKGRldmVsb3BtZW50IG9ubHkpXG5cdGlmIChfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL2NvbXBvbmVudHMvcHJpY2luZ1wiO1xyXG4vLyBpbXBvcnQgXCIuL2NvbXBvbmVudHMvc3RpY2t5LWJhbm5lclwiO1xyXG5cclxuKGZ1bmN0aW9uICgkKSB7XHJcbiAgY29uc3QgYXBwID0ge1xyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAvL0luaXRpYWxpemUgdGhlIGZpeGVkIGhlYWRlciBmdW5jdGlvbmFsaXR5XHJcbiAgICAgIGFwcC5pbml0Rml4ZEhlYWRlcigpO1xyXG5cclxuICAgICAgLy9IYW5kbGUgdG8gdG9wIGJ1dHRvblxyXG4gICAgICAkKFwiLnRvLXRvcFwiKS5vbihcImNsaWNrXCIsIGFwcC5oYW5kbGVUb1RvcCk7XHJcblxyXG4gICAgICAvL0luaXQgRnVuIEZhY3QgQ291bnRlclxyXG4gICAgICBhcHAuaW5pdEZ1bkZhY3RDb3VudGVyKCk7XHJcblxyXG4gICAgICAvLyBIYW5kbGUgbW9iaWxlIG1lbnUgY2xvc2VcclxuICAgICAgYXBwLmhhbmRsZU1vYmlsZU1lbnVQYW5lbCgpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZXMgdGhlIG1vYmlsZSBtZW51IGNsb3NlIGZ1bmN0aW9uYWxpdHkuIENhY2hlcyB0aGUgbmVjZXNzYXJ5XHJcbiAgICAgKiBET00gZWxlbWVudHMgYW5kIGRlZmluZXMgYSB0b2dnbGUgbWVudSBmdW5jdGlvbi4gQXR0YWNoZXMgZXZlbnRcclxuICAgICAqIGxpc3RlbmVycyB0byB0aGUgbWVudSB0b2dnbGUgYnV0dG9uLCBjbG9zZSBidXR0b24sIG92ZXJsYXkgYW5kXHJcbiAgICAgKiB3aW5kb3cgcmVzaXplIGV2ZW50LiBBbHNvIGhhbmRsZXMgbW9iaWxlIGRyb3Bkb3duIHRvZ2dsZXMuXHJcbiAgICAgKiBAc2luY2UgMS4wLjBcclxuICAgICAqL1xyXG4gICAgaGFuZGxlTW9iaWxlTWVudVBhbmVsOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIC8vIENhY2hlIERPTSBlbGVtZW50c1xyXG4gICAgICBjb25zdCAkbWVudSA9ICQoXCIubW9iaWxlLW1lbnVcIik7XHJcbiAgICAgIGNvbnN0ICRtZW51VG9nZ2xlID0gJChcIiNtZW51LXRvZ2dsZVwiKTtcclxuICAgICAgY29uc3QgJGNsb3NlQnRuID0gJChcIiNjbG9zZV9idG5cIik7XHJcbiAgICAgIGNvbnN0ICRvdmVybGF5ID0gJCgnPGRpdiBjbGFzcz1cIm1lbnUtb3ZlcmxheVwiPjwvZGl2PicpLmFwcGVuZFRvKFwiYm9keVwiKTtcclxuXHJcbiAgICAgIC8vIFRvZ2dsZSBtZW51IGZ1bmN0aW9uXHJcbiAgICAgIGZ1bmN0aW9uIHRvZ2dsZU1lbnUoc2hvdykge1xyXG4gICAgICAgICRtZW51LnRvZ2dsZUNsYXNzKFwic2hvd1wiLCBzaG93KTtcclxuICAgICAgICAkb3ZlcmxheS50b2dnbGVDbGFzcyhcInNob3dcIiwgc2hvdyk7XHJcbiAgICAgICAgJChcImJvZHlcIikuY3NzKFwib3ZlcmZsb3dcIiwgc2hvdyA/IFwiaGlkZGVuXCIgOiBcIlwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gRXZlbnQgbGlzdGVuZXJzXHJcbiAgICAgICRtZW51VG9nZ2xlLmxlbmd0aCAmJlxyXG4gICAgICAgICRtZW51VG9nZ2xlLm9uKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICB0b2dnbGVNZW51KHRydWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgJGNsb3NlQnRuLmxlbmd0aCAmJlxyXG4gICAgICAgICRjbG9zZUJ0bi5vbihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgdG9nZ2xlTWVudShmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAkb3ZlcmxheS5vbihcImNsaWNrXCIsICgpID0+IHRvZ2dsZU1lbnUoZmFsc2UpKTtcclxuXHJcbiAgICAgICQoZG9jdW1lbnQpLm9uKFwia2V5ZG93blwiLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDI3KSB0b2dnbGVNZW51KGZhbHNlKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAkbWVudS5sZW5ndGggJiYgJG1lbnUub24oXCJjbGlja1wiLCAoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKSk7XHJcblxyXG4gICAgICAkKHdpbmRvdykub24oXHJcbiAgICAgICAgXCJyZXNpemVcIixcclxuICAgICAgICAoKSA9PiAkKHdpbmRvdykud2lkdGgoKSA+IDk5MSAmJiB0b2dnbGVNZW51KGZhbHNlKSxcclxuICAgICAgKTtcclxuXHJcbiAgICAgIC8vIE1vYmlsZSBkcm9wZG93biB0b2dnbGVzXHJcbiAgICAgICQoXCIubWVudS1pdGVtLWhhcy1jaGlsZHJlbiA+IGFcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8PSA5OTEpIHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICQodGhpcykucGFyZW50KCkuZmluZChcIi5zdWItbWVudVwiKS5zbGlkZVRvZ2dsZSgzMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIGZ1biBmYWN0IGNvdW50ZXIuXHJcbiAgICAgKlxyXG4gICAgICogVGhpcyBmdW5jdGlvbiBpbml0aWFsaXplcyB0aGUgY291bnRlci11cCBmdW5jdGlvbmFsaXR5IGZvciB0aGUgZnVuIGZhY3RzXHJcbiAgICAgKiBzZWN0aW9uIG9uIHRoZSBob21lcGFnZS4gSXQgdXNlcyB0aGUgY291bnRlclVwIGxpYnJhcnkgdG8gYW5pbWF0ZSB0aGVcclxuICAgICAqIGNvdW50ZXIgdmFsdWVzLlxyXG4gICAgICpcclxuICAgICAqIEBzaW5jZSAxLjAuMFxyXG4gICAgICovXHJcbiAgICBpbml0RnVuRmFjdENvdW50ZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKCEkKFwiLmNvdW50ZXJcIikubGVuZ3RoKSByZXR1cm47XHJcblxyXG4gICAgICAkKFwiLmNvdW50ZXJcIikuY291bnRlclVwKHtcclxuICAgICAgICBkZWxheTogMTYsXHJcbiAgICAgICAgdGltZTogMTUwMCxcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB1cCBldmVudCBsaXN0ZW5lcnMgZm9yIHRoZSBjb2xsYXBzZSBtZW51LCBjaGlsZCBtZW51IGl0ZW1zLCBsaWdodGJveCxcclxuICAgICAqIGFuZCB0YWJzLlxyXG4gICAgICpcclxuICAgICAqIFRoaXMgZnVuY3Rpb24gc2V0cyB1cCBldmVudCBsaXN0ZW5lcnMgZm9yIHRoZSBjb2xsYXBzZSBtZW51LCBjaGlsZCBtZW51XHJcbiAgICAgKiBpdGVtcywgbGlnaHRib3gsIGFuZCB0YWJzLiBJdCBydW5zIHdoZW4gdGhlIGRvY3VtZW50IGlzIHJlYWR5LlxyXG4gICAgICpcclxuICAgICAqIEBzaW5jZSAxLjAuMFxyXG4gICAgICovXHJcbiAgICByZWFkeTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKFwiLmNvbGxhcHNlLW1lbnUgLmNvbGxhcHNlLWljb25cIikub24oXCJjbGlja1wiLCBhcHAuaGFuZGxlQ29sbGFwc2VNZW51KTtcclxuICAgICAgJChcIi5tZW51LWl0ZW0taGFzLWNoaWxkcmVuIGFcIikub24oXCJjbGlja1wiLCBhcHAuaGFuZGxlQ2hpbGRNZW51SXRlbSk7XHJcblxyXG4gICAgICAvLyBsaWdodGJveFxyXG4gICAgICBhcHAuaGFuZGxlTGlnaHRib3goKTtcclxuXHJcbiAgICAgIC8vIHRhYlxyXG4gICAgICBhcHAuaGFuZGxlVGFiKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlcyB0aGUgY29sbGFwc2UgbWVudSBmdW5jdGlvbmFsaXR5LlxyXG4gICAgICpcclxuICAgICAqIFRoaXMgZnVuY3Rpb24gaGFuZGxlcyB0aGUgY29sbGFwc2UgbWVudSBmdW5jdGlvbmFsaXR5LiBJdCB0b2dnbGVzIHRoZVxyXG4gICAgICogb3BlbiBjbGFzcyBvbiB0aGUgbWFpbiBtZW51IGFuZCB0aGUgYWN0aXZlIGNsYXNzIG9uIHRoZSBjb2xsYXBzZVxyXG4gICAgICogaWNvbi4gSWYgdGhlIG1vYmlsZSBtZW51IGRvZXMgbm90IGV4aXN0LCBpdCBjcmVhdGVzIGEgbmV3IG9uZSBieVxyXG4gICAgICogY2xvbmluZyB0aGUgZmlyc3QgbWVudSBpdGVtcyBhbmQgYWRkaW5nIHRoZSBuZWNlc3NhcnkgY2xhc3Nlcy4gSXRcclxuICAgICAqIHRoZW4gdG9nZ2xlcyB0aGUgb3BlbiBjbGFzcyBvbiB0aGUgbW9iaWxlIG1lbnUuXHJcbiAgICAgKlxyXG4gICAgICogQHNpbmNlIDEuMC4wXHJcbiAgICAgKi9cclxuICAgIGhhbmRsZUNvbGxhcHNlTWVudTogZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgJG1haW5NZW51ID0gJCh0aGlzKS5jbG9zZXN0KFwiLm1haW4tbWVudVwiKTtcclxuXHJcbiAgICAgICRtYWluTWVudS50b2dnbGVDbGFzcyhcIm9wZW5cIik7XHJcbiAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgICB2YXIgJG1vYmlsZU1lbnUgPSAkbWFpbk1lbnUubmV4dChcIi5tb2JpbGUtbWVudVwiKTtcclxuXHJcbiAgICAgIGlmICghJG1vYmlsZU1lbnUubGVuZ3RoKSB7XHJcbiAgICAgICAgJG1vYmlsZU1lbnUgPSAkbWFpbk1lbnVcclxuICAgICAgICAgIC5jaGlsZHJlbihcIi5tZW51LWl0ZW1zXCIpXHJcbiAgICAgICAgICAuZmlyc3QoKVxyXG4gICAgICAgICAgLmNsb25lKHRydWUsIHRydWUpXHJcbiAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJtZW51LWl0ZW1zXCIpXHJcbiAgICAgICAgICAuYWRkQ2xhc3MoXCJtb2JpbGUtbWVudVwiKTtcclxuXHJcbiAgICAgICAgJG1vYmlsZU1lbnUuZmluZChcIltpZF1cIikucmVtb3ZlQXR0cihcImlkXCIpO1xyXG5cclxuICAgICAgICAkbWFpbk1lbnUuYWZ0ZXIoJG1vYmlsZU1lbnUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBUb2dnbGUgbW9iaWxlIG1lbnVcclxuICAgICAgJG1vYmlsZU1lbnUudG9nZ2xlQ2xhc3MoXCJvcGVuXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZXMgdGhlIGNsaWNrIGV2ZW50IG9mIGEgY2hpbGQgbWVudSBpdGVtLlxyXG4gICAgICpcclxuICAgICAqIFRoaXMgZnVuY3Rpb24gdG9nZ2xlcyB0aGUgYWN0aXZlIGNsYXNzIG9uIHRoZSBwYXJlbnQgZWxlbWVudCBvZiB0aGVcclxuICAgICAqIGNsaWNrZWQgY2hpbGQgbWVudSBpdGVtLiBUaGlzIGFsbG93cyB0aGUgcGFyZW50IGVsZW1lbnQgdG8gYmUgc3R5bGVkXHJcbiAgICAgKiBkaWZmZXJlbnRseSB3aGVuIGEgY2hpbGQgbWVudSBpdGVtIGlzIGFjdGl2ZS5cclxuICAgICAqXHJcbiAgICAgKiBAc2luY2UgMS4wLjBcclxuICAgICAqL1xyXG4gICAgaGFuZGxlQ2hpbGRNZW51SXRlbTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKHRoaXMpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemVzIHRoZSBmaXhlZCBoZWFkZXIgZnVuY3Rpb25hbGl0eS5cclxuICAgICAqIFRoZSBoZWFkZXIgaXMgZml4ZWQgd2hlbiB0aGUgdXNlciBzY3JvbGxzIGRvd24gYW5kIHVuZml4ZWQgd2hlbiB0aGV5IHNjcm9sbCB1cC5cclxuICAgICAqL1xyXG4gICAgaW5pdEZpeGRIZWFkZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgbGV0IGxhc3RTY3JvbGxUb3AgPSAwO1xyXG4gICAgICBjb25zdCBmaXhlZGhlYWRlciA9ICQoXCIuc2l0ZS1oZWFkZXJcIik7XHJcblxyXG4gICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgY3VycmVudFNjcm9sbCA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgICAgIGlmIChjdXJyZW50U2Nyb2xsID4gbGFzdFNjcm9sbFRvcCB8fCBjdXJyZW50U2Nyb2xsIDwgNSkge1xyXG4gICAgICAgICAgLy8gU2Nyb2xsIGRvd25cclxuICAgICAgICAgIGZpeGVkaGVhZGVyLnJlbW92ZUNsYXNzKFwiZml4ZWQtaGVhZGVyXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBTY3JvbGwgdXBcclxuICAgICAgICAgIGZpeGVkaGVhZGVyLmFkZENsYXNzKFwiZml4ZWQtaGVhZGVyXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGFzdFNjcm9sbFRvcCA9IGN1cnJlbnRTY3JvbGwgPD0gMCA/IDAgOiBjdXJyZW50U2Nyb2xsO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGVzIHRoZSBjbGljayBldmVudCBvZiB0aGUgXCJ0byB0b3BcIiBidXR0b24uXHJcbiAgICAgKiBTY3JvbGxzIHRoZSBwYWdlIHRvIHRoZSB0b3Agd2l0aCBhIHNsb3cgYW5pbWF0aW9uLlxyXG4gICAgICovXHJcbiAgICBoYW5kbGVUb1RvcDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sIFwic2xvd1wiKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGVzIHRoZSBjbGljayBldmVudCBvZiB0aGUgbWVudSB0b2dnbGUgYnV0dG9uLlxyXG4gICAgICogVG9nZ2xlcyB0aGUgbW9iaWxlIG1lbnUgb24gYW5kIG9mZiBieSBjYWxsaW5nIHRoZSBzbGlja25hdihcInRvZ2dsZVwiKSBtZXRob2QuXHJcbiAgICAgKiBAc2luY2UgMS4wLjBcclxuICAgICAqL1xyXG4gICAgaGFuZGxlTWVudVRvZ2dsZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKFwiI21vYmlsZS1tZW51XCIpLnNsaWNrbmF2KFwidG9nZ2xlXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZXMgdGhlIGNsaWNrIGV2ZW50IG9mIHRoZSBsaWdodGJveC5cclxuICAgICAqXHJcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGhhbmRsZXMgdGhlIGNsaWNrIGV2ZW50IG9mIHRoZSBsaWdodGJveCBieSBjYWxsaW5nIHRoZSBsaXR5XHJcbiAgICAgKiBmdW5jdGlvbi4gSXQgb25seSBydW5zIGlmIHRoZXJlIGFyZSBlbGVtZW50cyB3aXRoIHRoZSBkYXRhLWxpZ2h0Ym94IGF0dHJpYnV0ZS5cclxuICAgICAqXHJcbiAgICAgKiBAc2luY2UgMS4wLjBcclxuICAgICAqL1xyXG4gICAgaGFuZGxlTGlnaHRib3g6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKCQoXCJbZGF0YS1saWdodGJveF1cIikubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCJbZGF0YS1saWdodGJveF1cIiwgbGl0eSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGVzIHRoZSBjbGljayBldmVudCBvZiB0aGUgdGFicy5cclxuICAgICAqXHJcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGhhbmRsZXMgdGhlIGNsaWNrIGV2ZW50IG9mIHRoZSB0YWJzIGJ5IGFkZGluZyBhbmQgcmVtb3ZpbmcgdGhlXHJcbiAgICAgKiBcImFjdGl2ZVwiIGNsYXNzIGZyb20gdGhlIGJ1dHRvbnMgYW5kIGNvbnRlbnRzLiBJdCBlbnN1cmVzIHRoYXQgb25seSBvbmUgdGFiXHJcbiAgICAgKiBpcyBhY3RpdmUgYXQgYSB0aW1lLlxyXG4gICAgICpcclxuICAgICAqIEBzaW5jZSAxLjAuMFxyXG4gICAgICovXHJcbiAgICBoYW5kbGVUYWI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc3QgJGJ1dHRvbnMgPSAkKFwiLmNvbm5lY3QtZHJpdmUtZmVhdHVyZXNfX3RhYl9fYnRuXCIpO1xyXG4gICAgICBjb25zdCAkY29udGVudHMgPSAkKFwiLmNvbm5lY3QtZHJpdmUtZmVhdHVyZXNfX2NvbnRlbnRfX21haW5cIik7XHJcblxyXG4gICAgICAkYnV0dG9ucy5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0SWQgPSAkdGhpcy5kYXRhKFwidGFyZ2V0XCIpO1xyXG5cclxuICAgICAgICAkYnV0dG9ucy5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAkY29udGVudHMucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgICAgICR0aGlzLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICQoXCIjZmVhdHVyZS1cIiArIHRhcmdldElkKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIGFwcC5pbml0KCk7XHJcbiAgJChkb2N1bWVudCkucmVhZHkoYXBwLnJlYWR5KTtcclxufSkoalF1ZXJ5KTtcclxuIl0sIm5hbWVzIjpbIiQiLCJhcHAiLCJpbml0Iiwib24iLCJoYW5kbGVTd2l0Y2hlciIsImhhbmRsZVN3aXRjaGVyVXBkYXRlIiwiaGFuZGxlTGljZW5zZVN3aXRjaGVyIiwiZSIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJoYXNDbGFzcyIsInRvZ2dsZUNsYXNzIiwicHJldmVudERlZmF1bHQiLCJ0ZXh0IiwibGljZW5zZSIsImRhdGEiLCJjb25jYXQiLCJsaWNlbnNlVHlwZSIsImRvY3VtZW50IiwicmVhZHkiLCJqUXVlcnkiLCJpbml0Rml4ZEhlYWRlciIsImhhbmRsZVRvVG9wIiwiaW5pdEZ1bkZhY3RDb3VudGVyIiwiaGFuZGxlTW9iaWxlTWVudVBhbmVsIiwiJG1lbnUiLCIkbWVudVRvZ2dsZSIsIiRjbG9zZUJ0biIsIiRvdmVybGF5IiwiYXBwZW5kVG8iLCJ0b2dnbGVNZW51Iiwic2hvdyIsImNzcyIsImxlbmd0aCIsInN0b3BQcm9wYWdhdGlvbiIsImtleUNvZGUiLCJ3aW5kb3ciLCJ3aWR0aCIsInBhcmVudCIsImZpbmQiLCJzbGlkZVRvZ2dsZSIsImNvdW50ZXJVcCIsImRlbGF5IiwidGltZSIsImhhbmRsZUNvbGxhcHNlTWVudSIsImhhbmRsZUNoaWxkTWVudUl0ZW0iLCJoYW5kbGVMaWdodGJveCIsImhhbmRsZVRhYiIsIiRtYWluTWVudSIsImNsb3Nlc3QiLCIkbW9iaWxlTWVudSIsIm5leHQiLCJjaGlsZHJlbiIsImZpcnN0IiwiY2xvbmUiLCJyZW1vdmVBdHRyIiwiYWZ0ZXIiLCJsYXN0U2Nyb2xsVG9wIiwiZml4ZWRoZWFkZXIiLCJzY3JvbGwiLCJjdXJyZW50U2Nyb2xsIiwic2Nyb2xsVG9wIiwiYW5pbWF0ZSIsImhhbmRsZU1lbnVUb2dnbGUiLCJzbGlja25hdiIsImxpdHkiLCIkYnV0dG9ucyIsIiRjb250ZW50cyIsIiR0aGlzIiwidGFyZ2V0SWQiXSwic291cmNlUm9vdCI6IiJ9