
const express = require('express');

const server = express();

const PORT = 3000;

// Routes
// Home Route
// https://localhost:3000
server.get('/',(req,res)=>{
    res.send("Hello from the Home route")
})

// https://localhost:3000/test
server.get('/test',(req,res)=>{
    let str = "Hello from the backend"
    res.status(200).send(str);
})


server.get('*',(req,res)=>{
    res.status(404).send('default route')
})

server.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}: I'm ready`)
})