var v =JSON.parse (localStorage.getItem("day"));
//读取天数
var number=JSON.parse (localStorage.getItem("number"));
//读取存储信息
var infoStr1 = localStorage.getItem("name1");
var arr1 = infoStr1.split(",");
//读取死亡数组
var q=0;//杀手数量
var o=0;//平民数量
var j=0;//死亡数量
var swan;
window.onload = function(){
    for (let a = 0; a < arr1.length; a++) {
        if (arr1[a] === "杀手") {
            q++;
        } else if (arr1[a] === "水民") {
            o++;
        }
        else if (arr1[a] === "死亡") {
            j++;
        }
    }
    swan=Math.ceil(j/2);
    shngc();
    panduan();
    btnn();
    //for循环找到杀手平民数量、
    $("#kill").text(q);
    //输出杀手数量
    $("#civilian").text(o);
    //输出平民数量
};
function shngc() {
    console.log(swan);
    for (let i = 0; i < swan; i++) {
        let div = (`<div class="box"> <div class="status">
    <p>
        第${i+1}天
    </p>
        </div>
    <div class="day">
    </div>
    <div class="night">
     
    </div></div>`);//添加里面的div
        $("#link1").append(div);//获取外面的id
    }
}
var day= document.getElementsByClassName("day");
var night =document.getElementsByClassName("night");
function panduan() {
    for (let i=0; i<swan; i++) {
        switch (true) {
            case number===undefined:
                break;
            case number[i].day ===undefined:
                $(".day").eq(i).text("晚上没有进行任何操作");
                break;
            case number[i].day !==undefined:
                $(".day").eq(i).text(number[i].day);
                break;
        }
        switch (true) {
            case number===undefined:
                break;
            case number[i].night ===undefined:
                $(".night").eq(i).text("白天没有任何进行操作");
                break;
            case number[i].night !==undefined:
                $(".night").eq(i).text(number[i].night);
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