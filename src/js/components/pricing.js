(function ($) {
  const app = {
    init: function () {
      //Handle pricing switcher
      $(".pricing-switcher").on("click", app.handleSwitcher);
      //Handle pricing switcher update
      $(".license-menu .list-item").on("click", app.handleSwitcherUpdate);

      // Handle license switcher
      $(".license-dropdown .dropdown-item").on(
        "click",
        app.handleLicenseSwitcher,
      );
    },

    handleSwitcher: function (e) {
      $(".price-text")
        .removeClass("annual lifetime")
        .addClass($(this).hasClass("active") ? "annual" : "lifetime");
      $(this).toggleClass("active");
    },

    handleLicenseSwitcher: function (e) {
      e.preventDefault();

      $(".license-dropdown .dropdown-toggle").text($(this).text());

      $(".license-dropdown .dropdown-item").removeClass("active");
      $(this).addClass("active");

      const license = $(this).data("license");
      $(".price-text")
        .removeClass(
          "license-1 license-2 license-5 license-100 license-unlimited ",
        )
        .addClass(`license-${license}`);
    },

    handleSwitcherUpdate: function (e) {
      e.preventDefault();

      // Active tab
      $(".license-menu .list-item").removeClass("active");
      $(this).addClass("active");

      var licenseType = $(this).data("license");

      // Reset
      $(".price-text").removeClass(
        "license-1 license-2 license-5 license-100 license-unlimited",
      );

      // ADD CORRECT CLASS
      $(".price-text").addClass("license-" + licenseType);
    },
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
