window.onload = function () {
    document.getElementById("btnAdd").addEventListener('click', addList); //추가
    document.getElementById("btnDelAll").addEventListener('click', delAllEle); //전체삭제
    document.getElementById("btnDelLast").addEventListener('click', delLastEle); //마지막 항목 삭제
    document.getElementById('DeleteSel').addEventListener('click', delSelected); //선택 삭제
    //추가
    function addList() {
        var contents = document.querySelector('.text-basic');
        if (!contents.value) {
            alert('내용을 입력해 주세요.');
            contents.focus();
            return false; // 내용이 없으면 넘어가면 안되기에 false를한다
        }

        var tr = document.createElement('tr');
        var input = document.createElement('input')
        input.setAttribute('type', 'checkbox');
        input.setAttribute('class', 'btn-chk');

        var td01 = document.createElement('td');
        td01.appendChild(input);
        tr.appendChild(td01);

        var td02 = document.createElement('td');
        td02.innerHTML = contents.value;
        tr.appendChild(td02);

        document.getElementById('listBody').appendChild(tr);
        contents.value = ''; //내용입력하고나서 input박스에는 초기화시켜주기
        contents.focus();
    }
    //전체삭제
    function delAllEle() {
        var list = document.getElementById('listBody');
        var listChild = list.children;
        for (var i = 0; i < listChild.length; i++) {
            list.removeChild(listChild[i]);
            i--;
        }


    }
    //마지막 항목 삭제
    function delLastEle() {
        var body = document.getElementById('listBody');
        var list = document.querySelectorAll('#listBody>tr')
        //alert(list.length); 2 
        if (list.length > 0) {
            var liLen = list.length-1;
            //length는 문자길이 배열로는 0.1이기에 -1해줘야함
            body.removeChild(list[liLen]);
        }else{
            alert('삭제할 항목이 없습니다');
            return false;
        }


    }
    //선택 삭제
    function delSelected() {
        var body = document.getElementById('listBody');
        var chkBox = document.querySelectorAll('#listBody .btn-chk');
        
        
        for(var i in chkBox){
            if(chkBox[i].nodeType ==1 && chkBox[i].checked){
            // node type ==1 은 element node 확인용(?)    
                
                
                body.removeChild(chkBox[i].parentNode.parentNode);
            }
        }
    }




}