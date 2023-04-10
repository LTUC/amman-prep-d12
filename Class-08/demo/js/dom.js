'use strict';

console.log(document);
document.write("<h1> Hello from JS file </h1>")


const body = document.getElementsByTagName('body');
console.log(body[0])

const heading = document.getElementById("thirdHeading");
console.log(heading)

const paragraph = document.getElementsByClassName("paragraph");
console.log(paragraph[1]);


//  1. create a new element 
let h5El = document.createElement('h1');
//  2. Give it a value 
h5El.textContent = "Welcome to ASAC";
//  3. Where should I add it 
body[0].appendChild(h5El)



let section = document.getElementById('sec');

let parEl = document.createElement('p');
parEl.textContent = "Day-08";
section.appendChild(parEl);

console.log(parEl)
parEl.className = "firstParagh";
parEl.id="first";
parEl.textContent += "This is updated";

// parEl.style.color = "red";
parEl.setAttribute('style','color:red')

// Another way to access my attributes ==> setAttribute
parEl.setAttribute('class','newClass');


// create image 
let imgEl = document.createElement('img');
imgEl.setAttribute('src','https://static.javatpoint.com/images/javascript/javascript_logo.png')
section.appendChild(imgEl);
imgEl.alt = "Js image";

