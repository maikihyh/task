var infoStr = localStorage.getItem("name");
var arr = infoStr.split(',');
console.log(arr);
//获取浏览器的数组
var a=1;
function often() {
    if (confirm("要离开页面，重新分配人数吗"))
    {
        window.location.href="https://maikihyh.github.io/task/js.task/html/js2.1.html";
    }
    else
    {
    }
}
function fun() {
    let a = 0;
    for (let i = 0; i < arr.length ; i++) {
        let div = document.createElement('div');//添加一个div
        div.setAttribute("class", "box");//给div加上class
        div.innerHTML=(`<div class="box-time">
<div class="box-son" > ${arr[i]}</div>
        <div class="bottom-number">${i + 1}号
      </div></div>
      <div class="img"></div>`);//添加里面的div
        document.getElementById("all-box").appendChild(div);//获取外面的id
        a++;
    }
 color();
}
function color() {
var box1 = document.getElementsByClassName("box-son");
var img = document.getElementsByClassName("img");
for (let n = 0; n < box1.length; n++) {
    box1[n].onclick = function () {
        for(i=0;i<box1.length;i++){
            box1[i].style="background-color:#f5c97b";
            img[i].style = "    opacity: 0;"
        }//在点击事件中再加载一个遍历，当点击事件触发时，先让其他的元素恢复
           this.style.backgroundColor = "#8c8c8c";
         console.log(n);
          img[n].style = "opacity: 1" ;
        var a=this.innerHTML;//取数组
        console.log(a)
    }//this选中改变样式
}
}
function the() {
              if () 
}
