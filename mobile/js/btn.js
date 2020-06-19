
$(document).ready(function() {
  $('.more').on('click',function(){
      $('.opacBox > ul:nth-child(2)').fadeIn('slow').css({
      transformDuration:'1s',
      })
          ;
  })
});