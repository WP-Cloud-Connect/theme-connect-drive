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

/***/ },

/***/ "./src/js/components/sticky-banner.js"
/*!********************************************!*\
  !*** ./src/js/components/sticky-banner.js ***!
  \********************************************/
() {

(function ($) {
  "use strict";

  $(document).ready(function () {
    var banner = $('#header-sticky-banner, #halloween-offers, #black-friday-offers ');

    // Close banner
    banner.on('click', '.banner-close', function () {
      $('#header-sticky-banner').remove();
    });

    // Banner countdown
    var countdown = banner.find('.banner-countdown');
    var timer = banner.find('.timer');
    if (countdown.length) {
      var SECOND = 1000;
      var MINUTE = 60 * SECOND;
      var HOUR = 60 * MINUTE;
      var DAY = 24 * HOUR;
      var padZero = function padZero(num) {
        return num < 10 ? "0".concat(num) : num;
      };
      var formatTime = function formatTime(distance) {
        var days = padZero(Math.floor(distance / DAY));
        var hours = padZero(Math.floor(distance % DAY / HOUR));
        var minutes = padZero(Math.floor(distance % HOUR / MINUTE));
        var seconds = padZero(Math.floor(distance % MINUTE / SECOND));
        return "<div class=\"countdown\"><span class=\"days\">".concat(days, " d</span></div> \n                <div class=\"countdown\"><span class=\"hours\">").concat(hours, " h</span> </div>\n                <div class=\"countdown\"><span class=\"minutes\">").concat(minutes, " m</span> </div>\n                <div class=\"countdown\"><span class=\"seconds\">").concat(seconds, " s</span> \n                </div>");
      };
      var updateTimer = function updateTimer() {
        var now = new Date().getTime();
        var countDownDate = new Date('2025-12-10T23:59:00').getTime();

        // Check if there is a time in local storage
        if (localStorage.getItem('bf_offers_time')) {
          countDownDate = localStorage.getItem('bf_offers_time');
        }
        var distance = countDownDate - now;
        if (distance < 0) {
          localStorage.removeItem('bf_offers_time');
          banner.remove();
          clearInterval(x);
          return;
        }
        timer.html(formatTime(distance));

        // Save time in local storage
        localStorage.setItem('bf_offers_time', countDownDate);
      };
      var x = setInterval(updateTimer, 1000);
      updateTimer();
    }
  });
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
/* harmony import */ var _components_sticky_banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sticky-banner */ "./src/js/components/sticky-banner.js");
/* harmony import */ var _components_sticky_banner__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_sticky_banner__WEBPACK_IMPORTED_MODULE_1__);


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
    handleMenuActiveClass: function handleMenuActiveClass() {
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
    handleMobileMenuClose: function handleMobileMenuClose() {
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
        return e.key === "Escape" && toggleMenu(false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsWUFBWTtRQUMvQixJQUFNaUcsS0FBSyxHQUFHcEcsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNyQixJQUFNcUcsUUFBUSxHQUFHRCxLQUFLLENBQUNyRixJQUFJLENBQUMsUUFBUSxDQUFDO1FBRXJDbUYsUUFBUSxDQUFDMUYsV0FBVyxDQUFDLFFBQVEsQ0FBQztRQUM5QjJGLFNBQVMsQ0FBQzNGLFdBQVcsQ0FBQyxRQUFRLENBQUM7UUFFL0I0RixLQUFLLENBQUMzRixRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ3hCVCxDQUFDLENBQUMsV0FBVyxHQUFHcUcsUUFBUSxDQUFDLENBQUM1RixRQUFRLENBQUMsUUFBUSxDQUFDO01BQzlDLENBQUMsQ0FBQztJQUNKO0VBQ0YsQ0FBQztFQUVEUixHQUFHLENBQUNDLElBQUksQ0FBQyxDQUFDO0VBQ1ZGLENBQUMsQ0FBQ2tCLFFBQVEsQ0FBQyxDQUFDQyxLQUFLLENBQUNsQixHQUFHLENBQUNrQixLQUFLLENBQUM7QUFDOUIsQ0FBQyxFQUFFQyxNQUFNLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Nvbm5lY3QtZHJpdmUvLi9zcmMvanMvY29tcG9uZW50cy9wcmljaW5nLmpzIiwid2VicGFjazovL2Nvbm5lY3QtZHJpdmUvLi9zcmMvanMvY29tcG9uZW50cy9zdGlja3ktYmFubmVyLmpzIiwid2VicGFjazovL2Nvbm5lY3QtZHJpdmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY29ubmVjdC1kcml2ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jb25uZWN0LWRyaXZlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jb25uZWN0LWRyaXZlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY29ubmVjdC1kcml2ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Nvbm5lY3QtZHJpdmUvLi9zcmMvanMvZnJvbnRlbmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgkKSB7XHJcbiAgY29uc3QgYXBwID0ge1xyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAvL0hhbmRsZSBwcmljaW5nIHN3aXRjaGVyXHJcbiAgICAgICQoXCIucHJpY2luZy1zd2l0Y2hlclwiKS5vbihcImNsaWNrXCIsIGFwcC5oYW5kbGVTd2l0Y2hlcik7XHJcbiAgICAgIC8vSGFuZGxlIHByaWNpbmcgc3dpdGNoZXIgdXBkYXRlXHJcbiAgICAgICQoXCIubGljZW5zZS1tZW51IC5saXN0LWl0ZW1cIikub24oXCJjbGlja1wiLCBhcHAuaGFuZGxlU3dpdGNoZXJVcGRhdGUpO1xyXG5cclxuICAgICAgLy8gSGFuZGxlIGxpY2Vuc2Ugc3dpdGNoZXJcclxuICAgICAgJChcIi5saWNlbnNlLWRyb3Bkb3duIC5kcm9wZG93bi1pdGVtXCIpLm9uKFxyXG4gICAgICAgIFwiY2xpY2tcIixcclxuICAgICAgICBhcHAuaGFuZGxlTGljZW5zZVN3aXRjaGVyLFxyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBoYW5kbGVTd2l0Y2hlcjogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgJChcIi5wcmljZS10ZXh0XCIpXHJcbiAgICAgICAgLnJlbW92ZUNsYXNzKFwiYW5udWFsIGxpZmV0aW1lXCIpXHJcbiAgICAgICAgLmFkZENsYXNzKCQodGhpcykuaGFzQ2xhc3MoXCJhY3RpdmVcIikgPyBcImFubnVhbFwiIDogXCJsaWZldGltZVwiKTtcclxuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgIH0sXHJcblxyXG4gICAgaGFuZGxlTGljZW5zZVN3aXRjaGVyOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAkKFwiLmxpY2Vuc2UtZHJvcGRvd24gLmRyb3Bkb3duLXRvZ2dsZVwiKS50ZXh0KCQodGhpcykudGV4dCgpKTtcclxuXHJcbiAgICAgICQoXCIubGljZW5zZS1kcm9wZG93biAuZHJvcGRvd24taXRlbVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgICAgIGNvbnN0IGxpY2Vuc2UgPSAkKHRoaXMpLmRhdGEoXCJsaWNlbnNlXCIpO1xyXG4gICAgICAkKFwiLnByaWNlLXRleHRcIilcclxuICAgICAgICAucmVtb3ZlQ2xhc3MoXHJcbiAgICAgICAgICBcImxpY2Vuc2UtMSBsaWNlbnNlLTIgbGljZW5zZS01IGxpY2Vuc2UtMTAwIGxpY2Vuc2UtdW5saW1pdGVkIFwiLFxyXG4gICAgICAgIClcclxuICAgICAgICAuYWRkQ2xhc3MoYGxpY2Vuc2UtJHtsaWNlbnNlfWApO1xyXG4gICAgfSxcclxuXHJcbiAgICBoYW5kbGVTd2l0Y2hlclVwZGF0ZTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgLy8gQWN0aXZlIHRhYlxyXG4gICAgICAkKFwiLmxpY2Vuc2UtbWVudSAubGlzdC1pdGVtXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgICAgdmFyIGxpY2Vuc2VUeXBlID0gJCh0aGlzKS5kYXRhKFwibGljZW5zZVwiKTtcclxuXHJcbiAgICAgIC8vIFJlc2V0XHJcbiAgICAgICQoXCIucHJpY2UtdGV4dFwiKS5yZW1vdmVDbGFzcyhcclxuICAgICAgICBcImxpY2Vuc2UtMSBsaWNlbnNlLTIgbGljZW5zZS01IGxpY2Vuc2UtMTAwIGxpY2Vuc2UtdW5saW1pdGVkXCIsXHJcbiAgICAgICk7XHJcblxyXG4gICAgICAvLyBBREQgQ09SUkVDVCBDTEFTU1xyXG4gICAgICAkKFwiLnByaWNlLXRleHRcIikuYWRkQ2xhc3MoXCJsaWNlbnNlLVwiICsgbGljZW5zZVR5cGUpO1xyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICAvLyAkKFwiLmxpY2Vuc2UtbWVudSAubGlzdC1pdGVtXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAvLyAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgLy8gICAvLyBBY3RpdmUgdGFiXHJcbiAgLy8gICAkKFwiLmxpY2Vuc2UtbWVudSAubGlzdC1pdGVtXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gIC8vICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgLy8gICB2YXIgbGljZW5zZVR5cGUgPSAkKHRoaXMpLmRhdGEoXCJsaWNlbnNlXCIpO1xyXG5cclxuICAvLyAgIC8vIFJlc2V0XHJcbiAgLy8gICAkKFwiLnByaWNlLXRleHRcIikucmVtb3ZlQ2xhc3MoXHJcbiAgLy8gICAgIFwibGljZW5zZS0xIGxpY2Vuc2UtMiBsaWNlbnNlLTUgbGljZW5zZS0xMDAgbGljZW5zZS11bmxpbWl0ZWRcIixcclxuICAvLyAgICk7XHJcblxyXG4gIC8vICAgLy8gQUREIENPUlJFQ1QgQ0xBU1NcclxuICAvLyAgICQoXCIucHJpY2UtdGV4dFwiKS5hZGRDbGFzcyhcImxpY2Vuc2UtXCIgKyBsaWNlbnNlVHlwZSk7XHJcbiAgLy8gfSk7XHJcblxyXG4gICQoZG9jdW1lbnQpLnJlYWR5KGFwcC5pbml0KTtcclxufSkoalF1ZXJ5KTtcclxuIiwiKGZ1bmN0aW9uICgkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgYmFubmVyID0gJCgnI2hlYWRlci1zdGlja3ktYmFubmVyLCAjaGFsbG93ZWVuLW9mZmVycywgI2JsYWNrLWZyaWRheS1vZmZlcnMgJyk7XHJcblxyXG4gICAgICAgIC8vIENsb3NlIGJhbm5lclxyXG4gICAgICAgIGJhbm5lci5vbignY2xpY2snLCAnLmJhbm5lci1jbG9zZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCgnI2hlYWRlci1zdGlja3ktYmFubmVyJykucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEJhbm5lciBjb3VudGRvd25cclxuICAgICAgICBjb25zdCBjb3VudGRvd24gPSBiYW5uZXIuZmluZCgnLmJhbm5lci1jb3VudGRvd24nKTtcclxuICAgICAgICBjb25zdCB0aW1lciA9IGJhbm5lci5maW5kKCcudGltZXInKTtcclxuXHJcbiAgICAgICAgaWYgKGNvdW50ZG93bi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY29uc3QgU0VDT05EID0gMTAwMDtcclxuICAgICAgICAgICAgY29uc3QgTUlOVVRFID0gNjAgKiBTRUNPTkQ7XHJcbiAgICAgICAgICAgIGNvbnN0IEhPVVIgPSA2MCAqIE1JTlVURTtcclxuICAgICAgICAgICAgY29uc3QgREFZID0gMjQgKiBIT1VSO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcGFkWmVybyA9IChudW0pID0+IChudW0gPCAxMCA/IGAwJHtudW19YCA6IG51bSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBmb3JtYXRUaW1lID0gKGRpc3RhbmNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXlzID0gcGFkWmVybyhNYXRoLmZsb29yKGRpc3RhbmNlIC8gREFZKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBob3VycyA9IHBhZFplcm8oTWF0aC5mbG9vcigoZGlzdGFuY2UgJSBEQVkpIC8gSE9VUikpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWludXRlcyA9IHBhZFplcm8oTWF0aC5mbG9vcigoZGlzdGFuY2UgJSBIT1VSKSAvIE1JTlVURSkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2Vjb25kcyA9IHBhZFplcm8oTWF0aC5mbG9vcigoZGlzdGFuY2UgJSBNSU5VVEUpIC8gU0VDT05EKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiY291bnRkb3duXCI+PHNwYW4gY2xhc3M9XCJkYXlzXCI+JHtkYXlzfSBkPC9zcGFuPjwvZGl2PiBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb3VudGRvd25cIj48c3BhbiBjbGFzcz1cImhvdXJzXCI+JHtob3Vyc30gaDwvc3Bhbj4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY291bnRkb3duXCI+PHNwYW4gY2xhc3M9XCJtaW51dGVzXCI+JHttaW51dGVzfSBtPC9zcGFuPiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb3VudGRvd25cIj48c3BhbiBjbGFzcz1cInNlY29uZHNcIj4ke3NlY29uZHN9IHM8L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+YDtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZVRpbWVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY291bnREb3duRGF0ZSA9IG5ldyBEYXRlKCcyMDI1LTEyLTEwVDIzOjU5OjAwJykuZ2V0VGltZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIGEgdGltZSBpbiBsb2NhbCBzdG9yYWdlXHJcbiAgICAgICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2JmX29mZmVyc190aW1lJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudERvd25EYXRlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2JmX29mZmVyc190aW1lJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IGNvdW50RG93bkRhdGUgLSBub3c7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdiZl9vZmZlcnNfdGltZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhbm5lci5yZW1vdmUoKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh4KTsgXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRpbWVyLmh0bWwoZm9ybWF0VGltZShkaXN0YW5jZSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNhdmUgdGltZSBpbiBsb2NhbCBzdG9yYWdlXHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYmZfb2ZmZXJzX3RpbWUnLCBjb3VudERvd25EYXRlKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHggPSBzZXRJbnRlcnZhbCh1cGRhdGVUaW1lciwgMTAwMCk7XHJcbiAgICAgICAgICAgIHVwZGF0ZVRpbWVyKCk7IFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufSkoalF1ZXJ5KTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDaGVjayBpZiBtb2R1bGUgZXhpc3RzIChkZXZlbG9wbWVudCBvbmx5KVxuXHRpZiAoX193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9jb21wb25lbnRzL3ByaWNpbmdcIjtcclxuaW1wb3J0IFwiLi9jb21wb25lbnRzL3N0aWNreS1iYW5uZXJcIjtcclxuXHJcbihmdW5jdGlvbiAoJCkge1xyXG4gIGNvbnN0IGFwcCA9IHtcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgLy9Jbml0aWFsaXplIHRoZSBmaXhlZCBoZWFkZXIgZnVuY3Rpb25hbGl0eVxyXG4gICAgICBhcHAuaW5pdEZpeGRIZWFkZXIoKTtcclxuXHJcbiAgICAgIC8vSGFuZGxlIHRvIHRvcCBidXR0b25cclxuICAgICAgJChcIi50by10b3BcIikub24oXCJjbGlja1wiLCBhcHAuaGFuZGxlVG9Ub3ApO1xyXG4gICAgICBcclxuXHJcbiAgICAgIC8vSW5pdCBGdW4gRmFjdCBDb3VudGVyXHJcbiAgICAgIGFwcC5pbml0RnVuRmFjdENvdW50ZXIoKTtcclxuXHJcbiAgICAgIC8vIEhhbmRsZSBtb2JpbGUgbWVudSBjbG9zZVxyXG4gICAgICBhcHAuaGFuZGxlTW9iaWxlTWVudUNsb3NlKCk7XHJcblxyXG4gICAgICAvLyBoYW5kbGUgbWVudSBhY3RpdmUgY2xhc3NcclxuICAgICAgJChcImxpXCIpLm9uKFwiY2xpY2tcIiwgYXBwLmhhbmRsZU1lbnVBY3RpdmVDbGFzcyk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlcyB0aGUgbW9iaWxlIG1lbnUgYWN0aXZlIGNsYXNzIGZ1bmN0aW9uYWxpdHkuIFJlbW92ZXMgdGhlXHJcbiAgICAgKiBcImFjdGl2ZVwiIGNsYXNzIGZyb20gYWxsIG1vYmlsZSBtZW51IGl0ZW1zIGFuZCBhZGRzIGl0IHRvIHRoZVxyXG4gICAgICogY3VycmVudGx5IGNsaWNrZWQgaXRlbS5cclxuICAgICAqXHJcbiAgICAgKiBAc2luY2UgMS4wLjBcclxuICAgICAqL1xyXG4gICAgaGFuZGxlTWVudUFjdGl2ZUNsYXNzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIC8vICAkKFwiLnNlYXJjaC1mb3JtXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICQoXCJhXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlcyB0aGUgbW9iaWxlIG1lbnUgY2xvc2UgZnVuY3Rpb25hbGl0eS4gQ2FjaGVzIHRoZSBuZWNlc3NhcnlcclxuICAgICAqIERPTSBlbGVtZW50cyBhbmQgZGVmaW5lcyBhIHRvZ2dsZSBtZW51IGZ1bmN0aW9uLiBBdHRhY2hlcyBldmVudFxyXG4gICAgICogbGlzdGVuZXJzIHRvIHRoZSBtZW51IHRvZ2dsZSBidXR0b24sIGNsb3NlIGJ1dHRvbiwgb3ZlcmxheSBhbmRcclxuICAgICAqIHdpbmRvdyByZXNpemUgZXZlbnQuIEFsc28gaGFuZGxlcyBtb2JpbGUgZHJvcGRvd24gdG9nZ2xlcy5cclxuICAgICAqIEBzaW5jZSAxLjAuMFxyXG4gICAgICovXHJcbiAgICBoYW5kbGVNb2JpbGVNZW51Q2xvc2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgLy8gQ2FjaGUgRE9NIGVsZW1lbnRzXHJcbiAgICAgIGNvbnN0ICRtZW51ID0gJChcIi5tb2JpbGUtbWVudVwiKTtcclxuICAgICAgY29uc3QgJG1lbnVUb2dnbGUgPSAkKFwiI21lbnUtdG9nZ2xlXCIpO1xyXG4gICAgICBjb25zdCAkY2xvc2VCdG4gPSAkKFwiI2Nsb3NlX2J0blwiKTtcclxuICAgICAgY29uc3QgJG92ZXJsYXkgPSAkKCc8ZGl2IGNsYXNzPVwibWVudS1vdmVybGF5XCI+PC9kaXY+JykuYXBwZW5kVG8oXCJib2R5XCIpO1xyXG5cclxuICAgICAgLy8gVG9nZ2xlIG1lbnUgZnVuY3Rpb25cclxuICAgICAgZnVuY3Rpb24gdG9nZ2xlTWVudShzaG93KSB7XHJcbiAgICAgICAgJG1lbnUudG9nZ2xlQ2xhc3MoXCJzaG93XCIsIHNob3cpO1xyXG4gICAgICAgICRvdmVybGF5LnRvZ2dsZUNsYXNzKFwic2hvd1wiLCBzaG93KTtcclxuICAgICAgICAkKFwiYm9keVwiKS5jc3MoXCJvdmVyZmxvd1wiLCBzaG93ID8gXCJoaWRkZW5cIiA6IFwiXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBFdmVudCBsaXN0ZW5lcnNcclxuICAgICAgJG1lbnVUb2dnbGUubGVuZ3RoICYmXHJcbiAgICAgICAgJG1lbnVUb2dnbGUub24oXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgIHRvZ2dsZU1lbnUodHJ1ZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAkY2xvc2VCdG4ubGVuZ3RoICYmXHJcbiAgICAgICAgJGNsb3NlQnRuLm9uKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICB0b2dnbGVNZW51KGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICRvdmVybGF5Lm9uKFwiY2xpY2tcIiwgKCkgPT4gdG9nZ2xlTWVudShmYWxzZSkpO1xyXG5cclxuICAgICAgJChkb2N1bWVudCkub24oXCJrZXlkb3duXCIsIChlKSA9PiBlLmtleSA9PT0gXCJFc2NhcGVcIiAmJiB0b2dnbGVNZW51KGZhbHNlKSk7XHJcblxyXG4gICAgICAkbWVudS5sZW5ndGggJiYgJG1lbnUub24oXCJjbGlja1wiLCAoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKSk7XHJcblxyXG4gICAgICAkKHdpbmRvdykub24oXHJcbiAgICAgICAgXCJyZXNpemVcIixcclxuICAgICAgICAoKSA9PiAkKHdpbmRvdykud2lkdGgoKSA+IDk5MSAmJiB0b2dnbGVNZW51KGZhbHNlKSxcclxuICAgICAgKTtcclxuXHJcbiAgICAgIC8vIE1vYmlsZSBkcm9wZG93biB0b2dnbGVzXHJcbiAgICAgICQoXCIubWVudS1pdGVtLWhhcy1jaGlsZHJlbiA+IGFcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8PSA5OTEpIHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICQodGhpcykucGFyZW50KCkuZmluZChcIi5zdWItbWVudVwiKS5zbGlkZVRvZ2dsZSgzMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIGZ1biBmYWN0IGNvdW50ZXIuXHJcbiAgICAgKlxyXG4gICAgICogVGhpcyBmdW5jdGlvbiBpbml0aWFsaXplcyB0aGUgY291bnRlci11cCBmdW5jdGlvbmFsaXR5IGZvciB0aGUgZnVuIGZhY3RzXHJcbiAgICAgKiBzZWN0aW9uIG9uIHRoZSBob21lcGFnZS4gSXQgdXNlcyB0aGUgY291bnRlclVwIGxpYnJhcnkgdG8gYW5pbWF0ZSB0aGVcclxuICAgICAqIGNvdW50ZXIgdmFsdWVzLlxyXG4gICAgICpcclxuICAgICAqIEBzaW5jZSAxLjAuMFxyXG4gICAgICovXHJcbiAgICBpbml0RnVuRmFjdENvdW50ZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKCEkKFwiLmNvdW50ZXJcIikubGVuZ3RoKSByZXR1cm47XHJcblxyXG4gICAgICAkKFwiLmNvdW50ZXJcIikuY291bnRlclVwKHtcclxuICAgICAgICBkZWxheTogMTYsXHJcbiAgICAgICAgdGltZTogMTUwMCxcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB1cCBldmVudCBsaXN0ZW5lcnMgZm9yIHRoZSBjb2xsYXBzZSBtZW51LCBjaGlsZCBtZW51IGl0ZW1zLCBsaWdodGJveCxcclxuICAgICAqIGFuZCB0YWJzLlxyXG4gICAgICpcclxuICAgICAqIFRoaXMgZnVuY3Rpb24gc2V0cyB1cCBldmVudCBsaXN0ZW5lcnMgZm9yIHRoZSBjb2xsYXBzZSBtZW51LCBjaGlsZCBtZW51XHJcbiAgICAgKiBpdGVtcywgbGlnaHRib3gsIGFuZCB0YWJzLiBJdCBydW5zIHdoZW4gdGhlIGRvY3VtZW50IGlzIHJlYWR5LlxyXG4gICAgICpcclxuICAgICAqIEBzaW5jZSAxLjAuMFxyXG4gICAgICovXHJcbiAgICByZWFkeTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKFwiLmNvbGxhcHNlLW1lbnUgLmNvbGxhcHNlLWljb25cIikub24oXCJjbGlja1wiLCBhcHAuaGFuZGxlQ29sbGFwc2VNZW51KTtcclxuICAgICAgJChcIi5tZW51LWl0ZW0taGFzLWNoaWxkcmVuIGFcIikub24oXCJjbGlja1wiLCBhcHAuaGFuZGxlQ2hpbGRNZW51SXRlbSk7XHJcblxyXG4gICAgICAvLyBsaWdodGJveFxyXG4gICAgICBhcHAuaGFuZGxlTGlnaHRib3goKTtcclxuXHJcbiAgICAgIC8vIHRhYlxyXG4gICAgICBhcHAuaGFuZGxlVGFiKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlcyB0aGUgY29sbGFwc2UgbWVudSBmdW5jdGlvbmFsaXR5LlxyXG4gICAgICpcclxuICAgICAqIFRoaXMgZnVuY3Rpb24gaGFuZGxlcyB0aGUgY29sbGFwc2UgbWVudSBmdW5jdGlvbmFsaXR5LiBJdCB0b2dnbGVzIHRoZVxyXG4gICAgICogb3BlbiBjbGFzcyBvbiB0aGUgbWFpbiBtZW51IGFuZCB0aGUgYWN0aXZlIGNsYXNzIG9uIHRoZSBjb2xsYXBzZVxyXG4gICAgICogaWNvbi4gSWYgdGhlIG1vYmlsZSBtZW51IGRvZXMgbm90IGV4aXN0LCBpdCBjcmVhdGVzIGEgbmV3IG9uZSBieVxyXG4gICAgICogY2xvbmluZyB0aGUgZmlyc3QgbWVudSBpdGVtcyBhbmQgYWRkaW5nIHRoZSBuZWNlc3NhcnkgY2xhc3Nlcy4gSXRcclxuICAgICAqIHRoZW4gdG9nZ2xlcyB0aGUgb3BlbiBjbGFzcyBvbiB0aGUgbW9iaWxlIG1lbnUuXHJcbiAgICAgKlxyXG4gICAgICogQHNpbmNlIDEuMC4wXHJcbiAgICAgKi9cclxuICAgIGhhbmRsZUNvbGxhcHNlTWVudTogZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgJG1haW5NZW51ID0gJCh0aGlzKS5jbG9zZXN0KFwiLm1haW4tbWVudVwiKTtcclxuXHJcbiAgICAgICRtYWluTWVudS50b2dnbGVDbGFzcyhcIm9wZW5cIik7XHJcbiAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgICB2YXIgJG1vYmlsZU1lbnUgPSAkbWFpbk1lbnUubmV4dChcIi5tb2JpbGUtbWVudVwiKTtcclxuXHJcbiAgICAgIGlmICghJG1vYmlsZU1lbnUubGVuZ3RoKSB7XHJcbiAgICAgICAgJG1vYmlsZU1lbnUgPSAkbWFpbk1lbnVcclxuICAgICAgICAgIC5jaGlsZHJlbihcIi5tZW51LWl0ZW1zXCIpXHJcbiAgICAgICAgICAuZmlyc3QoKVxyXG4gICAgICAgICAgLmNsb25lKHRydWUsIHRydWUpXHJcbiAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJtZW51LWl0ZW1zXCIpXHJcbiAgICAgICAgICAuYWRkQ2xhc3MoXCJtb2JpbGUtbWVudVwiKTtcclxuXHJcbiAgICAgICAgJG1vYmlsZU1lbnUuZmluZChcIltpZF1cIikucmVtb3ZlQXR0cihcImlkXCIpO1xyXG5cclxuICAgICAgICAkbWFpbk1lbnUuYWZ0ZXIoJG1vYmlsZU1lbnUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBUb2dnbGUgbW9iaWxlIG1lbnVcclxuICAgICAgJG1vYmlsZU1lbnUudG9nZ2xlQ2xhc3MoXCJvcGVuXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZXMgdGhlIGNsaWNrIGV2ZW50IG9mIGEgY2hpbGQgbWVudSBpdGVtLlxyXG4gICAgICpcclxuICAgICAqIFRoaXMgZnVuY3Rpb24gdG9nZ2xlcyB0aGUgYWN0aXZlIGNsYXNzIG9uIHRoZSBwYXJlbnQgZWxlbWVudCBvZiB0aGVcclxuICAgICAqIGNsaWNrZWQgY2hpbGQgbWVudSBpdGVtLiBUaGlzIGFsbG93cyB0aGUgcGFyZW50IGVsZW1lbnQgdG8gYmUgc3R5bGVkXHJcbiAgICAgKiBkaWZmZXJlbnRseSB3aGVuIGEgY2hpbGQgbWVudSBpdGVtIGlzIGFjdGl2ZS5cclxuICAgICAqXHJcbiAgICAgKiBAc2luY2UgMS4wLjBcclxuICAgICAqL1xyXG4gICAgaGFuZGxlQ2hpbGRNZW51SXRlbTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKHRoaXMpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemVzIHRoZSBmaXhlZCBoZWFkZXIgZnVuY3Rpb25hbGl0eS5cclxuICAgICAqIFRoZSBoZWFkZXIgaXMgZml4ZWQgd2hlbiB0aGUgdXNlciBzY3JvbGxzIGRvd24gYW5kIHVuZml4ZWQgd2hlbiB0aGV5IHNjcm9sbCB1cC5cclxuICAgICAqL1xyXG4gICAgaW5pdEZpeGRIZWFkZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgbGV0IGxhc3RTY3JvbGxUb3AgPSAwO1xyXG4gICAgICBjb25zdCBmaXhlZGhlYWRlciA9ICQoXCIuc2l0ZS1oZWFkZXJcIik7XHJcblxyXG4gICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgY3VycmVudFNjcm9sbCA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgICAgIGlmIChjdXJyZW50U2Nyb2xsID4gbGFzdFNjcm9sbFRvcCB8fCBjdXJyZW50U2Nyb2xsIDwgNSkge1xyXG4gICAgICAgICAgLy8gU2Nyb2xsIGRvd25cclxuICAgICAgICAgIGZpeGVkaGVhZGVyLnJlbW92ZUNsYXNzKFwiZml4ZWQtaGVhZGVyXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBTY3JvbGwgdXBcclxuICAgICAgICAgIGZpeGVkaGVhZGVyLmFkZENsYXNzKFwiZml4ZWQtaGVhZGVyXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGFzdFNjcm9sbFRvcCA9IGN1cnJlbnRTY3JvbGwgPD0gMCA/IDAgOiBjdXJyZW50U2Nyb2xsO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGVzIHRoZSBjbGljayBldmVudCBvZiB0aGUgXCJ0byB0b3BcIiBidXR0b24uXHJcbiAgICAgKiBTY3JvbGxzIHRoZSBwYWdlIHRvIHRoZSB0b3Agd2l0aCBhIHNsb3cgYW5pbWF0aW9uLlxyXG4gICAgICovXHJcbiAgICBoYW5kbGVUb1RvcDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sIFwic2xvd1wiKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGVzIHRoZSBjbGljayBldmVudCBvZiB0aGUgbWVudSB0b2dnbGUgYnV0dG9uLlxyXG4gICAgICogVG9nZ2xlcyB0aGUgbW9iaWxlIG1lbnUgb24gYW5kIG9mZiBieSBjYWxsaW5nIHRoZSBzbGlja25hdihcInRvZ2dsZVwiKSBtZXRob2QuXHJcbiAgICAgKiBAc2luY2UgMS4wLjBcclxuICAgICAqL1xyXG4gICAgaGFuZGxlTWVudVRvZ2dsZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKFwiI21vYmlsZS1tZW51XCIpLnNsaWNrbmF2KFwidG9nZ2xlXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZXMgdGhlIGNsaWNrIGV2ZW50IG9mIHRoZSBsaWdodGJveC5cclxuICAgICAqXHJcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGhhbmRsZXMgdGhlIGNsaWNrIGV2ZW50IG9mIHRoZSBsaWdodGJveCBieSBjYWxsaW5nIHRoZSBsaXR5XHJcbiAgICAgKiBmdW5jdGlvbi4gSXQgb25seSBydW5zIGlmIHRoZXJlIGFyZSBlbGVtZW50cyB3aXRoIHRoZSBkYXRhLWxpZ2h0Ym94IGF0dHJpYnV0ZS5cclxuICAgICAqXHJcbiAgICAgKiBAc2luY2UgMS4wLjBcclxuICAgICAqL1xyXG4gICAgaGFuZGxlTGlnaHRib3g6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKCQoXCJbZGF0YS1saWdodGJveF1cIikubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCJbZGF0YS1saWdodGJveF1cIiwgbGl0eSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGVzIHRoZSBjbGljayBldmVudCBvZiB0aGUgdGFicy5cclxuICAgICAqXHJcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGhhbmRsZXMgdGhlIGNsaWNrIGV2ZW50IG9mIHRoZSB0YWJzIGJ5IGFkZGluZyBhbmQgcmVtb3ZpbmcgdGhlXHJcbiAgICAgKiBcImFjdGl2ZVwiIGNsYXNzIGZyb20gdGhlIGJ1dHRvbnMgYW5kIGNvbnRlbnRzLiBJdCBlbnN1cmVzIHRoYXQgb25seSBvbmUgdGFiXHJcbiAgICAgKiBpcyBhY3RpdmUgYXQgYSB0aW1lLlxyXG4gICAgICpcclxuICAgICAqIEBzaW5jZSAxLjAuMFxyXG4gICAgICovXHJcbiAgICBoYW5kbGVUYWI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc3QgJGJ1dHRvbnMgPSAkKFwiLmNvbm5lY3QtZHJpdmUtZmVhdHVyZXNfX3RhYl9fYnRuXCIpO1xyXG4gICAgICBjb25zdCAkY29udGVudHMgPSAkKFwiLmNvbm5lY3QtZHJpdmUtZmVhdHVyZXNfX2NvbnRlbnRfX21haW5cIik7XHJcblxyXG4gICAgICAkYnV0dG9ucy5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0SWQgPSAkdGhpcy5kYXRhKFwidGFyZ2V0XCIpO1xyXG5cclxuICAgICAgICAkYnV0dG9ucy5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAkY29udGVudHMucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgICAgICR0aGlzLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICQoXCIjZmVhdHVyZS1cIiArIHRhcmdldElkKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIGFwcC5pbml0KCk7XHJcbiAgJChkb2N1bWVudCkucmVhZHkoYXBwLnJlYWR5KTtcclxufSkoalF1ZXJ5KTtcclxuIl0sIm5hbWVzIjpbIiQiLCJhcHAiLCJpbml0Iiwib24iLCJoYW5kbGVTd2l0Y2hlciIsImhhbmRsZVN3aXRjaGVyVXBkYXRlIiwiaGFuZGxlTGljZW5zZVN3aXRjaGVyIiwiZSIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJoYXNDbGFzcyIsInRvZ2dsZUNsYXNzIiwicHJldmVudERlZmF1bHQiLCJ0ZXh0IiwibGljZW5zZSIsImRhdGEiLCJjb25jYXQiLCJsaWNlbnNlVHlwZSIsImRvY3VtZW50IiwicmVhZHkiLCJqUXVlcnkiLCJiYW5uZXIiLCJyZW1vdmUiLCJjb3VudGRvd24iLCJmaW5kIiwidGltZXIiLCJsZW5ndGgiLCJTRUNPTkQiLCJNSU5VVEUiLCJIT1VSIiwiREFZIiwicGFkWmVybyIsIm51bSIsImZvcm1hdFRpbWUiLCJkaXN0YW5jZSIsImRheXMiLCJNYXRoIiwiZmxvb3IiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwidXBkYXRlVGltZXIiLCJub3ciLCJEYXRlIiwiZ2V0VGltZSIsImNvdW50RG93bkRhdGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicmVtb3ZlSXRlbSIsImNsZWFySW50ZXJ2YWwiLCJ4IiwiaHRtbCIsInNldEl0ZW0iLCJzZXRJbnRlcnZhbCIsImluaXRGaXhkSGVhZGVyIiwiaGFuZGxlVG9Ub3AiLCJpbml0RnVuRmFjdENvdW50ZXIiLCJoYW5kbGVNb2JpbGVNZW51Q2xvc2UiLCJoYW5kbGVNZW51QWN0aXZlQ2xhc3MiLCIkbWVudSIsIiRtZW51VG9nZ2xlIiwiJGNsb3NlQnRuIiwiJG92ZXJsYXkiLCJhcHBlbmRUbyIsInRvZ2dsZU1lbnUiLCJzaG93IiwiY3NzIiwic3RvcFByb3BhZ2F0aW9uIiwia2V5Iiwid2luZG93Iiwid2lkdGgiLCJwYXJlbnQiLCJzbGlkZVRvZ2dsZSIsImNvdW50ZXJVcCIsImRlbGF5IiwidGltZSIsImhhbmRsZUNvbGxhcHNlTWVudSIsImhhbmRsZUNoaWxkTWVudUl0ZW0iLCJoYW5kbGVMaWdodGJveCIsImhhbmRsZVRhYiIsIiRtYWluTWVudSIsImNsb3Nlc3QiLCIkbW9iaWxlTWVudSIsIm5leHQiLCJjaGlsZHJlbiIsImZpcnN0IiwiY2xvbmUiLCJyZW1vdmVBdHRyIiwiYWZ0ZXIiLCJsYXN0U2Nyb2xsVG9wIiwiZml4ZWRoZWFkZXIiLCJzY3JvbGwiLCJjdXJyZW50U2Nyb2xsIiwic2Nyb2xsVG9wIiwiYW5pbWF0ZSIsImhhbmRsZU1lbnVUb2dnbGUiLCJzbGlja25hdiIsImxpdHkiLCIkYnV0dG9ucyIsIiRjb250ZW50cyIsIiR0aGlzIiwidGFyZ2V0SWQiXSwic291cmNlUm9vdCI6IiJ9