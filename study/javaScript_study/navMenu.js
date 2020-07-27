const btnOpen = document.querySelector('.clearfix a.open');
const btnClose = document.querySelector('.clearfix a.close');
const MenuHeight = document.querySelector('.clearfix ul');
const doc = document;
//높이 가장 높은 거 찾아내는 것.
const docH = Math.max(
    doc.body.scrollHeight, doc.documentElement.scrollHeight,
    doc.body.offsetHeight, doc.documentElement.offsetHeight,
    doc.body.clientHeight, doc.documentElement.clientHeight
);
//console.log(docH)
MenuHeight.style.height = docH + "px";

function changeBtn() {
    MenuHeight.style.left = 0;
    MenuHeight.style.transition = "all .3s linear";
    btnOpen.style.opacity = 0;
    btnClose.style.opacity = 1;
    btnOpen.style.transition = "all .3s linear";
    btnClose.style.transition = "all .3s linear";

}

function closeBtn() {
    MenuHeight.style.left = "-999px";
    MenuHeight.style.transition = "all .3s linear";
    btnOpen.style.opacity = 1;
    btnClose.style.opacity = 0;
    btnOpen.style.transition = "all .3s linear";
    btnClose.style.transition = "all .3s linear";
}

btnOpen.addEventListener("click", changeBtn);

btnClose.addEventListener("click", closeBtn);
