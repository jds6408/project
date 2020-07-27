const tabList = document.querySelectorAll('.tab_list');
//foreach 는 Array의 메서드
//querySelectorAll 은 nodeList객체 반환(배열과비슷하지만 배열은 아님)
//call()메서드를 통해 tabList == this로 설정
//주어진 this값 및 각각 전달된 인수와 함께 함수 호출


Array.prototype.forEach.call(tabList, function (list) {
    //console.log(list); // list== tablist[div]

    //a를 클릭시
    list.children[0].addEventListener('click', function (e) {
        e.preventDefault(); //눌렀을 때 a의 특성 페이지 이동하는 거 막아줌
        const tabContent = document.querySelectorAll('.tab_container .tab_content');
        const tabNum = this.parentElement.getAttribute('data-tabnum');
        // console.log(tabNum);
        // console.log(e.target);
        console.log(e.target);
        if(e.target){
            e.target.parentElement.classList.toggle('active');
        }

        Array.prototype.forEach.call(tabContent, function (cont, i) {
            //array.forEach(callbackFunction(currnetValue, index, array), thisArg)
            //console.log(cont, i);
            //tabContent, tabnum
            cont.style.display = "none";
        })
        //위 foreach문 빠져나왔음.
        tabContent[tabNum].style.display = "block";
    })

})
