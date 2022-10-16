const mongoose = require('mongoose');

// create a schema 
const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide a name'],
        trim: true,
        maxLength: [20, 'can can not be more than 20 characters']
    },
    completed:{
        type: Boolean,
        default: false
    }
});
// create a model 
module.exports = mongoose.model('Task', TaskSchema);