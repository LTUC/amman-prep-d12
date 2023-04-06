

x = 5;  // initialization
var x;  // declaration

// y = 2;
// let y;


//let str; // declaration
//str = "Rana";  // initilization


hoisting();

function hoisting(){
    console.log("call me whenever you need me, in any place")
}

firstName = "Rana";
var firstName; // will work 
console.log(firstName);

lastName = "Abu Samhan";
let lastName; // will not work 
console.log(lastName);

