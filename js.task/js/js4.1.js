var v =JSON.parse (localStorage.getItem("day"));
//读取天数
var number=JSON.parse (localStorage.getItem("number"));
//读取存储信息
var infoStr1 = localStorage.getItem("name1");
var arr1 = infoStr1.split(",");
//读取死亡数组
var q=0;//杀手数量
var o=0;//平民数量
window.onload = function(){
    shngc();
    panduan();
    btnn();
    for (let a = 0; a < arr1.length; a++) {
        if (arr1[a] === "杀手") {
            q++;
        } else if (arr1[a] === "水民") {
            o++;
        }
    }//for循环找到杀手平民数量、
    document.getElementById("kill").innerHTML=q;//输出杀手数量
    document.getElementById("civlian").innerHTML=o;//输出平民数量
};
function shngc() {
    for (let i = 0; i < v; i++) {
        let div = document.createElement('div');//添加一个div
        div.setAttribute("class", "box");//给div加上class
        div.innerHTML = (` <div class="status">
    <p>
        第${i+1}天
    </p>
        </div>
    <div class="day">
    
    </div>

    <div class="night">
     
    </div>`);//添加里面的div
        document.getElementById("link1").appendChild(div);//获取外面的id
    }
}
var day= document.getElementsByClassName("day");
var night =document.getElementsByClassName("night");
function panduan() {
    for (let i=0; i<v; i++) {
        switch (true) {
            case number===undefined:
                break;
            case number[i].day ===undefined:
                day[i].innerHTML="晚上没有进行任何操作";
                break;
            case number[i].day !==undefined:
                day[i].innerHTML=number[i].day;
                break;
        }
        switch (true) {
            case number===undefined:
                break;
            case number[i].night ===undefined:
                night[i].innerHTML="白天没有任何进行操作";
                break;
            case number[i].night !==undefined:
                night[i].innerHTML=number[i].night;
                break;
        }
    }//判断如果有内容就输出
}
function btnn() {
    document.getElementById("recur").onclick = function (){
        if (confirm("要结束游戏吗"))
        {
            localStorage.clear();
            window.location.href="js2.1.html";
        }
        else
        {
        }
        };
    document.getElementById("share").onclick = function () {
        if (confirm("结束游戏了")) {
            localStorage.clear();
            window.location.href = "js2.1.html";
        }
        else {
        }
    }
}