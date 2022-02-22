$(document).ready(function(){
  $(".menu>ul>li").hover(function(){
    $(".submenu",this).stop().slideToggle(300)
  });

  $(".tab  ul li").click(function(){
    $(this).addClass("on").siblings().removeClass("on")
    $("#"+$(this).data("id")).addClass("on").siblings().removeClass("on")
  });

  $(".tab2  ul li").click(function(){
    $(this).addClass("on").siblings().removeClass("on")
    $("#"+$(this).data("id")).addClass("on").siblings().removeClass("on")
  });

  // $(".mnav").click(function(){
  //   $(".menu").slideToggle(200)
  // });
  // $(".menu>ul>li").click(function(){
  //   $(".submenu",this).stop().slideToggle(300)
  // });
//   var lastWidth = $(window).width();
//   $(window).resize(function(){
//       if($(window).width()!=lastWidth){
//           location.reload();
//           lastWidth = $(window).width();
//           return false;
//       }
//   });
//  if($(window).width() < 641){
//      $(".mnav").click(function(){
//          $(".menu").slideDown().addClass("on");
//          $("menu").addClass("on");
//          $(this).toggleClass("on").next().toggleClass("on");
//      });
//      $(".mnave").click(function(){
//          $("menu").slideUp().removeClass("on");
//          $(this).toggleClass("on").prev().toggleClass("on");
//      });
//      $(".mgnb").click(function(){
//          $(this).addClass('on').siblings().removeClass('on');
//          $("#"+$(this).data('id')).addClass('on').siblings().removeClass('on');
//      });
//  }
})