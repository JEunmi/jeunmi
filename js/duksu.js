$(function () {
    var lastWidth = $(window).width();
    $(window).resize(function () {
      if ($(window).width() != lastWidth) {
        location.reload();
        lastWidth = $(window).width();
        return false;
      }
    });//리사이징 새로고침
    if ($(window).width() < 767) {
       $(".nav > ul > li > a").click(function(){
        $(this).next().slideToggle(300);
        $(".nav > ul > li > a").not(this).next().slideUp(300);
        return false;
      });
      $(".nav > ul > li > .submenu .sub2_t > a").click(function(){
        $(this).next().slideToggle(300);
        $(".nav > ul > li > .submenu .sub2_t > a").not(this).next().slideUp(300);
        return false;
      });
      $(".menu_b").click(function (){
        $(this).toggleClass("on")
      })
      $(".part6 .up_m > ul > li").click(function(){
        $(this).addClass("on").siblings().removeClass("on")
        $("#"+$(this).data("id")).addClass("on").siblings().removeClass("on")
      })
      const swiper5 = new Swiper(".banner3", {
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        }
      });
      
    }else if ($(window).width() >= 768 && $(window).width() <= 1023) {
      $(".nav > ul > li > a").click(function(){
        $(this).next().slideToggle(300);
        $(".nav > ul > li > a").not(this).next().slideUp(300);
        return false;
      });
      $(".nav > ul > li > .submenu .sub2_t > a").click(function(){
        $(this).next().slideToggle(300);
        $(".nav > ul > li > .submenu .sub2_t > a").not(this).next().slideUp(300);
        return false;
      });
      $(".menu_b").click(function (){
        $(this).toggleClass("on")
      })
      $(".part6 .up_m > ul > li").click(function(){
        $(this).addClass("on").siblings().removeClass("on")
        $("#"+$(this).data("id")).addClass("on").siblings().removeClass("on")
      })
      const swiper5 = new Swiper(".banner3", {
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        }
      });
    }else {

  $(".nav > ul > li").hover(function(){
      $(".submenu",this).stop().slideToggle(300)
  });
  $(".nav > ul > li > .submenu  .sub2_t").hover(function(){
      $(".sub2",this).stop().slideToggle(300)
  });

}

  
const swiper1 = new Swiper(".main", {
    pagination: {
      el: ".swiper-pagination",
    },
    effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
  });
const swiper2= new Swiper(".duk", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    loop:true,
  });
const swiper3 = new Swiper(".event", {
  slidesPerView: 1,
  spaceBetween: 10,
  slideToClickedSlide : true,
  centeredSlides:true,
  loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      }
    },
  });
  const swiper4 = new Swiper(".banner1", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
  const swiper5 = new Swiper(".banner2", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    }
  });
});