
var huo =document.getElementsByClassName("my-life");
window.onload = function() {
    var fsm = new StateMachine({
        init: 'raday',
        transitions: [
            {name: 'one', from: 'raday', to: 'one'},
            {name: 'two',  from: 'one', to: 'two'},
            {name: 'three', from: 'two', to: 'three'},
            {name: 'four', from: 'three', to: 'four'},
            {name: 'five', from: 'four', to: 'five'},
            {name: 'six', from: 'five', to: 'six'},
        ],
        methods: {
            onOne: function () {
                huo[0].innerHTML=("洗脸刷牙，洗澡，然后下楼吃饭");
            },
            onTwo: function () {
               huo[0].innerHTML=("日常到了中午，吃外卖还是出去吃，艰难抉择");

            },
            onThree: function () {
                huo[0].innerHTML=("下午，果然和下午茶最配了。");
            },
            onFour: function () {
                huo[0].innerHTML=("出去逛逛超市，买点东西好吧。");
            },
            onFive: function () {
                huo[0].innerHTML=("晚上，不仅要扫地还要写日报。");
            },
            onSix: function () {
             huo[0].innerHTML=("写完日报了，该出去玩了，逛一逛外面，回去睡觉了");
            },
        }
    });

   var a= document.getElementsByClassName("a")[0];
    a .onclick= function(){
        fsm.one();
    };
    var s= document.getElementsByClassName("s")[0];
    s .onclick= function(){
        fsm.two();
    };

    var d= document.getElementsByClassName("d")[0];
    d .onclick= function(){
        fsm.three();
    };
    var f= document.getElementsByClassName("f")[0];
    f .onclick= function(){
        fsm.four();
    };
    var g= document.getElementsByClassName("g")[0];
    g .onclick= function(){
        fsm.five();
    };
    var h= document.getElementsByClassName("h")[0];
    h .onclick= function(){
        fsm.six();
    };
};


