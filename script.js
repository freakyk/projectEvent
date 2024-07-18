// let btnSelect = document.querySelector(".btn-select");
// let listMember = document.querySelector(".list-member");

// btnSelect.addEventListener('click',function(e){
//     // console.log("클릭했음");
//     listMember.style.display = "block";
// });
// listMember.addEventListener('click',function(e){
//     let listText = e.target.textContent;
//     btnSelect.after(listText);
// });


//  수정 ------------------------------------------------------

let btnSelect = document.querySelector(".btn-select");
let listMember = document.querySelector(".list-member");
let innerSpan = document.createElement("span");
innerSpan.classList.add("innerSpan");
btnSelect.after(innerSpan);

btnSelect.addEventListener('click',function(e){
    if(listMember.style.display === 'none' || listMember.style.display === ''){
        listMember.style.display = "block";
    }else{
        listMember.style.display = "none";
    }
});
listMember.addEventListener('click',function(e){
    let listText = e.target.textContent;
    innerSpan.textContent = listText;
});