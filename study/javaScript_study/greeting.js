const form = document.querySelector('.js-form'),
    input = form.querySelector('input'),
    greeting = document.querySelector('.js-greeting');

const USER_LS = "currentUser";
const SHOWING = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    //console.log(currentValue);
    paintGreeting(currentValue); //웹사이트가 기억을 못함
    saveName(currentValue); //웹사이트가 저장
}

function askForName() {
    form.classList.add(SHOWING);
    form.addEventListener("submit", handleSubmit);
}


function paintGreeting(text) {
    form.classList.remove(SHOWING);
    greeting.classList.add(SHOWING);
    greeting.innerText = `Hello ${text}`
}

function loadName() {
    //로컬스토리지 가지고오는 거 

    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        //유저네임을 등록하고 있지 않을 때
        askForName();
    } else {
        //유저가 들어와 있을 때
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();