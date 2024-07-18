let $input = document.querySelector("input");
let $button = document.querySelector(".inputwrap button");
let $ol = document.querySelector("ol");

$button.addEventListener('click',function(e){
    e.preventDefault();
    e.stopPropagation();
    let inputValue = $input.value;
    
    if ($input.value == "" || $input.value == undefined){
        return;
    }else{
        let makeLi = document.createElement("li");
        let makeValue = document.createTextNode(inputValue);
        let makeDelBtn = document.createElement("button");
        let makeDeltxt = document.createTextNode('삭제');
        makeLi.append(makeValue);
        makeDelBtn.append(makeDeltxt);
        makeLi.append(makeDelBtn);

        $ol.append(makeLi);
        $input.value = "";
    }
});

$ol.addEventListener('click',function(e){
    if(e.target.tagName == "BUTTON"){
        e.target.closest("li").remove();
    }
});
