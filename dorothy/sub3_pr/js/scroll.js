 $(document).ready(function () {


     var screenHeight = $(window).height();

     //스크롤의 좌표가 변하면.. 스크롤 이벤트
     $(window).on('scroll', function () {
         var scroll = $(window).scrollTop();
         //스크롤top의 좌표를 담는다
         console.log(scroll);

         if (scroll > 500) {
             $('.media4').css('opacity', 1).css('transition','.5s')
             $('.media5').css('opacity', 1).css('transitionDelay', '1s').css('transition','.5s')
             $('.media6').css('opacity', 1).css('transitionDelay', '1.5s').css('transition','.5s')
         }

         if (scroll > 900) {
             $('.media7').css('opacity', 1).css('transitionDelay', '1.5s').css('transition','.5s')
             $('.media8').css('opacity', 1).css('transitionDelay', '1s').css('transition','.5s')
             $('.media9').css('opacity', 1).css('transition','.5s')
         }
         if (scroll > 1300) {
             $('.media10').css('opacity', 1).css('transition','.5s')
             $('.media11').css('opacity', 1).css('transitionDelay', '1s').css('transition','.5s')
             $('.media12').css('opacity', 1).css('transitionDelay', '1.5s').css('transition','1s')
         }
         if (scroll > 1900) {
             $('.media13').css('opacity', 1).css('transitionDelay', '1.5s').css('transition','.5s')
             $('.media14').css('opacity', 1).css('transitionDelay', '1s').css('transition','.5s')
             $('.media15').css('opacity', 1).css('transition','.5s')
             $('.media16').css('opacity', 1).css('transition','.5s')
         }
     });
 });