'use strict';

const express = require('express');
const cors = require('cors');
const server = express();
require('dotenv').config();
const pg = require('pg');
server.use(express.json());


server.use(cors());
let PORT = process.env.PORT || 3003;
const axios = require('axios');
const memesData = require('./memesData.json')

server.get('/', homeHandler)
server.get('/test', testHandler)
server.get('/allMemes', getAllMemes)
server.post('/addToFav',addToFav)
server.get('/favMemes', getFavMemes)
server.get('*', defaultHandler)
server.use(errorHandler)  

const client = new pg.Client(process.env.DATABASE_URL)


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

function getAllMemes(req,res){
    res.send(memesData);
    console.log('we have recived a req');
}

function addToFav(req,res){
    console.log('We got fav meme from the FE')
    console.log(req.body)
    const favMeme = req.body
    const sql = `INSERT INTO favMemes (id, bottomText, image_path, meme_name, rank, tags, topText)
    VALUES ($1,$2, $3, $4, $5, $6 ,$7);`
    const values = [req.body.ID,req.body.bottomText,req.body.image,
    req.body.name,req.body.ranks,req.body.tags,req.body.topText];
    client.query(sql,values)
    .then(data=>{
        res.send("The data has been added successfully");
    })
    .catch(error=>{
        errorHandler(error,req,res)
    })
}

function getFavMemes(req,res){
    const sql = `SELECT * FROM favMemes;`;
    client.query(sql)
    .then(data=>{
        res.send(data.rows);
        console.log('data from DB', data.rows)
    }).catch((error)=>{
        errorHandler(error,req,res)
    })
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