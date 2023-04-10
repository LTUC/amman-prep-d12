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
let form = document.getElementById('drinkForm');
form.addEventListener('submit', addNewDrink)


function Drink(name, ingredients, imageURL, isCold, isHot){
    this.name = name;
    this.ingredients = ingredients;
    this.imageURL = `./assets/${this.name}.png`;
    this.isCold = isCold;
    this.isHot = isHot;
    this.price = 0;
    allDrinks.push(this)
}


Drink.prototype.calculatePrice = function(min,max){
    this.price = getRandomInt(min,max)
}

function getRandomInt(min,max){
    return Math.floor(Math.random() * (max - min) +min);
}

Drink.prototype.render= function (){
    const container = document.getElementById('container')  // Parent

    // Create a new Element
    // Give it a value using text context.
    // Append the element to it's parent
    
    const divEl = document.createElement('div');
    container.appendChild(divEl);

    const h1El = document.createElement('h1');
    h1El.textContent = `The drink name is: ${this.name}`;
    divEl.appendChild(h1El);

    const pEl = document.createElement('p');
    divEl.appendChild(pEl);

    this.ingredients = this.ingredients.split(',');
    console.log(this.ingredients)

    const ulEl = document.createElement('ul');
    pEl.appendChild(ulEl);

    for(let i=0;i<this.ingredients.length;i++){
        const liEl = document.createElement('li');
        liEl.textContent = this.ingredients[i];
        ulEl.appendChild(liEl);
    }

    // Create an image
    const imgEl = document.createElement('img');
    divEl.appendChild(imgEl);
    imgEl.src = this.imageURL;

    // Display the price
    const h3El = document.createElement('h3');
    divEl.appendChild(h3El);
    h3El.textContent = `The price is ${this.price}`

    // Display if the drink is hot and/or clod
    const pEl2 = document.createElement('p');
    divEl.appendChild(pEl2);


    if(this.isCold && this.isHot){
        pEl2.textContent = `${this.name} is available Hot and Cold`;
    }else if(this.isCold){
        pEl2.textContent = `${this.name} is available Cold`;
    }else if(this.isHot){
        console.log(this.isCold)
        pEl2.textContent = `${this.name} is available Hot`;
    }else{
            pEl2.textContent = `${this.name} is not available`;
    }
}



// const latte = new Drink("Latte", ['water','coffee','Milk'], false, true,2 );
// const espresso = new Drink("espresso", ['Water','Coffee', 'ice'], true,true, 2);
// const mocha = new Drink("mocha", ['Water','Coffee', 'ice'], true,true, 2);

// latte.render()
// espresso.render()


function addNewDrink(event){
    event.preventDefault();
    let name = event.target.name.value;
    let ingredients = event.target.ingredients.value;
    let imgUrl = event.target.imgurl.value;
    let isCold = event.target.isCold.checked;
    let isHot = event.target.isHot.checked;

    let newDrink = new Drink(name,ingredients,imgUrl,isCold,isHot);
    
    newDrink.calculatePrice(1,4)
    newDrink.render()
}

console.log(allDrinks);
// allDrinks.push(latte,espresso);

