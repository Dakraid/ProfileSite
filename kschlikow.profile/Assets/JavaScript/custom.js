$(document).ready(function () {
  "use strict";

  var size_li = $("#exp-list li").length;

  let x = 3;
  $("#exp-list li:lt("+ x +")").css("display", "table");

  $(".exp-list-show").click(function (e) {
    e.preventDefault();
    $("#exp-list").children(":hidden").css("display", "table");
    x = (x+1 <= size_li) ? x+1 : size_li;
    $("#exp-list li:lt("+x+")").show();

    if ($("#exp-list").children(":hidden").length === 0) {
      $(".exp-list-show").css("opacity", "0").css("visibility", "hidden");
    }
  });

  let y = 1;
  $("#edu-list li:lt("+ y +")").css("display", "table");

  $(".edu-list-show").click(function (e) {
    e.preventDefault();
    $("#edu-list").children(":hidden").css("display", "table");
    y = (y+1 <= edu_size_li) ? y+1 : edu_size_li;
    $("#edu-list li:lt("+y+")").show();

    if ($("#edu-list").children(":hidden").length === 0) {
      $(".edu-list-show").css("opacity", "0").css("visibility", "hidden");
    }
  });

  var $modal = $(".modal-frame");
  var $overlay = $(".modal-overlay");

  /* Need this to clear out the keyframe classes so they dont clash with each other between ener/leave. Cheers. */
  $modal.bind(
    "webkitAnimationEnd oanimationend msAnimationEnd animationend",
    function (e) {
      if ($modal.hasClass("state-leave")) {
        $modal.removeClass("state-leave");
      }
    }
  );

  $(".close").on("click", function (e) {
    e.preventDefault();
    $overlay.removeClass("state-show");
    $modal.removeClass("state-appear").addClass("state-leave");
  });

  $(".open").on("click", function (e) {
    e.preventDefault();
    $overlay.addClass("state-show");
    $modal.removeClass("state-leave").addClass("state-appear");
  });

  const windowWidth = $(window).width();

  if (windowWidth < 767) {
    $(".social").insertBefore(".section-one p");
  } else {
    $(".social").insertAfter(".section-one p");
  }
});

$(window).resize(function () {
  const windowWidht = $(window).width();

  if (windowWidht < 767) {
    $(".social").insertBefore(".section-one p");
  } else {
    $(".social").insertAfter(".section-one p");
  }
});

(function ($) {
  "use strict";
  $(".slider").slick({
    dots: false,
    infinite: false,
    arrows: true,
    speed: 300,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
    ],
  });
})(jQuery);
