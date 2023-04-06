'use strict';


// Constructor

function Person(firstName,lastName,age,loveCoffee,loveCats,loveDogs){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.loveCoffee = loveCoffee;
    this.loveCats = loveCats;
    this.loveDogs = loveDogs;
    this.greeting = function (){
        console.log(`Welcome ${this.firstName}`);
    }
    // this.driving = function(){
    //     console.log(`${this.firstName} is driving Nissan`);
    // }
    
}


Person.prototype.driving = function(){
    console.log(`${this.firstName} is driving Nissan`);
}

let ali = new Person('Ali','Omar',25,true,false,true);
let ahmad = new Person('Ahmad','Mohammad', 22, true,false,false);


ali.greeting()
ahmad.greeting()

ali.driving()


console.log(ali);
console.log(ahmad);


console.log(Person)