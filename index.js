$(document).ready(function () {
    var lastWidth = $(window).width();
    $(window).resize(function () {
        if ($(window).width() != lastWidth) {
            location.reload();
            lastWidth = $(window).width();
            return false;
        }
    }); //리사이징 새로고침

    // $("#nav ul .p4.active a").siblings().css("background:#fff") ;
    $('#fullpage').fullpage({
        menu: '#nav',
        anchors:['part1','part2', 'part3', 'part4','part5'],

        onLeave: function (index, nextIndex, direction) {
            if (index == 1 && nextIndex == 2 && direction == 'down') {
                $(".part2 .logo").addClass("animate__animated animate__fadeInLeft").css('animation-delay', '.5s');
                $(".part2 .text_box h2").addClass("animate__animated animate__fadeInLeft").css('animation-delay', '.5s');
                $(".part2 .text_box p").addClass("animate__animated animate__fadeInLeft").css('animation-delay', '.5s');
                $(".part2 .text_box .button a").addClass("animate__animated animate__fadeInLeft").css('animation-delay', '.8s');
                // $(".part2 .screen .swiper-slide-active.s1").addClass("animate__animated animate__fadeInRight").css('animation-delay', '.5s');
                $(".part2 .screen").addClass("animate__animated animate__fadeInRight").css('animation-delay', '.5s');
            } else if ((index == 1 || index == 2) && nextIndex == 3 && direction == 'down') {
                $(".part2 .logo").removeClass("animate__animated animate__fadeInLeft").css('animation-delay', '.5s');
                $(".part2 .text_box h2").removeClass("animate__animated animate__fadeInLeft").css('animation-delay', '.5s');
                $(".part2 .text_box p").removeClass("animate__animated animate__fadeInLeft").css('animation-delay', '.5s');
                $(".part2 .text_box .button a").removeClass("animate__animated animate__fadeInLeft").css('animation-delay', '.8s');
                // $(".part2 .screen .swiper-slide-active.s1").removeClass("animate__animated animate__fadeInRight").css('animation-delay', '.5s');
                $(".part2 .screen").removeClass("animate__animated animate__fadeInRight").css('animation-delay', '.5s');
                //
                $(".part3 .logo").addClass("animate__animated animate__fadeInLeft").css('animation-delay', '.5s');
                $(".part3 .text_box h2").addClass("animate__animated animate__fadeInLeft").css('animation-delay', '.5s');
                $(".part3 .text_box p").addClass("animate__animated animate__fadeInLeft").css('animation-delay', '.5s');
                $(".part3 .text_box .button a").addClass(" animate__animated animate__fadeIn").css('animation-delay', '.8s');
                $(".part3 .screen").addClass("animate__animated animate__fadeInRight").css('animation-delay', '.5s');
            } else if ((index == 1 || index == 2 || index == 3) && nextIndex == 4 && direction == 'down') {
                $(".part3 .logo").removeClass("animate__animated animate__fadeInLeft").css('animation-delay', '.5s');
                $(".part3 .text_box h2").removeClass("animate__animated animate__fadeInLeft").css('animation-delay', '.5s');
                $(".part3 .text_box p").removeClass("animate__animated animate__fadeInLeft").css('animation-delay', '.5s');
                $(".part3 .text_box .button a").removeClass(" animate__animated animate__fadeIn").css('animation-delay', '.8s');
                $(".part3 .screen").removeClass("animate__animated animate__fadeInRight").css('animation-delay', '.5s');
                //
                $(".part4 .logo").addClass("animate__animated animate__fadeInLeft").css('animation-delay', '.5s');
                $(".part4 .text_box h2").addClass("animate__animated animate__fadeInLeft").css('animation-delay', '.5s');
                $(".part4 .text_box p").addClass("animate__animated animate__fadeInLeft").css('animation-delay', '.5s');
                $(".part4 .text_box .button a").addClass(" animate__animated animate__fadeIn").css('animation-delay', '.8s');
                $(".part4 .screen").addClass("animate__animated animate__fadeInRight").css('animation-delay', '.5s');
            }else if ((index == 1 || index == 2 || index == 3 || index == 4) && nextIndex == 5 && direction == 'down') {
                $(".part4 .logo").removeClass("animate__animated animate__fadeInLeft").css('animation-delay', '.5s');
                $(".part4 .text_box h2").removeClass("animate__animated animate__fadeInLeft").css('animation-delay', '.5s');
                $(".part4 .text_box p").removeClass("animate__animated animate__fadeInLeft").css('animation-delay', '.5s');
                $(".part4 .text_box .button a").removeClass(" animate__animated animate__fadeIn").css('animation-delay', '.8s');
                $(".part4 .screen").removeClass("animate__animated animate__fadeInRight").css('animation-delay', '.5s');
                //
                $(".part5 h2").addClass("animate__animated  animate__backInDown").css('animation-delay', '.3s');
                $(".part5 p").addClass("animate__animated animate__fadeInUp").css('animation-delay', '.8s');
            }
        },
    })
    // swiper
    new Swiper(".screen", {
        slidesPerView: "auto",
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        observer: true,
        observeParents: true,
        on: {
            slideChangeTransitionStart: function () {
                $(".s1.swiper-slide-active").addClass("animate__animated animate__fadeInRight").css('animation-delay', '.5s');
                $(".middle.swiper-slide-active").find("h3").addClass("animate__animated animate__fadeInLeft").css('animation-delay', '.5s');
                $(".middle.swiper-slide-active").find("p").addClass("animate__animated animate__fadeInRight").css('animation-delay', '.5s');
                $(".middle.swiper-slide-active .logo_box").find("div").addClass("animate__animated animate__fadeInRight").css('animation-delay', '.5s');
                $(".right.swiper-slide-active").find("h3").addClass("animate__animated animate__fadeInLeft").css('animation-delay', '.5s');
                $(".right.swiper-slide-active .r1").find("p").addClass("animate__animated animate__fadeInRight").css('animation-delay', '.5s');
                $(".right.swiper-slide-active .color").find("div").odd().addClass("animate__animated animate__fadeInDown").css('animation-delay', '.5s');
                $(".right.swiper-slide-active .color").find("div").even().addClass("animate__animated animate__fadeInUp").css('animation-delay', '.5s');
                $(".right.swiper-slide-active .r2 .p").addClass("animate__animated animate__fadeInLeft").css('animation-delay', '.5s');
                $(".right.swiper-slide-active .r2 .m").addClass("animate__animated animate__fadeInRight").css('animation-delay', '.5s');
            },
            activeIndexChange: function () {
                $(".s1.swiper-slide-active").removeClass("animate__animated animate__fadeInRight");
                $(".middle.swiper-slide-active").find("h3").removeClass("animate__animated animate__fadeInLeft");
                $(".middle.swiper-slide-active").find("p").removeClass("animate__animated animate__fadeInRight");
                $(".middle.swiper-slide-active .logo_box").find("div").removeClass("animate__animated animate__fadeInRight");
                $(".right.swiper-slide-active").find("h3").removeClass("animate__animated animate__fadeInLeft");
                $(".right.swiper-slide-active .r1").find("p").removeClass("animate__animated animate__fadeInRight");
                $(".right.swiper-slide-active .color").find("div").odd().removeClass("animate__animated animate__fadeInDown");
                $(".right.swiper-slide-active .color").find("div").even().removeClass("animate__animated animate__fadeInUp");
                $(".right.swiper-slide-active .r2 .p").removeClass("animate__animated animate__fadeInLeft");
                $(".right.swiper-slide-active .r2 .m").removeClass("animate__animated animate__fadeInRight");
            }
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
    });




})