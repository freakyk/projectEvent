/*
    <h1>나의 todo list</h1>
    <p>1. 오늘 저녁에는 부대찌게를 끓여 먹겠다.<button type="button">삭제</button></p>
    <p>2. 후식으로 슈팅스타를 먹겠다.<button type="button">삭제</button></p>
    <p>3. 자기 전에 반드시 내일 아침 메뉴를 생각해두겠다.<button type="button">삭제</button></p>

    위와 같은 HTML코드 구조가 있을 때

    1. P 태그를 클릭하면 p 태그의 컨텐츠를 출력하는 alert 창을 띄워주고
    2. 삭제 버튼을 클릭하면 삭제할 것인지를 물어보는 confirm 창을 띄워주고, 확인을 누르면 P태그를 삭제합니다.
*/


// 하나만 동작 (수정하기) -----------------------------------------------
// let $p = document.querySelector("p");
// let $button = document.querySelector("button");

// $p.addEventListener('click',function(e){
//     let $ptext = e.target.textContent;
//     alert($ptext);
//     e.stopPropagation();
// },false);

// $button.addEventListener('click',function(e){
//     let confirm = window.confirm("삭제하시겠습니까?")
//     e.stopPropagation();
//     if(confirm == true){
//         this.parentNode.remove();
//     }else{
//         return;
//     }
// });



// forEach로 수정 ----------------------------------------------
// let $p = document.querySelectorAll("p");
// let $button = document.querySelectorAll("button");

// $p.forEach((ps) => {
//     ps.addEventListener('click',function(e){
//         let $ptext = e.target.textContent;
//         alert($ptext);
//         e.stopPropagation();
//     },false);
// });

// $button.forEach(buttons => {
//     buttons.addEventListener('click',function(e){
//         let confirm = window.confirm("삭제하시겠습니까?")
//         e.stopPropagation();
//         if(confirm == true){
//             this.parentNode.remove();
//         }else{
//             return;
//         }
//     });
// });



// 자식요소의 텍스트는 포함하기 않도록 수정 ----------------------------------------------
let $p = document.querySelectorAll("p");
let $button = document.querySelectorAll("button");

$p.forEach((ps) => {
    ps.addEventListener('click',function(e){
        let $ptext = e.target.textContent.split('삭제');
        console.log($ptext[0]);
        alert($ptext[0]);
        e.stopPropagation();
    },false);
});

$button.forEach(buttons => {
    buttons.addEventListener('click',function(e){
        let confirm = window.confirm("삭제하시겠습니까?")
        e.stopPropagation();
        if(confirm == true){
            this.parentNode.remove();
        }else{
            return;
        }
    });
});