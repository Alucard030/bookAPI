const mongoose =require('mongoose');

const BookSchema= mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required: true,
    },
    rating:{
        type: Number,
        default:0
    }
    
})

module.exports= mongoose.model('BookCollection',BookSchema);