 $(document).ready(function () {


     var screenHeight = $(window).height();

     //스크롤의 좌표가 변하면.. 스크롤 이벤트
     $(window).on('scroll', function () {
         var scroll = $(window).scrollTop();
         //스크롤top의 좌표를 담는다
         console.log(scroll);
         if (scroll > 200) {
             $('.news_wrap ul li.news span.img_wrap').css('transition', '1s').css('right',0);

         }else{
              $('.news_wrap ul li.news span.img_wrap').css('transition', '1s').css('right','-2000px');
         }
         if (scroll > 850) {
            $('.news_wrap ul li.news2 span.img_wrap').css('transition', '1s').css('left',0);

         }else{
              $('.news_wrap ul li.news2 span.img_wrap').css('transition', '1s').css('left','-2000px');
         }
         if(scroll>1650){
             $('.artist_notice_wrap .artist_notice .border_box ').css('opacity',1).css('transition','1s');
         }else{
              $('.artist_notice_wrap .artist_notice .border_box ').css('opacity',0).css('transition','1s');
         }
         
        if(scroll>1850){
             $('.information_box ul li.company').css('left',0).css('transition','1s');
         }else{
             $('.information_box ul li.company').css('left','-2000px').css('transition','1s')
         }
        if(scroll>2300){
             $('.information_box ul li.recruit').css('left',0).css('transition','1s');
         }else{
             $('.information_box ul li.recruit').css('left','-2000px').css('transition','1s');
         }
         if(scroll>2750){
             $('.information_box ul li.aud').css('left',0).css('transition','1s');
         }else{
             $('.information_box ul li.aud').css('left','-2000px').css('transition','1s');
         }
         if(scroll>2580 && scroll<3000){
             $('.information_box ul li.company span').css('filter','none').css('transition',1);
         }else{
             $('.information_box ul li.company span').css('filter','brightness(50%)').css('transition',1);
         }
         if(scroll>3000 && scroll<3300){
             $('.information_box ul li.recruit span').css('filter','none').css('transition',1);
         }else{
             $('.information_box ul li.recruit span').css('filter','brightness(50%)').css('transition',1);
         }
         if(scroll>3300){
             $('.information_box ul li.aud span').css('filter','none').css('transition',1);
         }else{
             $('.information_box ul li.aud span').css('filter','brightness(50%)').css('transition',1);
         }
         
     });
 });