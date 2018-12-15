$(document).ready(function() {
    deal();
    start();
    arred();
    addnum();
    subnum();
    roleArray();
$("#img").click(function () {
    if (confirm("要离开页面，重新分配人数吗")) {
   window.location.href="js2.html";
}
else {
    }
});
});
function deal() {
    $("#deal").click(function () {
        if ($("#input1").val() >3 &&  $("#input1").val()<19) {
            var a = roleArray();
            localStorage.setItem("name", a);//存储分配的数组
            window.location.href = "js2.2.html";
        }//跳转页面
        else {
            alert("请输入正确的人数4~18并重新点击");
            $("#input1").val("")
        }
    });
}//判断人数不足不能调转页面
function start(){
    $("#input1").blur(function(){
        var x=$("#input1")
    if (x.val() >= 4 &&  x.val() <= 18) {
        roleArray();
        arred();
    } else {
        alert("请输入正确的人数4~18并重新点击");
        $("#input1").val("");
    }
    });
}
//判断游戏人数为4-18否则弹窗
function arred() {
    $("#range").change(function() {
        $("#input1").val($("#range").val());
        start();
        roleArray();
    })
}
//输入框关联
function roleArray(){
    let num1= Math.floor($("#input1").val()/3);
    console.log(num1);
    $("#killer").text(num1);
    var digit = new Array(num1).fill("杀手");
    //杀手数量fill方法生成数组
    var num2= $("#input1").val()-num1;
    console.log(num2);
    $("#civilian").text(num2);
    var digit1 = new Array(num2).fill("水民");
    //水民数量fill方法生成数组
    var num3 = digit.concat(digit1);
    console.log(num3);
    var newArr = [];
    for(var i = 0, len = num3.length; i < len; i++) {
        var j = Math.floor(Math.random() * (len - i));
        newArr[i] = num3[j];
        num3.splice(j, 1)
    }
    console.log(newArr);
    return newArr;
    //洗牌算法打乱随机分配身份n
}
function subnum(){
    $("#subbtn").click(function() {
        var num = $("#range").val();
      num--;
        $("#range").val(num);
        $("#input1").val(num);
        console.log(num);
        arred();
        roleArray();
    })

}//减号增加人数一次为1

function addnum() {
    $("#addbtn").click(function () {
        var num=$("#range").val();
        num++;
        $("#range").val(num);
        $("#input1").val(num);
        console.log(num);
        arred();
        roleArray();
    });

}
//加号增加人数一次为1
