
var x = 0;
var y = 1;
var temp;

document.write("*****교환 전*****<br>");
document.write("x= "+ x + ", y = " + y);

//교환처리
    temp = x;    // x값을 y에 대입
    x = y;    //y값을 x에 대입
    y= temp;    // temp 값을 y에 대입

document.write("<br><br>")
document.write("*<br><br>****교환 후*****<br>");
document.write("x= "+ x + ", y = " + y );