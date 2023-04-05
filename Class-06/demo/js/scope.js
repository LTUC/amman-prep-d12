'use strict';


var i;// Declaration
i = 5; // Initialization 

// var x = 10;
// var x = 'Rana';


// let y = 5;
// let y = 4;

// Scope
// 1. Block scope
// 2. Function scope
// 3. Global scope 

// 1. Block scope

// {
//     var x = 2;
//     console.log(x)
// }
// console.log(x)


// {
//     let y = 2;
//     console.log(y)
// }
// console.log(y)

// {
//     const y = 2;
//     console.log(y)
// }
// console.log(y)

// if(5>1){
//     let sum = 0;
// }
// console.log(sum)


// 2. Function scope 

// var total =0;

// function sum(num1,num2){
//     const total = num1 + num2;
//     console.log('From the function scope',total)
//     return total;
// }

// sum(2,5);
// console.log('Outside the function scope',total)


// 3. Global scope 
// let firstName = "ali";
// {
//     console.log("From the block scope",firstName)
// }
// console.log("Outside the block scope",firstName)

var total = 2;
function sum(num1,num2){
    console.log(total)
    // const total = num1 + num2;
    total = num1+num2;
    return total;
}

sum(1);
console.log(total);