 $(document).ready(function () {




     var screenHeight = $(window).height();

     //스크롤의 좌표가 변하면.. 스크롤 이벤트
     $(window).on('scroll', function () {
         var scroll = $(window).scrollTop();
         //스크롤top의 좌표를 담는다
         console.log(scroll);

         if (scroll > 160 && scroll < 800) {
             $('.content .artist_introduce .profile .intro h3').css('color', '#a8191f');
         } else {
             $('.content .artist_introduce .profile .intro h3').css('color', '#b2a8a8');
         }
         if (scroll > 800 && scroll < 2000) {
             $('.content .artist_introduce .albums h3 ').css('color', '#a8191f').css('borderBottom', '2px solid #a8191f');
         } else {
             $('.content .artist_introduce .albums h3 ').css('color', '#b2a8a8').css('borderBottom', '2px solid #b2a8a8s');
         }
         if (scroll > 2000 && scroll < 4000) {
             $('.content .video .v_txt ').css('color', '#a8191f').css('borderBottom', '2px solid #a8191f');
             $('.content .video2 .v_txt ').css('color', '#a8191f').css('borderBottom', '2px solid #a8191f');
         } else {
             $('.content .video .v_txt').css('color', '#b2a8a8').css('borderBottom', '2px solid #b2a8a8s');
             $('.content .video2 .v_txt').css('color', '#b2a8a8').css('borderBottom', '2px solid #b2a8a8s');
         }

         if (scroll > 4000) {
             $('.content .gallery h3 ').css('color', '#a8191f').css('borderBottom', '2px solid #a8191f');
         } else {
             $('.content .gallery h3 ').css('color', '#b2a8a8').css('borderBottom', '2px solid #b2a8a8');
         }



         if (scroll > 600) {
             $('.content .artist_introduce .albums ul').css('bottom', 0).css('transition', '1s');
         } else {

             $('.content .artist_introduce .albums ul').css('bottom', '-1000').css('transition', '1s');
         }

         if (scroll > 1700) {
             $('.content .video2 .vid').css('opacity', 1).css('transition', '1s');
         } else {
             $('.content .video2 .vid').css('opacity', 0).css('transition', '1s');
         }
         if (scroll > 1700) {
             $('.content .video .vid').css('opacity', 1).css('transition', '1s');
         } else {
             $('.content .video .vid').css('opacity', 0).css('transition', '1s');
         }

         if (scroll > 3300) {
             $('.content .gallery div').css('opacity', 1).css('transition', '1s');
         } else {
             $('.content .gallery div').css('opacity', 0).css('transition', '1s');
         }

     });
 });