$(document).ready(function () {
    $('.container').on('click', function () {
        $('.container div').toggleClass('change');
        $('.menu').toggleClass('act');
        
        var height = $(document).height;
        $('.menu > ul').css('height',height);
    });
});


/*    function togg() {
        var element = document.getElementById('ham');
        
        element.classList.toggle("change");
        if(element.classList){
            element.classList.toggle("change");
        } else{
            var classs = element.className.split(" ");
            var i =classs.indexOf("change");
            
            if(i>=0){
                classs.splice(i,1);
            }else{
                classs.push("change");
                element.className = classs.join(" ");
            }
        }
        */
/*if ((x.className == "bar1") && (y.className == "bar2") && (z.className == "bar3")) {
    x.classList.add('change');
    y.classList.add('change');
    z.classList.add('change');
} else {
    x.classList.remove('change');
    y.classList.remove('change');
    z.classList.remove('change');
}*/