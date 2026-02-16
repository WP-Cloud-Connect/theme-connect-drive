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
      app.mobileMenu();
    },
    mobileMenu: function mobileMenu() {
      $("#menu").slicknav({
        prependTo: "#demo1"
      });
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
    }
  };
  app.init();
  $(document).ready(app.ready);
  if ($("[data-lightbox]").length > 0) {
    $(document).on("click", "[data-lightbox]", lity);
  }
  $(document).ready(function () {
    // Cache selectors for better performance
    var $buttons = $(".feature-tab-btn");
    var $contents = $(".feature-tab-content");
    $buttons.on("click", function () {
      var $this = $(this);
      var targetId = $this.data("target");
      $buttons.removeClass("active");
      $contents.removeClass("active");
      $this.addClass("active");
      $("#feature-" + targetId).addClass("active");
    });
  });
})(jQuery);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQzBCLE1BQU0sR0FBRyxDQUFDLEVBQUU7SUFDbkMxQixDQUFDLENBQUNrQixRQUFRLENBQUMsQ0FBQ2YsRUFBRSxDQUFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRStELElBQUksQ0FBQztFQUNsRDtFQUVBbEUsQ0FBQyxDQUFDa0IsUUFBUSxDQUFDLENBQUNDLEtBQUssQ0FBQyxZQUFZO0lBQzVCO0lBQ0EsSUFBTWdELFFBQVEsR0FBR25FLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQztJQUN0QyxJQUFNb0UsU0FBUyxHQUFHcEUsQ0FBQyxDQUFDLHNCQUFzQixDQUFDO0lBRTNDbUUsUUFBUSxDQUFDaEUsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFZO01BQy9CLElBQU1rRSxLQUFLLEdBQUdyRSxDQUFDLENBQUMsSUFBSSxDQUFDO01BQ3JCLElBQU1zRSxRQUFRLEdBQUdELEtBQUssQ0FBQ3RELElBQUksQ0FBQyxRQUFRLENBQUM7TUFFckNvRCxRQUFRLENBQUMzRCxXQUFXLENBQUMsUUFBUSxDQUFDO01BQzlCNEQsU0FBUyxDQUFDNUQsV0FBVyxDQUFDLFFBQVEsQ0FBQztNQUUvQjZELEtBQUssQ0FBQzVELFFBQVEsQ0FBQyxRQUFRLENBQUM7TUFDeEJULENBQUMsQ0FBQyxXQUFXLEdBQUdzRSxRQUFRLENBQUMsQ0FBQzdELFFBQVEsQ0FBQyxRQUFRLENBQUM7SUFDOUMsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDO0FBQ0osQ0FBQyxFQUFFVyxNQUFNLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Nvbm5lY3QtZHJpdmUvLi9zcmMvanMvY29tcG9uZW50cy9wcmljaW5nLmpzIiwid2VicGFjazovL2Nvbm5lY3QtZHJpdmUvLi9zcmMvanMvY29tcG9uZW50cy9zdGlja3ktYmFubmVyLmpzIiwid2VicGFjazovL2Nvbm5lY3QtZHJpdmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY29ubmVjdC1kcml2ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jb25uZWN0LWRyaXZlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jb25uZWN0LWRyaXZlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY29ubmVjdC1kcml2ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Nvbm5lY3QtZHJpdmUvLi9zcmMvanMvZnJvbnRlbmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgkKSB7XHJcbiAgY29uc3QgYXBwID0ge1xyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAvL0hhbmRsZSBwcmljaW5nIHN3aXRjaGVyXHJcbiAgICAgICQoXCIucHJpY2luZy1zd2l0Y2hlclwiKS5vbihcImNsaWNrXCIsIGFwcC5oYW5kbGVTd2l0Y2hlcik7XHJcbiAgICAgIC8vSGFuZGxlIHByaWNpbmcgc3dpdGNoZXIgdXBkYXRlXHJcbiAgICAgICQoXCIubGljZW5zZS1tZW51IC5saXN0LWl0ZW1cIikub24oXCJjbGlja1wiLCBhcHAuaGFuZGxlU3dpdGNoZXJVcGRhdGUpO1xyXG5cclxuICAgICAgLy8gSGFuZGxlIGxpY2Vuc2Ugc3dpdGNoZXJcclxuICAgICAgJChcIi5saWNlbnNlLWRyb3Bkb3duIC5kcm9wZG93bi1pdGVtXCIpLm9uKFxyXG4gICAgICAgIFwiY2xpY2tcIixcclxuICAgICAgICBhcHAuaGFuZGxlTGljZW5zZVN3aXRjaGVyLFxyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBoYW5kbGVTd2l0Y2hlcjogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgJChcIi5wcmljZS10ZXh0XCIpXHJcbiAgICAgICAgLnJlbW92ZUNsYXNzKFwiYW5udWFsIGxpZmV0aW1lXCIpXHJcbiAgICAgICAgLmFkZENsYXNzKCQodGhpcykuaGFzQ2xhc3MoXCJhY3RpdmVcIikgPyBcImFubnVhbFwiIDogXCJsaWZldGltZVwiKTtcclxuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgIH0sXHJcblxyXG4gICAgaGFuZGxlTGljZW5zZVN3aXRjaGVyOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAkKFwiLmxpY2Vuc2UtZHJvcGRvd24gLmRyb3Bkb3duLXRvZ2dsZVwiKS50ZXh0KCQodGhpcykudGV4dCgpKTtcclxuXHJcbiAgICAgICQoXCIubGljZW5zZS1kcm9wZG93biAuZHJvcGRvd24taXRlbVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgICAgIGNvbnN0IGxpY2Vuc2UgPSAkKHRoaXMpLmRhdGEoXCJsaWNlbnNlXCIpO1xyXG4gICAgICAkKFwiLnByaWNlLXRleHRcIilcclxuICAgICAgICAucmVtb3ZlQ2xhc3MoXHJcbiAgICAgICAgICBcImxpY2Vuc2UtMSBsaWNlbnNlLTIgbGljZW5zZS01IGxpY2Vuc2UtMTAwIGxpY2Vuc2UtdW5saW1pdGVkIFwiLFxyXG4gICAgICAgIClcclxuICAgICAgICAuYWRkQ2xhc3MoYGxpY2Vuc2UtJHtsaWNlbnNlfWApO1xyXG4gICAgfSxcclxuXHJcbiAgICBoYW5kbGVTd2l0Y2hlclVwZGF0ZTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgLy8gQWN0aXZlIHRhYlxyXG4gICAgICAkKFwiLmxpY2Vuc2UtbWVudSAubGlzdC1pdGVtXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgICAgdmFyIGxpY2Vuc2VUeXBlID0gJCh0aGlzKS5kYXRhKFwibGljZW5zZVwiKTtcclxuXHJcbiAgICAgIC8vIFJlc2V0XHJcbiAgICAgICQoXCIucHJpY2UtdGV4dFwiKS5yZW1vdmVDbGFzcyhcclxuICAgICAgICBcImxpY2Vuc2UtMSBsaWNlbnNlLTIgbGljZW5zZS01IGxpY2Vuc2UtMTAwIGxpY2Vuc2UtdW5saW1pdGVkXCIsXHJcbiAgICAgICk7XHJcblxyXG4gICAgICAvLyBBREQgQ09SUkVDVCBDTEFTU1xyXG4gICAgICAkKFwiLnByaWNlLXRleHRcIikuYWRkQ2xhc3MoXCJsaWNlbnNlLVwiICsgbGljZW5zZVR5cGUpO1xyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICAvLyAkKFwiLmxpY2Vuc2UtbWVudSAubGlzdC1pdGVtXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAvLyAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgLy8gICAvLyBBY3RpdmUgdGFiXHJcbiAgLy8gICAkKFwiLmxpY2Vuc2UtbWVudSAubGlzdC1pdGVtXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gIC8vICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgLy8gICB2YXIgbGljZW5zZVR5cGUgPSAkKHRoaXMpLmRhdGEoXCJsaWNlbnNlXCIpO1xyXG5cclxuICAvLyAgIC8vIFJlc2V0XHJcbiAgLy8gICAkKFwiLnByaWNlLXRleHRcIikucmVtb3ZlQ2xhc3MoXHJcbiAgLy8gICAgIFwibGljZW5zZS0xIGxpY2Vuc2UtMiBsaWNlbnNlLTUgbGljZW5zZS0xMDAgbGljZW5zZS11bmxpbWl0ZWRcIixcclxuICAvLyAgICk7XHJcblxyXG4gIC8vICAgLy8gQUREIENPUlJFQ1QgQ0xBU1NcclxuICAvLyAgICQoXCIucHJpY2UtdGV4dFwiKS5hZGRDbGFzcyhcImxpY2Vuc2UtXCIgKyBsaWNlbnNlVHlwZSk7XHJcbiAgLy8gfSk7XHJcblxyXG4gICQoZG9jdW1lbnQpLnJlYWR5KGFwcC5pbml0KTtcclxufSkoalF1ZXJ5KTtcclxuIiwiLy8gOyhmdW5jdGlvbiAoJCkge1xyXG4vLyAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgICAgIGNvbnN0IGJhbm5lciA9ICQoJyNoZWFkZXItc3RpY2t5LWJhbm5lciwgI2hhbGxvd2Vlbi1vZmZlcnMsICNibGFjay1mcmlkYXktb2ZmZXJzJyk7XHJcblxyXG4vLyAgICAgICAgIC8vIENsb3NlIGJhbm5lclxyXG4vLyAgICAgICAgIGJhbm5lci5vbignY2xpY2snLCAnLmJhbm5lci1jbG9zZScsIGZ1bmN0aW9uICgpIHtcclxuLy8gICAgICAgICAgICAgJCgnI2hlYWRlci1zdGlja3ktYmFubmVyJykucmVtb3ZlKCk7XHJcbi8vICAgICAgICAgfSk7XHJcblxyXG4vLyAgICAgICAgIC8vIEJhbm5lciBjb3VudGRvd25cclxuLy8gICAgICAgICBjb25zdCBjb3VudGRvd24gPSBiYW5uZXIuZmluZCgnLmJhbm5lci1jb3VudGRvd24nKTtcclxuLy8gICAgICAgICBjb25zdCB0aW1lciA9IGJhbm5lci5maW5kKCcudGltZXInKTtcclxuXHJcbi8vICAgICAgICAgaWYgKGNvdW50ZG93bi5sZW5ndGgpIHtcclxuLy8gICAgICAgICAgICAgY29uc3QgU0VDT05EID0gMTAwMDtcclxuLy8gICAgICAgICAgICAgY29uc3QgTUlOVVRFID0gNjAgKiBTRUNPTkQ7XHJcbi8vICAgICAgICAgICAgIGNvbnN0IEhPVVIgPSA2MCAqIE1JTlVURTtcclxuLy8gICAgICAgICAgICAgY29uc3QgREFZID0gMjQgKiBIT1VSO1xyXG5cclxuLy8gICAgICAgICAgICAgY29uc3QgZm9ybWF0VGltZSA9IChkaXN0YW5jZSkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IoZGlzdGFuY2UgLyBEQVkpO1xyXG4vLyAgICAgICAgICAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlIERBWSkgLyBIT1VSKTtcclxuLy8gICAgICAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlIEhPVVIpIC8gTUlOVVRFKTtcclxuLy8gICAgICAgICAgICAgICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlIE1JTlVURSkgLyBTRUNPTkQpO1xyXG5cclxuLy8gICAgICAgICAgICAgICAgIHJldHVybiBgPHNwYW4gY2xhc3M9XCJkYXlzXCI+JHtkYXlzfWQ8L3NwYW4+IDxzcGFuIGNsYXNzPVwiaG91cnNcIj4ke2hvdXJzfWg8L3NwYW4+IDxzcGFuIGNsYXNzPVwibWludXRlc1wiPiR7bWludXRlc31tPC9zcGFuPiA8c3BhbiBjbGFzcz1cInNlY29uZHNcIj4ke3NlY29uZHN9czwvc3Bhbj5gO1xyXG4vLyAgICAgICAgICAgICB9O1xyXG5cclxuLy8gICAgICAgICAgICAgY29uc3QgdXBkYXRlVGltZXIgPSAoKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuLy8gICAgICAgICAgICAgICAgIC8vbGV0IGNvdW50RG93bkRhdGUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIDguNSAqIERBWTtcclxuLy8gICAgICAgICAgICAgICAgIGxldCBjb3VudERvd25EYXRlID0gbmV3IERhdGUoJzIwMjQtMTItMDVUMjM6NTk6MDAnKS5nZXRUaW1lKCk7XHJcblxyXG5cclxuLy8gICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIGEgdGltZSBpbiBsb2NhbCBzdG9yYWdlXHJcbi8vICAgICAgICAgICAgICAgICBpZiAoIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdiZl9vZmZlcnNfdGltZScpKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgY291bnREb3duRGF0ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdiZl9vZmZlcnNfdGltZScpO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gY291bnREb3duRGF0ZSAtIG5vdztcclxuXHJcbi8vICAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCAwKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgLy8gUmVzZXQgdGhlIHRpbWVcclxuLy8gICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYmZfb2ZmZXJzX3RpbWUnKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgdGltZXIuaHRtbChmb3JtYXRUaW1lKGRpc3RhbmNlKSk7XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgLy8gU2F2ZSB0aW1lIGluIGxvY2FsIHN0b3JhZ2VcclxuLy8gICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdiZl9vZmZlcnNfdGltZScsIGNvdW50RG93bkRhdGUpO1xyXG4vLyAgICAgICAgICAgICB9O1xyXG5cclxuLy8gICAgICAgICAgICAgY29uc3QgeCA9IHNldEludGVydmFsKHVwZGF0ZVRpbWVyLCAxMDAwKTtcclxuLy8gICAgICAgICAgICAgdXBkYXRlVGltZXIoKTsgLy8gQ2FsbCBpbW1lZGlhdGVseSwgZG9u4oCZdCB3YWl0IGZvciB0aGUgZmlyc3QgaW50ZXJ2YWwgdG8gZXhlY3V0ZVxyXG4gICAgICAgICAgICBcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9KTtcclxuXHJcbi8vIH0pKGpRdWVyeSk7XHJcblxyXG5cclxuKGZ1bmN0aW9uICgkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgYmFubmVyID0gJCgnI2hlYWRlci1zdGlja3ktYmFubmVyLCAjaGFsbG93ZWVuLW9mZmVycywgI2JsYWNrLWZyaWRheS1vZmZlcnMgJyk7XHJcblxyXG4gICAgICAgIC8vIENsb3NlIGJhbm5lclxyXG4gICAgICAgIGJhbm5lci5vbignY2xpY2snLCAnLmJhbm5lci1jbG9zZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCgnI2hlYWRlci1zdGlja3ktYmFubmVyJykucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEJhbm5lciBjb3VudGRvd25cclxuICAgICAgICBjb25zdCBjb3VudGRvd24gPSBiYW5uZXIuZmluZCgnLmJhbm5lci1jb3VudGRvd24nKTtcclxuICAgICAgICBjb25zdCB0aW1lciA9IGJhbm5lci5maW5kKCcudGltZXInKTtcclxuXHJcbiAgICAgICAgaWYgKGNvdW50ZG93bi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY29uc3QgU0VDT05EID0gMTAwMDtcclxuICAgICAgICAgICAgY29uc3QgTUlOVVRFID0gNjAgKiBTRUNPTkQ7XHJcbiAgICAgICAgICAgIGNvbnN0IEhPVVIgPSA2MCAqIE1JTlVURTtcclxuICAgICAgICAgICAgY29uc3QgREFZID0gMjQgKiBIT1VSO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcGFkWmVybyA9IChudW0pID0+IChudW0gPCAxMCA/IGAwJHtudW19YCA6IG51bSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBmb3JtYXRUaW1lID0gKGRpc3RhbmNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXlzID0gcGFkWmVybyhNYXRoLmZsb29yKGRpc3RhbmNlIC8gREFZKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBob3VycyA9IHBhZFplcm8oTWF0aC5mbG9vcigoZGlzdGFuY2UgJSBEQVkpIC8gSE9VUikpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWludXRlcyA9IHBhZFplcm8oTWF0aC5mbG9vcigoZGlzdGFuY2UgJSBIT1VSKSAvIE1JTlVURSkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2Vjb25kcyA9IHBhZFplcm8oTWF0aC5mbG9vcigoZGlzdGFuY2UgJSBNSU5VVEUpIC8gU0VDT05EKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiY291bnRkb3duXCI+PHNwYW4gY2xhc3M9XCJkYXlzXCI+JHtkYXlzfSBkPC9zcGFuPjwvZGl2PiBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb3VudGRvd25cIj48c3BhbiBjbGFzcz1cImhvdXJzXCI+JHtob3Vyc30gaDwvc3Bhbj4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY291bnRkb3duXCI+PHNwYW4gY2xhc3M9XCJtaW51dGVzXCI+JHttaW51dGVzfSBtPC9zcGFuPiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb3VudGRvd25cIj48c3BhbiBjbGFzcz1cInNlY29uZHNcIj4ke3NlY29uZHN9IHM8L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+YDtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZVRpbWVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY291bnREb3duRGF0ZSA9IG5ldyBEYXRlKCcyMDI1LTEyLTEwVDIzOjU5OjAwJykuZ2V0VGltZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIGEgdGltZSBpbiBsb2NhbCBzdG9yYWdlXHJcbiAgICAgICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2JmX29mZmVyc190aW1lJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudERvd25EYXRlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2JmX29mZmVyc190aW1lJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IGNvdW50RG93bkRhdGUgLSBub3c7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdiZl9vZmZlcnNfdGltZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhbm5lci5yZW1vdmUoKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh4KTsgXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRpbWVyLmh0bWwoZm9ybWF0VGltZShkaXN0YW5jZSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNhdmUgdGltZSBpbiBsb2NhbCBzdG9yYWdlXHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYmZfb2ZmZXJzX3RpbWUnLCBjb3VudERvd25EYXRlKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHggPSBzZXRJbnRlcnZhbCh1cGRhdGVUaW1lciwgMTAwMCk7XHJcbiAgICAgICAgICAgIHVwZGF0ZVRpbWVyKCk7IFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufSkoalF1ZXJ5KTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDaGVjayBpZiBtb2R1bGUgZXhpc3RzIChkZXZlbG9wbWVudCBvbmx5KVxuXHRpZiAoX193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9jb21wb25lbnRzL3ByaWNpbmdcIjtcclxuaW1wb3J0IFwiLi9jb21wb25lbnRzL3N0aWNreS1iYW5uZXJcIjtcclxuXHJcbihmdW5jdGlvbiAoJCkge1xyXG4gIGNvbnN0IGFwcCA9IHtcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgLy9Jbml0aWFsaXplIHRoZSBmaXhlZCBoZWFkZXIgZnVuY3Rpb25hbGl0eVxyXG4gICAgICBhcHAuaW5pdEZpeGRIZWFkZXIoKTtcclxuXHJcbiAgICAgIC8vSGFuZGxlIHRvIHRvcCBidXR0b25cclxuICAgICAgJChcIi50by10b3BcIikub24oXCJjbGlja1wiLCBhcHAuaGFuZGxlVG9Ub3ApO1xyXG5cclxuICAgICAgYXBwLm1vYmlsZU1lbnUoKTtcclxuICAgIH0sXHJcblxyXG4gICAgbW9iaWxlTWVudTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKFwiI21lbnVcIikuc2xpY2tuYXYoe1xyXG4gICAgICAgIHByZXBlbmRUbzogXCIjZGVtbzFcIixcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIGZpeGVkIGhlYWRlciBmdW5jdGlvbmFsaXR5LlxyXG4gICAgICogVGhlIGhlYWRlciBpcyBmaXhlZCB3aGVuIHRoZSB1c2VyIHNjcm9sbHMgZG93biBhbmQgdW5maXhlZCB3aGVuIHRoZXkgc2Nyb2xsIHVwLlxyXG4gICAgICovXHJcbiAgICBpbml0Rml4ZEhlYWRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICBsZXQgbGFzdFNjcm9sbFRvcCA9IDA7XHJcbiAgICAgIGNvbnN0IGZpeGVkaGVhZGVyID0gJChcIi5zaXRlLWhlYWRlclwiKTtcclxuXHJcbiAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBjdXJyZW50U2Nyb2xsID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnRTY3JvbGwgPiBsYXN0U2Nyb2xsVG9wIHx8IGN1cnJlbnRTY3JvbGwgPCA1KSB7XHJcbiAgICAgICAgICAvLyBTY3JvbGwgZG93blxyXG4gICAgICAgICAgZml4ZWRoZWFkZXIucmVtb3ZlQ2xhc3MoXCJmaXhlZC1oZWFkZXJcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIFNjcm9sbCB1cFxyXG4gICAgICAgICAgZml4ZWRoZWFkZXIuYWRkQ2xhc3MoXCJmaXhlZC1oZWFkZXJcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsYXN0U2Nyb2xsVG9wID0gY3VycmVudFNjcm9sbCA8PSAwID8gMCA6IGN1cnJlbnRTY3JvbGw7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZXMgdGhlIGNsaWNrIGV2ZW50IG9mIHRoZSBcInRvIHRvcFwiIGJ1dHRvbi5cclxuICAgICAqIFNjcm9sbHMgdGhlIHBhZ2UgdG8gdGhlIHRvcCB3aXRoIGEgc2xvdyBhbmltYXRpb24uXHJcbiAgICAgKi9cclxuICAgIGhhbmRsZVRvVG9wOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IDAgfSwgXCJzbG93XCIpO1xyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICBhcHAuaW5pdCgpO1xyXG4gICQoZG9jdW1lbnQpLnJlYWR5KGFwcC5yZWFkeSk7XHJcblxyXG4gIGlmICgkKFwiW2RhdGEtbGlnaHRib3hdXCIpLmxlbmd0aCA+IDApIHtcclxuICAgICQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCJbZGF0YS1saWdodGJveF1cIiwgbGl0eSk7XHJcbiAgfVxyXG5cclxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBDYWNoZSBzZWxlY3RvcnMgZm9yIGJldHRlciBwZXJmb3JtYW5jZVxyXG4gICAgY29uc3QgJGJ1dHRvbnMgPSAkKFwiLmZlYXR1cmUtdGFiLWJ0blwiKTtcclxuICAgIGNvbnN0ICRjb250ZW50cyA9ICQoXCIuZmVhdHVyZS10YWItY29udGVudFwiKTtcclxuXHJcbiAgICAkYnV0dG9ucy5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgICBjb25zdCB0YXJnZXRJZCA9ICR0aGlzLmRhdGEoXCJ0YXJnZXRcIik7XHJcblxyXG4gICAgICAkYnV0dG9ucy5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgJGNvbnRlbnRzLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgICAgJHRoaXMuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICQoXCIjZmVhdHVyZS1cIiArIHRhcmdldElkKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59KShqUXVlcnkpO1xyXG4iXSwibmFtZXMiOlsiJCIsImFwcCIsImluaXQiLCJvbiIsImhhbmRsZVN3aXRjaGVyIiwiaGFuZGxlU3dpdGNoZXJVcGRhdGUiLCJoYW5kbGVMaWNlbnNlU3dpdGNoZXIiLCJlIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImhhc0NsYXNzIiwidG9nZ2xlQ2xhc3MiLCJwcmV2ZW50RGVmYXVsdCIsInRleHQiLCJsaWNlbnNlIiwiZGF0YSIsImNvbmNhdCIsImxpY2Vuc2VUeXBlIiwiZG9jdW1lbnQiLCJyZWFkeSIsImpRdWVyeSIsImJhbm5lciIsInJlbW92ZSIsImNvdW50ZG93biIsImZpbmQiLCJ0aW1lciIsImxlbmd0aCIsIlNFQ09ORCIsIk1JTlVURSIsIkhPVVIiLCJEQVkiLCJwYWRaZXJvIiwibnVtIiwiZm9ybWF0VGltZSIsImRpc3RhbmNlIiwiZGF5cyIsIk1hdGgiLCJmbG9vciIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJ1cGRhdGVUaW1lciIsIm5vdyIsIkRhdGUiLCJnZXRUaW1lIiwiY291bnREb3duRGF0ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyZW1vdmVJdGVtIiwiY2xlYXJJbnRlcnZhbCIsIngiLCJodG1sIiwic2V0SXRlbSIsInNldEludGVydmFsIiwiaW5pdEZpeGRIZWFkZXIiLCJoYW5kbGVUb1RvcCIsIm1vYmlsZU1lbnUiLCJzbGlja25hdiIsInByZXBlbmRUbyIsImxhc3RTY3JvbGxUb3AiLCJmaXhlZGhlYWRlciIsIndpbmRvdyIsInNjcm9sbCIsImN1cnJlbnRTY3JvbGwiLCJzY3JvbGxUb3AiLCJhbmltYXRlIiwibGl0eSIsIiRidXR0b25zIiwiJGNvbnRlbnRzIiwiJHRoaXMiLCJ0YXJnZXRJZCJdLCJzb3VyY2VSb290IjoiIn0=