 $(document).ready(function () {




     var screenHeight = $(window).height();

     //스크롤의 좌표가 변하면.. 스크롤 이벤트
     $(window).on('scroll', function () {
         var scroll = $(window).scrollTop();
         //스크롤top의 좌표를 담는다
         console.log(scroll);
         if (scroll > 100) {
             $('.audition_wrap .audition1 img').css({
                 'filter': 'brightness(50%)',
                 'transform': 'scale(1.1)',
                 'transition': '.8s'
             });
             $('.audition_wrap .audition1 p').css({
                 'left': '20px',
                 'transition': '1s'
             });

             $('.audition_wrap .audition1 p:nth-of-type(2)').css('transitionDelay', '.5s');
             $('.audition_wrap .audition1 p:nth-of-type(3)').css('transitionDelay', '1.5s');
             $('.audition_wrap .audition1 p:last-of-type').css('transitionDelay', '2s');

         } else {
             $('.audition_wrap .audition1 img').css({
                 'filter': 'none',
                 'transform': 'none',
                 'transition': '.8s'
             });
             $('.audition_wrap .audition1 p').css({
                 'left': '-1000px',
                 'transition': '1s'
             });
         }

     });
 });