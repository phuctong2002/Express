const express = require('express');
const dotenv = require('dotenv');
const http = require('http');
dotenv.config();
const app = express();
const server = http.Server(app);
const {products} = require('./data');
app.get('/', ( req, res)=>{
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
});


app.get('/api/products', ( req, res)=>{
    const newProducts = products.map( ( product)=>{
        const {id, name, image, price} = product;
        return {id, name, image, price}
    });
    res.status(200).json( newProducts );
});


app.get('/api/products/:productID', ( req, res)=>{
    // console.log( req.params);
    // const {productID} = req.params;
    // console.log( typeof productID);
    // res.send('<h1>Dang thu nhe!</h1>');

    const {productID} = req.params;
    const singleProduct = products.find(  product => product.id === Number(productID));
    if( !singleProduct){
        res.status(404).send('<h1>Product not found</h1>');
    }
    res.status(200).json( singleProduct);
});

app.get('/api/products/:productID/review/:reviewID',( req, res)=>{
    console.log( req.params);
    res.send('hello world');
});



app.get('/api/v1/query', ( req, res)=>{
    const {search, limit} = req.query;
    // console.log(search, limit);
    // console.log( req.query);
    // res.send('<h1>Dang thu nhe!</h1>');
    let sortedProducts = [...products];
    if( search){
        sortedProducts = sortedProducts.filter( (product)=>{
            return product.name.startsWith( search);
        });
    }
    if( limit){
        sortedProducts = sortedProducts.slice( 0, Number(limit));
    }
    if( sortedProducts.length < 1){
        return res.status(200).json({sucess: true, data: []});
    }
    res.status(200).json(sortedProducts);
});

server.listen( process.env.PORT, ()=>{
    console.log('listening on port '+process.env.PORT);
});




