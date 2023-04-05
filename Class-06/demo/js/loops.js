'use strict';

// For loop:

for (let i = 0; i < 10; i++) {
    console.log('Rana');
}

// break ==> to exit the loop 

for(let i = 0; i<5; i++){
    if(i == 3){
        break;
    }
    console.log(i);
    console.log("done")
}
console.log("We are outside the for loop ")
for(let i = 0;i<10; i++){
    console.log(i);
    if(i == 3){
        break;
    }
}

//  continue
for(let i=0;i<5;i++){ 
    if(i == 3){
        continue;
    }
    console.log(i);
}

// var seasons = ["spring", "Summer", "Winter", "Summer"];
// var userAnswer = prompt("What is your fav season?");

// for(let i =0; i<seasons.length;i++){
//    if(userAnswer == seasons[i]){
//     console.log("I found it");
//    }else{
//     // continue;
//    }
// }


let arrNumber =[1,2,3,4,5,6,7,8,9,10];
for(let i=1;i<arrNumber.length;i++){
    console.log('array',arrNumber[i]);
}

// While loop:

// let x = 0;
// while (x < 10){
//     console.log(x);
//     x++;
// }

// let input = prompt("enter your name");
// while(input != "Ahmad") {
//     console.log("Hello "+ input);
//     input = prompt("enter your name");

// }


// Do while 

var z = 0;
do {
console.log("Hello");
z++;
}while(z < 0)
