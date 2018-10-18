var infoStr = localStorage.getItem("name");
var arr = infoStr.split(',');
console.log(arr);
var checkNum = 1;
var n = 0;

function check() {
    if (checkNum >= (2 * arr.length + 1)){
        location.href="god.html";
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
    n++;
}

function hide() {
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
