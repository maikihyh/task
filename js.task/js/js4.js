var infoStr = localStorage.getItem("name");
var arr = infoStr.split(',');
console.log(arr);
//获取浏览器的数组
var a=1;
function often(){
    if (a % 2 !==0   ){
        alert("确定要离开游戏吗，亲");

    }else {
        window.location.href="https://maikihyh.github.io/task/js.task/html/js2.1.html";
    }
    a ++;
}
function fun() {
    let a = 0;
    for (let i = 0; i < arr.length ; i++) {
        let div = document.createElement('div');//添加一个div
        div.setAttribute("class", "box");//给div加上class
        div.innerHTML=(`<div class="box-time">
<div class="box-son" id="${a}"> ${arr[i]}</div>
        <div class="bottom-number">${i + 1}号
      </div></div>
      <div class="img"></div>`);//添加里面的div
        document.getElementById("all-box").appendChild(div);//获取外面的id
        a++;
    }
}