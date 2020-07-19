window.addEventListener('scroll', function () {
    document.querySelector('#content > h2').innerHTML = window.pageYOffset + "px";
    var hh = window.pageYOffset;

    var di = document.querySelectorAll('#content > div');
    for (var i in di) {
        console.log(di[i]);
    }

    if (hh > 200) {
        di[1].style.left = 0;
        di[1].style.transition = ".2s";
    }
    if (hh > 1000) {
        
        di[2].style.right = 0;
        di[2].style.transition = ".2s";
    }
    if (hh > 1700) {
        di[3].style.left = 0;
        di[3].style.transition = ".2s";
    }
    if(hh >2400){
        di[4].style.left = 0;
        di[4].style.transition = ".2s";
    }
    var sticky = document.querySelector('ul');
    var stickyH =sticky.offsetTop;
    //console.log(sticky); //124
    if(hh >= stickyH){
        sticky.classList.add('sticky');
    }else{
        sticky.classList.remove('sticky');
    }
    
});

/*window.addEventListener('scroll', function() {
  document.getElementById('showScroll').innerHTML = window.pageYOffset + 'px';
});*/