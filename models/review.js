const mongoose = require('mongoose')

const ReviewSchema = mongoose.Schema({
    rating:{
        type:Number,
        min:1,
        max:5,
        required:[true, 'please provide rating'],
    },
    title:{
       type:String,
       trim:true,
       required:['please provide review title']
    },
    comment:{
        type:String,
        required: [true, 'Please provide review text']
    },
    user: {
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:true,
    },
   product:{
        type: mongoose.Schema.ObjectId,
        ref:'Product',
        required:true,
    }
},{timestamps:true})

const Reviews = mongoose.model('Review', ReviewSchema)