'use strict';

const express = require('express');
const cors = require('cors');
const server = express();
require('dotenv').config();
const pg = require('pg');

server.use(cors())   // Middleware function 
let PORT = 3005
const axios = require('axios');
const recipeData = require('./data.json'); 
const apiKey = process.env.APIkey;
server.use(express.json())

const client = new pg.Client(process.env.DATABASE_URL)

server.get('/', homeHandler)
server.get('/test', testHandler)
server.get('/recipes', recipeFunction)
server.get('/newRecipesHandler', newRecipesHandler)
server.get('/favRecipes', getRecipesHandler)
server.post('/favRecipes',addRecipeHandler)
server.delete('/favRecipes/:id',deleteRecipeHandler)
server.put('/favRecipes/:id',updateRecipeHandler)
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

function getRecipesHandler(req,res){
    // Return all fav recipes from my database which is demo15

    const sql = `SELECT * FROM favrecipe`;
    client.query(sql)
    .then(data=>{
        res.send(data.rows);
    })

    .catch((error)=>{
        errorHandler(error,req,res)
    })
}


function addRecipeHandler(req,res){
    const recipe = req.body;
    console.log(recipe);
    const sql = `INSERT INTO favRecipe (title, summary, mins)
    VALUES ($1, $2, $3);`
    const values = [recipe.title , recipe.summary, recipe.mins]; 
    client.query(sql,values)
    .then(()=>{
        res.send("The data has been added successfully");
    })
    .catch((error)=>{
        errorHandler(error,req,res)
    })

}

function updateRecipeHandler(req,res){
    // De-structuring 
    // const id = req.params.id;
    const {id} = req.params;
    console.log(req.body);
    const sql = `UPDATE favRecipe
    SET title = $1
    WHERE id = ${id};`
    const {title} = req.body;
    const values = [title];
    client.query(sql,values).then((data)=>{
        res.send(data)
    })
    .catch((error)=>{
        errorHandler(error,req,res)
    })
}

function deleteRecipeHandler(req,res){
    const id = req.params.id;
    console.log(req.params);
    const sql = `DELETE FROM favRecipe WHERE id=${id};`
    client.query(sql)
    .then((data)=>{
        res.status(202).send(data)
    })
    .catch((error)=>{
        errorHandler(error,req,res)
    })
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

client.connect()
.then(()=>{
    server.listen(PORT, () => {
        console.log(`Listening on ${PORT}: I'm ready`)
    })
})

