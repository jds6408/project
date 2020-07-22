const toDoform = document.querySelector('.js-toDoForm'),
    toDoinput = toDoform.querySelector('input'),
    toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = "toDos";

let toDos = [];

function delToDo(e) {
    const btn = e.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function (toDo) {


        return toDo.id !== parseInt(li.id);
    });
    //console.log(cleanToDos);
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    //json.stringify('객체를 string으로 바꿔주는 것 ')
}

function paintToDo(text) {
    //console.log(text);
    const li = document.createElement('li');
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1; //아무것도 없을 때 id 1을 만들기위해

    delBtn.innerText = "x";
    delBtn.addEventListener("click", delToDo);
    span.innerText = text;
    li.id = newId;
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);

    const toDoObj = {
        text: text,
        id: newId
    }

    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoinput.value;
    paintToDo(currentValue);
    toDoinput.value = ""
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        //존재 할때
        //console.log(loadedToDos);
        const parsedToDos = JSON.parse(loadedToDos);
        //console.log(parsedToDos); //object됨
        parsedToDos.forEach(function (toDo) { //array 
            //console.log(toDo.text);
            paintToDo(toDo.text);
        })
    }
}

function init() {
    loadToDos();
    toDoform.addEventListener("submit", handleSubmit);
}
init();