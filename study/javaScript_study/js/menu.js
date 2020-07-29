const navBack = document.querySelector('nav');
const depth = document.querySelectorAll('.depth');

function open() {
    navBack.style.height = "400px";
    for (let i = 0; i < depth.length; i++) {
        depth[i].style.display = "block";
    }
}

function close() {
    navBack.style.height = "auto";
    for (let i = 0; i < depth.length; i++) {
        depth[i].style.display = "none";
    }
}
navBack.addEventListener("mouseenter", open);
navBack.addEventListener("mouseleave", close);