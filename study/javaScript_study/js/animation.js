'use strict';
let imgObj = null;
const btn = document.querySelector('input');

function init() {
    imgObj = document.querySelector('img');
    imgObj.style.position = "relative";
    imgObj.style.left = '0px';
}
let play;

function playAni() {
    play = setInterval(function () {
        imgObj.style.left = parseInt(imgObj.style.left) + 100 + "px";
    }, 2000);
}

function stopAni() {
    clearInterval(play);
}
btn.addEventListener("click", function () {

    if (btn.value === "play") {
        playAni();
        btn.value = 'stop';
    } else {
        stopAni();
        btn.value = 'play';
    }
})

init();
