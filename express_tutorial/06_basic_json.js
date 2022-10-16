const {products} = require('./data');
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const http = require('http');
const { application } = require('express');
const app = express();
const server = http.Server( app);



app.get('/', function( req, res){
    res.json( products);
});

server.listen( process.env.PORT, function() {
    console.log('listening on port ' + process.env.PORT);
});

/**
 * JSON.stringify function to convert an object to a string 
 * JSON.parse function to convert an string to an object
 */