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
    document.getElementById('num').innerHTML = n+2;
    document.getElementById('click').innerHTML = "查看" + (n+2) + "号身份";
    document.getElementById("king").style.display="block";
    document.getElementById("civilian").style.display="none";
    document.getElementById("identity").style.display="none";
    n ++;
    console.log(arr.length);
}
function hide(){
    if (n+1 === arr.length){
        document.getElementById('click').innerHTML = "查看法官日志";
    }else {
        document.getElementById('click').innerHTML = "隐藏并传递给" + (n+2) + "号";
    }
    document.getElementById("king").style.display = "none";
    document.getElementById("identity").style.display = "block";
    document.getElementById("civilian").style.display = "block";
    document.getElementById("identity").innerHTML = "身份: " + arr[n];
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
