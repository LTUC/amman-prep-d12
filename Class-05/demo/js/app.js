'use strict';


// Data types:
// 1: Primitive datatypes
// - Number
// - String
// - undefined
// - null 
// - Boolean
// - Symbol

// 2: Reference Datatypes(Object):
// - Objects
// - Arrays
// - Functions


var num1 = 10; 
var num2= 100.5;
var num3 = 4 + 10;
console.log(num1)
console.log(typeof num3);

var str = 'Rana'
var str2 = "Abu Samhan"
// var fullName = str + " " + str2     // Concatenation
console.log(fullName);
console.log(typeof str)

var fullName = `Hello my name is ${str} ${str2}`
console.log(fullName)

 
var bool = false;
console.log(typeof bool)

//  Null 
var supervisor = null; // (No value)

var supervisor2 = undefined;


// logical operations
// Not !
// And &&
// Or ||
var result = true || false
console.log(result);

var result2 = 10 == 8 + 2;
console.log(result2);


// Array: (object)
// Index, start from 0
//           0        1       2: length - 1
// Length: 3 
var arr = ['Rana', 'Hala', 'Rasha'];
console.log(arr[0]);


// Object:
var person = {firstName: "Rana", lastName:"Abu Samhan", Age:26};
console.log(person.firstName);
console.log(person.lastName);
console.log(person["Age"]);

// Undefined  value not known
var x;
console.log(x);


// Null  value is known
var phoneNumber = null;
console.log(phoneNumber);


// NaN ==> Not a Number
console.log("Rana" / 0);

// var , let , const 

var x = 5;
var x = 2;
console.log(x);


let y = 10;
// let y = 2;
console.log(y);

// you can't change the value
const z = 5;
const PI = 3.14; 


var num5 = 5;
var num6 = '5';
console.log(num5 === num6);
console.log(num5 == num6);




// Conditions in JS

// 1- Conditinal statements IF
//  - Ternary if ==? refactor my code to one line insteaf of multiple line 


if (10 > 5){
    console.log('Yes'); // true block
}else{
    console.log('No');  // false block
}

// using ternary if:
(10 > 5 ) ? console.log('Yes') : console.log('No');

var value = 3;
if(value == 0){
    console.log('The number is zero');
}else if(value % 2 == 0){
    console.log('Even');
}else{
    console.log('Odd');
}


//  2- Switch statement
var day = 4;
switch (day / 2){
    case 1: 
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    default:
        console.log("Please enter a correct number");

}


//  JavaScript Pop Boxes: 
// 1- Alert

// alert("Hello to our web page");


// 2- Prompt  ==> user input

// let input = prompt("Enter your name");
// console.log("The user input:",input);

// 3- Confirm ==> return true or false

// let result3 = confirm('Are you student?');
// console.log(result3);


// var person = prompt("Plese enter you name");

// if(person != ""){
//     console.log(person);
//     var str5 = "Hello" + person + "! How are you?";
//     alert(str5)
// }else{
//     prompt("Please add your name");
// }

// var age = prompt('Please enter your age');
// if(age <= 18){
//     alert("You are young");
// }else if(age > 18 && age <= 50){
//     alert('You are mature person');
// }else{
//     alert("!!")
// }



console.log(i);
var i =5;


console.log(m);
let m = 5;


// let & const

