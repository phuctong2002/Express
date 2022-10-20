const express = require('express');
const dotenv = require('dotenv');
const http =  require('http');
const bodyParser = require('body-parser');
const connectDB = require('./database/connect');
const productsRouter = require('./router/productsRouter');
dotenv.config();
const app = express();
const server = http.Server(app);
app.use( bodyParser.urlencoded({ extended: true }));
app.use( bodyParser.json());
app.use( bodyParser.text());



app.use('/api/v1/products', productsRouter);





const start = async () =>{
    try{
        await connectDB( process.env.MONGODB_URL);
        server.listen( process.env.PORT, ()=>{
            console.log(`Running on port ${process.env.PORT}`);
        });
    }catch( error){
        console.log( `error in start : ${error}`);
    }
}


start();

