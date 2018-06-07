$(document).ready(function() {
    console.log("scrolltop");
    $(this).scrollTop(0);
    // $(window).scrollTop(0, 0);
    $(".about-container").show();
    $(".portfolio-container").hide();
    $(".contact-container").hide();
})

$(".about-click").click(function() {
    event.preventDefault();
    console.log("about clicked");
    $(".about-container").show();
    $(".portfolio-container").hide();
    $(".contact-container").hide();
    $("html, body").animate({
        // scrollTop: $("#top").position().top
        scrollTop: $(document).height()
    }, 800);
    return false;
})

$(".portfolio-click").click(function() {
    event.preventDefault();
    console.log("portfolio clicked");
    $(".portfolio-container").show();
    $(".about-container").hide();
    $(".contact-container").hide();
    $("html, body").animate({
        // scrollTop: $(".portfolio-container").position().top
        scrollTop: $(document).height()
    }, 800);
    return false;
})

$(".contact-click").click(function() {
    event.preventDefault();
    console.log("contact clicked");
    $(".contact-container").show();
    $(".about-container").hide();
    $(".portfolio-container").hide();
    $("html, body").animate({
        // scrollTop: $(".contact-container").position().top
        scrollTop: $(document).height()
    }, 800);
    return false;
})