
// 'y'누르면 계속 반복, 'n'키 누르면 반복중단
// 그 외 누름 '잘못입력'
//while ~ if ~break (반복 조건문)

while(true){
    var key = prompt("계속 할까요?", "y/n");


//처리
if (key == 'y' || key == 'Y'){
    alert("계속 반복");
}

else if(key == 'n'|| key == 'N'){
    alert("반복 중단");
}

else{
    alert("키 잘못 입력");
}
}
document.write("프로그램 종료");