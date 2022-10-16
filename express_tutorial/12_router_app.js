const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const peopleRouter = require('./router/peopleRouter');
const authRouter = require('./router/authRouter');
const obj1 = require('./delete');
const obj2 = require('./delete1');
const app = express();
const server = http.Server( app);
dotenv.config();
app.use( bodyParser.urlencoded({ extended:true}));
app.use( bodyParser.json());
app.use( bodyParser.text());

app.use( ( req, res, next)=>{
    console.log( obj1 === obj2);
    next();
});

app.use('/api/people', peopleRouter);
app.use('/login', authRouter);


server.listen( process.env.PORT, ()=>{
    console.log( 'listening on port '+process.env.PORT);
});