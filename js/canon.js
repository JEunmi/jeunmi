$(document).ready(function () {
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
});