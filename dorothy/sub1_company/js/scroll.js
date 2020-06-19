 $(document).ready(function () {


     var screenHeight = $(window).height();

     //스크롤의 좌표가 변하면.. 스크롤 이벤트
     $(window).on('scroll', function () {
         var scroll = $(window).scrollTop();
         //스크롤top의 좌표를 담는다
         console.log(scroll);
         if(scroll >290){
             $('.content .re_info li').css('bottom',0);
         }
     });
 });