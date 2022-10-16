const express = require('express');
const http = require('http');
const dotenv = require('dotenv');
const { application } = require('express');
dotenv.config();
const app = express();
const server = http.Server( app);


app.use( express.static('./public'));

app.get('/', ( req, res)=>{
    res.sendFile( path.resolve(__dirname, ''));
});




app.all('*', ( req, res)=>{
    res.status(404).send("<h1>Page not found</h1>");
});


server.listen( process.env.PORT, ()=>{
    console.log(`Running on port ${process.env.PORT}`);
});