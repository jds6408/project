    $(document).ready(function() {

            /*$('.subNav li:eq(0)').find('a').addClass('spy');
            //첫번째 서브메뉴 활성화

            $('#content div:eq(0)').addClass('boxMove');
            //첫번째 내용글 애니메이션 처리
*/
            
           /* var boxheight = $('.navBox').offset().top;
            //스크롤의 좌표가 변하면.. 스크롤 이벤트
            $(window).on('scroll', function() {
                
                var scroll = $(window).scrollTop(); /*스크롤은 무조건 이거사용해주기*/
                //스크롤top의 좌표를 담는다

                /*$('.text').text(scroll);
                //스크롤 좌표의 값을 찍는다.
        
                if (scroll > boxheight) {
                    $('.navBox').addClass('navOn');
                    //스크롤의 거리가 350px 이상이면 서브메뉴 고정
                } else {
                    $('.navBox').removeClass('navOn');
                    //스크롤의 거리가 350px 보다 작으면 서브메뉴 원래 상태로
                }
                */

/*

                $('.subNav li').find('a').removeClass('spy');
                //모든 서브메뉴 비활성화~ 불꺼!!!
*/


                //스크롤의 거리의 범위를 처리
         var boxheight = $('#content div:eq(0)').offset().top;
        var boxheight2 = $('#content div:eq(1)').offset().top;
        var boxheight3 = $('#content div:eq(2)').offset().top;
        /*var boxheight4 = $('#content div:eq(3)').offset().top;
        var boxheight5 = $('#content div:eq(3)').offset().top;*/
                if (scroll >= boxheight && scroll < boxheight2) {
                    /*$('.subNav li:eq(0)').find('a').addClass('spy');
                    //첫번째 서브메뉴 활성화
*/
                    $('#content div:eq(0)').addClass('boxMove');
                    //첫번째 내용 콘텐츠 애니메이
                } else if (scroll >= boxheight2 && scroll < boxheight3) {
                    /*$('.subNav li:eq(1)').find('a').addClass('spy');
                    //두번째 서브메뉴 활성화*/

                    $('#content div:eq(1)').addClass('boxMove');
                } else if (scroll >= boxheight3/* && scroll < boxheight4*/) {
                    /*$('.subNav li:eq(2)').find('a').addClass('spy');
                    //세번째 서브메뉴 활성화
*/
                    $('#content div:eq(2)').addClass('boxMove');
                } /*else if (scroll >= boxheight5) {
                    $('.subNav li:eq(3)').find('a').addClass('spy');
                    //네번째 서브메뉴 활성화

                    $('#content div:eq(3)').addClass('boxMove');
                }*/

            });


        });