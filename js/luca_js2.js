//mousewheel vertical carousel
var swiper1 = new Swiper('.scroll', {
    direction: 'vertical',
    slidesPerView: 1,
    mousewheel: {
        sensitivity: 1,
    },

    speed: 600,
    // pagination: {
    //     el: '.pageVertical',
    //     clickable: true,
    //     dynamicBullets: true,
    // },
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    eventsTarget: 'scroll',
    // on: {
    //     slideChangeTransitionStart: function () {
    //         $('.title').hide();
    //         //$('.title').removeClass('aos-init').removeClass('aos-animate');
    //     },
    //     slideChangeTransitionEnd: function () {
    //         setTimeout(function () {
    //             $('.title').slideDown(1000);
    //         }, 1000);
    //         // AOS.init(); 
    //     },
    //     slideChange: function () {
    //         if (this.realIndex == 4) {
    //             counting();
    //         } else {
    //             $('.counting').text('0');
    //         }
    //     }//스와이퍼에서 카운팅하기
    //}
    //현재슬라이드에서 AOS 작동, 가로스와이퍼에서만 실행됨(주석처리된것은 가로 스크롤에서만 사용할것)
    //vertical에서는 애니메이션 이벤트로 등장여부를 조정하는 정도로만 타협
});