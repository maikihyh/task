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
function disp() {
    if (x===1){
    } else{
        for (let i = 0; i <x-1 ; i++) {
            console.log(i);
            $(".killing").eq(i).css("backgroundColor","#83b09a").off("click");
            $(".killing1").eq(i).css("backgroundColor","#83b09a").off("click");
            $(".killing2").eq(i).css("backgroundColor","#83b09a").off("click");
            $(".killing3").eq(i).css("backgroundColor","#83b09a").off("click");
            $(".triangle").eq(i).css("border-right","10px solid  #83b09a").off("click");
            $(".triangle1").eq(i).css("border-right","10px solid  #83b09a").off("click");
            $(".triangle2").eq(i).css("border-right","10px solid  #83b09a").off("click");
            $(".triangle3").eq(i).css("border-right","10px solid  #83b09a").off("click");
        }
    }
}
window.onload = function() {
    fun();
    none();
    endgame();
    please();
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
                $(".killing").each(function () {
                    $(this).css("backgroundColor", "#83b09a");
                    $(this).prev().css("border-right", "10px solid  #83b09a");
                    localStorage.setItem("state", "one");
                })
            },
            onTwo: function () {
                $(".killing1").each(function () {
                    $(this).css("backgroundColor", "#83b09a");
                    $(this).prev().css("border-right", "10px solid  #83b09a");
                })
            },
            onThree: function () {
                $(".killing2").each(function () {
                    $(this).css("backgroundColor", "#83b09a");
                    $(this).prev().css("border-right", "10px solid  #83b09a");
                    localStorage.setItem("state", "two");
                })

            },
            onFour: function () {
                $(".killing3").each(function () {
                    $(this).css("backgroundColor", "#83b09a");
                    $(this).prev().css("border-right", "10px solid  #83b09a");
                })
            },
        }
});//点击渲染颜色、
    console.log(fsm);
    $(".killing").each(function(){
        $(this).click(function(){
            if(fsm.state==="raday"){
                fsm.one();
                window.location.href="js4.html";
            } else{
                alert("请按照顺序操作！")
            }
    })

    });
    $(".killing1").each(function(){
        $(this).click(function(){
            if (fsm.state === "one") {
                fsm.two();
                alert("亡灵发表遗言")
            } else {
                alert("请按照顺序操作！")
            }
        })
    });
    $(".killing2").each(function(){
        $(this).click(function(){
            if (fsm.state === "two") {
                fsm.three();
                alert("玩家依次发言")
            } else {
                alert("请按照顺序操作！")
            }
        })
    });
    $(".killing3").each(function(){
        $(this).click(function(){
            if (fsm.state === "three") {
                fsm.four();
                oneday();
                window.location.href = "js4.html";
            } else {
                alert("请按照顺序操作！");
            }
        })
    });
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

        }();
    disp();
};//有限状态机
 function  none() {
     $(".day").each(function(){
         $(this).click(function(){
             $(this).next().toggle();
        })//点击改变状态隐藏显示
    });
}

var d=JSON.parse (localStorage.getItem("number"));
 console.log(d);
 function please() {
     for (let i=0; i<x; i++) {
         switch (true) {
             case d===undefined:
                 break;
             case d[i].day ===undefined:
                 $(".kills").eq(i).text("");
                 break;
             case d[i].day !==undefined:
                 $(".kills").eq(i).text(`第${i+1}天`+d[i].day);
                 break;
         }//杀手身份位置
         switch (true) {
             case d===undefined:
                 break;
             case d[i].night ===undefined:
                 $(".death").eq(i).text("");
                 break;
             case d[i].night !==undefined:
                 $(".death").eq(i).text(`第${i+1}天`+d[i].night);
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
       let div = (`  <div class="day">
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
        $("#day-number").append(div);//获取外面的id
    }
}//游戏进行生成天数。
function endgame() {
     $("#end").click(function() {
         if (confirm("要结束游戏吗")) {
             window.location.href = "js2.1.html";
         }
         else {
         }
     });
         $("#journal").click (function (){
            if (confirm("要查看法官日志吗"))
            {
                window.location.href="js3.html";
            }
            else
            {
            }
        });
}
