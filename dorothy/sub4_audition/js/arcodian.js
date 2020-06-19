 $(document).ready(function () {

     $('.content .faq_wrap li p.question').on('click', function (e) {
         e.preventDefault();
         $(this).next('.answer').slideToggle();

     });


 });