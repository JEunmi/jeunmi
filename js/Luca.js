$(document).ready(function() {
    var lastWidth = $(window).width();
  $(window).resize(function () {
    if ($(window).width() != lastWidth) {
      location.reload();
      lastWidth = $(window).width();
      return false;
    }
  });//리사이징 새로고침

	$('#fullpage').fullpage({
		//options here
        menu: '#nav',
		autoScrolling:true,
		scrollHorizontally: true,
        // anchors:['HOME','TRAILER', 'CHARACTER', 'WORLD DESIGN','GALLERY']
        anchors:['part1','part2', 'part3', 'part4','part5'],
        onLeave: function(index, nextIndex, direction) {
            if(index == 1 && nextIndex == 2 ){
                $(".part2 h1").addClass("animate__animated animate__rubberBand").css('animation-delay', '.5s');
                $(".part2 > p").addClass("animate__animated animate__fadeInDown").css('animation-delay', '.5s');
                $(".part2 .tab1 li").hover(function(){
                   $(this).toggleClass("animate__animated animate__pulse animate__infinite")
                });
                $(".part2 .content p").hover(function(){
                    $(this).toggleClass("animate__animated animate__pulse animate__infinite") 
                 });
            }else if( ( index == 1 || index == 2) && nextIndex == 3 ) {
                $(".part3 h2").addClass("animate__animated animate__rubberBand").css('animation-delay', '.6s');
                $(".part3 .content").find("p").addClass("animate__animated animate__fadeInDown").css('animation-delay', '.9s');
                $(".part3 .content #chr1 .img").addClass("animate__animated animate__backInLeft").css('animation-delay', '.6s');
                $(".part3 .content #chr2 .img").addClass("animate__animated animate__backInRight").css('animation-delay', '.6s');
                $(".part3 .content #chr3 .img").addClass("animate__animated animate__backInLeft").css('animation-delay', '.6s');
                $(".part3 .content #chr4 ").find(".img").eq(0).addClass("animate__animated animate__backInLeft").css('animation-delay', '.6s');
                $(".part3 .content #chr4").find(".img").eq(1).addClass("animate__animated animate__backInRight").css('animation-delay', '.6s');
                $(".part3 .content #chr5").find(".img").addClass("animate__animated animate__backInDown").css('animation-delay', '.6s');
                $(".part3 .content #chr6 ").find(".img").eq(0).addClass("animate__animated animate__backInLeft").css('animation-delay', '.6s');
                $(".part3 .content #chr6").find(".img").eq(1).addClass("animate__animated animate__backInRight").css('animation-delay', '.6s');
                $(".part3 .content #chr7").find(".img").eq(0).addClass("animate__animated animate__backInRight").css('animation-delay', '.6s');
                $(".part3 .content #chr7").find(".img").eq(1).addClass("animate__animated animate__backInLeft").css('animation-delay', '.6s');
            }else if( ( index == 1 || index == 2 || index == 3 ) && nextIndex == 4 ){
                $(".part4 h2").addClass("animate__animated animate__rubberBand").css('animation-delay', '.6s');
            }else {
                $(".part5 h2").addClass("animate__animated animate__rubberBand").css('animation-delay', '.6s');
            }
        }

	});
    //tab
    $(".tab1 ul li").click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        $("#"+$(this).data('id')).addClass('on').siblings().removeClass('on');
        });
    $(".tab2 > div > div").click(function(){
        $(this).addClass('on')
                .siblings().removeClass('on');
        $("#"+$(this).data('id')).addClass('on')
                .siblings().removeClass('on');
        });

        // cha
        $(".part3 .cha ul li").click(function(){
            $(this).addClass('on').siblings().removeClass('on');
            $("#" + $(this).data('id')).addClass('on').show().css("right","0").siblings().removeClass('on').hide().css("right","-100%");
            // $("#" + $(this).data('id')).addClass('on').show().css("left","0").siblings().removeClass('on').hide().css("left","-100%");
        });

        //world design
        $(".part4 .w_box > .w_t").click(function(){
            $(this).addClass("on").siblings().removeClass("on")
        })
        // /gallery
        
        new Swiper(".gallery", {
            slidesPerView: 3,
            centeredSlides: true,
            loop:true,
            // direction: "horizontal",
            direction: "vertical",
            // autoplay: {
            //     delay: 2500,
            //     disableOnInteraction: false,
            //   },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
              dynamicBullets: true,
            },
            breakpoints: {
                768: {
                    direction: "horizontal",
                },
              },
          });
          if($(window).width()<767){
            $(".part1 .p1 p").find("br").remove();
            $(".part2 p").find("br").remove()
            $(".part3 .cha .content .main  .img").remove();
            $(".part3 .cha .content .main .text").unwrap()
            $(".part3 .cha .content .main .text h2").before("<div></div>");
            $(".part3 .cha .content .main .text div:first-child").addClass("img")
            $(".part4 h2").find("br").remove()

            new Swiper(".mobile", {
                pagination: {
                  el: ".part3 .swiper-pagination",
                  dynamicBullets: true,
                },
              });
          }
          new Swiper(".cha_m", {
            pagination: {
              el: ".part3 .swiper-pagination",
              dynamicBullets: true,
            },
          });


});