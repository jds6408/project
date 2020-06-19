 $(document).ready(function () {


     var screenHeight = $(window).height();

     //스크롤의 좌표가 변하면.. 스크롤 이벤트
     $(window).on('scroll', function () {
         var scroll = $(window).scrollTop();
         //스크롤top의 좌표를 담는다
         console.log(scroll);

         if (scroll > screenHeight) {
             $('#headerArea').css('background', 'rgba(255,255,255,1)');
             /*$('#headerArea #gnb ul li a').css('color','#fff');
             $('#headerArea .headerInner h1 a img').attr('src','images/img/logo_white.png');*/
         } else {
             $('#headerArea').css('background', 'rgba(255, 255, 255,.8)');
             /*$('#headerArea #gnb ul li a').css('color','#333');
             $('#headerArea .headerInner h1 a img').attr('src','images/img/logo.png');*/
         }

         if (scroll > 200) {
             $("#content .charcter ul.floor1").css('left', 0);
             $("#content .charcter ul.floor2").css('right', 0);
         } else {
             $("#content .charcter ul.floor1").css('left', -1300);
             $("#content .charcter ul.floor2").css('right', -1300);
         }
         if (scroll > 1360) {
             $('#content .about .about_back').css('background', 'rgba(0,0,0,.8)').css('transition', '1s');
         } else {

             $('#content .about .about_back').css('background', 'rgba(0,0,0,.3)').css('transition', '1s');
         }


         if (scroll > 1800) {
             $('#content .series ul').css('opacity', 1).css('transition', '1s');
         } else {
             $('#content .series ul').css('opacity', 0).css('transition', '1s');


         }

         if (scroll > 2600) {
             $('#content .trailer .trail_wrap').css('opacity', 1).css('transition', '1s');
         }else{
             $('#content .trailer .trail_wrap').css('opacity', 0).css('transition', '1s');
         }

     });
 });