var hello;
function suiji() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}//颜色随机-
function changeBg() {

    function sort() {
        var arr = [0,1,2,3,4,5,6,7,8];

        var newArr = [];
        for(var i = 0, len = arr.length; i < len; i++) {
            var j = Math.floor(Math.random() * (len - i));
            newArr[i] = arr[j];
            arr.splice(j, 1)
        }
        return newArr;
    }//洗牌算法
    console.log(sort());
    var x=document.getElementsByTagName("div");
    for (var i=0;i<9;i++){
        x[i].style.backgroundColor = "orange";
    }//每次开始改变颜色，先变回原色
    var div1 = document.getElementsByClassName("div1");
    //   var num1 = Math.random() * arr.length;
    //   num1 = Math.floor(num1);
    //   var num2 = Math.randojhgyut mn
    // () * arr.length;
    //   num2 = Math.floor(num2);
    // var num3 = Math.random() * arr.length;
    //   num3 = Math.floor(num3);
    // console.log(num1,num2,num3);
    // if (num1 !== num2 && num2 !== num3 && num1 !== num3 ){
    var dd = sort();
    var the1 = dd[2];
    var the2 =dd[1];
    var the3 =dd[3];
          div1[the1].style.backgroundColor = suiji();
          div1[the2].style.backgroundColor = suiji();
          div1[the3].style.backgroundColor = suiji();
// }
//     else {
//         changeBg()
//     }
}//if判断
function startColor() {
    clearInterval(hello);
  hello = setInterval(changeBg, 1000);
}//开始按钮
function changeStyle()
{
    clearInterval(hello);
    var x=document.getElementsByTagName("div");
    for (var i=0;i<9;i++){
        x[i].style.backgroundColor = "orange";
    }
}//结束按钮

