const slideList = document.querySelector('.slide_list');
const slideContent = document.querySelectorAll('.slide_content');
const slideBtnNext = document.querySelector('.next');
const slideBtnPrev = document.querySelector('.prev');
const pageBtn = document.querySelector("ul");
console.log(pageBtn);
const btns = pageBtn.children;
console.log(btns);
/*
const btns = document.querySelectorAll('li');*/
const slideLen = slideContent.length;
const slideWidth = 1920 + "px";
const slideWidthNum = parseInt(slideWidth);
const slideSpeed = 300;

let set;
// 타이머를 위해서 만들어놓은 전역변수

//console.log(slideWidth);

slideList.style.width = parseInt(slideWidth) * slideLen + "px";
//console.log(parseInt(slideWidth) * slideLen);
slideList.style.transition = slideSpeed + "ms";
                              // 현재선택된 / 배열의 인덱스/ 배열
slideContent.forEach(function (currVal, index, slideContent) {
    currVal.style.width = slideWidth;
});


//3000px; slideList에 slide사진이 몇개가 올지 모르기에 유동적으로 바꿔놈

let currentIndex = 1;

//next btn Slid
function timSlide() {
    //버튼을 next누를 시
    if (currentIndex < slideLen) {
        //console.log(slideLen); //    5
        // 1 < 5 // 두번째 백그라운드
        // 2 < 5 // 세번째 백그라운드
        // 3 < 5 // 네번째 백그라운드
        // 4 < 5 // 다섯번째 백그라운드
        // 5 < 5 >>계산 안하고 빠져나옴

        slideList.style.left = -slideWidthNum * (currentIndex) + "px";
        //console.log(slideList);
        currentIndex++
        //console.log(currentIndex); // 1
        //console.log(slideLen);
        return;
    } else {
        //next 누르다가  5 == 5
        currentIndex = 1;
        slideList.style.left = -slideWidthNum * (currentIndex - 1) + "px";
        //alert('같아졋니?');
        //currentIndex = 0;
    }
}

slideBtnNext.addEventListener("click", timSlide)
//next btn Slid

// setInterval //
function startAutoSlide() {
    set = setInterval(function () { //
        //지역변수로 만들게 되면 clearinterval할 때 이 변수명은 함수안에서만 실행됨.
        //다시 실행못하게 만들어 놓음; 해석해서 한버 실행함 한번만 사용가능  재실행방법이없음 ㅠㅠ
        const nextIndex = (currentIndex % slideLen)+1;
        timSlide(nextIndex);
    }, 3000);

}
startAutoSlide();

slideList.addEventListener("mouseenter", function () {
    clearInterval(set);
})
slideList.addEventListener("mouseleave", function () {
    startAutoSlide();
})
// setInterval //


// next Btn Slide//
// 현재 1 == console.log(currentIndex);
slideBtnPrev.addEventListener("click", function () {
    //currentIndex--;
    if (currentIndex == 1) {
        currentIndex = slideLen;
        //console.log(slideLen);
        //           = 5;
        slideList.style.left = -slideWidthNum * (currentIndex - 1) + "px";
        // -600 * 4 == -2400 마지막 백그라운드 입구
    } else if (currentIndex <= slideLen) {
        //만약에 현재인덱스가 슬라이드len보다 작거나 같으면
        //계속 --
        currentIndex--;
        // console.log(currentIndex);
        slideList.style.left = -slideWidthNum * (currentIndex - 1) + "px";
    }
})
// next Btn Slide//

//ul inside li making//
for (let li = 1; li <= slideLen; li++) {

    const liMake = document.createElement('li');
    //console.log(li); li *5
    liMake.innerText = "o"
    liMake.setAttribute("class", 'pageBtn')
    liMake.setAttribute("id", 'page' + li);
    liMake.setAttribute("data-num", li);
    pageBtn.append(liMake);
}
//ul inside li making//

/*
function pageMove(event){
    event.preventDefault();
    const numMove = event.target.getAttribute('data-num');
    console.log(event.target.getAttribute('data-num'))
    timSlide(numMove);
}

for(let no = 1; no<=btns.length; no++){
    btns[no-1].addEventListener("click",pageMove);
}
*/

