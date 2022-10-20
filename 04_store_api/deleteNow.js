const jwt = require('jsonwebtoken');

const token = jwt.sign({foo: 'bar', name: 'Tong Phuc'}, 'tongphuc');
const decode = jwt.verify( token, 'tongphuc');
console.log(decode);