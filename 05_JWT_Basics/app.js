const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const http = require('http');
const dotenv = require('dotenv');

const mainRouter = require('./router/main');




dotenv.config();

const app = express();
const server = http.Server(app);

app.use( bodyParser.urlencoded( {extended: true}));
app.use( bodyParser.json());
app.use( bodyParser.text());



app.use('/api/v1', mainRouter);

const start = async ()=>{
    try{
        await mongoose.connect( process.env.MONGODB_URL);
        console.log('0 : disconnected');
        console.log('1 : connected');
        console.log('2 : connecting');
        console.log('3: disconnecting');
        console.log("State : " + mongoose.connection.readyState);
        server.listen( process.env.PORT, ()=>{
            console.log(`Running on port ${process.env.PORT}`);
        });   
    }catch(e){
        console.log( "Error in app.js : " + e);
    }
}


start();




