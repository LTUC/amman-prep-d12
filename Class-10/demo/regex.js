// Regular Expression REGEX

//we use it to:
// 1-VALIDATE strings against certain rules
// 2-to FIND substring within a string
// 3-to REPLACE part of the string

//typically speaking, we use REGEX to match patterns with strings

// let str = 'The rain in spain falls Mainly in the plain';

// VALIDATE : test() -> return boolean
// Find S letter in a string
// let regex1 = /rain/;
// let res1 = regex1.test(str);
// console.log(res1);

//do we have numbers from 0 to 9?
// let regex1 = /[0-9]/;
// let regex1 = /\d/; //the same
// let res1 = regex1.test(str);
// console.log(res1);
// 
// let str = 'The rain in spain infalls Mainly in the plain';
//find a string in a string
//FIND : match() -> return array
// let regex2 = /in/g; // return all in's in array
// console.log(str.match(regex2));


// find how many words end with 'in'
// let regex2 = /(\w)*(in)\b/g;
// console.log((str.match(regex2)));

// let str = 'The rain in spain falls mainly in the plain';

// to retrieve the white spaces
// let wordEnding = /\W/g;
// console.log(str.match(wordEnding).length);



//REPLACE : replace() -> return string
// let newStr = str.replace(wordEnding,'-');
// console.log(newStr);
// console.log(str);

// let str = 'The Rain in spain falls maIn9ly in the plain';

// we want to match all the words that begin with any capital letter
// let reg =/\b[A-Z]/g;
// let reg = /\b[A-Z](\w)*/g;
// console.log(str.match(reg));



