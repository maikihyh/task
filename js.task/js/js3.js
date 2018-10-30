var infoStr = localStorage.getItem("name");
var arr = infoStr.split(',');
console.log(arr);
//获取浏览器的数组
function fun() {
    let a = 0;
    for (let i = 0; i < arr.length ; i++) {
        let div = document.createElement('div');//添加一个div
        div.setAttribute("class", "box");//给div加上class
        div.innerHTML=(`<div class="box-time">
<div class="box-son" id="${a}"> ${arr[i]}</div>
        <div class="bottom-number">${i + 1}号
      </div></div>
      `);//添加里面的div
        document.getElementById("all-box").appendChild(div);//获取外面的id
        a++;
    }
}
function the() {
window.location.href="https://maikihyh.github.io/task/js.task/html/js3.1html";
}//跳转页面

function thefei() {
    if (confirm("要离开页面，重新分配人数吗"))
    {
        window.location.href="https://maikihyh.github.io/task/js.task/html/js2.1.html";
    }
    else
    {
    }
}
