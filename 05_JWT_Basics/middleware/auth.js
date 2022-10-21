const User = require('../model/User');
const jwt = require('jsonwebtoken');
const auth = async( req, res, next)=>{
    const {gmail, password, token} = req.body;
    const result = await User.findOne({gmail, password});
    const id = result._id.toString();
    jwt.verify( token, process.env.PRIVATE_KEY, ( error, decode)=>{
        if( error){
            console.log("het han roi nhe");
            return res.status(400).json({
                success: false,
                msg: "token expiresed login again"
            });
        } 
        next();
    });
}


module.exports = auth;