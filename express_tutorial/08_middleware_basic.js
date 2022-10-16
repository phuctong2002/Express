const express = require('express');
const http = require('http');
const dotenv = require('dotenv');
const app = express();
const server = http.Server( app);
dotenv.config();


// req => middleware => response
const logger = (  req, res, next)=>{
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log( method, url, time);
    next();
}


app.get('/', logger, ( req, res)=>{
    res.send('Home');
});
app.get('/about', logger, ( req, res)=>{
    res.send('About');
});


server.listen( process.env.PORT, ()=>{
    console.log('listening on port '+ process.env.PORT);
});



