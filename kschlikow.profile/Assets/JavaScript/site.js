import("jquery").then(async ($) => {
    $(document).ready(() => {
        const expSize = $("#exp-list li").length;
        let x = 3;
        $(`#exp-list li:lt(${x})`).css("display", "table");

        $(".exp-list-show").click((e) => {
            e.preventDefault();
            const expList = $("#exp-list");
            expList.children(":hidden").css("display", "table");
            x = (x + 1 <= expSize) ? x + 1 : expSize;
            $(`#exp-list li:lt(${x})`).show();

            if (expList.children(":hidden").length === 0) {
                $(".exp-list-show").css("opacity", "0").css("visibility", "hidden");
            }
        });

        const eduSize = $("#edu-list li").length;
        let y = 1;
        $(`#edu-list li:lt(${y})`).css("display", "table");

        $(".edu-list-show").click((e) => {
            e.preventDefault();
            const eduList = $("#edu-list");
            eduList.children(":hidden").css("display", "table");
            y = (y + 1 <= eduSize) ? y + 1 : eduSize;
            $(`#edu-list li:lt(${y})`).show();

            if (eduList.children(":hidden").length === 0) {
                $(".edu-list-show").css("opacity", "0").css("visibility", "hidden");
            }
        });

        const $modal = $(".modal-frame");
        const $overlay = $(".modal-overlay");

        /*
        Need this to clear out the keyframe classes,
        so they don't clash with each other between enter/leave.
        Cheers.
        */
        $modal.bind(
            "webkitAnimationEnd oanimationend msAnimationEnd animationend",
            () => {
                if ($modal.hasClass("state-leave")) {
                    $modal.removeClass("state-leave");
                }
            },
        );

        $(".close").on("click", (e) => {
            e.preventDefault();
            $overlay.removeClass("state-show");
            $modal.removeClass("state-appear").addClass("state-leave");
        });

        $(".open").on("click", (e) => {
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

    $(window).resize(() => {
        const windowWidth = $(window).width();

        if (windowWidth < 767) {
            $(".social").insertBefore(".section-one p");
        } else {
            $(".social").insertAfter(".section-one p");
        }
    });

    $(window).ready(() => {
        import("./deps/wow.min").then(async (WOW) => {
            new WOW(
                {
                    boxClass: "wow",
                    animateClass: "animated",
                    offset: 0,
                    mobile: true,
                    live: true,
                    scrollContainer: null,
                    resetAnimation: true,
                },
            ).init();
        });
    });
});
