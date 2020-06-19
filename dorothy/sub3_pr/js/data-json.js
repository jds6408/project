var xhr = new XMLHttpRequest(); // XMLHttpRequest 객체를 생성한다.
/*xhr =data.json 내용*/
xhr.onload = function () { // When readystate changes

    //if(xhr.status === 200) {                      // If server status was ok
    responseObject = JSON.parse(xhr.responseText); //서버로 부터 전달된 json 데이터를 responseText 속성을 통해 가져올 수 있다..
    var newContent = '';
    for (var i = 0; i < responseObject.media.length; i++) {
        newContent += '<div class="media'+(i+1)+'">';
        newContent += '<img src="' + responseObject.media[i].cover;
        newContent += '" alt="미디어 사진">';
        newContent += '<dl><dt>' + responseObject.media[i].title + '</dt>';
        newContent += '<dd>' + responseObject.media[i].name + '</dd>';
        newContent += responseObject.media[i].date + '</dl>';
        newContent += '</div>';
    }

    document.getElementById('content').innerHTML = newContent;

    //}
};

xhr.open('GET', 'data/data.json', true); // 요청을 준비한다.
xhr.send(null); // 요청을 전송한다