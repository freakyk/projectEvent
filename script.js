let btnSelect = document.querySelector(".btn-select");
let listMember = document.querySelector(".list-member");

btnSelect.addEventListener('click',function(e){
    // console.log("클릭했음");
    listMember.style.display = "block";
});
listMember.addEventListener('click',function(e){
    let listText = e.target.textContent;
    btnSelect.after(listText);
});