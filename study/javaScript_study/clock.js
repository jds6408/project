const clock = document.querySelector('.js-clock');
const clockTitle = clock.querySelector('h2');

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    const amOrPm = hours >= 12 ? 'Pm' : 'Am';
    let hou = hours<10 ? '0'+hours :hours;
    const minu = minutes<10 ? '0'+minutes : minutes;
    const sec = seconds<10 ? '0'+seconds :seconds;
    //const pm = hours >= 12 ? hours % 13 + 1;
    /*
        clockTitle.innerHTML =
            amOrPm + `${hours >12 ? `${hours}`%hours+1`: hours
    }:
    $ {
        hours < 10 ? `0${hours}` : hours
    }:
    $ {
        minutes < 10 ? `0${minutes}` : minutes
    }:
    $ {
        seconds < 10 ? `0${seconds}` : seconds
    }
    `;
    */
    //12시간제 만들기
    if (hours > 12) {
        hou = hours % 12
        //console.log(hou);
            clockTitle.innerHTML = amOrPm + "|" + 0 + hou+ ":" + minu+ ":" + sec;
    }else{
        clockTitle.innerHTML = amOrPm + "|" + hou + ":" + minu+ ":" + sec;
    }

}

function init() {
    getTime(); //먼저 시간을 얻고

    setInterval(getTime, 1000);
}
init();