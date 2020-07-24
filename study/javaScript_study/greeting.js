const form = document.querySelector('.js-form'),
    input = form.querySelector('input'),
    greeting = document.querySelector('.js-greeting');

const USER_LS = "currentUser";
const SHOWING = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
    // 웹사이트가 기억할 수 있게 작성된 것을 save하는 함수
}

function handleSubmit(event) {
    event.preventDefault(); //이벤트 막기 제출 못하게 막는 것
    const currentValue = input.value; // 적은 input의 value
    //console.log(currentValue);
    paintGreeting(currentValue); // 이 함수를 부르는 것만으로는 웹사이트가 기억을 못함
    saveName(currentValue); //웹사이트가 기억 할 수 있는 함수를 발생
}

function askForName() {
    form.classList.add(SHOWING);
    form.addEventListener("submit", handleSubmit);

    //폼을 보이고, 제출할 때 이벤트 발생하는 handlesubmit함수발생

}


function paintGreeting(text) {
    form.classList.remove(SHOWING);
    greeting.classList.add(SHOWING);
    greeting.innerText = `Hello ${text}`;

    //  폼에 보여지는 클래스는 없어지고, 환영하는 문구 보여지는 클래스 추가하고 그 안에 텍스트를 아큐멘트를 받아서 작성


}

function loadName() {
    //로컬스토리지 가지고오는 거 

    const currentUser = localStorage.getItem(USER_LS);
    //로컬스토로지에 있지 않는 값은 null로 지정
    if (currentUser === null) {
        //유저네임을 등록하고 있지 않을 때
        askForName(); //이름을 물어내는 함수 발생
    } else {
        //유저가 들어와 있을 때
        paintGreeting(currentUser); //유저 인자를 환영하는 함수발생
    }
}

function init() { //초기설정
    loadName();
}

init();