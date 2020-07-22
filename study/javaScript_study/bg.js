const body = document.querySelector('body');

const imgNum = 3;

function paintImage(imgNumber){
    const image = new Image(); //객체생성
    image.src = `../img/h${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    setInterval(imgNumber,3000);
    console.log(image);
    body.appendChild(image);
}

function genRandom(){
    const number = Math.floor(Math.random() * imgNum);
          return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
    
}

init();