// XMLHttpRequest로 해보기 ------------------------------------------------------------

const request = new XMLHttpRequest();

request.open('get','http://test.api.weniv.co.kr/mall');

request.onload = () => {
    if(request.status === 200){
        let reqText = request.responseText;
        makeList(reqText);
    }
}

request.send();

// 목록가져오기
function makeList(e){
    const $main = document.querySelector('#main');
    const $ul = document.querySelector('ul');

    const prdList = JSON.parse(e);
    // console.log(prdList);
    
    for(let i=0;i<prdList.length;i++){
        const $li = document.createElement('li');
        const $p = document.createElement('p');
        const $div = document.createElement('div');
        const $img = document.createElement('img');
        const $span = document.createElement('span');
        const $strong = document.createElement('strong');
        $p.append($img);
        $div.append($span,$strong);
        $p.classList.add('thumb');
        $div.classList.add('detail');
        $span.classList.add('name');
        $strong.classList.add('price');
        
        $ul.append($li);
        $li.append($p);
        $li.append($div);
        
        $li.id = prdList[i].id;
        $img.src = "http://test.api.weniv.co.kr/" + prdList[i].thumbnailImg;
        $span.textContent = prdList[i].productName;
        $strong.textContent = prdList[i].price;

        $li.style.padding = "10px 15px 20px";
        $li.style.margin = "5px";
        $li.style.border = "1px solid #cccccc";
        $li.style.listStyle = "none";
        $li.style.width = "calc((100% - 130px) / 3)";
        $img.style.width = "100%";
        $img.style.border = "1px solid #e0e0e0";
        $span.style.display = "block"
        $span.style.fontSize = "14px"
        $span.style.color = "gray"
        $span.style.margin = "0 0 10px"
        $strong.style.display = "block"
        $strong.style.marginLeft = "auto"

    }

    $main.style.width = "80vw";
    $main.style.margin = "0 auto";
    $ul.style.display ="flex";
    $ul.style.flexWrap ="wrap";

}