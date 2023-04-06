'use strict';


let person1 = {
    firstName: 'Ali',
    lastName: 'Omar',
    age: 22,
    loveCoffee: true,
    likeCats: false,
    likeDogs: true,
    driving: function (){
        console.log('Ali drive BMW');
    },
    greeting: function(){
        // console.log('weclome ali');
        console.log('weclome' + person1.firstName); // Concatenation
        console.log(`Welcome ${person1.firstName}`); // Interpolation
        console.log(`Welcome ${this.firstName}`); 
    }
}


var person2 = {
    firstName: 'Ahmad',
    lastName: 'Mohammad',
    age: 25,
    loveCoffee: false,
    likeCats: false,
    likeDogs: true,
    driving: function (){
        console.log('Ali drive BMW');
    },
    greeting: function(){
        console.log('weclome' + " " + person2.firstName); // Concatenation
        console.log(`Welcome ${this.firstName}`); // Interpolation
    }
}

console.log(person1);
console.log(person2);
console.log(person1.firstName)
console.log(person2["likeCats"]);

person2.age = 30;
console.log(person2.age);


person1.driving()
person2.greeting()

let arr =[1,2,3,4]
console.log('test',arr);

