
function   add(){
    window.location.href="https://maikihyh.github.io/task/js.task/html/js2.html";
}
function add2(){
    if (document.getElementById("input1").value>3&&document.getElementById("input1").value<19  ){
        var a=roleArray();
        localStorage.setItem("name",a );//存储分配的数组
        window.location.href="https://maikihyh.github.io/task/js.task/html/js2.2.html";
    }//跳转页面
       else{
      alert("请输入正确的人数4~18并重新点击");
        document.getElementById("input1").value="";
}
}//判断人数不足不能调转页面
function start(){
    var num=document.getElementById("input1").value;
    if (num >= 4 && num <= 18) {
        roleArray();
        arred();
    } else {
        alert("请输入正确的人数4~18并重新点击");
        document.getElementById("input1").value="";
    }
}  console.log(start());
//判断游戏人数为4-18否则弹窗
function arred() {
    var num2=document.getElementById("range");
    var location=document.getElementById("input1");
    num2.value=location.value;
}
//输入框关联
function roleArray(){
    var num=document.getElementById("input1").value;
    var num1=Math.floor(num/3);
    console.log(num1);
    document.getElementById("killer").innerHTML=num1;
   var digit = new Array(num1).fill("杀手");
   //杀手数量fill方法生成数组
    var num2= num-Math.floor(num/3);
    console.log(num2);
    document.getElementById("civilian").innerHTML=num2;
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
//向下取整产生平民杀手人数
function change(){
    var number1=document.getElementById("range");
    var location=document.getElementById("input1");
    location.value=number1.value;
    start()
}//滚动条关联

function addnum(){
    var num=document.getElementById("range");
    num.value=++ num.value;
    change()
}//加号增加人数一次为1
function subnum(){
    var num=document.getElementById("range");
    num.value=num.value-1;
    change()
}//减号减少人数一次为1
function smch()
{
var shui=document.getElementById("button1").value;
    localStorage.setItem("name",shui );//存储水民词组

}
function ssch()
{
var sha=document.getElementById("button2").value;
    localStorage.setItem("name",sha );//存储杀手词组
}
