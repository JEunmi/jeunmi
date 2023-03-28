$(document).ready(function () {
  var lastWidth = $(window).width();
     $(window).resize(function(){
         if($(window).width()!=lastWidth){
             location.reload();
             lastWidth = $(window).width();
             return false;
         }
     });//리사이징 새로고침

  AOS.init();
  
  const swiper1 = new Swiper(".banner1", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
    loop: true,
  });
  $(".p1_bu > .p1").hover(function(){
    $(this).addClass("on")
          .siblings().removeClass("on")
        $(this).css("transition","width 0.2s")
  })
  const swiper2 = new Swiper(".eos", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
    },
  });

const swiper3 = new Swiper(".gallery", {
  loop: true,
  });

// const swiper4 = new Swiper(".p5", {
//   slidesPerView: 3,
//   scrollbar: {
//     el: ".swiper-scrollbar",
//     hide: true,
//   },
// });
});