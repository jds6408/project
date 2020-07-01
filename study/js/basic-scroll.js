$(document).ready(function(){
    /*var screenHeight = $(window).height();*/
    
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        
       // console.log(screenHeight);
        console.log(scroll);
    if(scroll > 100){
        $('.fixBox').addClass('navOn');
    }else{
        $('.fixBox').removeClass('navOn');
    }   
        
    })
    
    
})