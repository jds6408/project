
$(document).ready(function() {
  $('.albums .more').on('click',function(){
      $('.content .artist_introduce .albums ul:nth-of-type(2)').fadeIn('slow').css({
      transformDuration:'1s',
      })
          ;
  })
    
    $('.video .more').on('click',function(){
      $('.clip2:nth-of-type(3),.clip2:nth-of-type(4)').fadeIn('slow').css({
      transformDuration:'1s',
      })
          ;
  })
    $('.video2 .more').on('click',function(){
      $('.clip2:nth-of-type(3),.clip2:nth-of-type(4)').fadeIn('slow').css({
      transformDuration:'1s',
      })
          ;
  })
    $('.gallery .more').on('click',function(){
      $('.content .gallery ul:nth-of-type(2)').fadeIn('slow').css({
      transformDuration:'1s',
      })
          ;
  })
});