$(function(){
  $(".tabs > ul > li").click(function () {
    $(this).addClass("on").siblings().removeClass("on")
    $("#" + $(this).data("id")).addClass("on").siblings().removeClass("on")
  });

 // part4

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
    nextEl: ".part4 .newproduct2 .swiper-button-next",
    prevEl: ".part4 .newproduct2 .swiper-button-prev",
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
    nextEl: ".part4 .product2_1 .swiper-button-next",
    prevEl: ".part4 .product2_1 .swiper-button-prev",
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
    nextEl: ".part4 .product2_2 .swiper-button-next",
    prevEl: ".part4 .product2_2 .swiper-button-prev",
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
    nextEl: ".part4 .product2_3 .swiper-button-next",
    prevEl: ".part4 .product2_3 .swiper-button-prev",
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
    nextEl: ".part4 .product2_4 .swiper-button-next",
    prevEl: ".part4 .product2_4 .swiper-button-prev",
  },
  thumbs: {
    swiper: swiper7,
  },
});


})