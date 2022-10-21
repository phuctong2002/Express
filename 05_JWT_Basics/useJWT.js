const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const token = jwt.sign({name: "Tong Phuc", age: 20}, process.env.PRIVATE_KEY,{
    expiresIn: 200 
} );
const inf = jwt.verify( token, process.env.PRIVATE_KEY);
console.log( inf);