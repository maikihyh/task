var infoStr = localStorage.getItem("name");
var arr = infoStr.split(',');
console.log(arr);
var checkNum = 1;
var n = 0;

function check() {
    if (checkNum >= (2 * arr.length + 1)){
        window.location.href="https://maikihyh.github.io/task/js.task/html/js4.html";
    }else {
        if (checkNum % 2 !== 0){
            hide();
        }else {
            reveal();
        }
    }//点击次数达到跳转奇数运行第一个函数偶数第2个函数
    checkNum ++;//累加
    console.log(checkNum);
}
function reveal() {
    document.getElementById('num').innerHTML = n+2;
    document.getElementById('click').innerHTML = "查看" + (n+2) + "号身份";
    document.getElementById("king").style.display="block";
    document.getElementById("civilian").style.display="none";
    document.getElementById("identity").style.display="none";
    n++;
}//显示第一张图片其他隐藏

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
}//如果点击最后一次变内容，其他显示身份调用存到浏览器的数组，改变按钮内容，累加。
