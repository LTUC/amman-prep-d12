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
form.addEventListener('submit', addNewDrink);
let tableEl = document.getElementById('table');


function Drink(name, ingredients, imageURL, isCold, isHot) {
    this.name = name;
    this.ingredients = ingredients;
    this.imageURL = `./assets/${this.name}.png`;
    this.isCold = isCold;
    this.isHot = isHot;
    this.price = 0;
    allDrinks.push(this)
}


Drink.prototype.calculatePrice = function (min, max) {
    this.price = getRandomInt(min, max)
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function render() {
    const container = document.getElementById('container')  // Parent

    // Create a new Element
    // Give it a value using text context.
    // Append the element to it's parent

    const divEl = document.createElement('div');
    container.appendChild(divEl);


    // Step6:
    getDrinks()

    // Step5:
    if(allDrinks == null){
        allDrinks = [];
    }   


   // STEP4: create for loop to render what do we have inside the allDrinks Arr

    for (let i = 0; i < allDrinks.length; i++) {

        const h1El = document.createElement('h1');
        h1El.textContent = `The drink name is: ${allDrinks[i].name}`;
        divEl.appendChild(h1El);

        const pEl = document.createElement('p');
        divEl.appendChild(pEl);

        const ingArr = allDrinks[i].ingredients.split(',');
        console.log(ingArr)

        const ulEl = document.createElement('ul');
        pEl.appendChild(ulEl);

        for (let i = 0; i < ingArr.length; i++) {
            const liEl = document.createElement('li');
            liEl.textContent = ingArr[i];
            ulEl.appendChild(liEl);
        }

        // Create an image
        const imgEl = document.createElement('img');
        divEl.appendChild(imgEl);
        imgEl.src = allDrinks[i].imageURL;

        // Display the price
        const h3El = document.createElement('h3');
        divEl.appendChild(h3El);
        h3El.textContent = `The price is ${allDrinks[i].price}`

        // Display if the drink is hot and/or clod
        const pEl2 = document.createElement('p');
        divEl.appendChild(pEl2);


        if (allDrinks[i].isCold && allDrinks[i].isHot) {
            pEl2.textContent = `${allDrinks[i].name} is available Hot and Cold`;
        } else if (allDrinks[i].isCold) {
            pEl2.textContent = `${allDrinks[i].name} is available Cold`;
        } else if (allDrinks[i].isHot) {
            console.log(allDrinks[i].isCold)
            pEl2.textContent = `${allDrinks[i].name} is available Hot`;
        } else {
            pEl2.textContent = `${allDrinks[i].name} is not available`;
        }
    }
}





// const latte = new Drink("Latte", ['water','coffee','Milk'], false, true,2 );
// const espresso = new Drink("espresso", ['Water','Coffee', 'ice'], true,true, 2);
// const mocha = new Drink("mocha", ['Water','Coffee', 'ice'], true,true, 2);

// latte.render()
// espresso.render()


function addNewDrink(event) {
    // event.preventDefault();
    let name = event.target.name.value;
    let ingredients = event.target.ingredients.value;
    let imgUrl = event.target.imgurl.value;
    let isCold = event.target.isCold.checked;
    let isHot = event.target.isHot.checked;

    let newDrink = new Drink(name, ingredients, imgUrl, isCold, isHot);

    // Step1: store allDrinks arr inside my localstorage
    // To convert my array into JSON, then store the Array inside my local storage
    console.log('allDrinks Arr', allDrinks)

    let jsonArr = JSON.stringify(allDrinks);
    localStorage.setItem('allDrinks', jsonArr)

    console.log('JSON Array', jsonArr)




    newDrink.calculatePrice(1, 4)
    // newDrink.render()
}


function getDrinks() {
    // STEP2: Get the array from the localstorage
    let jsonArr = localStorage.getItem('allDrinks');
    let dataFromStorage = JSON.parse(jsonArr);
    console.log(dataFromStorage)
    allDrinks = dataFromStorage;

}

console.log(allDrinks);
// allDrinks.push(latte,espresso);

getDrinks()
render()



// let thEl = document.createElement('tr');
// tableEl.appendChild(thEl);

// let tdEl1 = document.createElement('th');
// tdEl1.textContent = "Drink Name";
// thEl.appendChild(tdEl1);

// let tdEl2 = document.createElement('th');
// tdEl2.textContent = "Drink Price";
// thEl.appendChild(tdEl2);

// let tdEl3 = document.createElement('th');
// tdEl3.textContent = "Is cold or hot";
// thEl.appendChild(tdEl3);

// for(let i=0;i<allDrinks.length;i++){
//     let trEl1 = document.createElement('tr');
//     tableEl.appendChild(trEl1);

//     let tdEl1 = document.createElement('td');
//     tdEl1.textContent = allDrinks[i].name;
//     trEl1.appendChild(tdEl1)

//     let tdEl2 = document.createElement('td');
//     tdEl2.textContent = allDrinks[i].price;
//     trEl1.appendChild(tdEl2)

//     let tdEl3 = document.createElement('td');
//     tdEl3.textContent = allDrinks[i].isCold;
//     trEl1.appendChild(tdEl3)
// }