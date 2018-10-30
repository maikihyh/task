function the() {
    if (confirm("要返回查看吗"))
    {
        window.location.href="https://maikihyh.github.io/task/js.task/html/js4.html";
    }
    else
    {
    }
}
var huo =document.getElementsByClassName("killing");
var ya =document.getElementsByClassName("triangle");
window.onload = function() {
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
                huo[0].style.backgroundColor = "black";
                ya[0].style= "border-right:10px solid black";
            },
            onTwo: function () {
                huo[1].style.backgroundColor = "black";
                ya[1].style= "border-right:10px solid black";
            },
            onThree: function () {
                huo[2].style.backgroundColor = "black";
                ya[2].style= "border-right:10px solid black";
            },
            onFour: function () {
                huo[3].style.backgroundColor = "black";
                ya[3].style= "border-right:10px solid black";
            },
        }
    });
    console.log(fsm
    )

    var a= document.getElementsByClassName("killing ")[0];
    a .onclick= function(){
        if(fsm.state==="raday"){
            fsm.one();
        } else{
           alert("请按照顺序操作！")
        }
    };
    var s= document.getElementsByClassName("killing ")[1];
    s .onclick= function(){
        if(fsm.state==="one"){
            fsm.two();
        } else{
            alert("请按照顺序操作！")
        }
    };

    var d= document.getElementsByClassName("killing ")[2];
    d .onclick= function(){
        if(fsm.state==="two"){
            fsm.three();
        } else{
            alert("请按照顺序操作！")
        }

    };
    var f= document.getElementsByClassName("killing ")[3];
    f .onclick= function(){
        if(fsm.state==="three"){
            fsm.four();
        } else{
            alert("请按照顺序操作！")
        }

    };
};//有限状态机