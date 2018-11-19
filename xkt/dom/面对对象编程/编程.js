var a={0:1,1:2,};
a[0]=2
a[3]=1;
console.log(a);

// var the="这个是可以访问对象的长度";//属性是与对象相关的值。
// var x=the.length;
// console.log(x)
//
// var message="Hello world!";//方法是能够在对象上执行的动作。
// var b=message.toUpperCase();// toUpperCase() 方法来将文本转换为大写
// console.log(b);















var box = [];
console.log(box);
function dxiang (){
        box.push({},
    {});
        xiang();
    }
    //push方法增加空对象
dxiang ();
function xiang(){
    box[0].day="可以添加";
    box[1].day="这个是添加不进去的"
}

var obj = new  Object();
obj[0]="18,女,尚未婚配，处女座";
obj[1]="2";
obj.t=1;
obj.q=1;
console.log(obj)

box[0].day=`只能存储有的对象，没有的无法存值进去`;