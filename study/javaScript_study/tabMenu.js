const tabList = document.querySelectorAll('.tab_list');
const tabContent = document.querySelectorAll('.tab_content');
const targetLink = document.querySelectorAll('.tab_list a')
tabList.forEach(function (index) {
    for (let i = 0; i < tabList.length; i++) {
        tabList[i].addEventListener('click', function (e) {
            const tabNum = tabList[i].getAttribute('data-tabnum');
            // console.log(tabNum);
            e.preventDefault();
            for (let j = 0; j < tabContent.length; j++) {
                tabContent[j].style.display = "none";
            }
            document.getElementById('content' + (i + 1)).style.display = "block";

            for (let k = 0; k < targetLink.length; k++) {
                targetLink[k].classList.remove('active');
                e.target.classList.add('active');
            }

        })
    }
});
