$(function(){
    $(".submenu > .un > a").click(function(){
        $(this).next().slideToggle(300);
        $(".submenu > .un > a").not(this).next().slideUp(300);
        return false;
    })


    $("header >ul>li").hover(function(){
        $(".submenu",this).stop().slideToggle(300)
        $(".submenu > .un > a").not(this).next().slideUp(300);
    });

    $(".p2_left > ul>li").click(function(){
        $(this).addClass("on").siblings().removeClass("on")
        $("#"+$(this).data("id")).addClass("on").siblings().removeClass("on")
    })
})
// 홍보자료/ 채널
$('.p2_slide').slick({
    autoplay: true,
    autoplaySpeed: 2500,
    prevArrow: false,
    nextArrow: false
});

$('.p4_slide').slick({
    infinite: true,
    slidesToShow: 3,
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
          }
        },
    ]
  });
  $('.p6_slide').slick({
    infinite: true,
    slidesToShow: 3,
});
