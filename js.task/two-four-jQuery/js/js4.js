var infoStr = localStorage.getItem("name");//读取分配人数数组
var infoStr1 = localStorage.getItem("name1");//读取死亡数组
var arr = infoStr.split(",");
var arr1 = infoStr1.split(",");
console.log(arr1);
console.log(arr);
//获取浏览器的数组
function often() {
    if (confirm("要查看法官日志吗"))
    {
        window.location.href="js3.html";
    }
    else
    {
    }
}
function fun() {
    let a = 0;
    for (let i = 0; i < arr.length ; i++) {
        let div =(`<div class="box"><div class="box-time">
<div class="box-son" > ${arr[i]}</div>
        <div class="bottom-number">${i + 1}号
      </div></div>
      <div class="img"></div></div>`);//添加里面的div
        $("#all-box").append(div);//获取外面的id
        a++;
    }
    change();
 color();
    for (let q=0; q<arr1.length;q++) {
        if(arr1[q]==="死亡"){
            $(".box-son").eq(q).css("backgroundColor","#8c8c8c").off("click").addClass("die");
           var x= document.getElementsByClassName("box-son");
               x[q].onclick=""
        }else{

        }
    }
}
var a;
var b;
var c;
function color() {
var box1 = document.getElementsByClassName("box-son");
var img = document.getElementsByClassName("img");
for (let n = 0; n < box1.length; n++) {
    box1[n].onclick = function (){
        for(i=0;i<box1.length;i++){
            if (arr1[i].indexOf("死亡") !==-1 ) {

            }else{
                box1[i].style="background-color:#f5c97b";
                img[i].style = "opacity: 0;"
            }
        }//在点击事件中再加载一个遍历，当点击事件触发时，先让其他的元素恢复
           this.style.backgroundColor = "#8c8c8c";
         console.log(n);
          img[n].style = "opacity: 1" ;
          b=n;
        a=this.innerHTML;//取数组
        console.log(a);
    }//this选中改变样式

}

}
var choice = localStorage.getItem("state");//获取存值然后判断使用哪种方法。
function change() {
    if (choice==="one") {
        $("#button1").text("确定");
        $("#header").text("杀手杀人");
    }else if (choice==="two") {
        $("#button1").text("投票");
        $("#header").text("全民投票");
    }

};//判断是杀人页面还是投票。
var v =JSON.parse (localStorage.getItem("day"));
//读取天数
console.log(v);
 var box = [];
 var x= JSON.parse(localStorage.getItem("number"));
function oneday() {
   if (x===undefined) {
     box.push({});
     x=box;
   }
   else{
       x.push({});
   }

}//push方法增加空对象

function killer() {
    x[v-1].day=`黑夜：${b+1}号被杀死,身份是${arr[b]}`;
    localStorage.setItem("number", JSON.stringify(x));
}//夜晚被杀的储存身份信息
function ballot() {
    x[v-2].night=`白天：${b+1}号被投死,身份是${arr[b]}`;
    localStorage.setItem("number", JSON.stringify(x));
}//白天被杀死储存身份信息

function the() {
    oneday();
    if(choice==="one") {
        switch (a) {
            case " 杀手":
                alert("不能杀自己人");
                break;
            case " 水民":
                arr1[b]="死亡";
                localStorage.setItem("name1",arr1 );
                killer();
                run();
                break;
            default:
                alert("请杀人")
        }
    }//杀人页面，不能点击杀手
   else if(choice==="two"){
        localStorage.removeItem("state");
        switch (a)
        {   //判断条件是不是等于
            case " 杀手":
                arr1[b] = "死亡";
                localStorage.setItem("name1", arr1);
                ballot();
                run();
                break;
            case " 水民":
                arr1[b] = "死亡";
                localStorage.setItem("name1", arr1);
                ballot();
                run();
                break;
            default:
                alert("请投票")
        }
    }//投票页面杀手可以点击
}//使用全局变量的值，3种状态的情况。



var q=0;//杀手数量
var o=0;//平民数量
function run() {
    for (let a=0; a<arr1.length; a++){
    if(arr1[a] === "杀手"){
    q++;
    }else if(arr1[a]==="水民"){
    o++;
    }
}//for循环找到杀手平民数量
    switch (true) {
            case q > o:
             alert("杀手胜利");
              window.location.href = "js4.1.html";
              break;
            case q === 0:
             alert("平民胜利");
            window.location.href = "js4.1.html";
             break;
        default:
            window.location.href = "js3.1.html";
   }
}//switch语句判断胜利条件
