   $(document).ready(function() {
   

    $('ul.dropdownmenu').hover(
        function() { 
            $('ul.dropdownmenu li.menu ul').fadeIn('normal',function(){$(this).stop();});
	       $('#header').animate({height:370},'fast').clearQueue();
                 },
        function() {
	    
	      $('ul.dropdownmenu li.menu ul').fadeOut('fast');
          $('#header').animate({height:179},'fast').clearQueue();
    });
               
            /*$('ul.dropdownmenu li.menu').hover(
            function() { 
	         $('a.depth1', this).animate({top:-22},'fast').clearQueue();
                 },
            function() {
	        $('a.depth1', this).animate({top:0},'fast').clearQueue();
        });*/
       //tab키처리
         $('ul.dropdownmenu li.menu .depth1').on('focus', function () {        
                $('ul.dropdownmenu li.menu ul').slideDown('fast');
                $('#header').animate({height:200},'fast').clearQueue();  
          });

         $('ul.dropdownmenu li.m4 li:last').find('a').on('blur', function () {        
                  $('ul.dropdownmenu li.menu ul').slideUp('fast');
                 $('#header').animate({height:50},'fast').clearQueue();
         });
       
});














