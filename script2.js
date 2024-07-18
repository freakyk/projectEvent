// 이벤트 타입 contextmenu를 이용해 브라우저 오른쪽 버튼 이벤트 막고 
// '해당 페이지에서는 오른쪽 클릭을 제한합니다.’ 경고 띄우기

document.addEventListener('contextmenu',function(e){
    e.preventDefault();
    alert('해당 페이지에서는 오른쪽 클릭을 제한합니다.');
});