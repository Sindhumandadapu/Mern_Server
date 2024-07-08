
//userSchema.js
//MongoDB user Schema 
//Capable of storing data in my mongodb
const mongoose = require('mongoose');
const authorSchema = mongoose.Schema({
    _id:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },age:{
        type:String,
        required:true,
    },totalBooks:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    }
}
) 
module.exports= mongoose.model('author',authorSchema)


