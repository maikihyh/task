

var M = function (name)
{ this.name = name; };
var o3 = new M('o3');
console.log(o3);








var x=10;


function foo() {
    var y = 20;

    function bar() {
        var z = 30;

        console.log( x + y + z);
    };

    bar()
};

foo();