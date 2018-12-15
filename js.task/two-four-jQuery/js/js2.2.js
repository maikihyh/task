var infoStr = localStorage.getItem("name");
var arr = infoStr.split(',');
var arr1 = arr.slice(0);
localStorage.setItem("name1",arr1 );
console.log(arr);
var checkNum = 1;
var n = 0;
function check() {
    if (checkNum >= (2 * arr.length)){
        localStorage.setItem("day",1);
        window.location.href="js3.html";
    }else {
        if (checkNum % 2 !== 0){
            hide();
        }else {
            reveal();
        }
    }
    checkNum ++;
    console.log(checkNum);
}
function reveal() {
    $("#civilian").text(n+2);
    $("#click").text("查看" + (n+2) + "号身份");
    $("#king").css("display","block");
    $("#civilian").css("display","none");
    $("#identity").css("display","none");
    n ++;
    console.log(arr.length);
}
function hide(){
    if (n+1 === arr.length){
        $("#click").text("查看法官日志");
    }else {
        $("#click").text("隐藏并传递给" + (n+2) + "号");
    }
    $("#king").css("display","none");
    $("#civilian").css("display","block");
    $("#identity").css("display","block");
    $("#identity").text( "身份: " + arr[n]);
}
function number() {
    if (confirm("要离开页面，重新分配人数吗"))
    {
        window.location.href="js2.1.html";
    }
    else
    {
    }
}
