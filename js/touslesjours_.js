$(function () {

  var lastWidth = $(window).width();
  $(window).resize(function () {
    if ($(window).width() != lastWidth) {
      location.reload();
      lastWidth = $(window).width();
      return false;
    }
  });//리사이징 새로고침
  $("header >.nav > .menu > ul > li").hover(function () {
    $(".submenu", this).stop().slideToggle(300)
  });

  $(".menu_b").click(function () {
    $(this).toggleClass("on")
  })

  //tab
  $(".tabs > ul > li").click(function () {
    $(this).addClass("on").siblings().removeClass("on")
    $("#" + $(this).data("id")).addClass("on").siblings().removeClass("on")
  });
  $(".tabs > ul > li:first-child").off('click');
  // animation
 
  $(window).scroll(function () {


    var h = $(window).scrollTop();
    if ($(window).width() < 767) {
      if (h <= 0) {
        $("header  h1").addClass("animate__animated animate__bounce");
        $("header  p").addClass("animate__animated animate__bounce");
        $("header .t_ div").eq(0).addClass("animate__animated animate__swing");
        $("header .t_ div").eq(1).addClass("animate__animated animate__tada");
        $("header .t_ div").eq(2).addClass("animate__animated animate__tada");
        $("header .t_ div").eq(3).addClass("animate__animated animate__rubberBand");
        $("header .t_ div").eq(4).addClass("animate__animated animate__rotateIn");
        $("header .t_ div").eq(5).addClass("animate__animated animate__swing");
        $("header .t_ div").eq(6).addClass("animate__animated animate__tada");
      } else {
        $("header  h1").removeClass("animate__animated animate__bounce");
        $("header  p").removeClass("animate__animated animate__bounce");
        $("header .t_ div").eq(0).removeClass("animate__animated animate__swing");
        $("header .t_ div").eq(1).removeClass("animate__animated animate__tada");
        $("header .t_ div").eq(2).removeClass("animate__animated animate__tada");
        $("header .t_ div").eq(3).removeClass("animate__animated animate__rubberBand");
        $("header .t_ div").eq(4).removeClass("animate__animated animate__rotateIn");
        $("header .t_ div").eq(5).removeClass("animate__animated animate__swing");
        $("header .t_ div").eq(6).removeClass("animate__animated animate__tada");
      }
      if (h >= 50) {
        $(".part1 > h2").addClass("animate__animated animate__fadeInUp");
      } else {
        $(".part1 > h2").removeClass("animate__animated animate__fadeInUp");
      }
      if (h >= 250) {
        $(".part1  h3").addClass("animate__animated animate__fadeInUp");
        $(".part1  p").addClass("animate__animated animate__fadeInUp");
      } else {
        $(".part1  h3").removeClass("animate__animated animate__fadeInUp");
        $(".part1  p").removeClass("animate__animated animate__fadeInUp");
      }
      if (h >= 750) {
        $(".part2 p").addClass("animate__animated animate__bounce")
      } else {
        $(".part2 p").removeClass("animate__animated animate__bounce")
      }
      if (h >= 2100) {
        $(".part5 h2").addClass("animate__animated animate__fadeInUp")
      } else {
        $(".part5 h2").removeClass("animate__animated animate__fadeInUp")
      }
    } else if ($(window).width() >= 768 && $(window).width() <= 1023) {
      if (h <= 50) {
        $("header  h1").addClass("animate__animated animate__bounce");
        $("header  p").addClass("animate__animated animate__bounce");
        $("header .t_ div").eq(0).addClass("animate__animated animate__swing");
        $("header .t_ div").eq(1).addClass("animate__animated animate__tada");
        $("header .t_ div").eq(2).addClass("animate__animated animate__tada");
        $("header .t_ div").eq(3).addClass("animate__animated animate__rubberBand");
        $("header .t_ div").eq(4).addClass("animate__animated animate__rotateIn");
        $("header .t_ div").eq(5).addClass("animate__animated animate__swing");
        $("header .t_ div").eq(6).addClass("animate__animated animate__tada");
      } else {
        $("header  h1").removeClass("animate__animated animate__bounce");
        $("header  p").removeClass("animate__animated animate__bounce");
        $("header .t_ div").eq(0).removeClass("animate__animated animate__swing");
        $("header .t_ div").eq(1).removeClass("animate__animated animate__tada");
        $("header .t_ div").eq(2).removeClass("animate__animated animate__tada");
        $("header .t_ div").eq(3).removeClass("animate__animated animate__rubberBand");
        $("header .t_ div").eq(4).removeClass("animate__animated animate__rotateIn");
        $("header .t_ div").eq(5).removeClass("animate__animated animate__swing");
        $("header .t_ div").eq(6).removeClass("animate__animated animate__tada");
      }
      if (h >= 450) {
        $(".part1 > h2").addClass("animate__animated animate__fadeInUp");
      } else {
        $(".part1 > h2").removeClass("animate__animated animate__fadeInUp");
      }
      if (h >= 500) {
        $(".part1  h3").addClass("animate__animated animate__fadeInUp");
        $(".part1  p").addClass("animate__animated animate__fadeInUp");
      } else {
        $(".part1  h3").removeClass("animate__animated animate__fadeInUp");
        $(".part1  p").removeClass("animate__animated animate__fadeInUp");
      }
      if (h >= 900) {
        $(".part2 p").addClass("animate__animated animate__bounce")
      } else {
        $(".part2 p").removeClass("animate__animated animate__bounce")
      }
      if (h >= 2200) {
        $(".part5 h2").addClass("animate__animated animate__fadeInUp")
      } else {
        $(".part5 h2").removeClass("animate__animated animate__fadeInUp")
      }
    } else {
      if (h >= 20) {
        
        $("header  h1").addClass("animate__animated animate__bounce");
        $("header  p").addClass("animate__animated animate__bounce");
        $("header .t_ div").eq(0).addClass("animate__animated animate__swing");
        $("header .t_ div").eq(1).addClass("animate__animated animate__tada");
        $("header .t_ div").eq(2).addClass("animate__animated animate__tada");
        $("header .t_ div").eq(3).addClass("animate__animated animate__rubberBand");
        $("header .t_ div").eq(4).addClass("animate__animated animate__rotateIn");
        $("header .t_ div").eq(5).addClass("animate__animated animate__swing");
        $("header .t_ div").eq(6).addClass("animate__animated animate__tada");
      } else {
        $("header  h1").removeClass("animate__animated animate__bounce");
        $("header  p").removeClass("animate__animated animate__bounce");
        $("header .t_ div").eq(0).removeClass("animate__animated animate__swing");
        $("header .t_ div").eq(1).removeClass("animate__animated animate__tada");
        $("header .t_ div").eq(2).removeClass("animate__animated animate__tada");
        $("header .t_ div").eq(3).removeClass("animate__animated animate__rubberBand");
        $("header .t_ div").eq(4).removeClass("animate__animated animate__rotateIn");
        $("header .t_ div").eq(5).removeClass("animate__animated animate__swing");
        $("header .t_ div").eq(6).removeClass("animate__animated animate__tada");
      }
      if (h >= 500) {
        $(".part1 > h2").addClass("animate__animated animate__fadeInUp");
      } else {
        $(".part1 > h2").removeClass("animate__animated animate__fadeInUp");
      }
      if (h >= 600) {
        $(".part1  h3").addClass("animate__animated animate__fadeInUp");
        $(".part1  p").addClass("animate__animated animate__fadeInUp");
      } else {
        $(".part1  h3").removeClass("animate__animated animate__fadeInUp");
        $(".part1  p").removeClass("animate__animated animate__fadeInUp");
      }

      if (h >= 1200) {
        $(".part2 p").addClass("animate__animated animate__bounce")
      } else {
        $(".part2 p").removeClass("animate__animated animate__bounce")
      }
      if (h >= 3000) {
        $(".part5 h2").addClass("animate__animated animate__fadeInUp")
      } else {
        $(".part5 h2").removeClass("animate__animated animate__fadeInUp")
      }
    }
  });

   const swiper1 = new Swiper(".p3", {
    slidesPerView: 1,
    loop: true,
    // breakpoints: {
    //   768: {
    //     slidesPerView: 1,
    //   },
    //   1024: {
    //     slidesPerView: 2,
    //   }
    // },
    navigation: {
      nextEl: ".p3 .swiper-button-next",
      prevEl: ".p3 .swiper-button-prev",
    },
  });
  var swiper2 = new Swiper(".p5", {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
    },
    // loop:true,
    navigation: {
      nextEl: ".part5 .swiper-button-next",
      prevEl: ".part5 .swiper-button-prev",

    },
  });

  // Products

  const swiper3 = new Swiper(".newproduct1", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  new Swiper(".newproduct2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".pro_ .newproduct2 .swiper-button-next",
      prevEl: ".pro_ .newproduct2 .swiper-button-prev",
    },
    thumbs: {
      swiper: swiper3,
    },
  });
  const swiper4 = new Swiper(".product1_1", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });

  new Swiper(".product2_1", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".pro_ .product2_1 .swiper-button-next",
      prevEl: ".pro_ .product2_1 .swiper-button-prev",
    },
    thumbs: {
      swiper: swiper4,
    },
  });

  const swiper5 = new Swiper(".product1_2", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  new Swiper(".product2_2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".pro_ .product2_2 .swiper-button-next",
      prevEl: ".pro_ .product2_2 .swiper-button-prev",
    },
    thumbs: {
      swiper: swiper5,
    },
  });

  const swiper6 = new Swiper(".product1_3", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  new Swiper(".product2_3", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".pro_ .product2_3 .swiper-button-next",
      prevEl: ".pro_ .product2_3 .swiper-button-prev",
    },
    thumbs: {
      swiper: swiper6,
    },
  });

  const swiper7 = new Swiper(".product1_4", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  new Swiper(".product2_4", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".pro_ .product2_4 .swiper-button-next",
      prevEl: ".pro_ .product2_4 .swiper-button-prev",
    },
    thumbs: {
      swiper: swiper7,
    },
  });

})