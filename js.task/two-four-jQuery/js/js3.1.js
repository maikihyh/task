var x=JSON.parse (localStorage.getItem("day"));
function the() {
    if (confirm("要查看法官日志吗"))
{
    window.location.href="js3.html";
}
else
{
}
}
var huo =document.getElementsByClassName("killing");
var huo1 =document.getElementsByClassName("killing1");
var huo2 =document.getElementsByClassName("killing2");
var huo3 =document.getElementsByClassName("killing3");
var ya =document.getElementsByClassName("triangle");
var ya1 =document.getElementsByClassName("triangle1");
var ya2 =document.getElementsByClassName("triangle2");
var ya3 =document.getElementsByClassName("triangle3");
function disp() {
    if (x===1){
    } else{
        for (let i = 0; i <x-1 ; i++) {
            console.log(i);
            huo[i].style.backgroundColor = "#83b09a";
            huo[i].onclick=null;
            huo1[i].style.backgroundColor = "#83b09a";
            huo1[i].onclick=null;
            huo2[i].style.backgroundColor = "#83b09a";
            huo2[i].onclick=null;
            huo3[i].style.backgroundColor = "#83b09a";
            huo3[i].onclick=null;
            ya[i].style= "border-right:10px solid  #83b09a";
            ya[i].onclick=null;
            ya1[i].style= "border-right:10px solid  #83b09a";
            ya1[i].onclick=null;
            ya2[i].style= "border-right:10px solid  #83b09a";
            ya2[i].onclick=null;
            ya3[i].style= "border-right:10px solid  #83b09a";
            ya3[i].onclick=null;
        }
    }

}

window.onload = function() {
    fun();
    none();
    please();
    endgame();
    var fsm = new StateMachine({
        init: 'raday',
        transitions: [
            {name: 'one', from: 'raday', to: 'one'},
            {name: 'two',  from: 'one', to: 'two'},
            {name: 'three', from: 'two', to: 'three'},
            {name: 'four', from: 'three', to: 'four'},
        ],
        methods: {
            onOne: function () {
                for (let i=0; i<huo.length; i++){
                    huo[i].style.backgroundColor = "#83b09a";
                    ya[i].style= "border-right:10px solid  #83b09a";
                    localStorage.setItem("state","one");
                }
            },
            onTwo: function () {
                for (let i=0; i<huo1.length; i++){
                    huo1[i].style.backgroundColor = "#83b09a";
                    ya1[i].style= "border-right:10px solid  #83b09a";
                }
            },
            onThree: function () {
                for (let i=0; i<huo2.length; i++){
                    huo2[i].style.backgroundColor = "#83b09a";
                    ya2[i].style= "border-right:10px solid  #83b09a";
                    localStorage.setItem("state","two");
                }

            },
            onFour: function () {
                for (let i=0; i<huo3.length; i++){
                    huo3[i].style.backgroundColor = "#83b09a";
                    ya3[i].style= "border-right:10px solid  #83b09a";
                }
            },
        }
    });//点击渲染颜色、
    console.log(fsm);
    var a= document.getElementsByClassName("killing");
    console.log(a);
    for (let i=0; i<a.length; i++){
        a[i] .onclick= function(){
            if(fsm.state==="raday"){
                fsm.one();
                window.location.href="js4.html";
            } else{
                alert("请按照顺序操作！")
            }
        };
    }

    var s= document.getElementsByClassName("killing1");
    for (let i=0; i<s.length; i++) {
        s[i].onclick = function () {
            if (fsm.state === "one") {
                fsm.two();
                alert("亡灵发表遗言")
            } else {
                alert("请按照顺序操作！")
            }
        };
    }
    var d= document.getElementsByClassName("killing2");
    for (let i=0; i<d.length; i++) {
        d[i].onclick = function () {
            if (fsm.state === "two") {
                fsm.three();
                alert("玩家依次发言")
            } else {
                alert("请按照顺序操作！")
            }
        };
    }
    var f= document.getElementsByClassName("killing3");
    for (let i=0; i<f.length; i++) {
        f[i].onclick = function () {
            if (fsm.state === "three") {
                fsm.four();
                oneday();
                window.location.href = "js4.html";
            } else {
                alert("请按照顺序操作！");
            }
        };
    }
    var state = localStorage.getItem("state");
    state1=function() {
        if(state==="one"){
             fsm.one();
        }
        else{
          // if(state==="two"){
           //      fsm.one();
           //      fsm.two();
           //      fsm.three();
           //      fsm.four();
            }

        }()
    disp();
};//有限状态机
 function  none() {
var q =document.getElementsByClassName("day");
console.log(q);
    for (i = 0; i < q.length; i++) {
        q[i].onclick = function () {
            if(this.nextElementSibling.style.display==="none"){
                this.nextElementSibling.style .display= "block";
        }
        else {
                this.nextElementSibling.style .display= "none";
            }
        }//点击改变状态隐藏显示
    }
}

var d=JSON.parse (localStorage.getItem("number"));
 console.log(d);
 var kills= document.getElementsByClassName("kills");
 var death =document.getElementsByClassName("death");
 function please() {
     for (let i=0; i<x; i++) {
         switch (true) {
             case d===undefined:
                 break;
             case d[i].day ===undefined:
                 kills[i].innerHTML="";
                 break;
             case d[i].day !==undefined:
                 kills[i].innerHTML=`第${i+1}天`+d[i].day;
                 break;
         }//杀手身份位置
         switch (true) {
             case d===undefined:
                 break;
             case d[i].night ===undefined:
                 death[i].innerHTML="";
                 break;
             case d[i].night !==undefined:
                 death[i].innerHTML=`第${i+1}天`+d[i].night;
                 break;
         }//平民身份位置
     }//判断如果有内容就输出
}//被杀的人的身份记录。
function oneday() {
    x++;
    localStorage.setItem("day",x);
}//天数保存，第几天然后生成。
function fun() {
    for (let i = 0; i <x ; i++) {//for循环增加天数
        let div = document.createElement('div');//添加一个div
        div.innerHTML = (`  <div class="day">
    <div class="box-day">
    </div>

    <span>
        第${i+1}天
    </span>

    <img src="../img/js3.2.png" height="15" width="25"/>
    </div>

<div class="father-box">
    <div class="a-day">
    <div  class="night-day">
        <img src="../img/js3.png" height="20" width="15"/></div>
      <div class="strip"></div>
        <div  class="night-day"><img src="../img/js3.1.png" height="20" width="20"/>
        </div>
        <div class="strip1"></div>
    </div>

    <div class="flow">
        <div class="flow-box">
        <div class="triangle"></div>
        <div class="killing">杀手杀人</div>
        </div>
        <p class="kills"></p>
        <div class="flow-box">
            <div class="triangle1"></div>
            <div class="killing1">亡灵发表遗言</div>
        </div>
        <p></p>
        <div class="flow-box">
            <div class="triangle2"></div>
            <div class="killing2">玩家依次发言</div>
        </div>
        <p></p>
        <div class="flow-box">
            <div class="triangle3"></div>
            <div class="killing3">全民投票</div>
        </div>
        <p class="death"></p>
    </div>
</div>`);//添加里面的div
        document.getElementById("day-number").appendChild(div);//获取外面的id
    }
}//游戏进行生成天数。
function endgame() {
    document.getElementById("end").onclick = function (){
        if (confirm("要结束游戏吗"))
        {
            window.location.href="js2.1.html";
        }
        else
        {
        }
        document.getElementById("journal").onclick = function (){
            if (confirm("要查看法官日志吗"))
            {
                window.location.href="js3.html";
            }
            else
            {
            }
    }
}
 }
