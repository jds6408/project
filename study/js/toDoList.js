window.onload = function () {
    document.getElementById("btnAdd").addEventListener('click', addList); //추가
    document.getElementById("DeleteSel").addEventListener('click', delAllEle); //전체삭제
    document.getElementById("btnDelLast").addEventListener('click', delLastEle); //마지막 항목 삭제
    document.getElementById('btnDelAll').addEventListener('click', delSelected); //선택 삭제
    //추가
    function addList() {
        var contents = document.querySelector('.text-basic');
        if(!contents.value){
            alert('내용을 입력해 주세요.');
            contents.focus();
            return false;
        }
        
        var tr  =document.createElement('tr');
        var input = document.createElement('input')
        input.setAttribute('type','checkbox');
        input.setAttribute('class','btn-chk');
        
        var td01 = document.createElement('td');
        td01.appendChild(input);
        tr.appendChild(td01);
        
        var td02 =document.createElement('td');
        td02.innerHTML = contents.value;
        tr.appendChild(td02);
        
        document.getElementById('listBody').appendChild(tr);
        contents.value ='';
        contents.focus();
    }
    //전체삭제
    function delAllEle() {

    }
    //마지막 항목 삭제
    function delLastEle() {

    }
    //선택 삭제
    function delSelected() {

    }




}