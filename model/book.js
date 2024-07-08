
//userSchema.js
//MongoDB user Schema 
//Capable of storing data in my mongodb
const mongoose = require('mongoose');
const bookSchema = mongoose.Schema({
    _id:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },publisher:{
        type:String,
        required:true,
    },description:{
        type:String,
        required:true,
    },
    authorid:{
        type:String,
        required:true,
    }
}
) //convert this into A MONGOOSE schema 
module.exports= mongoose.model('Book',BookSchema)


