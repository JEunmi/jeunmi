$(document).ready(function () {
  // const swiper1 = new Swiper(".banner1", {
    // spaceBetween: 10,
    // slidesPerView: 3,
    // centeredSlides: true,
    // loopAdditionalSlides:1,
    // freeMode: true,
  //   loop: true,
  //   spaceBetween: 10,
  //   slidesPerView: 3,
  //   freeMode: true,
  //   watchSlidesProgress: true,
  //   centeredSlides: true,
  //   direction: "vertical",
  // });
  // new Swiper(".banner2", {
  //   loop: true,
  //   // spaceBetween: 10,
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  //   // autoplay: {
  //   //   delay: 3500,
  //   //   disableOnInteraction: false,
  //   // },
  //   thumbs: {
  //     swiper: swiper1,
  //   },
  // });\
  const swiper1 = new Swiper(".banner1", {
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
    loop: true,
  });
  const swiper2 = new Swiper(".eos", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});