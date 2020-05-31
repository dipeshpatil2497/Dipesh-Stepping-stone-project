jQuery(document).ready(function () {

    "use strict";

    //----- Text Animation Start----------
    var typed = new Typed('.text', {
        strings: [
            "<strong>Hello</strong> <strong class='primary'>Guys...</strong>",
            "<strong>I am</strong><strong class='primary'> Dipesh Patil.</strong>",
            "<strong>I Love </strong><strong class='primary'>coding.</strong>",
            "<strong>And to</strong> <strong class='primary'>share..!!</strong>"
        ],
        typeSpeed: 30,
        backspeed: 30,
        loop: true
    });

    //----- Text Animation End-----------


    // ----- Learn Section js Start---------

    $(".step").click(function () {
        $(this).addClass("active").prevAll().addClass("active");
        $(this).nextAll().removeClass("active");
    });

    $(".step01").click(function () {
        $("#line-progress").css("width", "3%");
        $(".discovery").addClass("active").siblings().removeClass("active");
    });

    $(".step02").click(function () {
        $("#line-progress").css("width", "25%");
        $(".strategy").addClass("active").siblings().removeClass("active");
    });

    $(".step03").click(function () {
        $("#line-progress").css("width", "50%");
        $(".creative").addClass("active").siblings().removeClass("active");
    });

    $(".step04").click(function () {
        $("#line-progress").css("width", "75%");
        $(".production").addClass("active").siblings().removeClass("active");
    });

    $(".step05").click(function () {
        $("#line-progress").css("width", "100%");
        $(".analysis").addClass("active").siblings().removeClass("active");
    });

    // ----- Learn Section js End---------


    //----- Magnific Popup start---------
    $('.works').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }

    });
    //----- Magnific Popup End---------

    $('.textimonial-carousel').owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });


    //----- Counter Section Start---------

    $(".num").counterUp({
        delay: 1,
        time: 1000
    });

    //----- Counter Section End---------

});
