"use strict";
exports.__esModule = true;
var message = "welcome back";
console.log(message);
var x = 10;
var y = 10;
console.log(x, y); //print x nd y val
var name = 'Soundarya';
var word = "My name is ".concat(name, "\nI am working in Digicoffer");
console.log(word);
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Green"] = 1] = "Green";
    color[color["Blue"] = 2] = "Blue";
})(color || (color = {}));
; //arr
var c = color.Green;
console.log(c);
//var obj.
var car = {
    car_type: "Toyota",
    year: 2009
};
console.log(car);
//add function
function doAdd(a, b) {
    return (a + b);
}
var result = doAdd(3, 2);
console.log("doAdd function returns:" + result);
