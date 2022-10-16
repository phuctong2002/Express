const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');
const dotenv = require('dotenv');
const { people} = require('./data');
const { application } = require('express');
const app = express();
dotenv.config();
const server = http.Server(app);
app.use( morgan('combined'));
app.use( bodyParser.json());
app.use( bodyParser.urlencoded({ extended:true}));

app.get('/api/people', ( req, res)=>{
    console.log( req.body);
    res.status(200).json({
        success: true,
        data: people
    });
});

app.post('/api/people', ( req, res)=>{
    const {name} = req.body;
    if( !name){
        return res.status( 400).json({
            success: false,
            msg: 'please provide name value'
        });
    }
    res.status(201).json({
        success: true,
        data: [...people, name]
    });
});

app.post('/login', ( req, res)=>{
    const {name} = req.body;
    if( name){
        return res.status(200).send(`<h1>Welcome ${name}</h1>`);
    };
    res.status(401).json( 'please provide a name');

});
app.put('/api/people/:id', ( req, res)=>{
    const {id} = req.params;
    const {name} = req.body;
    const person = people.find( (person)=>{
        return person.id === Number(id);
    });
    if( !person){
        return res.status(404).json({
            success: false,
            msg:`no person with id ${id}`
        });
    }
    const newPeople = people.map((person)=>{
        if( person.id === Number(id)){
            person.name = name;
        }
        return person;
    });
    res.status(200).json({
        success: true,
        data: newPeople
    });
});

app.delete('/api/people/:id', ( req, res)=>{
    const {id} = req.params;
    const person = people.find( (person)=>{
        return person.id === Number(id);
    });
    if( !person ){
        return res.status(404).json({
            success: false, 
            msg: `no person with id ${id}`
        });
    }
    const newPeople = people.filter( ( person)=>{
        return person.id !== Number(id);
    });
    res.status(200).json({
        success: true,
        data: newPeople
    });
});



server.listen( process.env.PORT, ()=>{
    console.log(`Running in ${process.env.PORT}`);
});


// some methods in array 
// array.map
// array.filter
// array.find
// put to update
// get to get the resource from the server
// post to insert 
// detele to delete

