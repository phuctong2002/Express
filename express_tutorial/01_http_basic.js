const http = require('http');
const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const stringify = require('json-stringify-safe');
// const { application } = require('express');
var server = http.Server( app);

app.get('/users', ( req, res)=>{
    var content = stringify(req);
    fs.writeFileSync( './req.txt', content);
    res.setHeader('Content-Type', 'application/json');
    console.log( req.headers);
    
    // res.writeHead(200);
    res.json({
        "name": "Tong Phuc",
        "email": "tongphuc@gmail.com"
    });
    console.log( res);
});


server.listen( 3000, function(){
    // console.log("connected to server");
});