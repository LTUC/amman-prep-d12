'use strict';


console.log(localStorage)

console.log(typeof localStorage)

// 1. Clear() ==> to clear all data from localstorage
localStorage.clear()

// 2. setItem: to save data in localstorage
localStorage.setItem('name','Noor')
localStorage.setItem('Age','30')

// 3. getItem(): to get data from localstorage

let firstName = localStorage.getItem('name')
console.log(firstName)

// 4. removeItem() ==> to remove item from localstorage
// localStorage.removeItem('name') 

// localStorage.clear()