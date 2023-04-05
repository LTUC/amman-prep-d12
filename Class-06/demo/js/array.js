'use strict';

// let colorsArray = new Array();

// let colorsArray = [];

let colorsArray = ['Green','red', 'Orange'];

console.log(colorsArray.length);
console.log(colorsArray[colorsArray.length-1]);

colorsArray[3] = 'Black'
colorsArray[0] = 'Blue';
console.log(colorsArray)

let person = {
    name: 'Ali',
    age: 25
}

let arr = [2002, 'Amman' , true , function(){alert('Hello')}, {name: 'Ali', Age:26} ]
console.log(arr);

// Arrays methods 

// push  ==> it will add a value at the end of your array
colorsArray.push('White');
console.log(colorsArray);

// pop ==> it will remove an element from the end.
colorsArray.pop();
console.log(colorsArray);

// unshift  ==> add an element to the beginning of the array
colorsArray.unshift('Grey');
console.log(colorsArray);

// shift ==> ro remove an element from the beginning
colorsArray.shift()
console.log(colorsArray);

let arr2 = [1,2,3];
console.log(arr2);
console.log(arr2.toString())

let arr3 = [];
arr3.push(arr2.shift());
arr3.push(arr2.shift());
arr3.push(arr2.shift());
console.log(arr3);
console.log(arr2)