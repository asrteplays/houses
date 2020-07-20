$(function(){

    console.log("rabotaet");

    let header = $("#header");
    let headerH = header.innerHeight();

    let scrollPos = $(window).scrollTop();

    let nav = $("#nav");
    let navToggle = $("#navToggle");

    checkScroll(headerH, scrollPos);

    $(window).on("scroll resize", function(){
        headerH = header.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(headerH, scrollPos);
    })

    function checkScroll(headerH, scrollPos){
        if (scrollPos > headerH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }


    /* Nav Toggle*/
    navToggle.on("click", function(event){
        event.preventDefault();

        nav.toggleClass("show");
    })


    /* Smooth scroll*/
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset -50
        }, 700);
    });

})
