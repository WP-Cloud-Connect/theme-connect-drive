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

// ;(function ($) {
//     "use strict";

//     $(document).ready(function () {
//         const banner = $('#header-sticky-banner, #halloween-offers, #black-friday-offers');

//         // Close banner
//         banner.on('click', '.banner-close', function () {
//             $('#header-sticky-banner').remove();
//         });

//         // Banner countdown
//         const countdown = banner.find('.banner-countdown');
//         const timer = banner.find('.timer');

//         if (countdown.length) {
//             const SECOND = 1000;
//             const MINUTE = 60 * SECOND;
//             const HOUR = 60 * MINUTE;
//             const DAY = 24 * HOUR;

//             const formatTime = (distance) => {
//                 const days = Math.floor(distance / DAY);
//                 const hours = Math.floor((distance % DAY) / HOUR);
//                 const minutes = Math.floor((distance % HOUR) / MINUTE);
//                 const seconds = Math.floor((distance % MINUTE) / SECOND);

//                 return `<span class="days">${days}d</span> <span class="hours">${hours}h</span> <span class="minutes">${minutes}m</span> <span class="seconds">${seconds}s</span>`;
//             };

//             const updateTimer = () => {
//                 const now = new Date().getTime();
//                 //let countDownDate = new Date().getTime() + 8.5 * DAY;
//                 let countDownDate = new Date('2024-12-05T23:59:00').getTime();

//                 // Check if there is a time in local storage
//                 if ( localStorage.getItem('bf_offers_time')) {
//                     countDownDate = localStorage.getItem('bf_offers_time');
//                 }

//                 const distance = countDownDate - now;

//                 if (distance < 0) {
//                     // Reset the time
//                     localStorage.removeItem('bf_offers_time');
//                     return;
//                 }

//                 timer.html(formatTime(distance));

//                 // Save time in local storage
//                 localStorage.setItem('bf_offers_time', countDownDate);
//             };

//             const x = setInterval(updateTimer, 1000);
//             updateTimer(); // Call immediately, don’t wait for the first interval to execute

//         }
//     });

// })(jQuery);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxRQUFRLENBQUM7UUFFckNrRixRQUFRLENBQUN6RixXQUFXLENBQUMsUUFBUSxDQUFDO1FBQzlCMEYsU0FBUyxDQUFDMUYsV0FBVyxDQUFDLFFBQVEsQ0FBQztRQUUvQjJGLEtBQUssQ0FBQzFGLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDeEJULENBQUMsQ0FBQyxXQUFXLEdBQUdvRyxRQUFRLENBQUMsQ0FBQzNGLFFBQVEsQ0FBQyxRQUFRLENBQUM7TUFDOUMsQ0FBQyxDQUFDO0lBQ0o7RUFDRixDQUFDO0VBRURSLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7RUFDVkYsQ0FBQyxDQUFDa0IsUUFBUSxDQUFDLENBQUNDLEtBQUssQ0FBQ2xCLEdBQUcsQ0FBQ2tCLEtBQUssQ0FBQztBQUM5QixDQUFDLEVBQUVDLE1BQU0sQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29ubmVjdC1kcml2ZS8uL3NyYy9qcy9jb21wb25lbnRzL3ByaWNpbmcuanMiLCJ3ZWJwYWNrOi8vY29ubmVjdC1kcml2ZS8uL3NyYy9qcy9jb21wb25lbnRzL3N0aWNreS1iYW5uZXIuanMiLCJ3ZWJwYWNrOi8vY29ubmVjdC1kcml2ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jb25uZWN0LWRyaXZlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Nvbm5lY3QtZHJpdmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Nvbm5lY3QtZHJpdmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jb25uZWN0LWRyaXZlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY29ubmVjdC1kcml2ZS8uL3NyYy9qcy9mcm9udGVuZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCQpIHtcclxuICBjb25zdCBhcHAgPSB7XHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIC8vSGFuZGxlIHByaWNpbmcgc3dpdGNoZXJcclxuICAgICAgJChcIi5wcmljaW5nLXN3aXRjaGVyXCIpLm9uKFwiY2xpY2tcIiwgYXBwLmhhbmRsZVN3aXRjaGVyKTtcclxuICAgICAgLy9IYW5kbGUgcHJpY2luZyBzd2l0Y2hlciB1cGRhdGVcclxuICAgICAgJChcIi5saWNlbnNlLW1lbnUgLmxpc3QtaXRlbVwiKS5vbihcImNsaWNrXCIsIGFwcC5oYW5kbGVTd2l0Y2hlclVwZGF0ZSk7XHJcblxyXG4gICAgICAvLyBIYW5kbGUgbGljZW5zZSBzd2l0Y2hlclxyXG4gICAgICAkKFwiLmxpY2Vuc2UtZHJvcGRvd24gLmRyb3Bkb3duLWl0ZW1cIikub24oXHJcbiAgICAgICAgXCJjbGlja1wiLFxyXG4gICAgICAgIGFwcC5oYW5kbGVMaWNlbnNlU3dpdGNoZXIsXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIGhhbmRsZVN3aXRjaGVyOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAkKFwiLnByaWNlLXRleHRcIilcclxuICAgICAgICAucmVtb3ZlQ2xhc3MoXCJhbm51YWwgbGlmZXRpbWVcIilcclxuICAgICAgICAuYWRkQ2xhc3MoJCh0aGlzKS5oYXNDbGFzcyhcImFjdGl2ZVwiKSA/IFwiYW5udWFsXCIgOiBcImxpZmV0aW1lXCIpO1xyXG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICBoYW5kbGVMaWNlbnNlU3dpdGNoZXI6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICQoXCIubGljZW5zZS1kcm9wZG93biAuZHJvcGRvd24tdG9nZ2xlXCIpLnRleHQoJCh0aGlzKS50ZXh0KCkpO1xyXG5cclxuICAgICAgJChcIi5saWNlbnNlLWRyb3Bkb3duIC5kcm9wZG93bi1pdGVtXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgICAgY29uc3QgbGljZW5zZSA9ICQodGhpcykuZGF0YShcImxpY2Vuc2VcIik7XHJcbiAgICAgICQoXCIucHJpY2UtdGV4dFwiKVxyXG4gICAgICAgIC5yZW1vdmVDbGFzcyhcclxuICAgICAgICAgIFwibGljZW5zZS0xIGxpY2Vuc2UtMiBsaWNlbnNlLTUgbGljZW5zZS0xMDAgbGljZW5zZS11bmxpbWl0ZWQgXCIsXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5hZGRDbGFzcyhgbGljZW5zZS0ke2xpY2Vuc2V9YCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGhhbmRsZVN3aXRjaGVyVXBkYXRlOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAvLyBBY3RpdmUgdGFiXHJcbiAgICAgICQoXCIubGljZW5zZS1tZW51IC5saXN0LWl0ZW1cIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgICB2YXIgbGljZW5zZVR5cGUgPSAkKHRoaXMpLmRhdGEoXCJsaWNlbnNlXCIpO1xyXG5cclxuICAgICAgLy8gUmVzZXRcclxuICAgICAgJChcIi5wcmljZS10ZXh0XCIpLnJlbW92ZUNsYXNzKFxyXG4gICAgICAgIFwibGljZW5zZS0xIGxpY2Vuc2UtMiBsaWNlbnNlLTUgbGljZW5zZS0xMDAgbGljZW5zZS11bmxpbWl0ZWRcIixcclxuICAgICAgKTtcclxuXHJcbiAgICAgIC8vIEFERCBDT1JSRUNUIENMQVNTXHJcbiAgICAgICQoXCIucHJpY2UtdGV4dFwiKS5hZGRDbGFzcyhcImxpY2Vuc2UtXCIgKyBsaWNlbnNlVHlwZSk7XHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIC8vICQoXCIubGljZW5zZS1tZW51IC5saXN0LWl0ZW1cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gIC8vICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAvLyAgIC8vIEFjdGl2ZSB0YWJcclxuICAvLyAgICQoXCIubGljZW5zZS1tZW51IC5saXN0LWl0ZW1cIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgLy8gICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG5cclxuICAvLyAgIHZhciBsaWNlbnNlVHlwZSA9ICQodGhpcykuZGF0YShcImxpY2Vuc2VcIik7XHJcblxyXG4gIC8vICAgLy8gUmVzZXRcclxuICAvLyAgICQoXCIucHJpY2UtdGV4dFwiKS5yZW1vdmVDbGFzcyhcclxuICAvLyAgICAgXCJsaWNlbnNlLTEgbGljZW5zZS0yIGxpY2Vuc2UtNSBsaWNlbnNlLTEwMCBsaWNlbnNlLXVubGltaXRlZFwiLFxyXG4gIC8vICAgKTtcclxuXHJcbiAgLy8gICAvLyBBREQgQ09SUkVDVCBDTEFTU1xyXG4gIC8vICAgJChcIi5wcmljZS10ZXh0XCIpLmFkZENsYXNzKFwibGljZW5zZS1cIiArIGxpY2Vuc2VUeXBlKTtcclxuICAvLyB9KTtcclxuXHJcbiAgJChkb2N1bWVudCkucmVhZHkoYXBwLmluaXQpO1xyXG59KShqUXVlcnkpO1xyXG4iLCIvLyA7KGZ1bmN0aW9uICgkKSB7XHJcbi8vICAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbi8vICAgICAgICAgY29uc3QgYmFubmVyID0gJCgnI2hlYWRlci1zdGlja3ktYmFubmVyLCAjaGFsbG93ZWVuLW9mZmVycywgI2JsYWNrLWZyaWRheS1vZmZlcnMnKTtcclxuXHJcbi8vICAgICAgICAgLy8gQ2xvc2UgYmFubmVyXHJcbi8vICAgICAgICAgYmFubmVyLm9uKCdjbGljaycsICcuYmFubmVyLWNsb3NlJywgZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgICAgICAgICAkKCcjaGVhZGVyLXN0aWNreS1iYW5uZXInKS5yZW1vdmUoKTtcclxuLy8gICAgICAgICB9KTtcclxuXHJcbi8vICAgICAgICAgLy8gQmFubmVyIGNvdW50ZG93blxyXG4vLyAgICAgICAgIGNvbnN0IGNvdW50ZG93biA9IGJhbm5lci5maW5kKCcuYmFubmVyLWNvdW50ZG93bicpO1xyXG4vLyAgICAgICAgIGNvbnN0IHRpbWVyID0gYmFubmVyLmZpbmQoJy50aW1lcicpO1xyXG5cclxuLy8gICAgICAgICBpZiAoY291bnRkb3duLmxlbmd0aCkge1xyXG4vLyAgICAgICAgICAgICBjb25zdCBTRUNPTkQgPSAxMDAwO1xyXG4vLyAgICAgICAgICAgICBjb25zdCBNSU5VVEUgPSA2MCAqIFNFQ09ORDtcclxuLy8gICAgICAgICAgICAgY29uc3QgSE9VUiA9IDYwICogTUlOVVRFO1xyXG4vLyAgICAgICAgICAgICBjb25zdCBEQVkgPSAyNCAqIEhPVVI7XHJcblxyXG4vLyAgICAgICAgICAgICBjb25zdCBmb3JtYXRUaW1lID0gKGRpc3RhbmNlKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcihkaXN0YW5jZSAvIERBWSk7XHJcbi8vICAgICAgICAgICAgICAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgREFZKSAvIEhPVVIpO1xyXG4vLyAgICAgICAgICAgICAgICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgSE9VUikgLyBNSU5VVEUpO1xyXG4vLyAgICAgICAgICAgICAgICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgTUlOVVRFKSAvIFNFQ09ORCk7XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIGA8c3BhbiBjbGFzcz1cImRheXNcIj4ke2RheXN9ZDwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJob3Vyc1wiPiR7aG91cnN9aDwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJtaW51dGVzXCI+JHttaW51dGVzfW08L3NwYW4+IDxzcGFuIGNsYXNzPVwic2Vjb25kc1wiPiR7c2Vjb25kc31zPC9zcGFuPmA7XHJcbi8vICAgICAgICAgICAgIH07XHJcblxyXG4vLyAgICAgICAgICAgICBjb25zdCB1cGRhdGVUaW1lciA9ICgpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4vLyAgICAgICAgICAgICAgICAgLy9sZXQgY291bnREb3duRGF0ZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgOC41ICogREFZO1xyXG4vLyAgICAgICAgICAgICAgICAgbGV0IGNvdW50RG93bkRhdGUgPSBuZXcgRGF0ZSgnMjAyNC0xMi0wNVQyMzo1OTowMCcpLmdldFRpbWUoKTtcclxuXHJcblxyXG4vLyAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgYSB0aW1lIGluIGxvY2FsIHN0b3JhZ2VcclxuLy8gICAgICAgICAgICAgICAgIGlmICggbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2JmX29mZmVyc190aW1lJykpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBjb3VudERvd25EYXRlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2JmX29mZmVyc190aW1lJyk7XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBjb3VudERvd25EYXRlIC0gbm93O1xyXG5cclxuLy8gICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IDApIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAvLyBSZXNldCB0aGUgdGltZVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdiZl9vZmZlcnNfdGltZScpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgICAgICB0aW1lci5odG1sKGZvcm1hdFRpbWUoZGlzdGFuY2UpKTtcclxuXHJcbi8vICAgICAgICAgICAgICAgICAvLyBTYXZlIHRpbWUgaW4gbG9jYWwgc3RvcmFnZVxyXG4vLyAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2JmX29mZmVyc190aW1lJywgY291bnREb3duRGF0ZSk7XHJcbi8vICAgICAgICAgICAgIH07XHJcblxyXG4vLyAgICAgICAgICAgICBjb25zdCB4ID0gc2V0SW50ZXJ2YWwodXBkYXRlVGltZXIsIDEwMDApO1xyXG4vLyAgICAgICAgICAgICB1cGRhdGVUaW1lcigpOyAvLyBDYWxsIGltbWVkaWF0ZWx5LCBkb27igJl0IHdhaXQgZm9yIHRoZSBmaXJzdCBpbnRlcnZhbCB0byBleGVjdXRlXHJcbiAgICAgICAgICAgIFxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH0pO1xyXG5cclxuLy8gfSkoalF1ZXJ5KTtcclxuXHJcblxyXG4oZnVuY3Rpb24gKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBiYW5uZXIgPSAkKCcjaGVhZGVyLXN0aWNreS1iYW5uZXIsICNoYWxsb3dlZW4tb2ZmZXJzLCAjYmxhY2stZnJpZGF5LW9mZmVycyAnKTtcclxuXHJcbiAgICAgICAgLy8gQ2xvc2UgYmFubmVyXHJcbiAgICAgICAgYmFubmVyLm9uKCdjbGljaycsICcuYmFubmVyLWNsb3NlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKCcjaGVhZGVyLXN0aWNreS1iYW5uZXInKS5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQmFubmVyIGNvdW50ZG93blxyXG4gICAgICAgIGNvbnN0IGNvdW50ZG93biA9IGJhbm5lci5maW5kKCcuYmFubmVyLWNvdW50ZG93bicpO1xyXG4gICAgICAgIGNvbnN0IHRpbWVyID0gYmFubmVyLmZpbmQoJy50aW1lcicpO1xyXG5cclxuICAgICAgICBpZiAoY291bnRkb3duLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25zdCBTRUNPTkQgPSAxMDAwO1xyXG4gICAgICAgICAgICBjb25zdCBNSU5VVEUgPSA2MCAqIFNFQ09ORDtcclxuICAgICAgICAgICAgY29uc3QgSE9VUiA9IDYwICogTUlOVVRFO1xyXG4gICAgICAgICAgICBjb25zdCBEQVkgPSAyNCAqIEhPVVI7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwYWRaZXJvID0gKG51bSkgPT4gKG51bSA8IDEwID8gYDAke251bX1gIDogbnVtKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdFRpbWUgPSAoZGlzdGFuY2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRheXMgPSBwYWRaZXJvKE1hdGguZmxvb3IoZGlzdGFuY2UgLyBEQVkpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhvdXJzID0gcGFkWmVybyhNYXRoLmZsb29yKChkaXN0YW5jZSAlIERBWSkgLyBIT1VSKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtaW51dGVzID0gcGFkWmVybyhNYXRoLmZsb29yKChkaXN0YW5jZSAlIEhPVVIpIC8gTUlOVVRFKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWNvbmRzID0gcGFkWmVybyhNYXRoLmZsb29yKChkaXN0YW5jZSAlIE1JTlVURSkgLyBTRUNPTkQpKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJjb3VudGRvd25cIj48c3BhbiBjbGFzcz1cImRheXNcIj4ke2RheXN9IGQ8L3NwYW4+PC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvdW50ZG93blwiPjxzcGFuIGNsYXNzPVwiaG91cnNcIj4ke2hvdXJzfSBoPC9zcGFuPiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb3VudGRvd25cIj48c3BhbiBjbGFzcz1cIm1pbnV0ZXNcIj4ke21pbnV0ZXN9IG08L3NwYW4+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvdW50ZG93blwiPjxzcGFuIGNsYXNzPVwic2Vjb25kc1wiPiR7c2Vjb25kc30gczwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5gO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlVGltZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgICAgIGxldCBjb3VudERvd25EYXRlID0gbmV3IERhdGUoJzIwMjUtMTItMTBUMjM6NTk6MDAnKS5nZXRUaW1lKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgYSB0aW1lIGluIGxvY2FsIHN0b3JhZ2VcclxuICAgICAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYmZfb2ZmZXJzX3RpbWUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50RG93bkRhdGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYmZfb2ZmZXJzX3RpbWUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gY291bnREb3duRGF0ZSAtIG5vdztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2JmX29mZmVyc190aW1lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFubmVyLnJlbW92ZSgpOyBcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHgpOyBcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGltZXIuaHRtbChmb3JtYXRUaW1lKGRpc3RhbmNlKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU2F2ZSB0aW1lIGluIGxvY2FsIHN0b3JhZ2VcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdiZl9vZmZlcnNfdGltZScsIGNvdW50RG93bkRhdGUpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgeCA9IHNldEludGVydmFsKHVwZGF0ZVRpbWVyLCAxMDAwKTtcclxuICAgICAgICAgICAgdXBkYXRlVGltZXIoKTsgXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59KShqUXVlcnkpO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBleGlzdHMgKGRldmVsb3BtZW50IG9ubHkpXG5cdGlmIChfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL2NvbXBvbmVudHMvcHJpY2luZ1wiO1xyXG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvc3RpY2t5LWJhbm5lclwiO1xyXG5cclxuKGZ1bmN0aW9uICgkKSB7XHJcbiAgY29uc3QgYXBwID0ge1xyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAvL0luaXRpYWxpemUgdGhlIGZpeGVkIGhlYWRlciBmdW5jdGlvbmFsaXR5XHJcbiAgICAgIGFwcC5pbml0Rml4ZEhlYWRlcigpO1xyXG5cclxuICAgICAgLy9IYW5kbGUgdG8gdG9wIGJ1dHRvblxyXG4gICAgICAkKFwiLnRvLXRvcFwiKS5vbihcImNsaWNrXCIsIGFwcC5oYW5kbGVUb1RvcCk7XHJcblxyXG4gICAgICAvL0luaXQgRnVuIEZhY3QgQ291bnRlclxyXG4gICAgICBhcHAuaW5pdEZ1bkZhY3RDb3VudGVyKCk7XHJcblxyXG4gICAgICAvLyBIYW5kbGUgbW9iaWxlIG1lbnUgY2xvc2VcclxuICAgICAgYXBwLmhhbmRsZU1vYmlsZU1lbnVDbG9zZSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZXMgdGhlIG1vYmlsZSBtZW51IGNsb3NlIGZ1bmN0aW9uYWxpdHkuIENhY2hlcyB0aGUgbmVjZXNzYXJ5XHJcbiAgICAgKiBET00gZWxlbWVudHMgYW5kIGRlZmluZXMgYSB0b2dnbGUgbWVudSBmdW5jdGlvbi4gQXR0YWNoZXMgZXZlbnRcclxuICAgICAqIGxpc3RlbmVycyB0byB0aGUgbWVudSB0b2dnbGUgYnV0dG9uLCBjbG9zZSBidXR0b24sIG92ZXJsYXkgYW5kXHJcbiAgICAgKiB3aW5kb3cgcmVzaXplIGV2ZW50LiBBbHNvIGhhbmRsZXMgbW9iaWxlIGRyb3Bkb3duIHRvZ2dsZXMuXHJcbiAgICAgKiBAc2luY2UgMS4wLjBcclxuICAgICAqL1xyXG4gICAgaGFuZGxlTW9iaWxlTWVudUNsb3NlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIC8vIENhY2hlIERPTSBlbGVtZW50c1xyXG4gICAgICBjb25zdCAkbWVudSA9ICQoXCIubW9iaWxlLW1lbnVcIik7XHJcbiAgICAgIGNvbnN0ICRtZW51VG9nZ2xlID0gJChcIiNtZW51LXRvZ2dsZVwiKTtcclxuICAgICAgY29uc3QgJGNsb3NlQnRuID0gJChcIiNjbG9zZV9idG5cIik7XHJcbiAgICAgIGNvbnN0ICRvdmVybGF5ID0gJCgnPGRpdiBjbGFzcz1cIm1lbnUtb3ZlcmxheVwiPjwvZGl2PicpLmFwcGVuZFRvKFwiYm9keVwiKTtcclxuXHJcbiAgICAgIC8vIFRvZ2dsZSBtZW51IGZ1bmN0aW9uXHJcbiAgICAgIGZ1bmN0aW9uIHRvZ2dsZU1lbnUoc2hvdykge1xyXG4gICAgICAgICRtZW51LnRvZ2dsZUNsYXNzKFwic2hvd1wiLCBzaG93KTtcclxuICAgICAgICAkb3ZlcmxheS50b2dnbGVDbGFzcyhcInNob3dcIiwgc2hvdyk7XHJcbiAgICAgICAgJChcImJvZHlcIikuY3NzKFwib3ZlcmZsb3dcIiwgc2hvdyA/IFwiaGlkZGVuXCIgOiBcIlwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gRXZlbnQgbGlzdGVuZXJzXHJcbiAgICAgICRtZW51VG9nZ2xlLmxlbmd0aCAmJlxyXG4gICAgICAgICRtZW51VG9nZ2xlLm9uKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICB0b2dnbGVNZW51KHRydWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgJGNsb3NlQnRuLmxlbmd0aCAmJlxyXG4gICAgICAgICRjbG9zZUJ0bi5vbihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgdG9nZ2xlTWVudShmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAkb3ZlcmxheS5vbihcImNsaWNrXCIsICgpID0+IHRvZ2dsZU1lbnUoZmFsc2UpKTtcclxuXHJcbiAgICAgICQoZG9jdW1lbnQpLm9uKFwia2V5ZG93blwiLCAoZSkgPT4gZS5rZXkgPT09IFwiRXNjYXBlXCIgJiYgdG9nZ2xlTWVudShmYWxzZSkpO1xyXG5cclxuICAgICAgJG1lbnUubGVuZ3RoICYmICRtZW51Lm9uKFwiY2xpY2tcIiwgKGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCkpO1xyXG5cclxuICAgICAgJCh3aW5kb3cpLm9uKFxyXG4gICAgICAgIFwicmVzaXplXCIsXHJcbiAgICAgICAgKCkgPT4gJCh3aW5kb3cpLndpZHRoKCkgPiA5OTEgJiYgdG9nZ2xlTWVudShmYWxzZSksXHJcbiAgICAgICk7XHJcblxyXG4gICAgICAvLyBNb2JpbGUgZHJvcGRvd24gdG9nZ2xlc1xyXG4gICAgICAkKFwiLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gPiBhXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gOTkxKSB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmZpbmQoXCIuc3ViLW1lbnVcIikuc2xpZGVUb2dnbGUoMzAwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemVzIHRoZSBmdW4gZmFjdCBjb3VudGVyLlxyXG4gICAgICpcclxuICAgICAqIFRoaXMgZnVuY3Rpb24gaW5pdGlhbGl6ZXMgdGhlIGNvdW50ZXItdXAgZnVuY3Rpb25hbGl0eSBmb3IgdGhlIGZ1biBmYWN0c1xyXG4gICAgICogc2VjdGlvbiBvbiB0aGUgaG9tZXBhZ2UuIEl0IHVzZXMgdGhlIGNvdW50ZXJVcCBsaWJyYXJ5IHRvIGFuaW1hdGUgdGhlXHJcbiAgICAgKiBjb3VudGVyIHZhbHVlcy5cclxuICAgICAqXHJcbiAgICAgKiBAc2luY2UgMS4wLjBcclxuICAgICAqL1xyXG4gICAgaW5pdEZ1bkZhY3RDb3VudGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoXCIuY291bnRlclwiKS5jb3VudGVyVXAoe1xyXG4gICAgICAgIGRlbGF5OiAxNixcclxuICAgICAgICB0aW1lOiAxNTAwLFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHVwIGV2ZW50IGxpc3RlbmVycyBmb3IgdGhlIGNvbGxhcHNlIG1lbnUsIGNoaWxkIG1lbnUgaXRlbXMsIGxpZ2h0Ym94LFxyXG4gICAgICogYW5kIHRhYnMuXHJcbiAgICAgKlxyXG4gICAgICogVGhpcyBmdW5jdGlvbiBzZXRzIHVwIGV2ZW50IGxpc3RlbmVycyBmb3IgdGhlIGNvbGxhcHNlIG1lbnUsIGNoaWxkIG1lbnVcclxuICAgICAqIGl0ZW1zLCBsaWdodGJveCwgYW5kIHRhYnMuIEl0IHJ1bnMgd2hlbiB0aGUgZG9jdW1lbnQgaXMgcmVhZHkuXHJcbiAgICAgKlxyXG4gICAgICogQHNpbmNlIDEuMC4wXHJcbiAgICAgKi9cclxuICAgIHJlYWR5OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoXCIuY29sbGFwc2UtbWVudSAuY29sbGFwc2UtaWNvblwiKS5vbihcImNsaWNrXCIsIGFwcC5oYW5kbGVDb2xsYXBzZU1lbnUpO1xyXG4gICAgICAkKFwiLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gYVwiKS5vbihcImNsaWNrXCIsIGFwcC5oYW5kbGVDaGlsZE1lbnVJdGVtKTtcclxuXHJcbiAgICAgIC8vIGxpZ2h0Ym94XHJcbiAgICAgIGFwcC5oYW5kbGVMaWdodGJveCgpO1xyXG5cclxuICAgICAgLy8gdGFiXHJcbiAgICAgIGFwcC5oYW5kbGVUYWIoKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGVzIHRoZSBjb2xsYXBzZSBtZW51IGZ1bmN0aW9uYWxpdHkuXHJcbiAgICAgKlxyXG4gICAgICogVGhpcyBmdW5jdGlvbiBoYW5kbGVzIHRoZSBjb2xsYXBzZSBtZW51IGZ1bmN0aW9uYWxpdHkuIEl0IHRvZ2dsZXMgdGhlXHJcbiAgICAgKiBvcGVuIGNsYXNzIG9uIHRoZSBtYWluIG1lbnUgYW5kIHRoZSBhY3RpdmUgY2xhc3Mgb24gdGhlIGNvbGxhcHNlXHJcbiAgICAgKiBpY29uLiBJZiB0aGUgbW9iaWxlIG1lbnUgZG9lcyBub3QgZXhpc3QsIGl0IGNyZWF0ZXMgYSBuZXcgb25lIGJ5XHJcbiAgICAgKiBjbG9uaW5nIHRoZSBmaXJzdCBtZW51IGl0ZW1zIGFuZCBhZGRpbmcgdGhlIG5lY2Vzc2FyeSBjbGFzc2VzLiBJdFxyXG4gICAgICogdGhlbiB0b2dnbGVzIHRoZSBvcGVuIGNsYXNzIG9uIHRoZSBtb2JpbGUgbWVudS5cclxuICAgICAqXHJcbiAgICAgKiBAc2luY2UgMS4wLjBcclxuICAgICAqL1xyXG4gICAgaGFuZGxlQ29sbGFwc2VNZW51OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciAkbWFpbk1lbnUgPSAkKHRoaXMpLmNsb3Nlc3QoXCIubWFpbi1tZW51XCIpO1xyXG5cclxuICAgICAgJG1haW5NZW51LnRvZ2dsZUNsYXNzKFwib3BlblwiKTtcclxuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgICAgIHZhciAkbW9iaWxlTWVudSA9ICRtYWluTWVudS5uZXh0KFwiLm1vYmlsZS1tZW51XCIpO1xyXG5cclxuICAgICAgaWYgKCEkbW9iaWxlTWVudS5sZW5ndGgpIHtcclxuICAgICAgICAkbW9iaWxlTWVudSA9ICRtYWluTWVudVxyXG4gICAgICAgICAgLmNoaWxkcmVuKFwiLm1lbnUtaXRlbXNcIilcclxuICAgICAgICAgIC5maXJzdCgpXHJcbiAgICAgICAgICAuY2xvbmUodHJ1ZSwgdHJ1ZSlcclxuICAgICAgICAgIC5yZW1vdmVDbGFzcyhcIm1lbnUtaXRlbXNcIilcclxuICAgICAgICAgIC5hZGRDbGFzcyhcIm1vYmlsZS1tZW51XCIpO1xyXG5cclxuICAgICAgICAkbW9iaWxlTWVudS5maW5kKFwiW2lkXVwiKS5yZW1vdmVBdHRyKFwiaWRcIik7XHJcblxyXG4gICAgICAgICRtYWluTWVudS5hZnRlcigkbW9iaWxlTWVudSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFRvZ2dsZSBtb2JpbGUgbWVudVxyXG4gICAgICAkbW9iaWxlTWVudS50b2dnbGVDbGFzcyhcIm9wZW5cIik7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlcyB0aGUgY2xpY2sgZXZlbnQgb2YgYSBjaGlsZCBtZW51IGl0ZW0uXHJcbiAgICAgKlxyXG4gICAgICogVGhpcyBmdW5jdGlvbiB0b2dnbGVzIHRoZSBhY3RpdmUgY2xhc3Mgb24gdGhlIHBhcmVudCBlbGVtZW50IG9mIHRoZVxyXG4gICAgICogY2xpY2tlZCBjaGlsZCBtZW51IGl0ZW0uIFRoaXMgYWxsb3dzIHRoZSBwYXJlbnQgZWxlbWVudCB0byBiZSBzdHlsZWRcclxuICAgICAqIGRpZmZlcmVudGx5IHdoZW4gYSBjaGlsZCBtZW51IGl0ZW0gaXMgYWN0aXZlLlxyXG4gICAgICpcclxuICAgICAqIEBzaW5jZSAxLjAuMFxyXG4gICAgICovXHJcbiAgICBoYW5kbGVDaGlsZE1lbnVJdGVtOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQodGhpcykucGFyZW50KCkudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIGZpeGVkIGhlYWRlciBmdW5jdGlvbmFsaXR5LlxyXG4gICAgICogVGhlIGhlYWRlciBpcyBmaXhlZCB3aGVuIHRoZSB1c2VyIHNjcm9sbHMgZG93biBhbmQgdW5maXhlZCB3aGVuIHRoZXkgc2Nyb2xsIHVwLlxyXG4gICAgICovXHJcbiAgICBpbml0Rml4ZEhlYWRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICBsZXQgbGFzdFNjcm9sbFRvcCA9IDA7XHJcbiAgICAgIGNvbnN0IGZpeGVkaGVhZGVyID0gJChcIi5zaXRlLWhlYWRlclwiKTtcclxuXHJcbiAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBjdXJyZW50U2Nyb2xsID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnRTY3JvbGwgPiBsYXN0U2Nyb2xsVG9wIHx8IGN1cnJlbnRTY3JvbGwgPCA1KSB7XHJcbiAgICAgICAgICAvLyBTY3JvbGwgZG93blxyXG4gICAgICAgICAgZml4ZWRoZWFkZXIucmVtb3ZlQ2xhc3MoXCJmaXhlZC1oZWFkZXJcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIFNjcm9sbCB1cFxyXG4gICAgICAgICAgZml4ZWRoZWFkZXIuYWRkQ2xhc3MoXCJmaXhlZC1oZWFkZXJcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsYXN0U2Nyb2xsVG9wID0gY3VycmVudFNjcm9sbCA8PSAwID8gMCA6IGN1cnJlbnRTY3JvbGw7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZXMgdGhlIGNsaWNrIGV2ZW50IG9mIHRoZSBcInRvIHRvcFwiIGJ1dHRvbi5cclxuICAgICAqIFNjcm9sbHMgdGhlIHBhZ2UgdG8gdGhlIHRvcCB3aXRoIGEgc2xvdyBhbmltYXRpb24uXHJcbiAgICAgKi9cclxuICAgIGhhbmRsZVRvVG9wOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IDAgfSwgXCJzbG93XCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZXMgdGhlIGNsaWNrIGV2ZW50IG9mIHRoZSBtZW51IHRvZ2dsZSBidXR0b24uXHJcbiAgICAgKiBUb2dnbGVzIHRoZSBtb2JpbGUgbWVudSBvbiBhbmQgb2ZmIGJ5IGNhbGxpbmcgdGhlIHNsaWNrbmF2KFwidG9nZ2xlXCIpIG1ldGhvZC5cclxuICAgICAqIEBzaW5jZSAxLjAuMFxyXG4gICAgICovXHJcbiAgICBoYW5kbGVNZW51VG9nZ2xlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoXCIjbW9iaWxlLW1lbnVcIikuc2xpY2tuYXYoXCJ0b2dnbGVcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlcyB0aGUgY2xpY2sgZXZlbnQgb2YgdGhlIGxpZ2h0Ym94LlxyXG4gICAgICpcclxuICAgICAqIFRoaXMgZnVuY3Rpb24gaGFuZGxlcyB0aGUgY2xpY2sgZXZlbnQgb2YgdGhlIGxpZ2h0Ym94IGJ5IGNhbGxpbmcgdGhlIGxpdHlcclxuICAgICAqIGZ1bmN0aW9uLiBJdCBvbmx5IHJ1bnMgaWYgdGhlcmUgYXJlIGVsZW1lbnRzIHdpdGggdGhlIGRhdGEtbGlnaHRib3ggYXR0cmlidXRlLlxyXG4gICAgICpcclxuICAgICAqIEBzaW5jZSAxLjAuMFxyXG4gICAgICovXHJcbiAgICBoYW5kbGVMaWdodGJveDogZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAoJChcIltkYXRhLWxpZ2h0Ym94XVwiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIltkYXRhLWxpZ2h0Ym94XVwiLCBsaXR5KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZXMgdGhlIGNsaWNrIGV2ZW50IG9mIHRoZSB0YWJzLlxyXG4gICAgICpcclxuICAgICAqIFRoaXMgZnVuY3Rpb24gaGFuZGxlcyB0aGUgY2xpY2sgZXZlbnQgb2YgdGhlIHRhYnMgYnkgYWRkaW5nIGFuZCByZW1vdmluZyB0aGVcclxuICAgICAqIFwiYWN0aXZlXCIgY2xhc3MgZnJvbSB0aGUgYnV0dG9ucyBhbmQgY29udGVudHMuIEl0IGVuc3VyZXMgdGhhdCBvbmx5IG9uZSB0YWJcclxuICAgICAqIGlzIGFjdGl2ZSBhdCBhIHRpbWUuXHJcbiAgICAgKlxyXG4gICAgICogQHNpbmNlIDEuMC4wXHJcbiAgICAgKi9cclxuICAgIGhhbmRsZVRhYjogZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zdCAkYnV0dG9ucyA9ICQoXCIuY29ubmVjdC1kcml2ZS1mZWF0dXJlc19fdGFiX19idG5cIik7XHJcbiAgICAgIGNvbnN0ICRjb250ZW50cyA9ICQoXCIuY29ubmVjdC1kcml2ZS1mZWF0dXJlc19fY29udGVudF9fbWFpblwiKTtcclxuXHJcbiAgICAgICRidXR0b25zLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcclxuICAgICAgICBjb25zdCB0YXJnZXRJZCA9ICR0aGlzLmRhdGEoXCJ0YXJnZXRcIik7XHJcblxyXG4gICAgICAgICRidXR0b25zLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICRjb250ZW50cy5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgICAgICAgJHRoaXMuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgJChcIiNmZWF0dXJlLVwiICsgdGFyZ2V0SWQpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgYXBwLmluaXQoKTtcclxuICAkKGRvY3VtZW50KS5yZWFkeShhcHAucmVhZHkpO1xyXG59KShqUXVlcnkpO1xyXG4iXSwibmFtZXMiOlsiJCIsImFwcCIsImluaXQiLCJvbiIsImhhbmRsZVN3aXRjaGVyIiwiaGFuZGxlU3dpdGNoZXJVcGRhdGUiLCJoYW5kbGVMaWNlbnNlU3dpdGNoZXIiLCJlIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImhhc0NsYXNzIiwidG9nZ2xlQ2xhc3MiLCJwcmV2ZW50RGVmYXVsdCIsInRleHQiLCJsaWNlbnNlIiwiZGF0YSIsImNvbmNhdCIsImxpY2Vuc2VUeXBlIiwiZG9jdW1lbnQiLCJyZWFkeSIsImpRdWVyeSIsImJhbm5lciIsInJlbW92ZSIsImNvdW50ZG93biIsImZpbmQiLCJ0aW1lciIsImxlbmd0aCIsIlNFQ09ORCIsIk1JTlVURSIsIkhPVVIiLCJEQVkiLCJwYWRaZXJvIiwibnVtIiwiZm9ybWF0VGltZSIsImRpc3RhbmNlIiwiZGF5cyIsIk1hdGgiLCJmbG9vciIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJ1cGRhdGVUaW1lciIsIm5vdyIsIkRhdGUiLCJnZXRUaW1lIiwiY291bnREb3duRGF0ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyZW1vdmVJdGVtIiwiY2xlYXJJbnRlcnZhbCIsIngiLCJodG1sIiwic2V0SXRlbSIsInNldEludGVydmFsIiwiaW5pdEZpeGRIZWFkZXIiLCJoYW5kbGVUb1RvcCIsImluaXRGdW5GYWN0Q291bnRlciIsImhhbmRsZU1vYmlsZU1lbnVDbG9zZSIsIiRtZW51IiwiJG1lbnVUb2dnbGUiLCIkY2xvc2VCdG4iLCIkb3ZlcmxheSIsImFwcGVuZFRvIiwidG9nZ2xlTWVudSIsInNob3ciLCJjc3MiLCJzdG9wUHJvcGFnYXRpb24iLCJrZXkiLCJ3aW5kb3ciLCJ3aWR0aCIsInBhcmVudCIsInNsaWRlVG9nZ2xlIiwiY291bnRlclVwIiwiZGVsYXkiLCJ0aW1lIiwiaGFuZGxlQ29sbGFwc2VNZW51IiwiaGFuZGxlQ2hpbGRNZW51SXRlbSIsImhhbmRsZUxpZ2h0Ym94IiwiaGFuZGxlVGFiIiwiJG1haW5NZW51IiwiY2xvc2VzdCIsIiRtb2JpbGVNZW51IiwibmV4dCIsImNoaWxkcmVuIiwiZmlyc3QiLCJjbG9uZSIsInJlbW92ZUF0dHIiLCJhZnRlciIsImxhc3RTY3JvbGxUb3AiLCJmaXhlZGhlYWRlciIsInNjcm9sbCIsImN1cnJlbnRTY3JvbGwiLCJzY3JvbGxUb3AiLCJhbmltYXRlIiwiaGFuZGxlTWVudVRvZ2dsZSIsInNsaWNrbmF2IiwibGl0eSIsIiRidXR0b25zIiwiJGNvbnRlbnRzIiwiJHRoaXMiLCJ0YXJnZXRJZCJdLCJzb3VyY2VSb290IjoiIn0=