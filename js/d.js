$(document).ready(function(){
$(".tab  ul li").click(function(){
    $(this).addClass("on").siblings().removeClass("on")
    $("#"+$(this).data("id")).addClass("on").siblings().removeClass("on")
  });



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
});