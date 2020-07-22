const slideList = document.querySelector('.slide_list');
const slideContent = document.querySelectorAll('.slide_content');
const slideBtnNext = document.querySelector('.next');
const slideBtnPrev = document.querySelector('.prev');
const slideLen = slideContent.length;

const slideWidth = 1200;
const slideSpeed = 300;

slideList.style.transition = slideSpeed + "ms";
//3000px; slideList에 slide사진이 몇개가 올지 모르기에 유동적으로 바꿔놈
slideList.style.width = slideWidth * slideLen + "px";

//setInterval(slideList,2000);
// 5 console.log(slideLen); 
let currentIndex = 1;

slideBtnNext.addEventListener("click", function () { //버튼을 next누를 시
    if (currentIndex < slideLen) {
        //console.log(currentIndex); //0
        //console.log(slideLen); //    5
        // 0 < 5 //첫번째 백그라운드 
        // 1 < 5 //-600 두번째 백그라운드
        // 2 < 5 // -1200 세번째 백그라운드
        // 3 < 5 // -1800 네번째 백그라운드
        // 4 < 5 // -2400 다섯번째 백그라운드
        // 5 < 5 >>계산 안하고 빠져나옴

        //  -600 * 1 -600px
        // 1

        slideList.style.left = -slideWidth * (currentIndex) + "px";
        console.log(slideList);

        currentIndex++

        //console.log(currentIndex); // 1
        //console.log(slideLen);
        return;
    } else {
        //next 누르다가  5 == 5
        currentIndex = 1;
        slideList.style.left = -slideWidth * (currentIndex - 1) + "px";


        //alert('같아졋니?');
        //currentIndex = 0;
    }
})
// 현재 1 == console.log(currentIndex);
slideBtnPrev.addEventListener("click", function () {
    //currentIndex--;
    if (currentIndex == 1) {
        //alert('eocpajsl');
        currentIndex = slideLen;
        console.log(slideLen);
        //           = 5;
        slideList.style.left = -slideWidth * (currentIndex - 1) + "px";
        // -600 * 4 == -2400 마지막 백그라운드 입구
    } else if (currentIndex <= slideLen) {
        //만약에 현재인덱스가 슬라이드len보다 작거나 같으면
        //alert('wlsWk sj dksehlfrjsid?');
        //계속 --
        currentIndex--;
        // console.log(currentIndex);
        slideList.style.left = -slideWidth * (currentIndex - 1) + "px";
        // -600 * 하나씩줄어든 인덱스 -1 이면 그전거
    }
})
function dotPoint(){
    
}
