//Nivell 1
//Exercici 1
function userName(name) {
    console.log(name);
}

userName("Mireia");

//Nivell 2
//Exercici 1
var name = "Mireia";
var surName = "Olive";

var userInfo = `${name} ${surName}`;
console.log(userInfo);

//Exercici 2
function userNameSurname(name, surname) {
    const user = `${name} ${surname}`;
    return user;
}

console.log(userNameSurname("Mireia", "Olive"));

//Nivell 3
//Exercici 1
let f1 = () => "one";
let f2 = () => "two";
let f3 = () => "three";
let f4 = () => "four";
let f5 = () => "five";
let f6 = () => "six";
let f7 = () => "seven";
let f8 = () => "eight";
let f9 = () => "nine";
let f10 = () => "ten";

var functions = [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10];
var arr = [];
for (var i = 0; i < functions.length; i++) {
    var fn = functions[i];
    arr.push(fn);
}
console.log(arr[0]("a string"));

//Exercici 2
var result = (function () {
    var name = "Mireia Olive";
    return name;
})();
console.log(result);
