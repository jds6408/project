// JavaScript Document

$(document).ready(function(){
  var cnt=2;  //탭의개수  ***
  $('.tabs .contlist:eq(0)').show(); //첫번째 탭 내용 보여라~
  $('.tabs .tab1').css('opacity','1').css('color','#fff').css('backgroundColor','#a8191f');
           //첫번째 탭 활성화

  $('.tabs .tab').each(function (index) {  //index=0,1,2,...
    $(this).click(function(){ //각각의 탭메뉴를 클릭하면   
	  $(".tabs .contlist").hide(); //모든 내용을 안보이게~~ 
	  $(".tabs .contlist:eq("+index+")").show();
                //클릭한 탭에 해당 내용만 보여라~
        
	  for(var i=1;i<=cnt;i++){  //1,2,3
       $('.tab'+i).css('opacity','.7').css('color','#fff');
      }  //모든 탭메뉴를 비활성화~~
      $(this).css('opacity','1').css('color','#fff'); //클릭한 해당 탭메뉴만 활성화
   });
  });

    
 /*  
    var index=0;
    $('.tabs .tab').click(function(){  
        index=$(this).parent().index('h3');

      $(".tabs .contlist").hide(); //모든 내용을 안보이게~~ 
	  $(".tabs .contlist:eq("+index+")").show();
                //클릭한 탭에 해당 내용만 보여라~
        
	  for(var i=1;i<=cnt;i++){  //1,2,3
       $('.tab'+i).css('background','url(images/tab'+i+'.jpg)');
      }  //모든 탭메뉴를 비활성화~~
      $(this).css('background','url(images/tab'+(index+1)+'on.jpg)'); //클릭한 해당 탭메뉴만 활성화

    });
 */
  
  
});














