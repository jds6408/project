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


      });


      $('.down').click(function () {
          screenHeight = $(window).height();
          $('html,body').animate({
              'scrollTop': screenHeight
          }, 1000);
      });
  });