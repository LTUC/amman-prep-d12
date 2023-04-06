// problem domain: ASAC coffee house is a new cafe so they are updating their menu 
//  There are alot of drinks that they can add to the menu and  it's too time-consuming to hand-code them each time  
// so They need a better and faster way.

// Each drink should has:
// - name
// - ingredients
// - an image
// - cold
// - hot 
// - price 

// TODO: dynamically generate drink objects using form data

'use strict';

let allDrinks = []; 

function Drink(name, ingredients,isCold, isHot, price){
    this.name = name;
    this.ingredients = ingredients;
    this.imageURL = `./assets/${this.name}.png`;
    this.isCold = isCold;
    this.isHot = isHot;
    this.price = price;
    allDrinks.push(this)
}

Drink.prototype.render= function (){
    document.write(`<p> The drink name is ${this.name} </p>`)
}

const latte = new Drink("Latte", ['water','coffee','Milk'], false, true,2 );
const espresso = new Drink("espresso", ['Water','Coffee', 'ice'], true,true, 2);
const mocha = new Drink("mocha", ['Water','Coffee', 'ice'], true,true, 2);

latte.render()
espresso.render()

// allDrinks.push(latte,espresso);

console.log(...allDrinks);