'use strict';


let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let form = document.getElementById('add-person');

btn1.addEventListener('click', clickHandler);

function clickHandler(){
    alert("Welcome to ASAC")
}

btn2.addEventListener('mouseover', mouseOverHandler);

function mouseOverHandler(){
    btn2.style.backgroundColor = 'red';
}

form.addEventListener('submit', submitHandler)

function submitHandler(event){
    // alert("Hello")
    event.preventDefault();
    // console.log('test',event);
    // console.log(event.target);
    // console.log(event.target.fname);
    // console.log(event.target.fname.value)

    let firstName = event.target.fname.value;
    let lastName = event.target.lname.value;
    let age = event.target.age.value;

    console.log(firstName,lastName,age);
}






























