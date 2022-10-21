const jwt = require('jsonwebtoken');


const User = require('../model/User');


const loginController = async( req, res)=>{
    const {gmail, password} = req.body;
    if( !(gmail && password)){
        return res.status(400).json({
            success: true,
            msg: "please enter all required fields"
        });
    }
    const result = await User.findOne({gmail, password});
    if( result){
        // login successfully conpleted
        const id = result._id.toString();
        const token = jwt.sign({id, password, gmail}, process.env.PRIVATE_KEY,{
            expiresIn: 100
        });
        
        
        return res.status(200).json({
            success: true,
            msg: "login successfully",
            token: token
        })
    }
    res.status( 404).json({
        success: false,
        msg:"login failed"
    });

}



const dashboard = async (req, res)=>{
    const {gmail} = req.body;
    res.status(200).json({
        success: true,
        msg: `Hello ${gmail}`
    });
}


const addUser = async( req, res)=>{
    const {name, id, gmail, password} = req.body;
    if( name && id && gmail && password){
        // check existing user
        const check = await User.findOne({gmail: gmail});
        if( check){
            return res.status( 400).json({
                success: false,
                msg: "email already exist"
            });
        }
        const newUser = new User({name, id, gmail, password});
        newUser.save( (error)=>{
            if( error){
                console.log("error in insert user");
            }
        });
        const insertedUser = await User.findOne({id: id});
        console.log( insertedUser);
        return res.status( 201).json(insertedUser);
    }
    res.status(400).json({
        success: false,
        msg: "Please enter required information"
    })
}


module.exports = {
    loginController: loginController,
    addUser: addUser,
    dashboard: dashboard
}
