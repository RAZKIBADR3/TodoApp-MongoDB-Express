const mongoose = require('mongoose');
const TodoSchema = mongoose.Schema({
    text:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    },
    user_id:{
        type:Number,
        require:true
    }
})

const todo = mongoose.model('todo',TodoSchema);
module.exports = todo;