function handleColor() {
    const headTag = document.querySelector('h1');
    const have = headTag.className; //Does not have it(class)
    console.log(have);
    headTag.classList.toggle('clicked');
    /* if (!headTag.classList.contains("clicked")) {
         //alert('안녕하세요');
         //이것은 class를 추가하는 것   

         headTag.classList.add("clicked");
         //headTag.className = "clicked"; // class를 가지고 있지 않을 때 // 이전클라스를 존중하지 않고 그 자체가 변화가 됨 

     } else {
         headTag.classList.remove("clicked");
     }*/
}
function init() {
    window.addEventListener("click", handleColor);
};
init();