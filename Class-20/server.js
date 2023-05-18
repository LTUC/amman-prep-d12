'use strict'


const express = require('express');
const server = express();
const cors = require('cors');
require('dotenv').config();
server.use(cors()) // middleware
const pg = require('pg');
const axios = require('axios');

const PORT = process.env.PORT;
const client = new pg.Client(process.env.DATABASE_URL);
server.use(express.json())  // to handle post request method 

server.get('/', homeHandler)
server.get('/getAllCategories', getAllCategories)
server.get('/getProducts', getProducts)
server.post('/addFavProduct', addFavProduct)
server.get('/getFavProducts',getFavProducts)
server.put('/updateFavProduct/:id',updateFavProduct)
server.delete('/deleteFavProduct/:id',deleteFavProduct)
server.get('*', defaultHandler)
server.use(errorHandler)

function homeHandler(req, res) {
    res.status(200).send('Hello from the home route')
}

function defaultHandler(req, res) {
    res.status(404).send('default route')
}

function getAllCategories(req, res) {
    const API_URL = `https://dummyjson.com/products/categories`;
    axios.get(API_URL)
        .then((response) => {
            res.status(200).send(response.data)
        })
        .catch(error => {
            res.send(error)
        })
}

function getProducts(req, res) {
    const productCategory = req.query.category;
    console.log(req.query.category)
    const API_URL = `https://dummyjson.com/products/category/${productCategory}`;
    axios.get(API_URL)
        .then((response) => {
            res.send(response.data.products)
        })
        .catch(error => {
            res.send(error)
        })
}

function addFavProduct(req, res) {
    const favProduct = req.body;
    console.log(req.body);
    const sql = `INSERT INTO favProducts (title, description, price, discountPercentage, rating, stock,
        brand, category, thumbnail, images)
    VALUES ($1,$2, $3, $4, $5, $6 ,$7, $8, $9, $10);`
    const values = [favProduct.title, favProduct.description, favProduct.price,
    favProduct.discountPercentage, favProduct.rating, favProduct.stock, favProduct.brand, favProduct.category,
    favProduct.thumbnail, favProduct.images]

    client.query(sql, values)
        .then((response) => {
            res.status(200).send('Your fav product has been added')
        })
        .catch(error => {
            res.send(error)
        })
}


function getFavProducts(req,res){
    const sql = `SELECT * FROM favproducts;`

    client.query(sql)
        .then((response)=>{
            res.send(response.rows)
        })
        .catch(error => {
            res.send(error)
        })
}

function updateFavProduct(req,res){
    const id = req.params.id;
    const favProduct = req.body;
    const sql = `UPDATE favProducts
    SET title = $1, description = $2, price=$3, discountPercentage=$4, rating=$5, stock=$6, brand=$7, category=$8, 
    thumbnail=$9, images=$10
    WHERE id = ${id} RETURNING *`;
    const values = [favProduct.title, favProduct.description, favProduct.price,
        favProduct.discountPercentage, favProduct.rating, favProduct.stock, favProduct.brand, favProduct.category,
        favProduct.thumbnail, favProduct.images]

    client.query(sql,values)
        .then((data)=>{
            console.log(data)
            const sql = `SELECT * FROM favproducts;`
            client.query(sql)
                .then((response)=>{
                    res.send(response.rows)
                })
                .catch(error => {
                    res.send(error)
                })
        })
        .catch(error => {
            res.send(error)
        })

}

function deleteFavProduct(req,res){
    const id = req.params.id;
    const sql = `DELETE FROM favproducts WHERE id =${id}`;

    client.query(sql)
        .then((response)=>{
            res.send("The fav product has been deleted");
        })
        .catch(error => {
            res.send(error)
        })

}

function errorHandler(error, req, res) {
    const err = {
        status: 500,
        errorMessage: error
    }
    res.status(500).send(err)
}


client.connect()
    .then(() => {
        server.listen(PORT, () => {
            console.log(`Listening on ${PORT}: I'm ready`)
        })
    })
