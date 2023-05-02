'use strict';

const express = require('express');
const cors = require('cors');
const server = express();
require('dotenv').config();


server.use(cors())   // Middleware function 
let PORT = 3005
const axios = require('axios');
const recipeData = require('./data.json'); 
const apiKey = process.env.APIkey;

server.get('/', homeHandler)
server.get('/test', testHandler)
server.get('/recipes', recipeFunction)
server.get('/newRecipesHandler', newRecipesHandler)
server.get('*', defaultHandler)
server.use(errorHandler)  //Middleware  function


function homeHandler(req, res) {
    res.status(200).send("Hello from the Home Route")
}

function testHandler(req, res) {
    let str = "Hello from the backend side";
    res.status(200).send(str);
}

function defaultHandler(req, res) {
    res.status(404).send('Default reoute')
}

function recipeFunction(req, res) {
    let mapResult = recipeData.data.map(item => {
        let singleRecipe = new Recipe(item.id, item.title, item.readyInMinutes, item.summary);
        return singleRecipe;
    });
    res.send(mapResult);
}

function newRecipesHandler(req, res) {
    const url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=5`

    // let axiosResult = await axios.get(url);
    // // console.log(axiosResult.data.recipes[0].extendedIngredients)
    // // res.send(axiosResult.data.recipes[0].extendedIngredients)

    // console.log('Rana')

    // let mapResult = axiosResult.data.recipes.map(item=>{
    //     let singleRecipe = new Recipe(item.id,item.title,item.readyInMinutes,item.summary);
    //     return singleRecipe;
    // })
    // res.send(mapResult)


    /////////
    // Part2: .then

    // console.log("Before axios result")
    // axios.get(url)
    //     .then(result => {
    //         console.log("Axios result")
    //         let mapResult = result.data.recipes.map(item => {
    //             let singleRecipe = new Recipe(item.id, item.title, item.readyInMinutes, item.summary);
    //             return singleRecipe;
    //         })
    //         res.send(mapResult)

    //     })
    //     .catch((error)=>{
    //         console.log('sorry you have something error',error)
    //         res.status(500).send(error);
    //     })

    //     console.log("After axios Result ")


    // Part3: Middleware 

    try{    
        axios.get(url)
        .then(result => {
            let mapResult = result.data.recipes.map(item => {
                let singleRecipe = new Recipe(item.id, item.title, item.readyInMinutes, item.summary);
                return singleRecipe;
            })
            res.send(mapResult)

        })
        .catch((error)=>{
            console.log('sorry you have something error',error)
            res.status(500).send(error);
        })

    }
    catch(error){
        errorHandler(error,req,res)
    }
}




function Recipe(id, title, time, summary) {
    this.id = id;
    this.title = title;
    this.time = time;
    this.summary = summary;
}

function errorHandler(error,req,res){
    const err = {
        status: 500,
        message: error
    }
    res.status(500).send(err);
}

server.listen(PORT, () => {
    console.log(`Listening on ${PORT}: I'm ready`)
})

