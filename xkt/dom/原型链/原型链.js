function a(){

};
a.prototype.name = "原型链";
var b = new a();
console.log(b.name);
function d(){

};
d.prototype.name = 1;
var c = new d();
console.log(c.name);
function Person() {

}
var person = new Person();
console.log(person.__proto__ === Person.prototype);
function Person1() {

}
var person1 = new Person1();
console.log(person1.__proto__);
var x = 10;