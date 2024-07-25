const url = "http://localhost:3001/menu";

let $form = document.querySelector("form");
let $input = document.querySelector(".inputText");
let $addBtn = document.querySelector(".add");
let $list = document.querySelector(".list");
let $ul = document.querySelector("ul");

// json 가져와서 파싱해서 뿌리기 (get)
const getFetch = async function(){
    const fetchUrl = await fetch(url);
    const parsingJson = await fetchUrl.json();
    parsingJson.forEach((ate) => {
        makeList(ate);
    })
}
getFetch();

// json 내보내기 / 새로운 값을 입력받아 데이터저장 (post)
const PostData = async function(menu){
    const fetchUrl = await fetch(url,{
        method : "POST",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify({
            name : menu,
            check : false
        })
    })
    const newData = await fetchUrl.json();
    return newData;
}

// 메뉴를 submit할때 일어나는일 (post도 포함)
$form.addEventListener('submit',async function(e){
    e.preventDefault;
    const inputMenu = $input.value;
    PostData(inputMenu);
    $input.value = "";
})

// 각 li마다 그려줄것
const makeList = function(ate){
    let $Li = document.createElement("li");
    let $span = document.createElement("span");
    let $editBtn = document.createElement("button");
    let $delBtn = document.createElement("button");
    let $checkBtn = document.createElement("input");

    $ul.append($Li);
    $Li.prepend($checkBtn);
    $Li.append($span);
    $Li.append($editBtn);
    $Li.append($delBtn);

    $editBtn.textContent ="수정";
    $editBtn.classList.add('edit');
    $delBtn.textContent ="삭제";
    $delBtn.classList.add('del');
    $checkBtn.setAttribute('type','checkbox');
    
    $Li.classList.add(ate.id);
    $span.textContent = ate.name;
    $checkBtn.checked = ate.check;
}

$ul.addEventListener('click',function(e){
    // 삭제버튼 눌렀을 때
    if(e.target.classList == "del"){
        let targetId = e.target.parentNode.classList;
        e.target.closest("li").remove();
        deleteMenu(targetId);

    // 수정버튼 눌렀을 때
    }else if(e.target.classList == "edit"){
        let targetId = e.target.parentNode.classList;
        let originMenu = e.target.previousElementSibling.textContent;
        let editName = prompt("음식메뉴 수정하기!",originMenu);
        if(editName !== null){
            editMenu(editName,targetId);
        }else{
            return;
        }
    }else{
        return;
    }
})

// fetch - 삭제하기 / json 내보내기 / id값필수
const deleteMenu = async function(id){
    const fetchUrl = await fetch(`${url}/${id}`,{
        method : "DELETE",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify()
    })
    const res = await fetchUrl.json();
    return res;
}

// 수정버튼 눌렀을 때
const editMenu = async function(menu, id){
    const fetchUrl = await fetch(`${url}/${id}`,{
        method : "PATCH",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify({
            name : menu
        })
    })
    const res = await fetchUrl.json();
    return res;
}

// input 구현하기
// prompt 조건값 더 넣기
// try catch문 넣고 status, readyState 체크해보기
// prompt로 구현안하면 뭐로할지 생각해보기