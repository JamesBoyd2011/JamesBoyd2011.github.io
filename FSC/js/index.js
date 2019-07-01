$("document").ready(function () {
})

$(".services").hover(function (x) {
    $(this).click(function (y) {
        $(".services").find(".details").addClass("collapse");
        $(this).find(".details").toggleClass("collapse");
    })
})


