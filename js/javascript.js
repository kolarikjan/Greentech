$(document).ready(function () {
    $(".main-box .box-head p").click(function (e) { 
        e.preventDefault();
        var mainbox = $(this).closest(".main-box");

        if (mainbox.hasClass("box-closed")) {
            mainbox.removeClass("box-closed");
            mainbox.addClass("box-open");
        } else {
            mainbox.addClass("box-closed");
            mainbox.removeClass("box-open");
        }

    });
    $('.sliders-col .range-box input').on("change mousemove", function() {
        var value = $(this).val();
        $(this).closest("form").children(".range-input").val(value);
    });
    $('.sliders-col .range-input').bind('input', function() {
        var value = $(this).val();
        if (value > 100) {
            $(this).val(100);
            value = 100;
        } else if (value < 0 || value == "00") {
            $(this).val(0);
            value = 0;
        }
        $(this).closest("form").children(".range-box").children(".range-slider").val(value);
    });
});