const mongoose = require('mongoose');



const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    gmail: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    school:{
        before: String,
        after: String
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
});


// exports model

module.exports = mongoose.model('myUser', userSchema);


