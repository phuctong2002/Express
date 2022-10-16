const express = require('express');
const { logger, autherize} = require('./middleware');
const dotenv = require('dotenv');
const morgan = require('morgan');
const http = require('http');
const { application } = require('express');
const app = express();
const server = http.Server(app);
dotenv.config();

app.use( morgan('combined'));
app.get('/', ( req, res)=>{
    res.status(200).send("<h1>Home</h1>");
});
app.get('/about', ( req, res)=>{
    res.status(200).send("<h1>About</h1>");
});
app.get('/product', ( req, res)=>{
    res.status(200).send("<h1>Product</h1>");
});
app.get('/user', (req, res)=>{
    res.status(200).send("<h1>User</h1>");
});
server.listen( process.env.PORT, ()=>{
    console.log('listening on port '+process.env.PORT);
});



