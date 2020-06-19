$(document).ready(function() {
   
 	
   $("#headerArea .headerBtn .btn").click(function() { //메뉴버튼 클릭시
       
       var documentHeight =  $(document).height();
       //실제 페이지의 높이 = $(document).height();
       $(".box").css('height',documentHeight);
       $(".headerBtn #gnb2").css('height',documentHeight);
       //반투명박스와 네비의 높이를 실제 페이지의 높이로 바꾸어라   

       $(".headerBtn #gnb2").animate({right:0,opacity:.8}, 'slow');
       $(".box").show();
   });
   
   $(".box,.mclose").click(function() { //닫기버튼 클릭시
     $(".headerBtn #gnb2").animate({right:'-100%',opacity:0}, 'fast');
     $(".box").hide();
   });
  });