const express = require('express');
const dotenv = require('dotenv');
const http = require('http');
const {logger, authorize} = require('./middleware');
const { application } = require('express');
dotenv.config();
const app = express();
const server = http.Server(app);
// global middleware configulation
app.use([logger, authorize]);

app.get('/' , ( req, res)=>{
    res.status(200).send("Home");
});
app.get('/aboutPhuc', ( req, res)=>{
    res.status(200).send("About");
});
server.listen( process.env.PORT, ()=>{
    console.log('listening on port '+process.env.PORT);
});
