$(document).ready(function() {
  AOS.init();

  // $(".tab2  ul li").click(function(){
  //     $(this).addClass("on").siblings().removeClass("on")
  //     $("#"+$(this).data("id")).addClass("on").siblings().removeClass("on")
  //   });

  $(".tab  ul li").click(function() {
      $(this).addClass("on").siblings().removeClass("on")
      $("#" + $(this).data("id")).addClass("on").siblings().removeClass("on")
  });

  $(" header .menu").click(function() {
      $(".menu_inner").slideDown().addClass("on")
  })
  $(".close").click(function() {
      $(".menu_inner").slideUp().removeClass("on")
      return false
  });


  if ($(window).width() < 1024) {
      $(".nav > div> .menu_t").click(function() {
          $(this).next().slideToggle(300)
          $(".nav > div> .menu_t").not(this).next().slideUp(300);
          return false
      })
  }
  
  //products
  
  $('.np2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.np1',
    
  });
  $('.np1').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.np2',
    infinite: true,
    centerMode: true,
    focusOnSelect: true,
  });
  // $('.np2').slick('setPosition');

  // // community
  // $('.c1').slick({
  //     autoplay: true,
  //     autoplaySpeed: 2000,
  // });
});